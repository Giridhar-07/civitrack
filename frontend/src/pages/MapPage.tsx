import React from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import Layout from '../components/layout/Layout';
import InfiniteScrollMap from '../components/map/InfiniteScrollMap';
import { useNavigate } from 'react-router-dom';

const MapPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1">
            Map View
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/')}>Back to Home</Button>
        </Box>

        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', height: 'calc(100vh - 240px)', minHeight: '500px' }}>
          <InfiniteScrollMap center={[40.7128, -74.0060]} initialZoom={12} height="100%" />
        </Paper>
      </Container>
    </Layout>
  );
};

export default MapPage;