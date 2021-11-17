import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import settingsIcon from "../images/settings.png";

import styles from "../styles/components/selecaoFiltro.module.css";

export default function SelecaoFiltro() {
    const { objetoBuscaFiltro, setObjetoBuscaFiltro } = useContext(AppContext);

    const [menuVisivel, setMenuVisivel] = useState(false);

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={`${styles.activeButton} ${menuVisivel && styles.activeButtonOn}`}
                onClick={() => {
                    setMenuVisivel(!menuVisivel);
                    // resetar informações da busca, afinal, o usuário não as está vendo mais
                    setObjetoBuscaFiltro({
                        local: { cidade: "" },
                        "check-in": "",
                        "check-out": "",
                        capacidade: "",
                    });
                }}
            >
                ... ou faça uma busca personalizada!
                <img src={settingsIcon} alt="Filtre sua busca." />
            </button>

            <div className={`${styles.dropdownFilter} ${!menuVisivel && styles.dropdownFilterOff}`}>
                <label htmlFor="cidade-estado">Local</label>
                <input
                    type="text"
                    id="cidade-estado"
                    name="cidade-estado"
                    placeholder="Cidade ou estado"
                    value={objetoBuscaFiltro.local.cidade}
                    onChange={(event) =>
                        setObjetoBuscaFiltro({ ...objetoBuscaFiltro, local: { cidade: event.target.value } })
                    }
                />

                <label htmlFor="check-in">Check In</label>
                <input
                    type="date"
                    id="check-in"
                    name="check-in"
                    placeholder="Check In"
                    value={objetoBuscaFiltro["check-in"]}
                    onChange={(event) => setObjetoBuscaFiltro({ ...objetoBuscaFiltro, "check-in": event.target.value })}
                />

                <label htmlFor="check-out">Check Out</label>
                <input
                    type="date"
                    id="check-out"
                    name="check-out"
                    value={objetoBuscaFiltro["check-out"]}
                    onChange={(event) =>
                        setObjetoBuscaFiltro({ ...objetoBuscaFiltro, "check-out": event.target.value })
                    }
                />

                <label htmlFor="hospedes">Hospedes</label>
                <input
                    type="number"
                    id="hospedes"
                    name="hospedes"
                    value={objetoBuscaFiltro.capacidade}
                    onChange={(event) => setObjetoBuscaFiltro({ ...objetoBuscaFiltro, capacidade: event.target.value })}
                />
            </div>
        </div>
    );
}
