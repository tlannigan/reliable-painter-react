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

      <DividingHeader
        before={'With over '}
        underlined={'50 years'}
        after={' of experience'} />

      <DividingHeader
        before={''}
        underlined={'Contact'}
        after={' me'} />
    </div>
  );
}

export default App;
