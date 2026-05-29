import Bestselling from './Bestselling';
import Condition from './Condition';
import HeroSection from './HeroSection';
import OfferSection from './OfferSection';

import WelcomeSection from './WelcomeSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <Bestselling />
      <OfferSection />
      <Condition />
    </>
  );
};

export default HomePage;
