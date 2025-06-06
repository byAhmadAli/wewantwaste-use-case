import apiClient from './apiClient';

/**
 * Retrieves skip information based on the provided postcode and area.
 *
 * @param {string} postcode - The postcode to search skips for.
 * @param {string} area - The area to search skips in.
 * @returns {Promise<Object>} A promise that resolves to the skip data for the specified location.
 */
export const getSkipByLocation = (postcode, area) => {
    const params = new URLSearchParams({ postcode, area });

    return apiClient.get(`/skips/by-location?${params.toString()}`);
};