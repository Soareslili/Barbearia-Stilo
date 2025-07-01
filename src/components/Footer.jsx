import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-4">Barbearia <span className="text-yellow-400">Stilo</span></h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Transformando o visual masculino há mais de 10 anos com tradição, qualidade e inovação. Sua melhro versão começa aqui.</p>

                <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                    <img
                        src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                        alt="Instagram"
                        className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125"
                    />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                    <img
                        src="https://img.icons8.com/ios/50/facebook-new.png"
                        alt="Facebook"
                        className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125"
                    />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                    <img
                        src="https://img.icons8.com/ios/50/youtube-play--v1.png"
                        alt="YouTube"
                        className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125"
                    />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20agendar%20um%20horário&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                    <img
                        src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                        alt="WhatsApp"
                        className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125"
                    />
                    </a>
                </div>
                </div>

                <div className="mt-8 lg:mt-0 flex flex-col gap-4 cursor-pointer">
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Links Rápidos</h4>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</a>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Sobre</a>
                <a href='#service' className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Serviços</a>
                <a href='#gallery' className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Galeria</a>
                <a href='#testimony' className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Depoimentos</a>
                <a href='#location' className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contato</a>
                </div>

                <div className="mt-8 lg:mt-0 flex flex-col gap-4 ">
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Contato</h4>
                <p className="text-gray-300">
                    Segunda a Sexta: 9h - 19h<br />
                    Sábado: 9h - 15h<br />
                    Domingo: <span className="text-red-500">Fechado</span>
                </p>

                <div className="flex items-center gap-4 mb-6">
                    <div>
                    <p className="text-gray-300">
                        Rua Exemplo, 123<br />
                        Bairro Exemplo, Cidade Exemplo<br />
                        Estado, CEP 12345-678
                    </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div>
                    <p className="text-gray-300">
                        (11) 99999-9999<br />
                    </p>
                    </div>
                </div>
                </div>

            </div>
            <div className="border-t border-gray-700 pt-6 text-center">
                <p className="text-gray-500 text-sm">© 2025 Barbearia Stilo. Todos os direitos reservados.</p>
                <p className="text-gray-500 text-sm">Desenvolvido por Lidiane</p>
            </div>

            </div>

             <a
            href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
            className="fixed bottom-4 right-4 z-[99] group"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaWhatsapp className="w-[50px] h-[50px] text-green-500 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute right-14 top-1 w-[140px] px-3 py-2 rounded-lg text-center text-sm font-medium bg-white text-green-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Conheça nossos Trabalho
            </span>
            </a>
        </footer>
        )
}