import DividingHeader from './components/DividingHeader';
import EstimateSection from './components/estimates/EstimateSection';
import Header from './components/Header';
import ReviewSection from './components/ReviewSection';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <Header />
      <EstimateSection />

      <DividingHeader text="Hi, I'm Nathan, a master painter" />
      <ReviewSection />

      <DividingHeader text="With over 50 years of experience" />
    </div>
  );
}

export default App;
