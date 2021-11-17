import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./AppContext";

import App from "./App";
import DetalhesAcomodacao from "./pages/DetalhesAcomodacao";
import ListagemAcomodacoes from "./pages/ListagemAcomodacoes";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import TelaInicial from './pages/TelaInicial';

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<ListagemAcomodacoes />} />
                        <Route path="/:accommodationId" element={<DetalhesAcomodacao />} />
                        <Route path="*" element={<PaginaNaoEncontrada />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
