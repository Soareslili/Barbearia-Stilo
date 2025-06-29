import BgHero from '../assets/Barbearia.avif'
import { useEffect, useState } from 'react'


export function Hero() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>

      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${BgHero})` }}
      >

        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.70)' }}
        ></div>

        <header
          className={`fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between transition-colors duration-300 ${
            scrolled
              ? 'bg-black/70 shadow-md backdrop-blur'
              : 'bg-transparent'
          }`}
        >
          <h2 className='text-2xl ml-5 md:text-3xl font-bold text-white'>
            Barbearia <span className='text-yellow-400'>Stilo</span>
          </h2>

          <button
            className="md:hidden text-4xl text-yellow-400"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>

          <nav className={`${menuOpen ? 'flex flex-col bg-white absolute top-16 left-0 w-full p-4 z-50 space-y-4' : 'hidden'} md:flex md:flex-row md:items-center md:space-x-8`}>
            <a href='#home' className='text-black md:text-white text-lg hover:text-yellow-400 transition-colors duration-200'>Home</a>
            <a href='#about' className='text-black md:text-white text-lg hover:text-yellow-400 transition-colors duration-200'>Sobre</a>
            <a href='#service' className='text-black md:text-white text-lg hover:text-yellow-400 transition-colors duration-200'>Serviço</a>
            <a href='#gallery' className='text-black md:text-white text-lg hover:text-yellow-400 transition-colors duration-200'>Galeria</a>
            <a href='#testimony' className='text-black md:text-white text-lg hover:text-yellow-400 transition-colors duration-200'>Depoimentos</a>
            <a href='#location' className='text-black md:text-white text-lg hover:text-yellow-400 transition-colors duration-200'>Contato</a>
          </nav>

          <a href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20agendar%20um%20horário&type=phone_number&app_absent=0" className='hidden md:flex items-center gap-2 bg-yellow-400 text-white mr-10 px-2 py-2 rounded-full transition-transform duration-200 transform hover:scale-105'>
            Agende seu Horário
          </a>
        </header>

        <main
          className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto flex-grow"
        >
          <h1 id='home' className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down" data-aos-delay='0'>
            Transforme seu <span className="text-yellow-400">estilo</span>
          </h1>
          <p className="text-lg md:text-xl mb-6" data-aos="fade-down" data-aos-delay='300'>
            Viva sua melhor versão com os cortes tradicionais e modernos em um ambiente acolhedor
          </p>
          <a
             href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20agendar%20um%20horário&type=phone_number&app_absent=0"
            className="bg-yellow-400 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-300 transition duration-200 transform hover:scale-105"
            data-aos="fade-down"
            data-aos-delay='400' 
          >
            Agende pelo WhatsApp
          </a>
        </main>

      </div>

    </>
  )
}