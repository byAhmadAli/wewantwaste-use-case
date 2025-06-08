import { useCallback, useEffect } from "react";
import styles from "./SkipSizeSlider.module.css";
import { useSkipSlider } from "../../hooks/useSkips";
import SkipImageCard from "./components/SkipImageCard";
import { formatCurrency } from "../../utils/formatCurrency";

/**
 * SkipSizeSlider component displays a slider input for selecting a skip size from provided API data.
 *
 * @component
 * @param {Object[]} apiData - Array of objects containing skip size data.
 * @param {boolean} [loading=false] - Whether the data is still loading.
 * @param {function} [onChange] - Optional callback when selected size changes.
 * @returns {JSX.Element} A slider UI for selecting skip sizes, or a message if loading or no data is available.
 */
const SkipSizeSlider = ({ apiData = [], loading = false, onChange }) => {
  const {
    sizes,
    min,
    max,
    selectedSize,
    setSelectedSize,
    getClosestSize,
    selectedObject
  } = useSkipSlider(apiData);

  useEffect(() => {
    if (onChange && selectedSize !== undefined) {
      onChange(selectedSize);
    }
  }, [selectedSize, onChange]);

  const handleChange = useCallback(
    (e) => {
      const val = Number(e.target.value);
      setSelectedSize(getClosestSize(val));
    },
    [getClosestSize, setSelectedSize]
  );

  const fillPercent = (max === min) ? 0 : ((selectedSize - min) / (max - min)) * 100;

  if (loading) {
    return <div className="w-full max-w-md mx-auto py-10 text-white text-center">Loading...</div>;
  }

  if (!apiData.length) {
    return <div className="w-full max-w-md mx-auto py-10 text-white text-center">No data available</div>;
  }

  return (
    <>
      <SkipImageCard
        size={selectedSize}
        imageUrl={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${selectedSize}-yarder-skip.jpg`}
        isNotAllowedOnRoad={!selectedObject?.allowed_on_road}
        price={selectedObject?.price_before_vat && formatCurrency(selectedObject.price_before_vat)}
      />

      <div className="w-full max-w-md mx-auto py-10">
        <label className="block text-white font-medium mb-2 text-2xl">
          <span className="text-5xl font-bold">{selectedSize}</span> Yard Skip
        </label>

        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={selectedSize}
          onChange={handleChange}
          className={`${styles.slider} w-full h-2 rounded-lg appearance-none cursor-pointer`}
          style={{
            background: `linear-gradient(to right, #0037C1 0%, #0037C1 ${fillPercent}%, #e5e7eb ${fillPercent}%, #e5e7eb 100%)`,
          }}
          aria-label="Skip Size"
          list="sizes"
        />

        <datalist id="sizes">
          {sizes.map(size => (
            <option key={size} value={size} label={size.toString()} />
          ))}
        </datalist>
      </div>
    </>
  );
}

export default SkipSizeSlider;