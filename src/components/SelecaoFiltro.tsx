import { useState } from "react";
import settingsIcon from "../images/settings.png";

import styles from "../styles/components/selecaoFiltro.module.css";

export default function SelecaoFiltro() {
    const [menuVisivel, setMenuVisivel] = useState(false);

    return (
        <div className={styles.container}>
            <button
                className={`${styles.activeButton} ${menuVisivel && styles.activeButtonOn}`}
                onClick={() => setMenuVisivel(!menuVisivel)}
            >
                ... ou faça uma busca personalizada!
                <img src={settingsIcon} alt="Filtre sua busca." />
            </button>

            <div className={`${styles.dropdownFilter} ${!menuVisivel && styles.dropdownFilterOff}`}>
                <label htmlFor="cidade-estado">Local</label>
                <input type="text" id="cidade-estado" name="cidade-estado" placeholder="Cidade ou estado" />

                <label htmlFor="check-in">Check In</label>
                <input type="date" id="check-in" name="check-in" placeholder="Check In" />

                <label htmlFor="check-out">Check Out</label>
                <input type="date" id="check-out" name="check-out" />

                <label htmlFor="hospedes">Hospedes</label>
                <input type="number" id="hospedes" name="hospedes" />
            </div>
        </div>
    );
}
