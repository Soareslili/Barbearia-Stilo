import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Service } from './components/Service';
import { Gallery } from './components/Gallery';
import { Testimony } from './components/Testimony';

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
    
    </>
  );
}

export default App;
