import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Paper, 
  Button, 
  CircularProgress, 
  Alert,
  useMediaQuery,
  Tabs,
  Tab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  Divider
} from '@mui/material';
import { Add as AddIcon, Map as MapIcon, List as ListIcon, Refresh as RefreshIcon, KeyboardArrowLeft, KeyboardArrowRight, MyLocation as MyLocationIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import IssueList from '../components/issues/IssueList';
import IssueMap from '../components/map/IssueMap';
import Layout from '../components/layout/Layout';
import { IssueCategory } from '../types';
import issueService from '../services/issueService';
import { useAuth, useTheme, useApi } from '../hooks';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { isAuthenticated } = useAuth();
  
  const [viewMode, setViewMode] = useState<'list' | 'map'>(isMobile ? 'list' : 'map');
  
  // Get user's current location
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  // Track current map center for refresh/pan-to-load
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  // Ensure we use 10km radius consistently
  const DEFAULT_RADIUS_KM = 10;

  // Geolocation status for graceful UI handling
  const [geoStatus, setGeoStatus] = useState<'idle' | 'granted' | 'denied' | 'unavailable'>('idle');
  const [geoMessage, setGeoMessage] = useState<string | null>(null);
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('all');
  
  // Use our custom hook for API calls - switch to nearby issues
  const { 
    data: issues = [], 
    loading, 
    error,
    execute: fetchIssues,
    setState: setIssuesState
  } = useApi(issueService.getNearbyIssues, { immediate: false });
  
  // Filtered issues based on search term and category
  const filteredIssues = React.useMemo(() => {
    if (!issues) return [];
    if (!searchTerm && searchCategory === 'all') return issues;
    
    return issues.filter(issue => {
      // Safely handle search term with proper type checking
      const term = typeof searchTerm === 'string' ? searchTerm.toLowerCase() : '';
      const matchesTerm = !term || 
        (issue.title && issue.title.toLowerCase().includes(term)) || 
        (issue.description && issue.description.toLowerCase().includes(term));
        
      // Safely handle category filtering
      const category = typeof searchCategory === 'string' ? searchCategory : 'all';
      const matchesCategory = category === 'all' || issue.category === category;
        
      return matchesTerm && matchesCategory;
    });
  }, [issues, searchTerm, searchCategory]);

  useEffect(() => {
    // Get user's current location (refactored to function for reuse)
    requestGeolocation();
  }, []);

  // Real-time polling to refresh issues based on current center
  useEffect(() => {
    const center = mapCenter || userLocation;
    if (!center) return;

    const interval = setInterval(() => {
      fetchIssues(center[0], center[1], DEFAULT_RADIUS_KM);
    }, 30000); // refresh every 30 seconds

    return () => clearInterval(interval);
  }, [mapCenter, userLocation, fetchIssues]);

  const handleRefresh = () => {
    const center = mapCenter || userLocation || [40.7128, -74.0060];
    fetchIssues(center[0], center[1], DEFAULT_RADIUS_KM);
  };

  // Request geolocation with graceful fallbacks and user feedback
  function requestGeolocation() {
    // Set loading state immediately to show progress
    setIssuesState(prev => ({
      ...prev,
      loading: true,
      error: null
    }));
    
    // First, fetch all issues regardless of location to ensure we display all previously reported issues
    issueService.getAllIssues().then(allIssues => {
      if (allIssues && allIssues.length > 0) {
        // Update issues state with all available issues
        // This ensures both map and list views show all previously reported issues
        setIssuesState({
          data: allIssues,
          loading: false,
          error: null
        });
      }
    }).catch(err => {
      console.error('Failed to fetch all issues:', err);
      // Don't set error state here as we'll try geolocation next
    });
    
    if (!navigator.geolocation) {
      setGeoStatus('unavailable');
      setGeoMessage('Geolocation is not supported by your browser. Showing a default area.');
      const fallbackLoc: [number, number] = [40.7128, -74.0060]; // New York fallback
      setUserLocation(fallbackLoc);
      setMapCenter(fallbackLoc);
      // Ensure we're using the 10km radius
      fetchIssues(fallbackLoc[0], fallbackLoc[1], DEFAULT_RADIUS_KM);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoStatus('granted');
        setGeoMessage(null);
        const loc: [number, number] = [position.coords.latitude, position.coords.longitude];
        setUserLocation(loc);
        setMapCenter(loc);
        // Ensure we're using the 10km radius for user's actual location
        fetchIssues(loc[0], loc[1], DEFAULT_RADIUS_KM);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setGeoStatus('denied');
          setGeoMessage('Location permission denied. Showing a default area. You can enable permissions in your browser settings and try again.');
        } else {
          setGeoStatus('unavailable');
          setGeoMessage('Unable to determine your location at the moment. Showing a default area.');
        }
        // Use New York as fallback with proper zoom level
        const fallbackLoc: [number, number] = [40.7128, -74.0060]; // New York fallback
        setUserLocation(fallbackLoc);
        setMapCenter(fallbackLoc);
        // Ensure we're using the 10km radius even for fallback location
        fetchIssues(fallbackLoc[0], fallbackLoc[1], DEFAULT_RADIUS_KM);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }

  // Carousel data
  const carouselItems = [
    {
      id: 1,
      title: "Empowering Communities",
      description: "Together, we can build stronger, more responsive communities through civic engagement.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Transparent Issue Resolution",
      description: "Track the progress of community issues from reporting to resolution with complete transparency.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Data-Driven Solutions",
      description: "Using real-time data to identify patterns and prioritize community needs effectively.",
      image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const handleNextCarousel = () => {
    setActiveCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrevCarousel = () => {
    setActiveCarouselIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextCarousel();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Website Description Section moved to bottom */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Intentionally left empty as per instruction to move to bottom */}
        </Grid>

        {/* Carousel Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 0, 
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'relative', height: { xs: 260, sm: 360, md: 400 } }}>
                {carouselItems.map((item, index) => (
                  <Box
                    key={item.id}
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      opacity: index === activeCarouselIndex ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image={item.image}
                      alt={item.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `${process.env.PUBLIC_URL || ''}/assets/placeholder.svg`;
                        target.alt = 'Image not available';
                        target.style.opacity = '0.6';
                        (target.style as any).backgroundColor = '#f0f0f0';
                      }}
                      sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        p: 4,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        color: 'white',
                        zIndex: 1,
                      }}
                    >
                      <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Button
                  onClick={handlePrevCarousel}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    minWidth: 48,
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                  }}
                >
                  <KeyboardArrowLeft />
                </Button>
                <Button
                  onClick={handleNextCarousel}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    minWidth: 48,
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                  }}
                >
                  <KeyboardArrowRight />
                </Button>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                    zIndex: 2,
                  }}
                >
                  {carouselItems.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setActiveCarouselIndex(index)}
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: index === activeCarouselIndex ? 'white' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ minHeight: { xs: 'auto', md: '70vh' } }}> {/* Adjusted minHeight to prevent overlap */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'space-between', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                <Typography variant="h5" sx={{ mr: 2, flexShrink: 0 }}>
                  Community Issues
                </Typography>
                <Tabs
                  value={viewMode}
                  onChange={(_, newValue) => setViewMode(newValue)}
                  aria-label="view mode tabs"
                  variant={isMobile ? 'scrollable' : 'standard'}
                  scrollButtons={isMobile ? 'auto' : false}
                  allowScrollButtonsMobile
                >
                  <Tab label="Map View" value="map" icon={<MapIcon />} iconPosition="start" />
                  <Tab label="List View" value="list" icon={<ListIcon />} iconPosition="start" />
                </Tabs>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' }, width: { xs: '100%', md: 'auto' }, mt: { xs: 1, md: 0 } }}>
                <Button
                  variant="outlined"
                  startIcon={<RefreshIcon />}
                  onClick={handleRefresh}
                  size={isMobile ? 'small' : 'medium'}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Refresh
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<MyLocationIcon />}
                  onClick={requestGeolocation}
                  size={isMobile ? 'small' : 'medium'}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Use My Location
                </Button>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => navigate('/report')}
                  size={isMobile ? 'small' : 'medium'}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Report Issue
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: isMobile ? 'auto' : '600px' }}>
              {error && viewMode === 'map' ? (
                <Alert severity="error">{String(error?.message || error)}</Alert>
              ) : viewMode === 'map' ? (
                <>
                  {geoMessage && (
                    <Box sx={{ mb: 1 }}>
                      <Alert
                        severity={geoStatus === 'denied' ? 'warning' : 'info'}
                        action={geoStatus !== 'granted' ? (
                          <Button color="inherit" size="small" onClick={requestGeolocation}>
                            Retry
                          </Button>
                        ) : undefined}
                      >
                        {geoMessage}
                      </Alert>
                    </Box>
                  )}
                  <IssueMap
                    issues={filteredIssues || []}
                    center={(mapCenter || userLocation || [40.7128, -74.0060]) as [number, number]}
                    zoom={13}
                    height={isMobile ? '400px' : '100%'}
                    onMoveEnd={(center) => {
                      setMapCenter([center.latitude, center.longitude]);
                      fetchIssues(center.latitude, center.longitude, DEFAULT_RADIUS_KM);
                    }}
                  />
                </>
              ) : (
                <Box sx={{ height: isMobile ? 'calc(100vh - 250px)' : 'calc(100vh - 300px)', overflowY: 'auto' }}>
                  {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <IssueList
                      issues={filteredIssues || []}
                      loading={false}
                      error={error?.message || null}
                      showToolbar={false}
                    />
                  )}
                </Box>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Search & Filter
              </Typography>
              <TextField
                label="Search issues"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category-select"
                  value={searchCategory}
                  label="Category"
                  onChange={(e) => setSearchCategory(e.target.value as string)}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  {Object.values(IssueCategory).map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>

            {isAuthenticated && (
              <Paper sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<AddIcon />}
                  onClick={() => navigate('/report')}
                >
                  Report a new issue
                </Button>
              </Paper>
            )}
          </Grid>
        </Grid>
        
        {/* CiviTrack Description Section - Moved to bottom */}
        <Grid container spacing={3} sx={{ mt: 6, mb: 4 }}>
          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                borderRadius: 2,
                background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                color: 'white'
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight="bold">
                CiviTrack: Civic Issue Management Platform
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Connecting citizens and local government for faster issue resolution
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                CiviTrack is a comprehensive platform designed to streamline the reporting, tracking, and resolution of civic issues. 
                Our platform empowers citizens to actively participate in community improvement while providing government agencies 
                with the tools they need to efficiently address concerns.
              </Typography>
              {isAuthenticated ? (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => navigate('/report')}
                  sx={{ 
                    fontWeight: 'bold', 
                    px: 4, 
                    py: 1.5,
                    backgroundColor: 'white',
                    color: '#2E7D32',
                    '&:hover': {
                      backgroundColor: '#e0e0e0',
                    }
                  }}
                >
                  Join CiviTrack Today
                </Button>
              ) : (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{ 
                    fontWeight: 'bold', 
                    px: 4, 
                    py: 1.5,
                    backgroundColor: 'white',
                    color: '#2E7D32',
                    '&:hover': {
                      backgroundColor: '#e0e0e0',
                    }
                  }}
                >
                  Join CiviTrack Today
                </Button>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default HomePage;