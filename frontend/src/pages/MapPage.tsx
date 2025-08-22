import React, { useEffect } from 'react';
import { Container, Paper, Box, Typography, CircularProgress, Alert, Button } from '@mui/material';
import Layout from '../components/layout/Layout';
import IssueMap from '../components/map/IssueMap';
import issueService from '../services/issueService';
import { Issue } from '../types';
import { useApi } from '../hooks';
import { useNavigate } from 'react-router-dom';

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: issues = [], loading, error, execute } = useApi<Issue[]>(issueService.getAllIssues, { immediate: true });

  useEffect(() => {
    // Optionally re-fetch on mount (useApi already did with immediate: true)
    // execute();
  }, [execute]);

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1">
            Map View
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/')}>Back to Home</Button>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress size={60} />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error?.message || 'Failed to load issues'}
          </Alert>
        ) : (
          <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', height: 'calc(100vh - 240px)', minHeight: '500px' }}>
            <IssueMap issues={Array.isArray(issues) ? issues : []} center={[40.7128, -74.0060]} zoom={12} height="100%" />
          </Paper>
        )}
      </Container>
    </Layout>
  );
};

export default MapPage;