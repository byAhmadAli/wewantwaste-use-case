import { useQuery } from '@tanstack/react-query';
import { getSkipByLocation } from '../services/skipsService';

/**
 * @typedef {Object} Skip
 * @property {number} id
 * @property {number} size
 * @property {number} hire_period_days
 * @property {number|null} transport_cost
 * @property {number|null} per_tonne_cost
 * @property {number} price_before_vat
 * @property {number} vat
 * @property {string} postcode
 * @property {string} area
 * @property {boolean} forbidden
 * @property {string} created_at
 * @property {string} updated_at
 * @property {boolean} allowed_on_road
 * @property {boolean} allows_heavy_waste
 */

/**
 * Custom React hook to fetch skip data based on postcode and area.
 *
 * Uses React Query's `useQuery` to retrieve and cache skip data for 5 minutes.
 *
 * @param {string} postcode - Postcode to filter skips.
 * @param {string} area - Area to filter skips.
 * @returns {UseQueryResult<Skip[], unknown>} Query result containing skip data.
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
