import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import styles from "../styles/pages/loginPage.module.css";

export default function LoginPage() {
  const { setMostarCaixaDeBusca } = useContext(AppContext);

  useEffect(() => setMostarCaixaDeBusca(false), []); // garantir que a caixa de busca não será mostrada

  return <h1>aaaa</h1>;
}
