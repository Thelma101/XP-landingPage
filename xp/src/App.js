import HeaderSection from "./components/HeaderSection";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import ClientFeedback from "./components/ClientFeedback";

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
