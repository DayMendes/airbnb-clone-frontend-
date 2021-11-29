import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { AppContext } from "../AppContext";
import styles from "../styles/pages/login.module.css";

export default function Login() {
  const { setMostrarCaixaDeBusca, setUserLogado, setUserName } = useContext(AppContext);

  const navigate = useNavigate();
  const loadingRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const reservando = (searchParams.get('referer') || '');
  const idAcomodacao = (searchParams.get('id') || '');

  const [loginErro, setLoginErro] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => setMostrarCaixaDeBusca(false), [setMostrarCaixaDeBusca]); // garantir que a caixa de busca não será mostrada

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      (loadingRef.current! as any)?.continuousStart();

      axios.defaults.withCredentials = true;
      const response = await axios.post(`${process.env.REACT_APP_API_URL!}/auth/login`, {
        email,
        senha,
      });
      setUserLogado(true);
      setUserName(response.data.user.nome);
      { reservando === '' ? navigate("/") : navigate(`/${idAcomodacao}`)}
    } catch (error) {
      setLoginErro(true);
    }

    (loadingRef.current as any)?.complete();
  }

  return (
    <>
      <LoadingBar color="#ff5a5f" ref={loadingRef} />
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        {loginErro && (
          <p className={styles.errorMessage}>Usuário ou senha incorretos! Tente novamente.</p>
        )}

        <p>
          Não tem cadastro? <Link to="/cadastro">Cadastre-se!</Link>
        </p>
      </div>
    </>
  );
}
