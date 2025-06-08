import { useQuery } from '@tanstack/react-query';
import { getSkipByLocation } from '../services/skipsService';
import { useCallback, useEffect, useMemo, useState } from 'react';

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

/**
 * Custom React hook to manage skip size selection logic for a slider component.
 *
 * @param {Array<Object>} apiData - The array of objects containing skip data, each with a `size` property.
 * @returns {Object} An object containing:
 *   - {number[]} sizes: Array of available skip sizes (numbers).
 *   - {number} min: The minimum skip size.
 *   - {number} max: The maximum skip size.
 *   - {number} selectedSize: The currently selected skip size.
 *   - {Function} setSelectedSize: Setter function to update the selected skip size.
 *   - {Function} getClosestSize: Function to get the closest available skip size to a given value.
 *   - {Object|undefined} selectedObject: The skip object from apiData matching the selected size.
 */
export function useSkipSlider(apiData) {
    const sizes = useMemo(() => {
        return Array.isArray(apiData) ? apiData.map(item => Number(item.size)).filter(Number.isFinite) : [];
    }, [apiData]);

    const min = useMemo(() => sizes.length ? Math.min(...sizes) : 0, [sizes]);
    const max = useMemo(() => sizes.length ? Math.max(...sizes) : 0, [sizes]);

    const getClosestSize = useCallback(
        (val) => {
            if (!sizes.length) return 0;
            return sizes.reduce((prev, curr) =>
            Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
            );
        },
        [sizes]
    );

    const [selectedSize, setSelectedSize] = useState(() => {
        return sizes.length ? getClosestSize(sizes[0]) : 0;
    });

    // Reset selectedSize if apiData changes and selectedSize becomes invalid
    useEffect(() => {
        if (!sizes.includes(selectedSize) && sizes.length) {
            setSelectedSize(getClosestSize(sizes[0]));
        }
        }, [sizes, selectedSize, getClosestSize]);

        const selectedObject = useMemo(() => {
        return apiData.find(item => Number(item.size) === Number(selectedSize));
    }, [apiData, selectedSize]);

    return {
        sizes,
        min,
        max,
        selectedSize,
        setSelectedSize,
        getClosestSize,
        selectedObject
    };
}
