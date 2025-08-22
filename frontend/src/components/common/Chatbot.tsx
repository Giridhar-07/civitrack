import React, { useState, useRef, useEffect } from 'react';
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Chip,
  Paper,
  CircularProgress,
  Alert,
  useTheme,
  alpha,
  Grid
} from '@mui/material';
import {
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as PersonIcon,
  Help as HelpIcon
} from '@mui/icons-material';
import aiService, { ChatMessage } from '../../services/aiService';
import { useNotification } from '../../hooks/useNotification';

interface ChatbotProps {
  position?: { bottom: number; right: number };
}

const Chatbot: React.FC<ChatbotProps> = ({ position = { bottom: 24, right: 24 } }) => {
  const theme = useTheme();
  const { showNotification } = useNotification();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [serviceHealth, setServiceHealth] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick help topics
  const quickHelpTopics = [
    { key: 'reporting', label: 'How to Report Issues' },
    { key: 'status', label: 'Check Issue Status' },
    { key: 'categories', label: 'Issue Categories' },
    { key: 'process', label: 'Resolution Process' },
    { key: 'account', label: 'Account Management' },
    { key: 'map', label: 'Using Map Features' }
  ];

  // Check service health when component mounts and on interval
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const health = await aiService.health();
        setServiceHealth(health.ok);
      } catch (error) {
        console.warn('AI service health check failed:', error);
        setServiceHealth(false);
      }
    };
    
    // Initial health check
    checkHealth();
    
    // Set up periodic health checks every 30 seconds
    const healthInterval = setInterval(checkHealth, 30000);
    
    return () => clearInterval(healthInterval);
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleOpen = () => {
    setOpen(true);
    // Re-check health on open to ensure latest status
    (async () => {
      try {
        const health = await aiService.health();
        setServiceHealth(health.ok);
      } catch (error) {
        console.warn('AI service health check on open failed:', error);
        setServiceHealth(false);
      }
    })();

    if (chatHistory.length === 0) {
      // Add welcome message
      setChatHistory([
        {
          role: 'assistant',
          content: 'Hello! I\'m CiviBot, your government services assistant. I can help you with reporting civic issues, checking status updates, and navigating CiviTrack. How can I assist you today?'
        }
      ]);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMessage = async () => {
    if (!message.trim() || loading) return;
    if (serviceHealth === false) return; // Guard when offline

    const userMessage: ChatMessage = {
      role: 'user',
      content: message.trim()
    };

    const newHistory = [...chatHistory, userMessage];
    setChatHistory(newHistory);
    setMessage('');
    setLoading(true);

    try {
      const response = await aiService.chat(userMessage.content, chatHistory);
      const botMessage: ChatMessage = {
        role: 'assistant',
        content: response.message
      };
      setChatHistory([...newHistory, botMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      showNotification({
        type: 'error',
        message: 'Failed to get response from AI assistant. Please try again.'
      });
      
      // Add error message to chat
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble responding right now. Please try again or contact support if the issue persists.'
      };
      setChatHistory([...newHistory, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickHelp = async (topic: string) => {
    if (serviceHealth === false) return; // Guard when offline
    setLoading(true);
    try {
      const response = await aiService.quickHelp(topic);
      const botMessage: ChatMessage = {
        role: 'assistant',
        content: response.message
      };
      setChatHistory([...chatHistory, botMessage]);
    } catch (error: any) {
      console.error('Quick help error:', error);
      showNotification({
        type: 'error',
        message: 'Failed to get quick help. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab
        color="primary"
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: position.bottom,
          right: position.right,
          zIndex: 1000,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          boxShadow: theme.shadows[6],
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            height: '80vh',
            maxHeight: 600,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
            overflow: 'hidden',
          }
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.dark,
            color: '#ffffff',
            py: 2.5,
            px: 3,
            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <BotIcon sx={{ fontSize: '1.8rem' }} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: '1.25rem', 
                fontWeight: 600,
                letterSpacing: '0.02em',
                textShadow: '0px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              CiviBot - Government Assistant
            </Typography>
            {serviceHealth === false && (
              <Chip
                label="Offline"
                size="small"
                color="error"
                variant="filled"
                sx={{ 
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              />
            )}
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{ 
              color: '#ffffff',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {serviceHealth === false && (
            <Alert severity="warning" sx={{ m: 2, mb: 0 }}>
              AI assistant is currently unavailable. Please try again later.
            </Alert>
          )}

          {/* Quick Help Topics */}
          {chatHistory.length <= 1 && (
            <Box sx={{ p: 2.5, backgroundColor: alpha(theme.palette.primary.main, 0.08), borderBottom: `1px solid ${theme.palette.divider}` }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  mb: 1.5, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  fontWeight: 500,
                  color: theme.palette.text.primary
                }}
              >
                <HelpIcon fontSize="small" color="primary" />
                Quick Help Topics:
              </Typography>
              <Grid container spacing={1.5}>
                {quickHelpTopics.map((topic) => (
                  <Grid item key={topic.key}>
                    <Chip
                      label={topic.label}
                      onClick={() => handleQuickHelp(topic.key)}
                      disabled={loading || serviceHealth === false}
                      size="medium"
                      color="primary"
                      variant="outlined"
                      sx={{
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        py: 0.5,
                        border: '1.5px solid',
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.15),
                          boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Chat Messages */}
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <List sx={{ width: '100%', p: 0 }}>
              {chatHistory.map((msg, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    px: 0,
                    py: 0.5,
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      maxWidth: '80%',
                      backgroundColor: msg.role === 'user' 
                        ? theme.palette.primary.dark
                        : theme.palette.background.paper,
                      color: msg.role === 'user' 
                        ? '#ffffff'
                        : theme.palette.text.primary,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      boxShadow: msg.role === 'user' 
                        ? '0px 2px 4px rgba(0,0,0,0.2)'
                        : '0px 1px 3px rgba(0,0,0,0.1)',
                      border: msg.role === 'assistant' ? `1px solid ${theme.palette.divider}` : 'none',
                    }}
                  >
                    {msg.role === 'assistant' && (
                      <BotIcon 
                        fontSize="small" 
                        sx={{ 
                          color: theme.palette.primary.main,
                          mt: 0.2,
                          flexShrink: 0,
                        }} 
                      />
                    )}
                    {msg.role === 'user' && (
                      <PersonIcon 
                        fontSize="small" 
                        sx={{ 
                          color: theme.palette.primary.contrastText,
                          mt: 0.2,
                          flexShrink: 0,
                        }} 
                      />
                    )}
                    <ListItemText
                      primary={msg.content}
                      sx={{
                        m: 0,
                        '& .MuiTypography-root': {
                          fontSize: '1rem',
                          fontWeight: 400,
                          lineHeight: 1.5,
                          whiteSpace: 'pre-wrap',
                          letterSpacing: '0.00938em',
                          textShadow: msg.role === 'user' ? '0px 0px 1px rgba(255,255,255,0.5)' : 'none',
                        },
                      }}
                    />
                  </Paper>
                </ListItem>
              ))}
              
              {loading && (
                <ListItem sx={{ justifyContent: 'flex-start', px: 0, py: 0.5 }}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      backgroundColor: theme.palette.grey[100],
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <BotIcon 
                      fontSize="small" 
                      sx={{ color: theme.palette.primary.main }} 
                    />
                    <CircularProgress size={20} />
                    <Typography variant="body2" color="text.secondary">
                      Thinking...
                    </Typography>
                  </Paper>
                </ListItem>
              )}
            </List>
            <div ref={messagesEndRef} />
          </Box>

          {/* Message Input */}
          <Box
            sx={{
              p: 2.5,
              backgroundColor: theme.palette.background.paper,
              borderTop: `1px solid ${theme.palette.divider}`,
              boxShadow: '0px -2px 6px rgba(0,0,0,0.05)',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
              <TextField
                fullWidth
                multiline
                maxRows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about civic issues, reporting, or platform features..."
                disabled={loading || serviceHealth === false}
                variant="outlined"
                size="medium"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    fontSize: '1rem',
                    backgroundColor: theme.palette.background.default,
                    '&.Mui-focused': {
                      boxShadow: '0px 0px 5px rgba(76, 175, 80, 0.3)',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px 14px',
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSendMessage}
                disabled={!message.trim() || loading || serviceHealth === false}
                sx={{
                  minWidth: 'auto',
                  px: 2.5,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                  '&:hover': {
                    boxShadow: '0px 3px 6px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Chatbot;