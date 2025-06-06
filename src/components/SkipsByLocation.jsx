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
        <div className="p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Skips By Location</h2>
            {(!skips || skips.length === 0) ? (
                <p className="text-gray-500">No skips available for any location.</p>
            ) : (
                <ul className="space-y-4">
                    {skips.map((skip) => (
                        <li key={skip.id} className="border rounded p-4 bg-gray-50">
                            <div className="mb-1">
                                <span className="font-semibold">Postcode:</span> {skip.postcode}
                            </div>
                            <div className="mb-1">
                                <span className="font-semibold">Size:</span> {skip.size} yd³
                            </div>
                            <div className="mb-1">
                                <span className="font-semibold">Hire Period:</span> {skip.hire_period_days} days
                            </div>
                            <div className="mb-1">
                                <span className="font-semibold">Price (before VAT):</span> £{skip.price_before_vat}
                            </div>
                            <div className="mb-1">
                                <span className="font-semibold">VAT:</span> {skip.vat}%
                            </div>
                            <div className="mb-1">
                                <span className="font-semibold">Allowed on Road:</span> {skip.allowed_on_road ? "Yes" : "No"}
                            </div>
                            <div>
                                <span className="font-semibold">Allows Heavy Waste:</span> {skip.allows_heavy_waste ? "Yes" : "No"}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SkipsByLocation;