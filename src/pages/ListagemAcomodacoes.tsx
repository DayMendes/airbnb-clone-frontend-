import axios, { AxiosResponse } from "axios";
import qs from "qs";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Acomodacao } from "../util/interfaces";
import { AppContext } from "../AppContext";

import AcomodacaoCard from "../components/AcomodacaoCard";

import styles from "../styles/pages/listagemAcomodacoes.module.css";

export default function ListagemAcomodacoes() {
    const { stringBusca, objetoBuscaFiltro, deveBuscar, setDeveBuscar } = useContext(AppContext);

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

        if (deveBuscar) {
            getAcomodacoes().then((acomodacoes) => {
                if (acomodacoes) {
                    setAcomodacoes(acomodacoes.data);
                }
            });
            setDeveBuscar(false);
        }
    }, [deveBuscar]);

    return (
        <section className={styles.cardsWrapper}>
            {acomodacoes.map((acomodacao) => (
                <Link to={`/${acomodacao._id}`}>
                    <AcomodacaoCard key={acomodacao._id} acomodacao={acomodacao} />
                </Link>
            ))}
        </section>
    );
}
