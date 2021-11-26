import { createContext, ReactNode, useState } from "react";

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
  };
  return <AppContext.Provider value={data}>{props.children}</AppContext.Provider>;
}
