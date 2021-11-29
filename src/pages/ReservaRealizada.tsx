import { Link, useSearchParams } from "react-router-dom";
import styles from "../styles/pages/reservaRealizada.module.css";

export default function ReservaRealizada() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("referer") || "";

  return (
    <>
      {param === "ok" ? (
        <div className={styles.div}>
          <h1 className={styles.titulo}>Reserva realizada com sucesso!</h1>
          <p className={styles.link}>
            <Link to="/">Voltar para tela inicial</Link>
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
