import DividingHeader from './components/DividingHeader';
import EstimateSection from './components/estimates/EstimateSection';
import Header from './components/Header';
import ReviewSection from './components/reviews/ReviewSection';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto roboto">
      <Header />
      <EstimateSection />

      <DividingHeader
        before={"Hi, I'm "}
        underlined={"Nathan"}
        after={", a master painter"} />
      <ReviewSection />

      <DividingHeader text="With over 50 years of experience" />
    </div>
  );
}

export default App;
