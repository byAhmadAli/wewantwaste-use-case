/**
 * SkipImageCard component displays a card with an image, skip size, price, and a warning if the skip is not allowed on the road.
 *
 * @param {Object} props - Component props.
 * @param {number|string} props.size - The size of the skip in yards.
 * @param {string} props.imageUrl - The URL of the skip image.
 * @param {boolean} props.isNotAllowedOnRoad - Indicates if the skip is not allowed on the road.
 * @param {string|number} [props.price] - The price of the skip (optional).
 * @returns {JSX.Element} The rendered SkipImageCard component.
 */

const SkipImageCard = ({ size, imageUrl, isNotAllowedOnRoad, price }) => (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-3 pb-3 max-w-xl mx-auto mt-24 aspect-[3/2]">
        <img 
            className="absolute inset-0 h-full w-full object-cover aspect-[3/2]" 
            src={imageUrl} 
            alt={`${size} Yard Skip`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div className="z-10 flex items-end justify-between mb-2">
            <div className="flex items-baseline">
                <span className="bg-[#0037C1]/50 text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide me-2 h-5">
                {size} Yards
                </span>
                {isNotAllowedOnRoad && (
                    <span className="bg-yellow-800/50 text-white text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide ps-0 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 inline-block align-middle me-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Not Allowed on Road
                    </span>
                )}
            </div>
            <div className="text-white text-sm">
                {price && (
                    <span className="text-white text-[40px] px-2 inline-block rounded-full font-semibold tracking-wide h-5 ms-2">
                        {price}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default SkipImageCard;