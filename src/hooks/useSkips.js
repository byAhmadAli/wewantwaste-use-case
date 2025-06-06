import { useQuery } from '@tanstack/react-query';
import { getSkipByLocation } from '../services/skipsService';

/**
 * Custom React hook to fetch skip data based on postcode and area.
 *
 * Uses React Query's `useQuery` to retrieve and cache skip data for 5 minutes.
 *
 * @param {string} postcode - Postcode to filter skips.
 * @param {string} area - Area to filter skips.
 * @returns {import('@tanstack/react-query').UseQueryResult<any, unknown>} Query result containing skip data.
 *
 * @example
 * const { data, isLoading, error } = useSkipsByLocation('12345', 'London');
 */
export const useSkipsByLocation = (postcode, area) => {
    if (!postcode || !area) {
        return { data: [], isLoading: false, error: null };
    }
    return useQuery({
        queryKey: ['skips:by-location', postcode, area],
        queryFn: () => getSkipByLocation(postcode, area),
        select: (res) => res.data,
        staleTime: 5 * 60 * 1000, // 5 mins cache
    });
};
