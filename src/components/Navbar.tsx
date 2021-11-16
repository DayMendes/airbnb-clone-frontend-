import logo from "../logo-512.png";
import styles from "../styles/components/navbar.module.css";

import { AppContext } from "../AppContext";
import { useContext, useState } from "react";

export default function Navbar() {
    const { setStringBusca } = useContext(AppContext);
    const [buscaUsuario, setBuscaUsuario] = useState("");

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo Airbnb" />
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setStringBusca(buscaUsuario);
                }}
            >
                <input
                    type="text"
                    placeholder="Encontre o que você procura aqui!"
                    value={buscaUsuario}
                    onChange={(event) => setBuscaUsuario(event.target.value)}
                />
            </form>
            <button>Login</button>
        </nav>
    );
}
