import AboutImage from '../assets/Sobre.avif';


export function About() {
    return (
        <section className='w-full flex flex-col items-center justify-center bg-zinc-800 p-8'>
            <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8'>
                <div className='flex flex-col items-start justify-center text-white mt-20'>
                    <h2
                        id='about'
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                    >
                        Nossa <span className='text-yellow-400'>História</span>
                    </h2>

                    <p
                        className='text-gray-300 text-lg mb-6 leading-relaxed'
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1800"
                    >
                        Há mais de 10 anos transformando o visual masculino com tradição, qualidade e inovação. Nossa barbearia combina técnicas clássicas com tendências modernas, oferecendo uma experiência única em um ambiente acolhedor e profissional.
                    </p>

                    <p
                        className='text-gray-300 text-lg mb-8 leading-relaxed'
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                    >
                        Nossos barbeiros são especialistas em cortes modernos, barbas bem feitas e sempre atentos aos detalhes que fazem a diferença no seu visual.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8'>
                        <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="2000">
                            <p className='text-3xl font-bold text-yellow-400 mb-2'>10+</p>
                            <p className='text-gray-300'>Anos de experiências</p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="900" data-aos-duration="2000">
                            <p className='text-3xl font-bold text-yellow-400 mb-2'>5000+</p>
                            <p className='text-gray-300'>Clientes satisfeitos</p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="2000">
                            <p className='text-3xl font-bold text-yellow-400 mb-2'>3</p>
                            <p className='text-gray-300'>Barbeiros especialistas</p>
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-center w-full md:w-1/2'>
                    <img
                        src={AboutImage}
                        alt="Sobre nós"
                        className="w-[600px] h-[400px] max-w-xl ml-40 mt-10 md:max-w-2xl rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>

        </section>
    )
}