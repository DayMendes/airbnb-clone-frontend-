import logo from "../logo-512.png";
import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
    // TODO Ainda tem que fazer toda a lógica de pesquisa e login

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo Airbnb" />
            <input placeholder="Encontre o que você procura aqui!" />
            <button>Login</button>
        </nav>
    );
}
