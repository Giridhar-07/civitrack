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
  center = [51.505, -0.09], // Default to London
  zoom = 13,
  height = '500px',
  onMarkerClick,
  selectable = false,
  onLocationSelect,
  onMoveEnd
}) => {
  const navigate = useNavigate();
  const [isMapLoading, setIsMapLoading] = useState<boolean>(true);

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
    return new Icon({
      ...defaultIcon.options,
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      // In a real app, we would use different colored markers for each status
    });
  };

  const handleViewIssue = (issue: Issue) => {
    if (onMarkerClick) {
      onMarkerClick(issue);
    } else {
      navigate(`/issues/${issue.id}`);
    }
  };

  // Handle map load events
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      <MapContainer 
        center={center as LatLngExpression} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%', borderRadius: '8px' }}
        ref={(map) => {
          console.log('Map created successfully');
        }}
        whenReady={() => {
          console.log('Map is ready');
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          maxZoom={19}
          keepBuffer={8}
          updateWhenZooming={false}
          updateWhenIdle={true}
        />
        <MapMoveHandler onMoveEnd={onMoveEnd} />
        <ClickSelectHandler enabled={!!selectable && !!onLocationSelect} onSelect={onLocationSelect} />
        
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