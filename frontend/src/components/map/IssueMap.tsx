import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { Box, Typography, Button, Paper, Chip, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Issue, IssueStatus, Location } from '../../types';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet icon in webpack
import L from 'leaflet';

// Fix the icon paths for Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Fix for default marker icon issue in React Leaflet
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface IssueMapProps {
  issues: Issue[];
  center?: LatLngExpression;
  zoom?: number;
  height?: string | number;
  onMarkerClick?: (issue: Issue) => void;
  selectable?: boolean;
  onLocationSelect?: (location: Location) => void;
  onMoveEnd?: (center: Location) => void;
}

// Component to recenter map when center prop changes
const ChangeMapView: React.FC<{ center: LatLngExpression }> = ({ center }) => {
  const map = useMap();
  
  // Use useEffect to avoid state updates during render
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  
  return null;
};

// Component to notify parent on map move end
const MapMoveHandler: React.FC<{ onMoveEnd?: (center: Location) => void }> = ({ onMoveEnd }) => {
  useMapEvents({
    moveend: (e) => {
      if (onMoveEnd) {
        const c = e.target.getCenter();
        onMoveEnd({ latitude: c.lat, longitude: c.lng });
      }
    }
  });
  return null;
};

// Component to handle map clicks for selecting a location
const ClickSelectHandler: React.FC<{ enabled: boolean; onSelect?: (loc: Location) => void }> = ({ enabled, onSelect }) => {
  useMapEvents({
    click: (e) => {
      if (enabled && onSelect) {
        onSelect({ latitude: e.latlng.lat, longitude: e.latlng.lng });
      }
    }
  });
  return null;
};

const IssueMap: React.FC<IssueMapProps> = ({
  issues,
  center = [39.8283, -98.5795], // Center of the US for wider view
  zoom = 4, // Lower zoom level to show more of the map
  height = '500px',
  onMarkerClick,
  selectable = false,
  onLocationSelect,
  onMoveEnd
}) => {
  const navigate = useNavigate();
  const [isMapLoading, setIsMapLoading] = useState<boolean>(true);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [reportMode, setReportMode] = useState<boolean>(false);
  
  // Add timeout to ensure map loading state is properly handled
  useEffect(() => {
    // Set a shorter timeout to prevent infinite loading appearance
    const loadingTimer = setTimeout(() => {
      setIsMapLoading(false);
    }, 1000); 
    
    return () => clearTimeout(loadingTimer);
  }, []);
  
  // Handle map click for reporting at any location
  const handleMapClick = (location: Location) => {
    if (reportMode) {
      setSelectedLocation(location);
      if (onLocationSelect) {
        onLocationSelect(location);
      }
    }
  };

  // Status color mapping
  const getStatusColor = (status: IssueStatus): string => {
    switch (status) {
      case IssueStatus.REPORTED:
        return '#f44336'; // Red
      case IssueStatus.UNDER_REVIEW:
        return '#ff9800'; // Orange
      case IssueStatus.IN_PROGRESS:
        return '#2196f3'; // Blue
      case IssueStatus.RESOLVED:
        return '#4caf50'; // Green
      case IssueStatus.CLOSED:
        return '#9e9e9e'; // Grey
      default:
        return '#f44336'; // Default to red
    }
  };

  // Custom icon for each issue based on status
  const getMarkerIcon = (status: IssueStatus) => {
    // Create a custom colored marker based on status
    return new Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: `status-${status.toLowerCase()}` // Add a class for CSS styling
    });
  };

  const handleViewIssue = (issue: Issue) => {
    if (onMarkerClick) {
      onMarkerClick(issue);
    } else {
      navigate(`/issues/${issue.id}`);
    }
  };

  // Handle map load events - removed duplicate timer as we already added one above

  if (isMapLoading) {
    return (
      <Box sx={{ height, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>
          Loading map...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ height, width: '100%', position: 'relative' }}>
      {/* Report mode toggle button - improved for mobile */}
      <Box sx={{ 
        position: 'absolute', 
        top: 10, 
        right: 10, 
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        <Button 
          variant={reportMode ? "contained" : "outlined"} 
          color="primary" 
          onClick={() => setReportMode(!reportMode)}
          size="small"
          sx={{
            whiteSpace: 'nowrap',
            minWidth: { xs: '40px', sm: 'auto' },
            px: { xs: 1, sm: 2 },
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}
        >
          {reportMode ? "Cancel" : "Report Issue"}
        </Button>
      </Box>
      
      {/* Selected location indicator */}
      {selectedLocation && reportMode && (
        <Box sx={{ 
          position: 'absolute', 
          bottom: 10, 
          left: 10, 
          right: 10, 
          zIndex: 1000,
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 1,
          boxShadow: 3
        }}>
          <Typography variant="body2">
            Selected location: {selectedLocation.latitude.toFixed(6)}, {selectedLocation.longitude.toFixed(6)}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="small" 
            sx={{ mt: 1 }}
            onClick={() => navigate(`/report?lat=${selectedLocation.latitude}&lng=${selectedLocation.longitude}`)}
          >
            Report at this location
          </Button>
        </Box>
      )}
      
      <MapContainer 
        center={center as LatLngExpression} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%', borderRadius: '8px' }}
        attributionControl={false} /* Move attribution to a better position for mobile */
        zoomControl={false} /* We'll add zoom control in a better position */
        ref={(map) => {
          console.log('Map created successfully');
        }}
        whenReady={() => {
          console.log('Map is ready');
          // Force a re-render to ensure markers are displayed
          setTimeout(() => {
            if (Map) {
              const mapInstance = Map as any;
              if (mapInstance._leaflet_id) {
                mapInstance.invalidateSize();
              }
            }
          }, 100);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          keepBuffer={8}
          updateWhenZooming={false}
          updateWhenIdle={true}
          className="map-tiles"
        />
        
        {/* Add attribution control in a better position for mobile */}
        <div className="leaflet-control-attribution leaflet-control" 
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            zIndex: 1000,
            backgroundColor: 'rgba(255,255,255,0.7)',
            padding: '0 5px',
            fontSize: '10px',
            borderRadius: '3px 0 0 0'
          }}>
          &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
        </div>
        <MapMoveHandler onMoveEnd={onMoveEnd} />
        <ClickSelectHandler enabled={reportMode || (!!selectable && !!onLocationSelect)} onSelect={handleMapClick} />
        
        <ChangeMapView center={center as LatLngExpression} />
        
        {(Array.isArray(issues) ? issues : []).map((issue) => (
          <Marker 
            key={issue.id} 
            position={[issue.location.latitude, issue.location.longitude]} 
            icon={getMarkerIcon(issue.status)}
            eventHandlers={{
              click: () => handleViewIssue(issue)
            }}
          >
            <Popup>
              <Paper sx={{ p: 1, maxWidth: 250 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {issue.title}
                </Typography>
                
                <Chip 
                  label={issue.status} 
                  size="small" 
                  sx={{ 
                    backgroundColor: getStatusColor(issue.status),
                    color: '#fff',
                    my: 1
                  }} 
                />
                
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {issue.description.length > 100 
                    ? `${issue.description.substring(0, 100)}...` 
                    : issue.description}
                </Typography>
                
                <Button 
                  variant="contained" 
                  size="small" 
                  fullWidth
                  onClick={() => handleViewIssue(issue)}
                  sx={{ 
                    textTransform: 'none'
                  }}
                >
                  View Details
                </Button>
              </Paper>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default IssueMap;