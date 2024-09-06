import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import ClientSection from "./components/ClientSection";

function App() {
  
    return (
      // <div className="items-center justify-center px-2 bg-gradient-to-t from-lightTopSM md:bg-gradient-to-tl md:px-28">
      <div className='items-center justify-center px-1 bg-lightFromTopSM md:bg-lightFromTop md:px-24 '>
        <HeaderSection />
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <PartnerSection />
        <ClientSection />
        <FooterSection />
      </div>
    );
  }

export default App;
