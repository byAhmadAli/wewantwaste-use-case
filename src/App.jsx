import './App.css'
import SkipSizeSlider from './components/SkipSizeSlider/SkipSizeSlider';
import { useSkipsByLocation } from './hooks/useSkips';


function App() {
  const { data: skips, isLoading, error } = useSkipsByLocation('NR32', 'Lowestoft');
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto px-4 pb-32">
          <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
          <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>

          <SkipSizeSlider apiData={skips} loading={isLoading} />
        </div>
      </main>
    </div>
  )
}

export default App
