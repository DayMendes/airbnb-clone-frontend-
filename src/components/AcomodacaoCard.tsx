import { Acomodacao } from "../util/interfaces";
import styles from "../styles/components/AcomodacaoCard.module.css";

interface AcomodacaoProps {
  acomodacao: Acomodacao;
}

export default function AcomdacaoCard({ acomodacao }: AcomodacaoProps) {
  return (
    <section className={styles.acomodacaoCard}>
      <h2>{acomodacao.nome}</h2>
      <h3>{acomodacao.descricao}</h3>

      <span>
        {acomodacao.local.cidade} | {acomodacao.local.estado}
      </span>

      <img src={acomodacao.imagem} alt={acomodacao.descricao} />
    </section>
  );
}
