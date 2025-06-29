import AboutImage from '../assets/Sobre.avif';

export function About() {
    return (
        <section className='w-full flex flex-col items-center justify-center bg-zinc-800 p-6 md:p-8'>
            <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='flex flex-col items-start justify-center text-white mt-10 md:mt-20 w-full md:w-1/2'>
                    <h2
                        id='about'
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                    >
                        Nossa <span className='text-yellow-400'>História</span>
                    </h2>

                    <p
                        className='text-gray-300 text-base sm:text-lg mb-6 leading-relaxed'
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1800"
                    >
                        Há mais de 10 anos transformando o visual masculino com tradição, qualidade e inovação. Nossa barbearia combina técnicas clássicas com tendências modernas, oferecendo uma experiência única em um ambiente acolhedor e profissional.
                    </p>

                    <p
                        className='text-gray-300 text-base sm:text-lg mb-8 leading-relaxed'
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                    >
                        Nossos barbeiros são especialistas em cortes modernos, barbas bem feitas e sempre atentos aos detalhes que fazem a diferença no seu visual.
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8 w-full'>
                        <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="2000">
                            <p className='text-2xl sm:text-3xl font-bold text-yellow-400 mb-2'>10+</p>
                            <p className='text-gray-300 text-sm sm:text-base'>Anos de experiências</p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="900" data-aos-duration="2000">
                            <p className='text-2xl sm:text-3xl font-bold text-yellow-400 mb-2'>5000+</p>
                            <p className='text-gray-300 text-sm sm:text-base'>Clientes satisfeitos</p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="2000">
                            <p className='text-2xl sm:text-3xl font-bold text-yellow-400 mb-2'>3</p>
                            <p className='text-gray-300 text-sm sm:text-base'>Barbeiros especialistas</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0'>
                    <img
                        src={AboutImage}
                        alt="Sobre nós"
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl aspect-video object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </section>
    )
}
