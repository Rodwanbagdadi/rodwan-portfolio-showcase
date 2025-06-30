
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
