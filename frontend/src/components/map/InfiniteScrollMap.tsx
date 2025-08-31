import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
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
  initialCenter = [51.505, -0.09],
  initialZoom = 13,
  height = '70vh'
}) => {

  const [currentLocation, setCurrentLocation] = useState<Location>({
    latitude: (center || initialCenter)[0],
    longitude: (center || initialCenter)[1]
  });
  const [radius] = useState<number>(5); // 5km radius


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

  // Handle map move end
  const handleMoveEnd = useCallback((newLocation: Location) => {
    // Only reset and refetch if moved significantly (more than 0.01 degrees ~ 1km)
    const hasMoved = 
      Math.abs(newLocation.latitude - currentLocation.latitude) > 0.01 ||
      Math.abs(newLocation.longitude - currentLocation.longitude) > 0.01;
    
    if (hasMoved) {
      setCurrentLocation(newLocation);

      resetScroll();
      
      // Leave previous room and join new one



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
      <IssueMap
        issues={issues}
        center={center}
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