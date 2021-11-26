import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./AppContext";

import App from "./App";
import DetalhesAcomodacao from "./pages/DetalhesAcomodacao";
import ListagemAcomodacoes from "./pages/ListagemAcomodacoes";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import CadastroAcomodacoes from "./pages/CadastroAcomodacoes";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ListagemAcomodacoes />} />
            <Route path="/acomodacoes" element={<CadastroAcomodacoes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/:accommodationId" element={<DetalhesAcomodacao />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
