import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Pages render here */}
      <Footer />
    </>
  );
}

export default MainLayout;
