import HeaderSection from "./components/HeaderSection";
import FeatureSection from "./sections/FeatureSection";
import FooterSection from "./sections/FooterSection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import PartnerSection from "./sections/PartnerSection";
import ClientFeedback from "./sections/ClientFeedback";

function App() {
  
    return (
      <div className="bg-gradient-to-t from-lightTopSM md:bg-gradient-to-tl items-center px-2 justify-center md:px-28">
        <HeaderSection />
        <HeroSection />
        <FeatureSection />
        <GallerySection />
        <PartnerSection />
        <ClientFeedback />
        <FooterSection />
      </div>
    );
  }

export default App;
