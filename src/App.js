import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";
import WebDevelopment from "./pages/ServicesPages/WebDevelopment";
import ServicePageLayout from "./components/Website/ServicePageLayout";
import AppDevelopment from "./pages/ServicesPages/AppDevelopment";
import ArtificialIntelligence from "./pages/ServicesPages/ArtificialIntelligence";
import BlockChain from "./pages/ServicesPages/BlockChain";
import RPA from "./pages/ServicesPages/RPA";
import ARAndVR from "./pages/ServicesPages/ARAndVR";
import NormalizeSlash from "./components/NormalizeSlash";
import WhatsAppIcon from "./components/WhatsAppIcon";
import UIUX from "./pages/ServicesPages/UIUX";
import Mlsolution from "./pages/ServicesPages/Mlsolution";
import DataAnalytics from "./pages/ServicesPages/DataAnalytics";
import IotDevelopment from "./pages/ServicesPages/IotDevelopment";
import CustomSoftware from "./pages/ServicesPages/CustomSoftware";
import GameDevelopment from "./pages/ServicesPages/GameDevelopment";
import Chatbots from "./pages/ServicesPages/Chatbots";
import DevOps from "./pages/ServicesPages/DevOps";
import ComputerVisionSolutions from "./pages/ServicesPages/ComputerVisionSolutions";
import NLP from "./pages/ServicesPages/NLP";
import DataScience from "./pages/ServicesPages/DataScience";
import BigDataSolutions from "./pages/ServicesPages/BigDataSolutions";
import CloudServices from "./pages/ServicesPages/CloudServices";
import CyberSecurity from "./pages/ServicesPages/CyberSecurity";
import ItInfrastructures from "./pages/ServicesPages/ItInfrastructures";
import RoboticAutomation from "./pages/ServicesPages/RoboticAutomation";
import { Toaster } from "react-hot-toast";
import ThankYou from "./components/Thank-you";

Aos.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppIcon />
      <Toaster
        position="top-bottom"
        toastOptions={{
          style: {
            background: "#010C2A",
            color: "#ffffff",
          },
        }}
      />
      <NormalizeSlash>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Services Detail Routes with Layout */}
          <Route path="/services" element={<ServicePageLayout />}>
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="app-development" element={<AppDevelopment />} />
            <Route
              path="artificial-intelligence"
              element={<ArtificialIntelligence />}
            />
            <Route path="blockchain" element={<BlockChain />} />
            <Route path="rpa" element={<RPA />} />
            <Route path="ar-vr" element={<ARAndVR />} />
            <Route path="uiux" element={<UIUX />} />
            <Route path="ml-solutions" element={<Mlsolution />} />
            <Route path="custom-software" element={<CustomSoftware />} />
            <Route path="data-analytics" element={<DataAnalytics />} />
            <Route path="iot-development" element={<IotDevelopment />} />
            <Route path="game-development" element={<GameDevelopment />} />
            <Route path="robotic-automation" element={<RoboticAutomation />} />
            <Route path="chatbots" element={<Chatbots />} />
            <Route path="devOps" element={<DevOps />} />
            <Route
              path="computer-vision-solutions"
              element={<ComputerVisionSolutions />}
            />
            <Route path="nlp" element={<NLP />} />
            <Route path="data-science" element={<DataScience />} />
            <Route path="big-data-solutions" element={<BigDataSolutions />} />
            <Route path="cloud-services" element={<CloudServices />} />
            <Route path="cyber-security" element={<CyberSecurity />} />
            <Route path="it-infrastructures" element={<ItInfrastructures />} />
          </Route>

          {/* Generic Routes */}
          <Route
            path="/web-development"
            element={<LandingPage page={"web-development"} />}
          />
          <Route
            path="/app-development"
            element={<LandingPage page={"app-development"} />}
          />
        </Routes>
      </NormalizeSlash>
    </BrowserRouter>
  );
}

export default App;

// scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
