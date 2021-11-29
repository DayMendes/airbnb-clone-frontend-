import { Link, useSearchParams } from "react-router-dom";

export default function ReservaRealizada() {

    const [searchParams, setSearchParams] = useSearchParams();
    const param = (searchParams.get('referer') || '');

  return (
        <>
        { param === 'ok' ? (
            <>
            <h1>Reserva realizada com sucesso!</h1>
            <p>
            <Link to="/">Voltar para tela inicial</Link>
            </p>
            </>
        ) : <></>}
      </>
  );
}
