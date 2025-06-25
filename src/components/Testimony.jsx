
import React, { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react";

import Cliente1 from '../assets/cliente1.jpeg'
import Cliente2 from '../assets/cliente2.avif'
import Cliente3 from '../assets/cliente3.jpg'


const testimonials = [

    {
        img: Cliente1,
        message: "A melhor experiência que já tive com massagem! O ambiente é acolhedor e os profissionais são extremamente qualificados.",
        name: 'João Oliveira',
       
    },
    {
        img: Cliente2,
        message: "Profissionais excelentes, sempre atentos aos detalhes. Virei cliente fiel depois da primeira visita!",
        name: 'Pedro Santos',
        
    },
    {
        img: Cliente3,
        message: "Corte sempre impecável e o pessoal é muito gente boa. Recomendo para todos os amigos!",
        name: 'Carlos Silva',
        
    },

];


export function Testimony() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 5000)
        return () => clearInterval(interval)
    }, [emblaApi, onSelect])

    const scrollTo = useCallback((idx) => {
        if (emblaApi) emblaApi.scrollTo(idx)
    }, [emblaApi])


    return (

        <section className="bg-zinc-900 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O que nossos <span className="text-yellow-400">clientes</span> dizem</h2>
                <p className="text-lg text-gray-400">A satisfação dos nossos clientes é nossa maior recompensa.</p>
            </div>
            <div className="mx-w-4xl mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((t, idx) => (
                            <div className="min-w-0 flex-[0_0_100%] flex justify-center px-4 " key={idx}>
                                <blockquote className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 text-center">
                                   <img src={t.img} alt={`Foto de ${t.name}`} className="w-30 h-30 rounded-full mx-auto mb-4" />
                                    <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">{t.message}</p>
                                    <footer>
                                        <span className="text-white font-bold text-xl ">{t.name}</span>
                                      
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${selectedIndex === idx ? 'bg-yellow-400' : 'bg-gray-200'}`}
                            onClick={() => scrollTo(idx)}
                            aria-label={`Ir para depoimento ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

