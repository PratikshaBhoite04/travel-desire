import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/services/Services";
import TripPackages from "./pages/trips/TripPackages";
import MainLayout from "./components/Layout/MainLayout";
import ScrollToTop from "./components/shared/ScrollToTop";
import TourDetail from "./pages/trips/TourDetail";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tour-packages" element={<TripPackages />} />
          <Route path="/services" element={<Services />} />
           <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />

          <Route path="/tour/:slug" element= {<TourDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
