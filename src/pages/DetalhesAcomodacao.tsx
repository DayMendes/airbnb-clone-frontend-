import axios, { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Acomodacao } from "../util/interfaces";

import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

import styles from "../styles/pages/detalhesAcomodacao.module.css";
import { AppContext } from "../AppContext";


export default function DetalhesAcomodacao() {

  let navigate = useNavigate();

  const { setMostrarCaixaDeBusca } = useContext(AppContext);

  const urlParams: { accommodationId: string | undefined } = useParams();
  const [acomodacao, setAcomodacao] = useState<Acomodacao | null>();
  const [dataInicio, setDataInicio] = useState<Date|null>();
  const [dataTermino, setDataTermino] = useState<Date|null>();

  const [requisicaoFeita, setRequisicaoFeita] = useState<boolean>(false);
  const [textoReserva, setTextoReserva] = useState<String>("");
  const [disponibilidade, setDisponibilidade] = useState<boolean>(false);

  useEffect(() => setMostrarCaixaDeBusca(false), [setMostrarCaixaDeBusca]); // garantir que a caixa de busca não será mostrada

  useEffect(() => {
    let id = urlParams.accommodationId;
    const apiUrl = process.env.REACT_APP_API_URL;

    async function getAcomodacoes() {
      let response: AxiosResponse<Acomodacao>;
      try {
        response = await axios.get<Acomodacao>(`${apiUrl}/acomodacoes/${id}`);
        setRequisicaoFeita(true);
        return response;
      } catch (err) {
        setRequisicaoFeita(true);
        setAcomodacao(null);
      }
    }

    getAcomodacoes().then((acomodacao) => {
      if (acomodacao) {
        setAcomodacao(acomodacao.data);
      }
    });
  }, [urlParams]);

  async function verificar() {
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
          setTextoReserva("O imóvel está disponível no período de seu interesse!");
          setDisponibilidade(true);
        }
      })
      .catch((error) => {
        setDisponibilidade(false);
        if (error.response.status === 400) {
          setTextoReserva("Ops! Preencha todos os campos para verificarmos a disponibilidade do imóvel.");
        } else if (error.response.status === 502) {
          setTextoReserva(error.response.data);
        } else {
          setTextoReserva("Ocorreu algum erro durante a validação. Tente novamente!");
        }
      });
  }

  async function reservar() {
    let id = urlParams.accommodationId;
    const apiUrl = process.env.REACT_APP_API_URL;

    axios
      .post(`${apiUrl}/reservas`, {
        idAcomodacao: id,
        dataDeInicio: dataInicio,
        dataDeTermino: dataTermino,
      })
      .then((response) => {
        alert("Reserva realizada com sucesso!");
        navigate("/reservado");
      })
      .catch((error) => {
        if (error.response.status===401) {
          navigate("/login");
        } else {
          alert("Ocorreu um erro ao realizar sua reserva!");
        }
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

            {!disponibilidade ? (
              <>
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
                      onChange={(event) => setDataInicio(new Date(event.target.value))}
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
                      onChange={(event) => setDataTermino(new Date(event.target.value))}
                      placeholder="Check Out"
                    />
                  </div>
                </div>

                <button onClick={verificar} className={styles.buttonReservar}>
                  Verificar disponibilidade
                </button>
              </>
            ) : ( <> </> )}

            {textoReserva !== "" ? (
              <>
                <p className={styles.textoAviso}>{textoReserva}</p>

                {disponibilidade ? (
                  <div className={styles.informacoesReserva}>
                    <p> Reserva de {dataInicio?.toLocaleDateString()} até {dataTermino?.toLocaleDateString()}</p>
                    <p> Valor total: R$ {((dataTermino!.getTime() - dataInicio!.getTime()) / (24 * 60 * 60 * 1000)) * acomodacao!.preco}</p>
                    <button onClick={reservar} className={styles.buttonReservar}>
                      Realizar reserva
                    </button>
                    <a
                      className={styles.voltar}
                      onClick={() => {
                        setDisponibilidade(false);
                        setTextoReserva("");
                        setDataInicio(null);
                        setDataTermino(null);
                      }}
                    >
                      Selecionar outra data
                    </a>
                  </div>
                ) : ( <></> )}
              </>
            ) : ( <></> )}
          </div>
        </>
      ) : (
        <>
        { requisicaoFeita ? <h1>Ops! Algo de errado aconteceu.</h1> : <Spinner /> }
        </>
      )}
    </section>
  );
}
