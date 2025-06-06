import { useSkipsByLocation } from "../hooks/useSkips";

/**
 * Displays a list of available skips filtered by location.
 *
 * Fetches skip data using the `useSkipsByLocation` hook with the provided `postcode` and `area` props.
 * Shows a loading message while fetching, an error message if the fetch fails, or a list of skips if available.
 *
 * @param {Object} props
 * @param {string} props.postcode - The postcode to filter skips by.
 * @param {string} props.area - The area to filter skips by.
 * @returns {JSX.Element} Rendered list of skips, or a loading/error message.
 */
const SkipsByLocation = ({ postcode, area }) => {
    const { data: skips, isLoading, error } = useSkipsByLocation(postcode, area);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading skips</p>;

    return (
        <div>
            <h2>Skips By Location</h2>
            {(!skips || skips.length === 0) ? (
                <p>No skips available for any location.</p>
            ) : (
                <ul>
                    {skips.map((skip) => (
                        <li key={skip.id}>
                            <strong>Postcode:</strong> {skip.postcode} <br />
                            <strong>Size:</strong> {skip.size} yd³ <br />
                            <strong>Hire Period:</strong> {skip.hire_period_days} days <br />
                            <strong>Price (before VAT):</strong> £{skip.price_before_vat} <br />
                            <strong>VAT:</strong> {skip.vat}% <br />
                            <strong>Allowed on Road:</strong> {skip.allowed_on_road ? "Yes" : "No"} <br />
                            <strong>Allows Heavy Waste:</strong> {skip.allows_heavy_waste ? "Yes" : "No"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SkipsByLocation;