import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import IssueMap from './IssueMap';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Issue, Location } from '../../types';
import { getIssuesNearby } from '../../services/issueService';
import { joinNearbyIssuesRoom, leaveNearbyIssuesRoom, addEventListener, removeEventListener } from '../../services/socketService';

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
  const [mapCenter, setMapCenter] = useState<[number, number]>(center || initialCenter);
  const [currentLocation, setCurrentLocation] = useState<Location>({
    latitude: (center || initialCenter)[0],
    longitude: (center || initialCenter)[1]
  });
  const [radius, setRadius] = useState<number>(5); // 5km radius
  const [roomId, setRoomId] = useState<string>('');

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
      setMapCenter([newLocation.latitude, newLocation.longitude]);
      resetScroll();
      
      // Leave previous room and join new one
      if (roomId) {
        leaveNearbyIssuesRoom(roomId);
      }
      
      const newRoomId = `nearby:${newLocation.latitude.toFixed(4)}:${newLocation.longitude.toFixed(4)}:${radius}`;
      setRoomId(newRoomId);
      joinNearbyIssuesRoom(newLocation.latitude, newLocation.longitude, radius);
    }
  }, [currentLocation, radius, resetScroll, roomId]);

  // Handle real-time updates
  useEffect(() => {
    // Join room for real-time updates
    try {
      const roomId = `nearby:${currentLocation.latitude.toFixed(4)}:${currentLocation.longitude.toFixed(4)}:${radius}`;
      setRoomId(roomId);
      joinNearbyIssuesRoom(currentLocation.latitude, currentLocation.longitude, radius);
      
      console.log('Successfully joined room for real-time updates:', roomId);
    } catch (error) {
      console.error('Failed to join room for real-time updates:', error);
      // Continue without real-time updates - don't block map functionality
    }
    
    // Set up event listeners for real-time updates
    const handleNewIssue = (newIssue: Issue) => {
      try {
        // Check if issue is within our current data
        const issueExists = issues.some(issue => issue.id === newIssue.id);
        if (!issueExists) {
          // Add to our list if it's new
          resetScroll();
        }
      } catch (error) {
        console.error('Error handling new issue:', error);
      }
    };
    
    const handleIssueUpdate = (updatedIssue: Issue) => {
      try {
        resetScroll();
      } catch (error) {
        console.error('Error handling issue update:', error);
      }
    };
    
    const handleIssueDelete = (issueId: string) => {
      try {
        resetScroll();
      } catch (error) {
        console.error('Error handling issue delete:', error);
      }
    };
    
    // Add event listeners
    addEventListener('newIssue', handleNewIssue);
    addEventListener('issueUpdate', handleIssueUpdate);
    addEventListener('issueDelete', handleIssueDelete);
    
    // Clean up
    return () => {
      if (roomId) {
        leaveNearbyIssuesRoom(roomId);
      }
      removeEventListener('newIssue', handleNewIssue);
      removeEventListener('issueUpdate', handleIssueUpdate);
      removeEventListener('issueDelete', handleIssueDelete);
    };
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