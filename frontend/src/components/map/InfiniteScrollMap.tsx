import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, CircularProgress, Button, Alert } from '@mui/material';
import { MyLocation as MyLocationIcon } from '@mui/icons-material';
import IssueMap from './IssueMap';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Issue, Location } from '../../types';
import { getIssuesNearby } from '../../services/issueService';


interface InfiniteScrollMapProps {
  center?: [number, number];
  initialCenter?: [number, number];
  initialZoom?: number;
  height?: string | number;
}

const InfiniteScrollMap: React.FC<InfiniteScrollMapProps> = ({
  center,
  initialCenter = [40.7128, -74.0060], // Default to New York
  initialZoom = 13,
  height = '70vh'
}) => {
  // State for user's geolocation
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [geoStatus, setGeoStatus] = useState<'idle' | 'loading' | 'granted' | 'denied' | 'error'>('idle');
  const [geoMessage, setGeoMessage] = useState<string | null>(null);

  const [currentLocation, setCurrentLocation] = useState<Location>({
    latitude: (center || initialCenter)[0],
    longitude: (center || initialCenter)[1]
  });
  const [radius] = useState<number>(10); // 10km radius for better coverage


  // Fetch issues with infinite scroll
  const fetchIssuesNearby = useCallback(async (page: number, limit: number) => {
    const response = await getIssuesNearby(
      currentLocation.latitude,
      currentLocation.longitude,
      radius,
      page,
      limit
    );
    return response;
  }, [currentLocation, radius]);

  const {
    data: issues,
    loading,
    error,
    hasMore,
    loadMore,
    reset: resetScroll
  } = useInfiniteScroll<Issue>(fetchIssuesNearby, {
    limit: 20,
    loadOnMount: true
  });

  // Request user's geolocation
  const requestGeolocation = useCallback(() => {
    if (!navigator.geolocation) {
      setGeoStatus('error');
      setGeoMessage('Geolocation is not supported by your browser');
      return;
    }

    setGeoStatus('loading');
    setGeoMessage('Requesting your location...');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        setCurrentLocation({ latitude, longitude });
        setGeoStatus('granted');
        setGeoMessage('Using your current location');
        resetScroll();
      },
      (error) => {
        console.error('Geolocation error:', error);
        setGeoStatus('denied');
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setGeoMessage('Location access denied. Please enable location services.');
            break;
          case error.POSITION_UNAVAILABLE:
            setGeoMessage('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            setGeoMessage('Location request timed out.');
            break;
          default:
            setGeoMessage('An unknown error occurred getting your location.');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, [resetScroll]);

  // Try to get user location on initial load
  useEffect(() => {
    requestGeolocation();
  }, [requestGeolocation]);

  // Handle map move end
  const handleMoveEnd = useCallback((newLocation: Location) => {
    // Only reset and refetch if moved significantly (more than 0.01 degrees ~ 1km)
    const hasMoved = 
      Math.abs(newLocation.latitude - currentLocation.latitude) > 0.01 ||
      Math.abs(newLocation.longitude - currentLocation.longitude) > 0.01;
    
    if (hasMoved) {
      setCurrentLocation(newLocation);
      resetScroll();
    }
  }, [currentLocation, resetScroll]);

  // Handle real-time updates
  useEffect(() => {
    // Join room for real-time updates

    
    // Set up event listeners for real-time updates

    
    // Clean up
    return () => {};
  }, [currentLocation, radius, issues, resetScroll]);

  return (
    <Box sx={{ position: 'relative', height, width: '100%' }}>
      {geoMessage && (
        <Box sx={{ position: 'absolute', top: 10, left: 10, right: 10, zIndex: 1000 }}>
          <Alert 
            severity={geoStatus === 'denied' ? 'warning' : geoStatus === 'granted' ? 'success' : 'info'}
            action={geoStatus !== 'granted' && (
              <Button color="inherit" size="small" onClick={requestGeolocation}>
                <MyLocationIcon sx={{ mr: 0.5 }} /> Try Again
              </Button>
            )}
            sx={{ mb: 2 }}
          >
            {geoMessage}
          </Alert>
        </Box>
      )}
      
      <IssueMap
        issues={Array.isArray(issues) ? issues : []}
        center={userLocation || center || initialCenter}
        zoom={initialZoom}
        height={height}
        onMoveEnd={handleMoveEnd}
      />
      
      {loading && (
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 16, 
            left: '50%', 
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <CircularProgress size={24} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            Loading more issues...
          </Typography>
        </Box>
      )}
      
      {hasMore && !loading && (
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 16, 
            left: '50%', 
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 1,
            borderRadius: 2
          }}
        >
          <Button 
            variant="contained" 
            size="small" 
            onClick={loadMore}
            sx={{ textTransform: 'none' }}
          >
            Load More Issues
          </Button>
        </Box>
      )}
      
      {error && (
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 16, 
            left: '50%', 
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 2,
            borderRadius: 2
          }}
        >
          <Typography variant="body2" color="error">
            Error loading issues. Please try again.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InfiniteScrollMap;