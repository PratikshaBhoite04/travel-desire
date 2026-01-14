import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/services/Services";
import Home from "./pages/Home/Home";
import TripPackages from "./pages/trips/TripPackages"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour-packages" element={<TripPackages />} />
        

<Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;