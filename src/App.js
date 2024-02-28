import ContactSection from './components/contact/ContactSection';
import DividingHeader from './components/DividingHeader';
import EstimateSection from './components/estimates/EstimateSection';
import Header from './components/Header';
import ReviewSection from './components/reviews/ReviewSection';
import TimelineSection from './components/timeline/TimelineSection';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto md:p-8 p-4 roboto">
      <Header />
      <EstimateSection />

      <DividingHeader
        before={"Hi, I'm "}
        underlined={"Nathan"}
        after={", a master painter with over 50 years of experience"} />
        
      <ReviewSection />

      <DividingHeader
        before={'I believe in '}
        underlined={'courtesy, integrity, and trust'}
        after={''} />

      <TimelineSection />

      <DividingHeader
        before={''}
        underlined={'Contact'}
        after={' me'} />

      <ContactSection />
    </div>
  );
}

export default App;
