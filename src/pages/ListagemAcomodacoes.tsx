import axios, { AxiosResponse } from "axios";
import qs from "qs";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Acomodacao } from "../util/interfaces";
import { AppContext } from "../AppContext";

import AcomodacaoCard from "../components/AcomodacaoCard";

import styles from "../styles/pages/listagemAcomodacoes.module.css";

export default function ListagemAcomodacoes() {
  const { stringBusca, objetoBuscaFiltro, deveBuscar, setDeveBuscar } = useContext(AppContext);
  const [primeiroRender, setPrimeiroRender] = useState(true); // para pesquisar quando a pagina é carregada
  const [acomodacoes, setAcomodacoes] = useState<Acomodacao[] | []>([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    async function getAcomodacoes() {
      let response: AxiosResponse<Acomodacao[]>;
      try {
        // construir query string
        const queryParams = { general: stringBusca };
        for (const key in objetoBuscaFiltro) {
          if ((objetoBuscaFiltro as any)[key]) {
            (queryParams as any)[key] = (objetoBuscaFiltro as any)[key];
          }
        }

        const queryString = qs.stringify(queryParams);
        response = await axios.get<Acomodacao[]>(`${apiUrl}/acomodacoes?${queryString}`);
        return response;
      } catch (err) {
        setAcomodacoes([]);
      }
    }

    if (deveBuscar || primeiroRender) {
      getAcomodacoes().then((acomodacoes) => {
        if (acomodacoes) {
          setAcomodacoes(acomodacoes.data);
        }
      });
      setDeveBuscar(false);
      setPrimeiroRender(false);
    }
  }, [deveBuscar, objetoBuscaFiltro, setDeveBuscar, stringBusca]);

  return (
    <section className={styles.cardsWrapper}>
      {acomodacoes.map((acomodacao) => (
        <Link to={`/${acomodacao._id}`} key={acomodacao._id}>
          <AcomodacaoCard acomodacao={acomodacao} />
        </Link>
      ))}
    </section>
  );
}
