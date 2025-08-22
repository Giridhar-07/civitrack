import React, { useMemo, useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Alert,
  Pagination
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import IssueList from '../components/issues/IssueList';
import { Issue, IssueCategory, IssueStatus } from '../types';
import issueService, { IssueFilterParams } from '../services/issueService';
import { useApi } from '../hooks';

const DEFAULT_LIMIT = 9;

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state from URL query params
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('q') || '');
  const [status, setStatus] = useState<'all' | IssueStatus>((searchParams.get('status') as any) || 'all');
  const [category, setCategory] = useState<'all' | IssueCategory>((searchParams.get('category') as any) || 'all');
  const [page, setPage] = useState<number>(parseInt(searchParams.get('page') || '1', 10));
  const [limit, setLimit] = useState<number>(parseInt(searchParams.get('limit') || String(DEFAULT_LIMIT), 10));

  // Debounce state for keyword search
  const [debouncedSearch, setDebouncedSearch] = useState<string>(searchTerm);

  // API hook for fetching issues with metadata
  const {
    data: payload = { issues: [], pagination: null as any },
    loading,
    error,
    execute: fetchIssues
  } = useApi<{ issues: Issue[]; pagination: any }, [IssueFilterParams | undefined]>(issueService.getIssuesWithMeta, { immediate: true });

  // Build filter params for API
  const apiFilters: IssueFilterParams = useMemo(() => {
    return {
      search: debouncedSearch.trim() || undefined,
      status: status !== 'all' ? status : undefined,
      category: category !== 'all' ? category : undefined,
      page,
      limit
    };
  }, [debouncedSearch, status, category, page, limit]);

  // Update URL when filters change (except during initial mount)
  useEffect(() => {
    const params: Record<string, string> = {};
    if (debouncedSearch) params.q = debouncedSearch;
    if (status !== 'all') params.status = status as string;
    if (category !== 'all') params.category = category as string;
    if (page && page !== 1) params.page = String(page);
    if (limit && limit !== DEFAULT_LIMIT) params.limit = String(limit);
    setSearchParams(params, { replace: true });
  }, [debouncedSearch, status, category, page, limit, setSearchParams]);

  // Debounce the search term input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch when filters change
  useEffect(() => {
    fetchIssues(apiFilters);
  }, [fetchIssues, apiFilters]);

  const handleApplyFilters = () => {
    // Reset to first page when applying filters explicitly
    setPage(1);
    fetchIssues({ ...apiFilters, page: 1 });
  };

  const handleClear = () => {
    setSearchTerm('');
    setStatus('all');
    setCategory('all');
    setPage(1);
    setLimit(DEFAULT_LIMIT);
    fetchIssues({ page: 1, limit: DEFAULT_LIMIT });
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const categoryOptions = Object.values(IssueCategory).map((c) => ({ value: c, label: c.charAt(0).toUpperCase() + c.slice(1).toLowerCase() }));
  const statusOptions = Object.values(IssueStatus).map((s) => ({ value: s, label: s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ') }));

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Search Issues
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Find issues by keywords, status, or category. Results are fetched from the server and support pagination.
          </Typography>
        </Box>

        <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              label="Search keywords"
              variant="outlined"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flexGrow: 1, minWidth: '240px' }}
            />

            <FormControl variant="outlined" size="small" sx={{ minWidth: 180 }}>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                label="Status"
                value={status}
                onChange={(e) => { setStatus(e.target.value as any); setPage(1); }}
              >
                <MenuItem value="all">All Statuses</MenuItem>
                {statusOptions.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                value={category}
                onChange={(e) => { setCategory(e.target.value as any); setPage(1); }}
              >
                <MenuItem value="all">All Categories</MenuItem>
                {categoryOptions.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="contained" onClick={handleApplyFilters} sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#388E3C' } }}>
                Apply Filters
              </Button>
              <Button variant="outlined" onClick={handleClear}>
                Clear
              </Button>
            </Box>
          </Box>
        </Paper>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress size={60} />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error?.message || 'Failed to load issues'}
          </Alert>
        ) : null}

        <IssueList issues={Array.isArray(payload?.issues) ? payload!.issues : []} loading={loading} error={error ? (error.message ?? 'Error') : null} showToolbar={false} />

        {payload?.pagination && payload.pagination.totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={payload.pagination.totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
            />
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default SearchPage;