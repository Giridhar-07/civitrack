import api from './api';

export type Role = 'user' | 'assistant';

export interface ChatMessage {
  role: Role;
  content: string;
}

export interface ChatReply {
  message: string;
  timestamp: string | number | Date;
}

const aiService = {
  // Health check for AI service
  health: async (): Promise<{ ok: boolean }> => {
    try {
      const response = await api.get<{ ok: boolean }>('/ai/health');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Chat endpoint: send a message with optional history
  chat: async (message: string, history?: ChatMessage[]): Promise<ChatReply> => {
    try {
      const payload: { message: string; history?: ChatMessage[] } = { message };
      if (history && history.length > 0) {
        payload.history = history;
      }
      const response = await api.post<{ message: string; timestamp: string | number | Date }>(
        '/ai/chat',
        payload
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Quick help for a topic
  quickHelp: async (topic?: string): Promise<ChatReply> => {
    try {
      const response = await api.get<{ message: string; timestamp: string | number | Date }>(
        '/ai/quick-help',
        { params: topic ? { topic } : {} }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default aiService;