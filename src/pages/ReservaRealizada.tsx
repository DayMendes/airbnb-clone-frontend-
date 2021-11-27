import { Link } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../AppContext";


export default function ReservaRealizada() {
    
    const { reservaRealizada, setReservaRealizada } = useContext(AppContext);
    return (
        <>
            { reservaRealizada ? (
                <>
                <h1>Reserva realizada com sucesso!</h1>
                <p ><Link to="/">Voltar para tela inicial</Link></p>
                </>
            ) : <> </>
            
        }
        </>
    )
}