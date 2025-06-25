import Corte1 from '../assets/Corte1.jpg';
import Corte2 from '../assets/Corte2.jpg';
import Corte3 from '../assets/Corte.avif';
import Barba1 from '../assets/Barba1.jpeg';
import Barba2 from '../assets/Barba2.jpg';  
import Barba3 from '../assets/Barba3.jpg';




export function Gallery() {
    return (
     <section className="bg-zinc-800 py-20">
  <div className="container mx-auto h-full px-4">
    <div>
      <h2
        className="text-5xl font-bold text-center text-yellow-500 mb-8">
        Nossos <span className="text-white">Trabalhos</span>
      </h2>
      <p
        className="text-center text-zinc-400 mb-12">
        Confira alguns dos nossos melhores trabalhos e se inspire para seu próximo visual.
      </p>
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[Corte1, Corte2, Corte3, Barba1, Barba2, Barba3 ].map((img, i) => (
        <div
          key={i}
          className="relative group rounded-lg overflow-hidden shadow-lg"
          data-aos="zoom-in"
          data-aos-delay={`${100 * (i + 1)}`}
          data-aos-duration="1200"
        >
          <img
            src={img}
            alt={`Trabalho ${i + 1}`}
            className="w-full h-84 object-cover transition-transform duration-300 group-hover:scale-110"
          />
     
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Ver Trabalho</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    )
}