import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="" title="ብዛዕባና ዝምልከት" />
        <About />
        <Title subTitle="ሆም ዋይዝ ቲቶር" title="እንህቦም ግልጋሎት" />

        <Programs />
        <Title subTitle="ፅሬት ዘለዎ ትምህርቲ" title="ብቅዓት ብዘለዎም መማህራን" />
        <Testimonials />
        <Title subTitle="" title="Contact Us" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
