import HeaderSection from "./components/HeaderSection";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import ClientSection from "./components/ClientSection";

function App() {
  
    return (
      <div className="items-center justify-center px-2 bg-gradient-to-t from-lightTopSM md:bg-gradient-to-tl md:px-28">
        <HeaderSection />
        <HeroSection />
        <FeatureSection />
        <GallerySection />
        <PartnerSection />
        <ClientSection />
        <FooterSection />
      </div>
    );
  }

export default App;
