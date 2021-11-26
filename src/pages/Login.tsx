import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import styles from "../styles/pages/login.module.css";
import axios from "axios";

export default function Login() {
  const { setMostrarCaixaDeBusca, setUserLogado } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => setMostrarCaixaDeBusca(false), [setMostrarCaixaDeBusca]); // garantir que a caixa de busca não será mostrada

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${process.env.REACT_APP_API_URL!}/auth/login`, {email, senha});
      setUserLogado(true);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem cadastro? <Link to="/cadastro">Cadastre-se!</Link>
      </p>
    </div>
  );
}
