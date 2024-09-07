import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import ClientSection from "./components/ClientSection";

function App() {

  return (

    <div className='items-center justify-center px-1 bg-header-dark header-light md:px-24 '>
<div className="bg-no-repeat bg-cover bg-header-dark ">

        <HeaderSection />
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <PartnerSection />
        <ClientSection />
        <FooterSection />
    </div>
    </div>
  );
}

export default App;
