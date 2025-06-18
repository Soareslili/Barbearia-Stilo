import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Hero } from './components/Hero';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
