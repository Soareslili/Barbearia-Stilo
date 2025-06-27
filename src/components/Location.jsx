

export function Location() {
    return (
        <section className="py-20 bg-zinc-800">
            <div className="container mx-auto- px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Nossa <span className="text-yellow-400">Localização</span></h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">Venha nos visitar! Estamos prontos para cuidar do seu visual com todo carinho e profissionalismo.</p>
                </div>
                <div className="grid grid-cols-2 gap-12 ml-40">
                    <div className="bg-zinc-900 p-8 rouded-lg- shadow-xl border border-zinc-700 flex flex-col">
                      
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://img.icons8.com/color/48/place-marker--v1.png" alt="Localização" className="w-12 h-12" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                                <p className="text-gray-300">
                                    Rua Exemplo, 123<br />
                                    Bairro Exemplo, Cidade Exemplo<br />
                                    Estado, CEP 12345-678
                                </p>
                            </div>
                        </div>
                     
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://img.icons8.com/ios-filled/50/phone.png" alt="Telefone" className="w-12 h-12" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Contato</h3>
                                <p className="text-gray-300">
                                    (11) 99999-9999<br />
                                    whatsApp: (11) 99999-9999<br />
                                </p>
                            </div>
                        </div>
                      
                        <div className="border-t border-gray-700 pt-6 mb-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span>Horário de Funcionamento</span>
                            </h3>
                            <p className="text-gray-300">
                                Segunda a Sexta: 9h - 19h<br />
                                Sábado: 9h - 15h<br />
                                Domingo: <span className="text-red-500">Fechado</span>
                            </p>
                        </div>
                       
                        <a className="block w-full bg-yellow-400 hover:bg-yellow-700 text-white text-center py-3 rounded-full mt-auto" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                            Agendar pelo whatsApp
                        </a>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.479644518069!2d-46.630858!3d-23.551211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5900b15a1739%3A0xa04ba02905756f1!2sR.%20das%20Fl%C3%B4res%2C%20123%20-%20S%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001019-010!5e0!3m2!1spt-BR!2sbr!4v1751052712536!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}