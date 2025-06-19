import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';

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
    </>
  );
}

export default App;
