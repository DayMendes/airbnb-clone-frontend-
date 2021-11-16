import styles from "../styles/components/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Aplicação desenvolvida como desafio final do treinamento da{" "}
                <a href="https://www.dbserver.com.br/">DB Server</a>.
            </p>
            <p>Esta aplicação foi desenvolvida em conjunto por:</p>
            <p className={styles.autores}>
                <a href="https://github.com/arthurvergacas">Arthur Vergaças</a>,{" "}
                <a href="https://github.com/DayMendes">Dayane Mendes</a> e{" "}
                <a href="https://github.com/roazambuja">Roberta Azambuja</a>.
            </p>
        </footer>
    );
}
