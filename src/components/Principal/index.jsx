// import React from "react";
import {HiPlus} from "react-icons/hi";
import Img2 from '../../../public/img2.png';
import logo from '../../../public/logo.png';
import Login from '../../components/Login';
import {Routes, Route} from "react-router-dom";

import "../../styleGlobal.css";



export default function Hero(){
    return(
            <div id="home" className="w-full relative bg-gradient-to-r from-color3 to color3 lg:py-12 py-40 overflow-hidden">
                <Routes>
                    <Route path="/style-cloud/login" element={ <Login></Login>}></Route>
                </Routes>
            <div className="xl:w-4/5 px-[20px] max-w-[1380px] mx-auto relative lg:h-[100vh] flex flex-col justify-center">
                <div className="absolute top-24 right-40 lg:block hidden">
                    <p className="text-8xl font-semibold opacity-10  italic -tracking-widest">Crocs</p>
                </div>
                <div className="h-full flex justify-center items-center w-full overflow-hidden">
                    <div className="bg-dark rounded-full shadow relative lg:w-96 w-64 lg:h-96 h-64">
                        <div className="flex flex-col bg-cover items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-4 absolute top-[-3px] left-[-30px]  z-10" data-aos="fade-up">
                            <p className="text-sm text-white" data-aos="fade-up">promo: crocs + nike</p>
                            <p className="text-2xl font-bold" data-aos="fade-up">40%</p>
                            <p className="font-bold text-2xl text-white" data-aos="fade-up">sale</p>
                        </div>
                        <button className="text-white bg-gradient-to-r from color3 to-color1 rounded-full shadow-2xl absolute w-10 h-10 top-8 right-5 z-20 flex items-center justify-center" data-aos="fade-up">
                            <HiPlus size={20}/>
                        </button>
                    </div>
                    <img src={Img2} alt="crocs" className="bg-cover rotate-[10deg] lg:w-30 w-2/3 absolute lg:pl-48 lg:pb-79 pb-16 z-80" data-aos="fade-up"/>
                </div>
                <div className="lg:absolute lg:w-2/5" data-aos="fade-up">
                    <img src={logo} alt="style-cloud" className="w-[250px] h-[250px] cursor-pointer transition-bg z-90" data-aos="fade-up"/>
                    <h2 className="text-5xl text-white font-bold ">
                        Style Cloud
                    </h2>
                    <p className="lg:w-2/4 text-gray-500 text-2xl font-bold py-3">
                        O conforto do Futuro Chegou aos seus pés.
                    </p>
                    <br />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}