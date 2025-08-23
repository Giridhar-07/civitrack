import { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import { Issue } from '../types';

// Socket.io client instance
let socket: typeof Socket | null = null;

// Event handlers
type EventHandler<T = any> = (data: T) => void;
const eventHandlers: Record<string, EventHandler[]> = {
  newIssue: [],
  issueUpdate: [],
  issueDelete: [],
  connect: [],
  disconnect: [],
  error: [],
};

// Initialize socket connection
export const initializeSocket = (): typeof Socket => {
  if (!socket) {
    const BACKEND_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    
    socket = io(BACKEND_URL, {
      auth: {
        withCredentials: true
      },
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    // Set up default event listeners
    socket.on('connect', () => {
      console.log('Socket connected');
      eventHandlers.connect.forEach(handler => handler(null));
    });

    socket.on('disconnect', (reason: string) => {
      console.log('Socket disconnected:', reason);
      eventHandlers.disconnect.forEach(handler => handler(reason));
    });

    socket.on('connect_error', (error: Error) => {
      console.error('Socket connection error:', error);
      eventHandlers.error.forEach(handler => handler(error));
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