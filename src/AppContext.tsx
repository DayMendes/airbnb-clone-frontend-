import { createContext, ReactNode, useState } from "react";

interface AppContextData {
    stringBusca: string;
    setStringBusca: (string: string) => void;
}

export const AppContext = createContext({} as AppContextData);

export function AppContextProvider(props: { children: ReactNode }) {
    const [stringBusca, setStringBusca] = useState("");

    const data = {
        stringBusca,
        setStringBusca,
    };
    return <AppContext.Provider value={data}>{props.children}</AppContext.Provider>;
}
