import React, { useEffect, useMemo, useState } from 'react';
import { Container, Paper, Box, Typography, Button, Chip, Divider, CircularProgress } from '@mui/material';
import Layout from '../components/layout/Layout';
import api from '../services/api';

type ServiceStatus = {
  ok: boolean;
  error?: string;
  durationMs?: number;
  [key: string]: any;
};

type StatusResponse = {
  ok: boolean;
  services: {
    ai: ServiceStatus;
    email: ServiceStatus;
    storage: ServiceStatus;
  };
  latencyMs?: { ai?: number; email?: number; storage?: number; total?: number };
  timestamp: string;
};

const StatRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
    <Typography variant="body2" sx={{ color: '#bbb' }}>{label}</Typography>
    <Typography variant="body2">{value}</Typography>
  </Box>
);

const StatusCard: React.FC<{ title: string; status?: ServiceStatus; loading?: boolean }>
  = ({ title, status, loading }) => {
  const color = status?.ok ? 'success' : 'error';
  return (
    <Paper elevation={2} sx={{ p: 2, backgroundColor: '#111', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">{title}</Typography>
        {loading ? <CircularProgress size={20} /> : <Chip label={status?.ok ? 'OK' : 'Degraded'} color={color as any} />}
      </Box>
      <Divider sx={{ my: 2, borderColor: '#333' }} />
      {status && (
        <Box>
          {status.durationMs !== undefined && <StatRow label="Latency" value={`${status.durationMs} ms`} />}
          {status.error && <StatRow label="Error" value={<span style={{ color: '#f44336' }}>{status.error}</span>} />}
        </Box>
      )}
    </Paper>
  );
};

const AdminDiagnosticsPage: React.FC = () => {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastFetchMs, setLastFetchMs] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [polling, setPolling] = useState<boolean>(true);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    const start = performance.now();
    try {
      const response = await api.get<StatusResponse>('/status?verbose=true');
      setStatus(response.data);
      setLastFetchMs(Math.round(performance.now() - start));
    } catch (err: any) {
      console.error('Diagnostics status fetch failed', err);
      setError(err?.message || 'Failed to fetch status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  useEffect(() => {
    if (!polling) return;
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, [polling]);

  const totalLatency = useMemo(() => status?.latencyMs?.total ?? lastFetchMs, [status, lastFetchMs]);

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: '#1e1e1e' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">System Diagnostics</Typography>
            <Box>
              <Button variant="outlined" sx={{ mr: 1 }} onClick={fetchStatus} disabled={loading}>Refresh</Button>
              <Button variant="contained" onClick={() => setPolling(p => !p)}>
                {polling ? 'Pause' : 'Resume'}
              </Button>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ mt: 1, color: '#bbb' }}>
            Last fetch: {status?.timestamp ? new Date(status.timestamp).toLocaleString() : '—'} | Total latency: {totalLatency} ms
          </Typography>
          {error && (
            <Typography variant="body2" sx={{ mt: 2, color: '#f44336' }}>{error}</Typography>
          )}

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mt: 3 }}>
            <StatusCard title="AI Service" status={status?.services?.ai} loading={loading} />
            <StatusCard title="Email (SMTP)" status={status?.services?.email} loading={loading} />
            <StatusCard title="Storage" status={status?.services?.storage} loading={loading} />
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default AdminDiagnosticsPage;