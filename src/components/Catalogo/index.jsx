import { TbArrowBackUp } from "react-icons/tb";
import { SiSonarcloud } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import { HiHeart} from "react-icons/hi";
import { useState } from "react";
import Img3 from '../../../public/img3.png';
import Img4 from '../../../public/img4.png';
import Img5 from '../../../public/img5.png';
import Img6 from '../../../public/img6.png';
import Img8 from '../../../public/img8.png';
import Img1 from '../../../public/img1.png';

export default function Catalogo() {
    const [active, setActive] = useState("Crocs");
    return (
        <div className="bg-dark">
            <div className="xl:w-4/5 max-w-[1400px] px-6 mx-auto py-8">
                <div>
                    <h2 className="text-4xl text-white font-semibold py-6" data-aos="fade-down" data-aos-duration="2000">Catálogo</h2>
                    <div className="flex lg:flex-row flx-col items-center justify-between pt-12 pb-6 gap-8">
                        <div className="flex items-center" data-aos="fade-down" data-aos-duration="3000">
                            <span className="flex flex-wrap items-center gap-8">
                                <p className={`hover:text-color3 cursor-pointer ${active === 'Crocs' ? 'text-color1' : 'text-white'}`} onClick={() => setActive('Crocs')}>Crocs <span>(1000)</span></p>
                                <p className={`hover:text-color3 cursor-pointer ${active === 'vermelhos' ? 'text-color1' : 'text-white'}`} onClick={() => setActive('vermelhos')}>Crocs vermelhos<span>(20)</span></p>
                                <p className={`hover:text-color3 cursor-pointer ${active === 'verdes' ? 'text-color1' : 'text-white'}`} onClick={() => setActive('verdes')}>Crocs verdes <span>(50)</span></p>
                                <p className={`hover:text-color3 cursor-pointer ${active === 'rosas' ? 'text-color1' : 'text-white'}`} onClick={() => setActive('rosas')}>Crocs rosas<span>(34)</span></p>
                                <p className={`hover:text-color3 cursor-pointer ${active === 'azuis' ? 'text-color2' : 'text-white'}`} onClick={() => setActive('azuis')}>Crocs azuis<span>(39)</span></p>
                                <p className={`hover:text-color3 cursor-pointer ${active === 'brancos' ? 'text-color1' : 'text-white'}`} onClick={() => setActive('brancos')}>Crocs brancos<span>(10)</span></p>
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-8" data-aos="fade-down" data-aos-duration="3000">
                            <p className="underline text-white flex items-center gap-2 cursor-pointer hover:text-color3">
                                Mais Recentes <TbArrowBackUp />
                            </p>
                            <p className="underline text-white flex items-center gap-2 cursor-pointer hover:text-color3">
                                Tamanho <TbArrowBackUp />
                            </p>
                            <SiSonarcloud className="text-white" />
                            <MdCancel className="text-white" />
                        </div>
                    </div>
                    <div className="lg:flex pt-16">
                    <p className="text-white text-2xl font-bold">Confira nossos produtos</p>
                    </div>
                    <div className="lg:flex pt-12" data-aos="fade-right">
                        <p className="lg:w-1/2 text-white text-3xl font-bold">Crocs dos mais variados</p>
                        <div className="lg:w-2/6 w-full lg:pl-48 lg:pb-89 pb-16" data-aos="fade-left">
                            {/* <p className="text-white">Crocs Azul Marinho <HiHeart  /> </p> */}
                        </div>
                        <div data-aos="fade-right">
                        <p className="text-white">Crocs Azul Marinho R$: 200,00</p>
                            <img src={Img1} alt="" data-aos="fade-right" />
                        </div>
                    </div>
                    <div className="lg:flex pt-16">
                        <div data-aos="fade-right">
                            <p className="text-white">Crocs Sportivo R$: 200,00<HiHeart /> </p>
                            <img src={Img3} alt="" data-aos="fade-right" />
                        </div>
                        <div className=" w-full lg:pl-48 lg:pb-89 pt-20" data-aos="fade-right">
                        <p className="lg:w-1/1 text-white text-3xl font-bold">Os melhores modelos do mercado</p>
                        </div>
                    </div>
                    <div className="lg:flex pt-12">
                        <div className="lg:w-1/2 text-white text-3xl font-bold" data-aos="fade-right">
                        <p className="lg:w-1/1 flex flex-start text-white text-3xl font-bold">O melhor dos dois mundos</p>
                        </div>
                        <div className="lg:w-6/7 w-full lg:pl-48 lg:pb-89 pb-16">
                        <p className="text-white">Crocs Vermelho R$: 250,00<HiHeart size={20}/> </p>
                            <img src={Img8} alt="" data-aos="fade-right"/>
                        </div>
                    </div>
                    <div className="lg:flex pt-16">
                        <div data-aos="fade-right">
                            <p className="text-white">Crocs Rosa R$: 170,00</p>
                            <img src={Img6} alt="" data-aos="fade-right" />
                        </div>
                        <div className=" w-full lg:pl-48 lg:pb-89 pt-20" data-aos="fade-right">
                        <p className="lg:w-1/1 text-white text-3xl font-bold">A um passo de você</p>
                        </div>
                    </div>
                    <div className="lg:flex pt-12">
                        <p className="lg:w-1/2 text-white text-3xl font-bold">Escolha seu estilo</p>
                        <div className="lg:w-2/6 w-full lg:pl-48 lg:pb-89 pb-16">
                            {/* <p className="text-white">Crocs Azul Marinho <HiHeart  /> </p> */}
                        </div>
                        <div data-aos="fade-right">
                            <p className="text-white">Crocs Preto R$: 200,00</p>
                            <img src={Img5} alt="" />
                        </div>
                    </div>
                    <div className="lg:flex pt-16">
                        <p className="text-white text-2xl font-bold">Os melhores crocs você só encontra aqui</p>
                        <div className="lg:w-1/3 w-full lg:pl-48 lg:pb-89 pb-16" data-aos="fade-left">
                            <p className="text-white">Crocs Azul Personalizado R$: 280,00 <HiHeart /> </p>
                        </div>
                        <div>
                            <img src={Img4} alt="" data-aos="fade-right" />
                        </div>
                    </div>
                </div>
                <div id="sobre"></div>
            </div>
        </div>
    )
}

