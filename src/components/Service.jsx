

export function Service() {
    return (
        <section className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4">
                <div className="text-center text-white mb-16">
                    <h2 id="service" className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos <span className="text-yellow-400">Serviços</span></h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">Oferecemos uma gama completa de serviços para cuidar do seu visual com a qualidade que você merece.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 transition-transform duration-200 transform hover:scale-105 hover:border-yellow-500 transition duration-300" data-aos="zoom-in" data-aos-delay='100'   data-aos-duration="1000">
                        <div>
                            <img className="text-4xl mb-4" src="https://img.icons8.com/emoji/48/scissors-emoji.png" alt="Ícone de tesoura" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Corte Tradicional</h3>
                        <p className="text-gray-300 mb-4">Cortes clássicos com técnicas tradicionais, sempre atualizados com as tendências modernas.</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-2xl font-bold text-yellow-400"> R$ 35 </p>
                            <span className="text-gray-500 text-sm">A partir de</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 transition-transform duration-200 transform hover:scale-105 hover:border-yellow-500 transition duration-300" data-aos="zoom-in" data-aos-delay='200' data-aos-duration="1200">
                        <div>
                            <img className="text-4xl mb-4" src="https://img.icons8.com/color/48/straight-razor.png" alt="Ícone de navalha" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Barba com Toalha Quente</h3>
                        <p className="text-gray-300 mb-4">Cortes clássicos com técnicas tradicionais, sempre atualizados com as tendências modernas.</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-2xl font-bold text-yellow-400"> R$ 25 </p>
                            <span className="text-gray-500 text-sm">A partir de</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 transition-transform duration-200 transform hover:scale-105 hover:border-yellow-500 transition duration-300" data-aos="zoom-in" data-aos-delay='300' data-aos-duration="1400">
                        <div>
                            <img className="text-4xl mb-4" src="https://img.icons8.com/emoji/48/man-getting-haircut.png" alt="Ícone de pessoa" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Corte Degradê / Fade</h3>
                        <p className="text-gray-300 mb-4">Cortes modernos com degradê profissional, do mais sutil ao mais marcante.</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-2xl font-bold text-yellow-400"> R$ 40 </p>
                            <span className="text-gray-500 text-sm">A partir de</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 transition-transform duration-200 transform hover:scale-105 hover:border-yellow-500 transition duration-300" data-aos="zoom-in" data-aos-delay='400' data-aos-duration="1600">     
                        <div>
                            <img className="text-4xl mb-4" src="https://img.icons8.com/color/48/ruler.png" alt="Ícone de regua" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Alinhamento de Barba</h3>
                        <p className="text-gray-300 mb-4">Alinhamento e finalização da barba para um visual sempre impecável.</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-2xl font-bold text-yellow-400"> R$ 20 </p>
                            <span className="text-gray-500 text-sm">A partir de</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 transition-transform duration-200 transform hover:scale-105 hover:border-yellow-500 transition duration-300" data-aos="zoom-in" data-aos-delay='500' data-aos-duration="1800">
                        <div>
                            <img className="text-4xl mb-4" src="https://img.icons8.com/color/48/tweezers.png" alt="Ícone de pinça" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Design de Sobrancelha</h3>
                        <p className="text-gray-300 mb-4">Modelagem masculina da sobrancelha respeitando o formato natural do rosto.</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-2xl font-bold text-yellow-400"> R$ 20 </p>
                            <span className="text-gray-500 text-sm">A partir de</span>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-8 rouded-lg shadow-xl border border-zinc-700 transition-transform duration-200 transform hover:scale-105 hover:border-yellow-500 transition duration-300" data-aos="zoom-in" data-aos-delay='600' data-aos-duration="2000">
                        <div>
                            <img className="text-4xl mb-4" src="https://img.icons8.com/fluency/50/star--v1.png" alt="Ícone de estrela" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Pacote Completo</h3>
                        <p className="text-gray-300 mb-4">Corte + barba + sobrancelha + lavagem. O cuidado completo que você merece.</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-2xl font-bold text-yellow-400"> R$ 70 </p>
                            <span className="text-gray-500 text-sm">A partir de</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}