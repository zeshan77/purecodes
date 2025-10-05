import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout