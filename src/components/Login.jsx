import { FaUser } from "react-icons/fa";
import Footer from '../components/Footer';
export default function Login(){
    return(
        <>
            <section id="sobre" className="flex justify-content items-center max-lg:flex-col w-full max-container bg-gradient-to-r from-blue-500 to-sky-500/75">
                <div className="flex flex-col text-dark xl:w-1/1 max-w-[1400px] p-6 mx-auto py-8">
                    <div>
                        <h2 className="flex justify-center items-center text-4xl text-white font-semibold py-6" data-aos="fade-down" data-aos-duration="2000">
                            Faça o seu login
                            <br />
                        </h2>

                        <div id="login" className="flex justify-center items-center">

                            <div className="w-96 p-6 shadow-lg bg-white rounded-md text-dark">
                                <h1 className="text-5xl block flex justify-center items-center w-full font-semibold"><FaUser /></h1>
                                <hr className="mt-3" />
                                <div className="mt-3">
                                    <label htmlFor="username" className="block text-base mb-2">Nome Usuário</label>
                                    <input type="text" id="username" className="border w-full text-base px-2 py-1 outline-none ring-0 border-gray-600" placeholder="Insira seu nome" />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="password" className="block text-base mb-2">Senha</label>
                                    <input type="text" id="password" className="border w-full text-base px-2 py-1 outline-none ring-0 border-gray-600" placeholder="Insira sua Senha" />
                                </div>
                                <br />
                                <div className="mt-3 flex justify-between items-center">
                                    <div>
                                        <input type="checkbox" />
                                        <label htmlFor=""> Me Manter conectado após login</label>
                                    </div>
                                    <div className="cursor-pointer">
                                        Esqueceu sua Senha
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button type="submit" className="block flex justify-center items-center w-full border-2 bg-gradient-to-r from-blue-500 to-sky-500/75 text-white py-1 px-5">Login</button>
                                    <div className="cursor-pointer py-3">
                                        Caso ainda não tenha login clique <span className="text-color3"> aqui </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
        
        
    )
}