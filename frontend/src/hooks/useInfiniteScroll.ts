import { useState, useEffect, useCallback } from 'react';

// Define custom NetworkError class that extends Error
export class NetworkError extends Error {
  errorCode: string;
  isNetworkError: boolean;
  
  constructor(message: string, errorCode: string) {
    super(message);
    this.name = 'NetworkError';
    this.errorCode = errorCode;
    this.isNetworkError = true;
  }
}

interface InfiniteScrollOptions {
  initialPage?: number;
  limit?: number;
  threshold?: number;
  loadOnMount?: boolean;
}

/**
 * Custom hook for implementing infinite scroll functionality
 * @param fetchCallback Function to fetch data with pagination
 * @param options Configuration options
 * @returns Object with data, loading state, and load more function
 */
export function useInfiniteScroll<T>(
  fetchCallback: (page: number, limit: number) => Promise<{
    data: T[];
    pagination: {
      total: number;
      hasNextPage: boolean;
    };
  }>,
  options: InfiniteScrollOptions = {}
) {
  const {
    initialPage = 1,
    limit = 20,
    threshold = 200,
    loadOnMount = true,
  } = options;

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  // Load more data
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    // Check network connectivity before making request
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setError(new NetworkError(
        'You are currently offline. Please check your internet connection and try again.',
        'OFFLINE_ERROR'
      ));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchCallback(page, limit);
      
      setData(prevData => [...prevData, ...response.data]);
      setHasMore(response.pagination.hasNextPage);
      setTotal(response.pagination.total);
      setPage(prevPage => prevPage + 1);
    } catch (err: any) {
      // Handle network errors specifically
      if (err.isNetworkError || 
          err.errorCode === 'NETWORK_ERROR' || 
          err.name === 'NetworkError' ||
          (err.message && typeof err.message === 'string' && 
           err.message.toLowerCase().includes('network'))) {
        setError(new NetworkError(
          'Network connection issue. Please check your internet connection and try again.',
          'NETWORK_ERROR'
        ));
        console.warn('Network error loading more data:', err);
      } else {
        // Handle other errors
        setError(err instanceof Error ? err : new Error('An error occurred'));
        console.error('Error loading more data:', err);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchCallback, page, limit, loading, hasMore]);

  // Reset the scroll state
  const reset = useCallback(() => {
    setData([]);
    setPage(initialPage);
    setHasMore(true);
    setLoading(false);
    setError(null);
  }, [initialPage]);

  // Load initial data on mount if specified
  useEffect(() => {
    if (loadOnMount) {
      loadMore();
    }
  }, [loadOnMount]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    reset,
    total
  };
}

export default useInfiniteScroll;