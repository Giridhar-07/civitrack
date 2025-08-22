import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Allow overriding model via env; default to a free-tier model
// Only allow free-tier models to avoid unavailable 'pro' models
const ALLOWED_FREE_MODELS = new Set(['gemini-1.5-flash', 'gemini-1.5-flash-8b']);
const ENV_MODEL = process.env.GEMINI_MODEL;
const DEFAULT_MODEL = (ENV_MODEL && ALLOWED_FREE_MODELS.has(ENV_MODEL)) ? ENV_MODEL : 'gemini-1.5-flash';
const FALLBACK_MODEL = 'gemini-1.5-flash-8b';
if (ENV_MODEL && !ALLOWED_FREE_MODELS.has(ENV_MODEL)) {
  console.warn(`GEMINI_MODEL="${ENV_MODEL}" is not a supported free-tier model. Falling back to "${DEFAULT_MODEL}".`);
}

// System prompt for government services and issue resolution
const SYSTEM_PROMPT = `You are CiviBot, an AI assistant for CiviTrack - a government service platform that helps citizens report and track public infrastructure issues.

Your primary responsibilities:
1. Help users navigate government services
2. Provide guidance on reporting civic issues (roads, water, electricity, waste, safety)
3. Explain the issue resolution process
4. Offer status updates and general civic information
5. Guide users through the platform features

Guidelines:
- Be helpful, professional, and informative
- Focus on civic and government-related topics
- If asked about non-civic topics, politely redirect to civic services
- Provide clear, actionable advice
- Use friendly but official language appropriate for government services
- Keep responses concise but comprehensive
- Encourage civic engagement and proper reporting procedures

Available issue categories: Road, Water, Electricity, Waste, Safety, Other
Issue statuses: Reported, Under Review, In Progress, Resolved, Closed

Remember: You are representing a government service platform, so maintain professionalism while being approachable.`;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export interface ChatResponse {
  message: string;
  timestamp: Date;
}

class GeminiService {
  private model: any;

  constructor() {
    try {
      this.model = genAI.getGenerativeModel({ model: DEFAULT_MODEL });
    } catch (error) {
      console.error('Error initializing Gemini model with default, trying fallback:', error);
      try {
        this.model = genAI.getGenerativeModel({ model: FALLBACK_MODEL });
      } catch (fallbackError) {
        console.error('Error initializing Gemini model with fallback:', fallbackError);
        // Do not throw here to avoid crashing the server; we'll handle gracefully at call sites
        this.model = null;
      }
    }
  }

  private ensureModelInitialized() {
    if (this.model) return;
    try {
      this.model = genAI.getGenerativeModel({ model: DEFAULT_MODEL });
    } catch (error) {
      console.error('Re-initialization with default model failed, trying fallback:', error);
      try {
        this.model = genAI.getGenerativeModel({ model: FALLBACK_MODEL });
      } catch (fallbackError) {
        console.error('Re-initialization with fallback model failed:', fallbackError);
        this.model = null;
      }
    }
  }

  /**
   * Generate a response to user message with conversation context
   */
  async generateResponse(userMessage: string, conversationHistory: ChatMessage[] = []): Promise<ChatResponse> {
    try {
      if (!this.model) {
        this.ensureModelInitialized();
      }
      if (!this.model) {
        throw new Error('AI model not initialized');
      }

      // Build conversation context
      let prompt = SYSTEM_PROMPT + '\n\n';
      
      // Add conversation history (limit to last 10 messages for context)
      const recentHistory = conversationHistory.slice(-10);
      if (recentHistory.length > 0) {
        prompt += 'Conversation History:\n';
        recentHistory.forEach(msg => {
          prompt += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n`;
        });
        prompt += '\n';
      }

      // Add current user message
      prompt += `User: ${userMessage}\n\nAssistant:`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text || text.trim().length === 0) {
        throw new Error('Empty response from AI service');
      }

      return {
        message: text.trim(),
        timestamp: new Date()
      };

    } catch (error) {
      console.error('Error generating AI response:', error);
      
      // Provide fallback response for service errors
      return {
        message: "I'm sorry, I'm experiencing technical difficulties. Please try again in a moment. For immediate assistance with civic issues, you can browse the platform or contact your local government office directly.",
        timestamp: new Date()
      };
    }
  }

  /**
   * Generate quick help response for common topics
   */
  async getQuickHelp(topic: string): Promise<ChatResponse> {
    const helpPrompts = {
      reporting: "How do I report a civic issue on this platform? Please provide step-by-step guidance.",
      status: "How can I check the status of my reported issues? Explain the different status types.",
      categories: "What types of civic issues can I report? Explain each category.",
      process: "What happens after I report an issue? Explain the resolution process.",
      account: "How do I manage my account and profile on the platform?",
      map: "How do I use the map feature to view and report issues?"
    } as const;

    const prompt = (helpPrompts as any)[topic] || 
                  "Provide general help information about using the CiviTrack platform.";

    return await this.generateResponse(prompt);
  }

  /**
   * Validate API key and service availability
   */
  async validateService(): Promise<boolean> {
    try {
      if (!process.env.GEMINI_API_KEY) {
        console.error('Gemini API key not configured');
        return false;
      }

      if (!this.model) {
        this.ensureModelInitialized();
      }

      if (!this.model) {
        console.error('Gemini model not initialized');
        return false;
      }

      // Test with a simple prompt
      const testResult = await this.model.generateContent('Hello, test response');
      const response = await testResult.response;
      return response.text().length > 0;

    } catch (error) {
      console.error('Gemini service validation failed:', error);
      return false;
    }
  }
}

export default new GeminiService();