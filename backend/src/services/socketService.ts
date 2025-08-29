import { Server as SocketIOServer } from 'socket.io';
import { Server as HttpServer } from 'http';

let io: SocketIOServer | null = null;

export const initializeSocketIO = (server: HttpServer) => {
  io = new SocketIOServer(server, {
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.on('connection', (socket: any) => {
    console.log('Client connected:', socket.id);

    // Join room for nearby issues based on user location
    socket.on('joinNearbyIssuesRoom', ({ latitude, longitude, radius }: { latitude: number; longitude: number; radius: number }) => {
      const roomId = `nearby:${latitude.toFixed(4)}:${longitude.toFixed(4)}:${radius}`;
      socket.join(roomId);
      console.log(`Client ${socket.id} joined room ${roomId}`);
    });

    // Leave room when user moves away
    socket.on('leaveNearbyIssuesRoom', (roomId: string) => {
      socket.leave(roomId);
      console.log(`Client ${socket.id} left room ${roomId}`);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  return io;
};

export const getIO = (): SocketIOServer | null => {
  return io;
};

// Emit new issue to all clients in the nearby area
export const emitNewIssue = (issue: any) => {
  if (!io) return;
  
  // Calculate which rooms should receive this update based on issue location
  const { latitude, longitude } = issue.location;
  
  // Broadcast to all rooms that might be interested in this issue
  // In a production app, you would calculate this more precisely
  io.emit('newIssue', issue);
};

// Emit issue update to all clients in the nearby area
export const emitIssueUpdate = (issue: any) => {
  if (!io) return;
  io.emit('issueUpdate', issue);
};

// Emit issue deletion to all clients in the nearby area
export const emitIssueDelete = (issueId: string) => {
  if (!io) return;
  io.emit('issueDelete', { issueId });
};