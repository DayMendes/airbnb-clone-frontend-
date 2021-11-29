import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextData {
  stringBusca: string;
  setStringBusca: (string: string) => void;

  objetoBuscaFiltro: ObjetoBuscaFiltro;
  setObjetoBuscaFiltro: (objeto: ObjetoBuscaFiltro) => void;

  deveBuscar: boolean;
  setDeveBuscar: (booleano: boolean) => void;

  mostrarCaixaDeBusca: boolean;
  setMostrarCaixaDeBusca: (booleano: boolean) => void;

  userLogado: boolean;
  setUserLogado: (booleano: boolean) => void;

  userName: string;
  setUserName: (name: string) => void;

}

interface ObjetoBuscaFiltro {
  local: { cidade: string };
  "check-in": string;
  "check-out": string;
  capacidade: string;
}

export const AppContext = createContext({} as AppContextData);

export function AppContextProvider(props: { children: ReactNode }) {
  const [stringBusca, setStringBusca] = useState("");
  const [objetoBuscaFiltro, setObjetoBuscaFiltro] = useState<ObjetoBuscaFiltro>({
    local: { cidade: "" },
    "check-in": "",
    "check-out": "",
    capacidade: "",
  });
  const [deveBuscar, setDeveBuscar] = useState(true);
  const [mostrarCaixaDeBusca, setMostrarCaixaDeBusca] = useState(true);

  const [userLogado, setUserLogado] = useState(false);
  const [userName, setUserName] = useState("");

  // verificar se o usuário já esta logado
  useEffect(() => {
    async function getUserLogado() {
      axios.defaults.withCredentials = true;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/isAuthenticated`);
      setUserLogado(response.data.isAuthenticated);

      if (response.data.isAuthenticated) {
        setUserName(response.data.user.nome);
      }
    }

    getUserLogado();
  }, []);

  const data = {
    stringBusca,
    setStringBusca,
    objetoBuscaFiltro,
    setObjetoBuscaFiltro,
    deveBuscar,
    setDeveBuscar,
    mostrarCaixaDeBusca,
    setMostrarCaixaDeBusca,
    userLogado,
    setUserLogado,
    userName,
    setUserName,
  };
  return <AppContext.Provider value={data}>{props.children}</AppContext.Provider>;
}
