import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Acomodacao } from "../util/interfaces";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt-BR";

import "react-datepicker/dist/react-datepicker.css";

import styles from "../styles/pages/detalhesAcomodacao.module.css";

export default function DetalhesAcomodacao() {
  registerLocale("pt-BR", pt);

  const urlParams: { accommodationId: string | undefined } = useParams();
  const [acomodacao, setAcomodacao] = useState<Acomodacao | null>();
  const [dataInicio, setDataInicio] = useState<Date>(new Date());
  const [dataTermino, setDataTermino] = useState<Date>(new Date());

  useEffect(() => {
    let id = urlParams.accommodationId;
    const apiUrl = process.env.REACT_APP_API_URL;

    async function getAcomodacoes() {
      let response: AxiosResponse<Acomodacao>;
      try {
        response = await axios.get<Acomodacao>(`${apiUrl}/acomodacoes/${id}`);
        return response;
      } catch (err) {
        setAcomodacao(null);
      }
    }

    getAcomodacoes().then((acomodacao) => {
      if (acomodacao) {
        setAcomodacao(acomodacao.data);
      }
    });
  }, [urlParams]);

  async function reservar() {
    let id = urlParams.accommodationId;
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .post(`${apiUrl}/reservas/verificar`, {
        idAcomodacao: id,
        dataDeInicio: dataInicio,
        dataDeTermino: dataTermino,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .post(`${apiUrl}/reservas`, {
              idLocador: 1,
              idAcomodacao: id,
              dataDeInicio: dataInicio,
              dataDeTermino: dataTermino,
            })
            .then((response) => {
              alert("Reserva realizada com sucesso!");
            })
            .catch((error) => {
              alert("Ocorreu um erro ao realizar sua reserva!");
            });
        }
      })
      .catch((error) => {
        alert("A acomodação já está locada na data solicitada.");
      });
  }

  return (
    <section className={styles.container}>
      {acomodacao != null ? (
        <>
          <div className={styles.informacoes}>
            <img className={styles.img} src={acomodacao.imagem} alt={acomodacao?.descricao} />
            <h1>Informações sobre o local: </h1>
            <p>Tipo de acomodação: {acomodacao.categoria}</p>
            <p>Até {acomodacao.numeroDePessoas} pessoas</p>
            <p>
              Comodidades: {acomodacao.comodidades.banheiros} banheiro(s), {acomodacao.comodidades.quartos} quarto(s)
            </p>
            <p>
              Regras: {acomodacao.regras.animais ? "permitido" : "proibido"} animais,{" "}
              {acomodacao.regras.fumar ? "permitido" : "proibido"} fumar
            </p>
            <p>Valor: R$ {acomodacao.preco}</p>
          </div>
          <div className={styles.reservar}>
            <h1>{acomodacao.nome}</h1>
            <h2>{acomodacao.descricao}</h2>
            <div className={styles.datas}>
              <div className={styles.dataArea}>
                <p>Data de início da locação:</p>
                <DatePicker
                  className={styles.datePicker}
                  locale="pt-BR"
                  selected={dataInicio}
                  onChange={(date) => setDataInicio(date as Date)}
                />
              </div>
              <div className={styles.dataArea}>
                <p>Data de término da locação:</p>
                <DatePicker
                  className={styles.datePicker}
                  locale="pt-BR"
                  selected={dataTermino}
                  onChange={(date) => setDataTermino(date as Date)}
                />
              </div>
            </div>

            <button onClick={reservar} className={styles.buttonReservar}>
              Realizar reserva
            </button>
          </div>
        </>
      ) : (
        <h1>Ops! Algo de errado aconteceu.</h1>
      )}
    </section>
  );
}
