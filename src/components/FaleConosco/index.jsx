import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function FaleConosco(){
    return(
        <div id="trabalheConosco" className="xl:w-4/5 max-w-[1400px] px-6 mx-auto py-8">
        <div className="grid sm:grid-cols-2 items-center gap-16 bg-white rounded-md text-[#333] font-[sans-serif]">
            <div>
                <h1 className="text-4xl font-extrabold">Trabalhe Conosco</h1>
                <p className="text-1xl text-gray-400 mt-3">Se está interessado em fazer parte de nossa equipe, não perca mais tempo e nos envie seu curriculo</p>
                <div className="mt-12">
                    <h2 className="text-lg font-extrabold">Email</h2>
                    <ul className="mt-3">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" className=" text-sm ml-3">
                                <small className="block">E-Mail</small>
                                <strong>info@example.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-12">
                    <h2 className="text-lg font-extrabold">Nossas Redes Sociais</h2>
                    <ul className="flex mt-3 space-x-4">
                        <li className="bg-[#e6e6e6cf] text-coloe1 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <FaInstagram size={30} className="cursor-pointer"/>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <FaLinkedinIn size={30} className="cursor-pointer"/>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <BsTwitterX size={30} className="cursor-pointer"/>
                        </li>
                    </ul>
                </div>
            </div>
            <form className="ml-auo space-y-4">
                <input type='text' placeholder='Nome Completo'
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                <input type='text' placeholder='Telefone'
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                <textarea placeholder='Nos fale um breve resumo sobre você' rows="6"
                    className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                <button type='button'
                    className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
            </form>
        </div>
    </div>

    )
}