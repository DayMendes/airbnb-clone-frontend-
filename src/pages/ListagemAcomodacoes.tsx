import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Acomodacao } from "../util/interfaces";
import { AppContext } from "../AppContext";

import AcomodacaoCard from "../components/AcomodacaoCard";

import styles from "../styles/pages/listagemAcomodacoes.module.css";

export default function ListagemAcomodacoes() {
    const { stringBusca } = useContext(AppContext);

    const [acomodacoes, setAcomodacoes] = useState<Acomodacao[] | []>([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        async function getAcomodacoes(generalParameter = "") {
            let response: AxiosResponse<Acomodacao[]>;
            try {
                const queryParams = `?general=${generalParameter}`;
                response = await axios.get<Acomodacao[]>(`${apiUrl}/acomodacoes${queryParams}`);
                return response;
            } catch (err) {
                setAcomodacoes([]);
            }
        }

        getAcomodacoes(stringBusca).then((acomodacoes) => {
            if (acomodacoes) {
                setAcomodacoes(acomodacoes.data);
            }
        });
    }, [stringBusca]);

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
