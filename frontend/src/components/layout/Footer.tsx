import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#000',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              CiviTrack
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering communities to report and track civic issues for a better living environment.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
              <Link href="/map" color="inherit" underline="hover">
                Map View
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
              <Link href="/report" color="inherit" underline="hover">
                Report Issue
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link href="https://github.com/Giridhar-07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconButton sx={{ color: '#fff' }}>
                  <GitHub />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/unknown_fan_07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IconButton sx={{ color: '#C13584' }}>
                  <Instagram />
                </IconButton>
              </Link>
              <IconButton aria-label="facebook" sx={{ color: '#4267B2' }}>
                <Facebook />
              </IconButton>
              <IconButton aria-label="twitter" sx={{ color: '#1DA1F2' }}>
                <Twitter />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Contact: noreplycivitrack@gmail.com
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 3, borderTop: '1px solid #333', pt: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' CiviTrack. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;