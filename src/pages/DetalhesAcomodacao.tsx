import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Acomodacao } from "../util/interfaces";

import styles from "../styles/pages/detalhesAcomodacao.module.css";

export default function DetalhesAcomodacao() {

  const urlParams: { accommodationId: string | undefined } = useParams();
  const [acomodacao, setAcomodacao] = useState<Acomodacao | null>();
  const [dataInicio, setDataInicio] = useState<Date|null>(null);
  const [dataTermino, setDataTermino] = useState<Date|null>(null);

  const [textoReserva, setTextoReserva] = useState<String>('')

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
          setTextoReserva('O apartamento está disponível no período de seu interesse!');
          //alert('reserva ok')
          {/* 
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
          */}
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setTextoReserva('Ops! Preencha todos os campos para verificarmos a disponibilidade do imóvel.');
        } else if (error.response.status === 502) {
          setTextoReserva(error.response.data);
        } else {
          setTextoReserva('Ocorreu algum erro durante a validação. Tente novamente!');
        } 
      });
  }

  return (
    <section className={styles.container}>
      {acomodacao != null ? (
        <>
          <div className={styles.informacoes}>
            <img
              className={styles.img}
              src={acomodacao.imagem}
              alt={acomodacao?.descricao}
            />
            <h1>Informações sobre o local: </h1>
            <p>Tipo de acomodação: {acomodacao.categoria}</p>
            <p>Até {acomodacao.numeroDePessoas} pessoas</p>
            <p>
              Comodidades: {acomodacao.comodidades.banheiros} banheiro(s),{" "}
              {acomodacao.comodidades.quartos} quarto(s)
            </p>
            <p>
              Regras: {acomodacao.regras.animais ? "permitido" : "proibido"}{" "}
              animais, {acomodacao.regras.fumar ? "permitido" : "proibido"}{" "}
              fumar
            </p>
            <p>Valor: R$ {acomodacao.preco}</p>
          </div>
          <div className={styles.reservar}>
            <h1>{acomodacao.nome}</h1>
            <h2>{acomodacao.descricao}</h2>
            <div className={styles.datas}>
              <div className={styles.dataArea}>
                <p>
                  <label htmlFor="check-in">Data de check-in:</label>
                </p>
                <input
                  className={styles.datePicker}
                  type="date"
                  id="check-in"
                  name="check-in"
                  onChange={ (event) => setDataInicio(new Date(event.target.value))}
                  placeholder="Check In"
                />
              </div>
              <div className={styles.dataArea}>
                <p>
                  <label htmlFor="check-in">Data de check-out:</label>
                </p>

                <input
                  className={styles.datePicker}
                  type="date"
                  id="check-out"
                  name="check-out"
                  onChange={ (event) => setDataTermino(new Date(event.target.value)) }
                  placeholder="Check Out"
                />
              </div>
            </div>

            <button onClick={reservar} className={styles.buttonReservar}>
              Verificar disponibilidade
            </button>

            { textoReserva !== '' ? (
              <p> {textoReserva} </p> 
            ) : <></>}
            
          </div>
        </>
      ) : (
        <h1>Ops! Algo de errado aconteceu.</h1>
      )}
    </section>
  );
}
