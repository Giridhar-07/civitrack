import React, { useEffect, useState } from 'react';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import Layout from '../components/layout/Layout';
import IssueMap from '../components/map/IssueMap';
import { useNavigate } from 'react-router-dom';
import issueService from '../services/issueService';
import { Issue } from '../types';

const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch all issues to display as markers on the map
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const allIssues = await issueService.getAllIssues();
        if (mounted) {
          setIssues(Array.isArray(allIssues) ? allIssues : []);
        }
      } catch (e) {
        console.error('Failed to load issues for MapPage:', e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

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
          <IssueMap
            issues={issues}
            center={[40.7128, -74.0060]}
            zoom={12}
            height="100%"
          />
          {loading && (
            <Box sx={{ p: 2 }}>
              <Typography variant="body2">Loading issues...</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Layout>
  );
};

export default MapPage;