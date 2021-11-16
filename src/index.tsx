import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ListagemAcomodacoes from "./pages/ListagemAcomodacoes";
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';
import ReservarAcomodacao from "./pages/ReservarAcomodacao";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<ListagemAcomodacoes />} />
                    <Route path="*" element={<PaginaNaoEncontrada />}/>
                    <Route path="/reservar" element={<ReservarAcomodacao />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
