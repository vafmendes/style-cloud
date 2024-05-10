import {useEffect} from "react";
import Principal from './components/Principal';
import Navbar from './components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import Catalogo from './components/Catalogo';
import Sobre from './components/Sobre';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  useEffect(() =>{
    AOS.init({
      duration: 1500,
    })
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Principal></Principal>
      <Catalogo></Catalogo>
      <Sobre></Sobre>
      <Login></Login>
      <Footer></Footer>
    </div>
  )
}

export default App
