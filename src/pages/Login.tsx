import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import styles from "../styles/pages/login.module.css";

export default function Login() {
  const { setMostrarCaixaDeBusca } = useContext(AppContext);

  useEffect(() => setMostrarCaixaDeBusca(false), [setMostrarCaixaDeBusca]); // garantir que a caixa de busca não será mostrada

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem cadastro? <Link to="/cadastro">Cadastre-se!</Link>
      </p>
    </div>
  );
}
