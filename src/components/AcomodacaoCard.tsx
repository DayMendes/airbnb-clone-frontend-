import { Acomodacao } from "../util/interfaces";
import styles from "../styles/components/AcomodacaCard.module.css";

interface AcomodacaoProps {
    acomodacao: Acomodacao;
}

export default function AcomdacaoCard({ acomodacao }: AcomodacaoProps) {
    return (
        <section className={styles.acomodacaoCard}>
            <h2>{acomodacao.nome}</h2>
            <h3>{acomodacao.descricao}</h3>

            {/* <span>{acomodacao.local}</span> */}
        </section>
    );
}
