import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Banner from "../components/Banner";
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      {/* <Banner /> */}
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
