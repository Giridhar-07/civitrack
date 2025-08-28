import { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import { Issue } from '../types';

// Derive a correct Socket.IO base URL
const resolveSocketUrl = (): string => {
  const apiUrl = process.env.REACT_APP_API_URL; // e.g., http://localhost:5001/api
  const socketUrlEnv = (process.env as any).REACT_APP_SOCKET_URL as string | undefined;
  if (socketUrlEnv && socketUrlEnv.trim().length > 0) return socketUrlEnv.trim();
  if (apiUrl && apiUrl.trim().length > 0) {
    // Strip trailing /api (with or without slash)
    const origin = apiUrl.replace(/\/?api\/?$/, '');
    return origin || apiUrl;
  }
  // Fallback to backend default port from server.ts
  return 'http://localhost:5000';
};

// Socket.io client instance
let socket: typeof Socket | null = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 15;
const INITIAL_RECONNECT_DELAY = 1000;
const MAX_RECONNECT_DELAY = 30000;

// Event handlers
type EventHandler<T = any> = (data: T) => void;
const eventHandlers: Record<string, EventHandler[]> = {
  newIssue: [],
  issueUpdate: [],
  issueDelete: [],
  connect: [],
  disconnect: [],
  error: [],
  reconnecting: [],
  reconnect_failed: [],
};

// Calculate exponential backoff delay
const getExponentialBackoff = (attempt: number): number => {
  const delay = Math.min(
    INITIAL_RECONNECT_DELAY * Math.pow(1.5, attempt),
    MAX_RECONNECT_DELAY
  );
  // Add some randomness to prevent all clients reconnecting simultaneously
  return delay + (Math.random() * 1000);
};

// Handle reconnection with exponential backoff
const handleReconnect = () => {
  if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
    reconnectAttempts++;
    const delay = getExponentialBackoff(reconnectAttempts);
    console.log(`Attempting to reconnect (${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS}) in ${Math.round(delay/1000)}s...`);
    
    setTimeout(() => {
      if (socket && socket.disconnected) {
        console.log('Reconnecting to socket server...');
        socket.connect();
      }
    }, delay);
  } else {
    console.error('Maximum reconnection attempts reached. Please refresh the page.');
    eventHandlers.reconnect_failed.forEach(handler => handler(null));
  }
};

// Online/Offline network awareness
const setupNetworkListeners = () => {
  if (typeof window === 'undefined') return;
  const onOnline = () => {
    console.log('Network online: attempting to (re)connect socket');
    if (socket && socket.disconnected) {
      reconnectAttempts = 0;
      socket.connect();
    }
  };
  const onOffline = () => {
    console.warn('Network offline: pausing socket reconnection attempts');
  };
  window.addEventListener('online', onOnline);
  window.addEventListener('offline', onOffline);
};

// Initialize socket connection
export const initializeSocket = (): typeof Socket => {
  if (!socket) {
    const SOCKET_URL = resolveSocketUrl();
    console.log('Connecting to socket server at:', SOCKET_URL);
    
    socket = io(SOCKET_URL, {
      auth: {
        token: localStorage.getItem('token') || ''
      },
      // Fix TypeScript error by using correct property type
      reconnectionAttempts: MAX_RECONNECT_ATTEMPTS,
      reconnectionDelay: INITIAL_RECONNECT_DELAY,
      timeout: 120000, // Further increased timeout
      // Prefer websocket transport to avoid xhr poll errors, fallback to polling
      transports: ['websocket', 'polling'],
      forceNew: true,
      autoConnect: true,
      path: '/socket.io', // Match server default path exactly (no trailing slash)
    });

    setupNetworkListeners();

    // Set up default event listeners
    socket.on('connect', () => {
      console.log('Socket connected successfully');
      reconnectAttempts = 0; // Reset reconnect attempts on successful connection
      eventHandlers.connect.forEach(handler => handler(null));
    });

    socket.on('disconnect', (reason: string) => {
      console.log('Socket disconnected:', reason);
      eventHandlers.disconnect.forEach(handler => handler(reason));
      
      // Handle transport close which might be due to network issues
      if (reason === 'transport close' || reason === 'ping timeout') {
        handleReconnect();
      }
    });

    socket.on('connect_error', (error: Error & { description?: string }) => {
      console.error('Socket connection error:', error);
      eventHandlers.error.forEach(handler => handler(error));
      
      if (socket && (socket as any).io) {
        // Dynamic transport fallback strategy based on error content
        const msg = `${error.message || ''} ${(error.description || '')}`.toLowerCase();
        try {
          if (msg.includes('xhr poll error') || msg.includes('polling')) {
            console.warn('XHR polling transport error detected, switching to WebSocket-only');
            (socket as any).io.opts.transports = ['websocket'];
            socket.connect();
          } else if (msg.includes('websocket')) {
            console.warn('WebSocket transport error detected, switching to polling-only');
            (socket as any).io.opts.transports = ['polling'];
            socket.connect();
          } else {
            // Use both as a general recovery approach
            (socket as any).io.opts.transports = ['websocket', 'polling'];
            socket.connect();
          }
        } catch (reconnectError) {
          console.error('Failed to apply transport fallback:', reconnectError);
        }
      }
      
      handleReconnect();
    });
    
    // Handle reconnection events
    (socket as any).io.on('reconnect_attempt', (attempt: number) => {
      console.log(`Socket reconnection attempt ${attempt}/${MAX_RECONNECT_ATTEMPTS}`);
      eventHandlers.reconnecting.forEach(handler => handler(attempt));
      
      // Apply exponential backoff for reconnection
      const delay = getExponentialBackoff(attempt);
      (socket as any).io.reconnectionDelay(delay);
    });
    
    (socket as any).io.on('reconnect_failed', () => {
      console.error('Socket reconnection failed after maximum attempts');
      eventHandlers.reconnect_failed.forEach(handler => handler(null));
    });

    // Set up issue event listeners
    socket.on('newIssue', (issue: Issue) => {
      console.log('New issue received:', issue);
      eventHandlers.newIssue.forEach(handler => handler(issue));
    });

    socket.on('issueUpdate', (issue: Issue) => {
      console.log('Issue update received:', issue);
      eventHandlers.issueUpdate.forEach(handler => handler(issue));
    });

    socket.on('issueDelete', (data: { issueId: string }) => {
      console.log('Issue deletion received:', data.issueId);
      eventHandlers.issueDelete.forEach(handler => handler(data.issueId));
    });
  }

  return socket;
};

// Join nearby issues room
export const joinNearbyIssuesRoom = (latitude: number, longitude: number, radius: number): void => {
  if (!socket) {
    initializeSocket();
  }
  
  socket?.emit('joinNearbyIssuesRoom', { latitude, longitude, radius });
};

// Leave nearby issues room
export const leaveNearbyIssuesRoom = (roomId: string): void => {
  socket?.emit('leaveNearbyIssuesRoom', roomId);
};

// Add event listener
export const addEventListener = <T>(event: string, handler: EventHandler<T>): void => {
  if (!eventHandlers[event]) {
    eventHandlers[event] = [];
  }
  
  eventHandlers[event].push(handler as EventHandler);
};

// Remove event listener
export const removeEventListener = <T>(event: string, handler: EventHandler<T>): void => {
  if (!eventHandlers[event]) {
    return;
  }
  
  eventHandlers[event] = eventHandlers[event].filter(h => h !== handler);
};

// Disconnect socket
export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

// Get socket instance
export const getSocket = (): typeof Socket | null => {
  return socket;
};

// Auto-initialize on import
initializeSocket();