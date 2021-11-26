import logo from "../images/logo-512.png";
import searchIcon from "../images/magnifying-glass.png";
import styles from "../styles/components/navbar.module.css";

import { Link, } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";

import SelecaoFiltro from "./SelecaoFiltro";
import axios from "axios";

export default function Navbar() {
  const {
    stringBusca,
    setStringBusca,
    setDeveBuscar,
    mostrarCaixaDeBusca,
    userLogado,
    userName,
  } = useContext(AppContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo Airbnb" />
        </Link>
      </div>

      {mostrarCaixaDeBusca && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setDeveBuscar(true);
          }}
        >
          <div className={styles.userInput}>
            <div>
              <input
                type="text"
                placeholder="Encontre o que você procura aqui!"
                value={stringBusca}
                onChange={(event) => {
                  setStringBusca(event.target.value);
                }}
              />
              {stringBusca && (
                <span
                  onClick={() => {
                    // limpar string de busca
                    setStringBusca("");
                    // e buscar novamente
                    setDeveBuscar(true);
                  }}
                >
                  x
                </span>
              )}

              <button type="submit" className={styles.searchButton}>
                <img src={searchIcon} alt="Lupa de pesquisa" />
              </button>
            </div>

            <SelecaoFiltro />
          </div>
        </form>
      )}

      <div className={styles.loginInfoContainer}>
        {userLogado ? (
          <>
            <span className={styles.userInfo}>Bem vindo {userName}!</span>
            <button
              onClick={() => {
                axios.post(`${process.env.REACT_APP_API_URL}/auth/logOff`);
                window.location.reload();
              }}
              className={styles.logOff}
            >
              Logoff
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
