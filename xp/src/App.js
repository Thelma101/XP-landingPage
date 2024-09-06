import NavBar from "./components/NavBar";
import FeatureSection from "./sections/FeatureSection";
import AppFooter from "./sections/AppFooter";
import GallerySection from "./sections/GallerySection";
import MainHero from "./sections/MainHero";
import PartnerSection from "./sections/PartnerSection";
import ClientFeedback from "./sections/ClientFeedback";

function App() {
  
    return (
      <div className="bg-gradient-to-t from-lightTopSM md:bg-gradient-to-tl items-center px-2 justify-center md:px-28">
        <NavBar />
        <MainHero />
        <FeatureSection />
        <GallerySection />
        <PartnerSection />
        <ClientFeedback />
        <AppFooter />
      </div>
    );
  }

export default App;
