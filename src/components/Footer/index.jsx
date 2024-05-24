import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="bg-dark py-10">
            <div className="flex lg:flex-row flex-col gap-2 items-center justify-between lg:w-4/5 max-w-[1400px] mx-auto px-6">
                <h2 id="contatos" className="text-white font-bold text-lg">Style Cloud</h2>
                <ul className="flex lg:flex-row flex-col items-center xl:gap-12 gap-x-4 gap-y-2">
                    <a href="#home" className="loading-normal no-underline text-white text-lg hover:text-color3">Home</a>
                    <a href="#catalogo" className="loading-normal no-underline text-white text-lg hover:text-color3">Catálogo</a>
                    <a href="#sobre" className="loading-normal no-underline text-white text-lg hover:text-color3">Sobre Nós</a>
                    <a href="#trabalheConosco" className="loading-normal no-underline text-white text-lg hover:text-color3">Trabalhe Conosco</a>
                    <a href="#contatos" className="loading-normal no-underline text-white text-lg hover:text-color3">Contatos</a>
                </ul>
                <div className="flex gap-5 text-white">
                    <FaInstagram size={30} className="cursor-pointer"/>
                    <FaLinkedinIn size={30} className="cursor-pointer"/>
                    <BsTwitterX size={30} className="cursor-pointer"/>
                </div>
            </div>
            <div className="text-white lg:w-4/5 max-w-[1400px] mx-auto py-6 font-bold text-center">Não esqueça de nos seguir em nossas redes sociais</div>
        </footer>
    )
}