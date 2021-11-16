import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import App from "./App";
import ListagemAcomodacoes from "./pages/ListagemAcomodacoes";
import CadastroAcomodacoes from "./pages/CadastroAcomodacoes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
       
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<ListagemAcomodacoes />} />
                </Route>
                <Route path="/acomodacoes" element={<App />}>
                    <Route index element={<CadastroAcomodacoes />} />
                </Route>
            </Routes>

           
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
