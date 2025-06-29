import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Service } from './components/Service';
import { Gallery } from './components/Gallery';
import { Testimony } from './components/Testimony';
import { Location } from './components/Location';
import { Footer } from './components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <Hero />
      <About/>
      <Service/>
      <Gallery />
      <Testimony />
      <Location/>
      <Footer />
    </>
  );
}

export default App;
