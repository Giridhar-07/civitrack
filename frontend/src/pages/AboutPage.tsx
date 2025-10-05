import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Paper, CircularProgress, Alert } from '@mui/material';
import Layout from '../components/layout/Layout';
import aboutService, { AboutInfo } from '../services/aboutService';

const AboutPage: React.FC = () => {
  const [about, setAbout] = useState<AboutInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    aboutService.getAbout()
      .then((data) => {
        if (mounted) {
          setAbout(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load About info:', err);
        if (mounted) {
          setError('Unable to load About information. Please try again later.');
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, []);

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About CiviTrack
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>
        )}

        {about && (
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              {about.name} — {about.tagline}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {about.description}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Contact: {about.contactEmail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Version: {about.version}
              </Typography>
            </Box>
          </Paper>
        )}
      </Container>
    </Layout>
  );
};

export default AboutPage;