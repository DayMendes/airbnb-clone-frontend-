import logo from "../images/logo-512.png";
import searchIcon from "../images/magnifying-glass.png";
import styles from "../styles/components/navbar.module.css";

import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";

import SelecaoFiltro from "./SelecaoFiltro";

export default function Navbar() {
    const { stringBusca, setStringBusca, setDeveBuscar } = useContext(AppContext);

    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="Logo Airbnb" />
            </Link>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setDeveBuscar(true);
                }}
            >
                <div className={styles.userInput}>
                    <input
                        type="text"
                        placeholder="Encontre o que você procura aqui!"
                        value={stringBusca}
                        onChange={(event) => {
                            setStringBusca(event.target.value);
                        }}
                    />

                    <SelecaoFiltro />
                </div>
                <button type="submit">
                    <img src={searchIcon} alt="Lupa de pesquisa" />
                </button>
            </form>
            <button>Login</button>
        </nav>
    );
}
