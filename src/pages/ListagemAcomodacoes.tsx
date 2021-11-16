import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Acomodacao } from "../util/interfaces";

import AcomodacaoCard from "../components/AcomodacaoCard";

import styles from "../styles/pages/listagemAcomodacoes.module.css";

export default function ListagemAcomodacoes() {
    const [acomodacoes, setAcomodacoes] = useState<Acomodacao[] | []>([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        async function getAcomodacoes() {
            let response: AxiosResponse<Acomodacao[]>;
            try {
                response = await axios.get<Acomodacao[]>(`${apiUrl}/acomodacoes`);
                return response;
            } catch (err) {
                setAcomodacoes([]);
            }
        }

        getAcomodacoes().then((acomodacoes) => {
            if (acomodacoes) {
                setAcomodacoes(acomodacoes.data);
            }
        });
    }, []);

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
