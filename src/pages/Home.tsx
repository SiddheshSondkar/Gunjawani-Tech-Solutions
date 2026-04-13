import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-gts-dark text-gts-light font-sans selection:bg-gts-blue/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
