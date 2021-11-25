import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import styles from "../styles/pages/cadastro.module.css";

export default function Cadastro() {
  const { setMostrarCaixaDeBusca } = useContext(AppContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => setMostrarCaixaDeBusca(false), [setMostrarCaixaDeBusca]); // garantir que a caixa de busca não será mostrada
  
  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL!}/auth/register`, {nome, email, senha});
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
