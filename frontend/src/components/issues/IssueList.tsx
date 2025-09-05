import React from 'react';
import { 
  Grid, 
  Box, 
  Typography, 
  TextField, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select, 
  Pagination, 
  CircularProgress,
  Alert,
  Paper,
  InputAdornment,
  SelectChangeEvent
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import IssueCard from './IssueCard';
import { Issue, IssueStatus, IssueCategory } from '../../types';
import { usePagination, useFiltering } from '../../hooks';

interface IssueListProps {
  issues: Issue[];
  loading: boolean;
  error: string | null;
  onFlagIssue?: (issue: Issue) => void;
  selectable?: boolean;
  selectedIssues?: Issue[];
  onSelectIssue?: (issue: Issue) => void;
  showToolbar?: boolean;
}

const IssueList: React.FC<IssueListProps> = ({ 
  issues = [], 
  loading, 
  error, 
  onFlagIssue,
  selectable = false,
  selectedIssues = [],
  onSelectIssue,
  showToolbar = true
 }) => {
  // Setup filtering with custom hook
  const { 
    filters, 
    setFilter, 
    filteredData: filteredIssues 
  } = useFiltering({
    data: Array.isArray(issues) ? issues : [],
    initialFilters: {
      searchTerm: '',
      status: '',
      category: ''
    },
    filterFn: (issue, filters) => {
      const matchesSearch = !filters.searchTerm || 
        (typeof issue.title === 'string' && typeof filters.searchTerm === 'string' && 
         issue.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) || 
        (typeof issue.description === 'string' && typeof filters.searchTerm === 'string' && 
         issue.description.toLowerCase().includes(filters.searchTerm.toLowerCase()));
      
      const matchesStatus = !filters.status || issue.status === filters.status;
      const matchesCategory = !filters.category || issue.category === filters.category;
      
      return matchesSearch && matchesStatus && matchesCategory;
    }
  });

  // Setup pagination with custom hook
  const { 
    page, 
    pageSize, 
    totalPages, 
    setPage,
    metadata: { 
      startIndex: firstItemIndex, 
      endIndex: lastItemIndex 
    } 
  } = usePagination({
    initialPage: 0,
    initialPageSize: 9,
    totalItems: filteredIssues.length
  });

  // Get current page of issues
  const currentIssues = filteredIssues.slice(firstItemIndex, lastItemIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter('searchTerm', e.target.value);
    setPage(0); // Reset to first page when search changes
  };

  const handleStatusFilterChange = (e: SelectChangeEvent<string>) => {
    setFilter('status', e.target.value);
    setPage(0);
  };

  const handleCategoryFilterChange = (e: SelectChangeEvent<string>) => {
    setFilter('category', e.target.value);
    setPage(0);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1);
  };

  const isIssueSelected = (issue: Issue): boolean => {
    return selectedIssues.some(selected => selected.id === issue.id);
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search Issues"
            value={filters.searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)'
                },
                '&:hover fieldset': {
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme => theme.palette.primary.main
                }
              },
              '& .MuiInputBase-input': {
                color: theme => theme.palette.text.primary
              },
              '& .MuiInputLabel-root': {
                color: theme => theme.palette.text.secondary
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="status-filter-label">Status</InputLabel>
            <Select
              labelId="status-filter-label"
              id="status-filter"
              value={String(filters.status ?? '')}
              label="Status"
              onChange={handleStatusFilterChange}
              sx={{
                color: theme => theme.palette.text.primary,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme => theme.palette.primary.main
                },
                '& .MuiSvgIcon-root': {
                  color: theme => theme.palette.text.secondary
                }
              }}
            >
              <MenuItem value="">All</MenuItem>
              {Object.values(IssueStatus).map((status) => (
                <MenuItem key={status} value={status}>
                  {status.replace(/_/g, ' ')}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="category-filter-label">Category</InputLabel>
            <Select
              labelId="category-filter-label"
              id="category-filter"
              value={String(filters.category ?? '')}
              label="Category"
              onChange={handleCategoryFilterChange}
              sx={{
                color: theme => theme.palette.text.primary,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme => theme.palette.primary.main
                },
                '& .MuiSvgIcon-root': {
                  color: theme => theme.palette.text.secondary
                }
              }}
            >
              <MenuItem value="">All</MenuItem>
              {Object.values(IssueCategory).map((category) => (
                <MenuItem key={category} value={category}>
                  {category.replace(/_/g, ' ')}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>
      ) : filteredIssues.length === 0 ? (
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No issues found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search or filters
          </Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {currentIssues.map((issue) => (
              <Grid item xs={12} sm={6} md={4} key={issue.id}>
                <IssueCard
                  issue={issue}
                  onFlag={onFlagIssue}
                  selectable={selectable}
                  selected={isIssueSelected(issue)}
                  onSelect={onSelectIssue}
                />
              </Grid>
            ))}
          </Grid>
          
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page + 1}
                onChange={handlePageChange}
                color="primary"
                shape="rounded"
              />
            </Box>
          )}
        </>
      )}
    </Paper>
  );
};

export default IssueList;