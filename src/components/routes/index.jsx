import {BrowserRouter, Router, Route} from "react-router-dom";

import Compras from '../../components/Compras';


export function Rotas(){
    <BrowserRouter>
        <Router>
            <Route path="/carrinho" element={<Compras />}></Route>
        </Router>
    </BrowserRouter>
}