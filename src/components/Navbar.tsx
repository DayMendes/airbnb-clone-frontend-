import logo from "../images/logo-512.png";
import searchIcon from "../images/magnifying-glass.png";
import styles from "../styles/components/navbar.module.css";

import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export default function Navbar() {
    const { setStringBusca } = useContext(AppContext);
    const [buscaUsuario, setBuscaUsuario] = useSearchParams("");

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo Airbnb" />
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setStringBusca(buscaUsuario.get("general") || "");
                }}
            >
                <input
                    type="text"
                    placeholder="Encontre o que você procura aqui!"
                    value={buscaUsuario.get("general") || ""}
                    onChange={(event) => {
                        if (event.target.value) setBuscaUsuario({ general: event.target.value });
                        else setBuscaUsuario({});
                    }}
                />
                <button type="submit">
                    <img src={searchIcon} alt="Lupa de pesquisa" />
                </button>
            </form>
            <button>Login</button>
        </nav>
    );
}
