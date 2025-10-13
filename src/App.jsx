import Layout from "./layout/Layout";
import Home from "./Views/Home";
import Services from "./Views/Services";
import About from "./Views/About";
import Contact from "./Views/Contact";

export default function App() {
  return (
    <Layout>
      {/* Each section has its own ID for smooth scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}
