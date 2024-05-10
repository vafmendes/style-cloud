// eslint-disable-next-line no-unused-vars
import {useState} from "react";
import {GoPerson} from "react-icons/go";
import {HiMenuAlt3, HiOutlineShoppingBag} from "react-icons/hi";
import {MdClose} from "react-icons/md";
import '../routes'
import logo from '../../../public/logo.png';


export default function Navbar(){
    const [dropdown, setDropdown] = useState(false);

    const showdropdown = () =>{
       setDropdown(!dropdown); 
    }
    return(
        
        <nav className="w-full h-20 flex flex-col justify-center items-center fixed top 0 z-10 bg-gradient-to-r from-blue-500 to-sky-500/75 lg:shadow-2xl">
            <div className="w-full">
                <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-400">
                        <div className="flex items-center gap-x-2">
                            <a href="#home">
                            <img src={logo} alt="style-cloud" className="w-20 h-20 cursor-pointer hover:bg-white transition-bg"  />
                            </a>
                            {/* <h2 className="text-white font-bold text-lg">Crocs</h2> */}
                        </div>
                    </div>
                    <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                        <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-dark">Home</a>
                        <a href="#catalogo" className="leading-normal no-underline text-white text-lg hover:text-dark">Catálogo</a>
                        <a href="#sobre" className="leading-normal no-underline text-white text-lg hover:text-dark">Sobre Nós</a>
                        <a href="#contatos" className="leading-normal no-underline text-white text-lg hover:text-dark">Contatos</a>
                    </ul>
                    <div className="flex gap-4 max-lg:hidden">
                        <a href="#" className="bg-dark rounded-full shadow h-12 w-12 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base transition-bg hover:border hover:border-dark">
                            <HiOutlineShoppingBag className="w-full h-full p-2"/>
                        </a>
                            <a href="#login" className="bg-dark rounded-full shadow h-12 w-12 outline-none text-white hover:bg-white hover:text-dark cursor-pointer text-base transition-bg hover:border hover:border-dark">
                                <GoPerson  className="w-full h-full p-2" />
                            </a>
                    </div>
                    {dropdown ? (
                        <div onClick={showdropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                            <MdClose />
                        </div>
                        
                    ):(
                        <div onClick={showdropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div className="lg:hidden w-full fixed top-[4.5rem] bg-sky-500/75 transition-all duration-500 ease-in">
                        <div className="w-full flex flex-col items-baseline gap-4 p-8 pt-12 z-60">
                            <ul className="flex flex-col justify-center w-full z-60" >
                                <a href="#home"className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Home</a>
                                <a href="#catalogo"className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Catálogo</a>
                                <a href="#sobre"className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Sobre Nós</a>
                                <a href="#contatos"className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Contatos</a>
                            </ul>
                        </div>
                    </div>
                )}
                
            </div>
        </nav>
    )
}