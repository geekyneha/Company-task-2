import ImageSlider from './components/ImageSlider';
import { data } from '../src/utils/mock';
export default function App() {
  return (
    <div className="app">
      <ImageSlider data={data} />
    </div>
  );
}
