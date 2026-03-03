import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import VisionMission from './components/VisionMission/VisionMission';
import Reasons from './components/NewReasons/NewReasons';

import IndustrialFooter from './components/IndustrialFooter/IndustrialFooter';
import IndustriesWeServe from './components/IndustriesWeServe/IndustriesWeServe';
import ScrollToTop from './ScrollToTop'
import ProductRangePage from './pages/ProductRangePage'
import WhyUsPage from './pages/WhyUsPage'
import ContactUsPage from './pages/ContactUsPage'
import NewHero from './components/NewHero/NewHero';
function Home() {
  return (
    <>
      <Header/>
      <NewHero/>
      <VisionMission/>
      <IndustriesWeServe/>
      <Reasons/>
      <IndustrialFooter/> 
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* new top-level pages */}
          <Route path="/products-range" element={<ProductRangePage/>} />
          <Route path="/why-us" element={<WhyUsPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
