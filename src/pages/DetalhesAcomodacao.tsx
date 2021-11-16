import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetalhesAcomodacao() {
    const urlParams: { accommodationId: string | undefined } = useParams();

    const apiUrl = process.env.REACT_APP_API_URL;

    return <h1>Detalhes Acomodacao</h1>;
}
