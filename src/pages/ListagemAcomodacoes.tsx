import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Acomodacao } from "../util/interfaces";

import AcomodacaoCard from "../components/AcomodacaoCard";

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
                console.log(acomodacoes.data);
            }
        });
    }, []);

    return (
        <>
            <h1>Acomodações</h1>
            {acomodacoes.map((acomodacao) => (
                <AcomodacaoCard key={acomodacao._id} acomodacao={acomodacao} />
            ))}
        </>
    );
}
