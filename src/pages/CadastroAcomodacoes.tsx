import axios from "axios";
import { useContext, useEffect, useState, useMemo } from "react";
import styles from "../styles/pages/cadastroAcomodacoes.module.css";
import { Acomodacao } from "../util/interfaces";
import camera from "../images/camera.svg";
import { AppContext } from "../AppContext";

interface IBGEUFResponse {
  sigla: string;
}

export default function CadastroAcomodacoes() {
  const { setMostrarCaixaDeBusca } = useContext(AppContext);
  useEffect(() => setMostrarCaixaDeBusca(false), [setMostrarCaixaDeBusca]);
  const [acomodacoes, setAcomodacoes] = useState<Acomodacao>({
    local: {} as Acomodacao["local"],
    comodidades: {} as Acomodacao["comodidades"],
    regras: {} as Acomodacao["regras"],
  } as unknown as Acomodacao);

  const [estados, setEstados] = useState<string[]>([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [imagem, setImagem] = useState(null);
  const preview = useMemo(() => {
    return imagem ? URL.createObjectURL(imagem) : null;
  }, [imagem]);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/",
      )
      .then((response) => {
        const estadosIniciais = response.data.map((uf) => uf.sigla);

        setEstados(estadosIniciais);
      });
  }, []);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = new FormData();
    data.append("nome", acomodacoes.nome);
    data.append("descricao", acomodacoes.descricao);
    data.append("categoria", acomodacoes.categoria);
    data.append("imagem", imagem!);
    data.append("preco", JSON.stringify(acomodacoes.preco));
    data.append("local", JSON.stringify(acomodacoes["local"]));
    data.append("numeroDePessoas", JSON.stringify(acomodacoes.numeroDePessoas));
    data.append("comodidades", JSON.stringify(acomodacoes["comodidades"]));
    data.append("regras", JSON.stringify(acomodacoes["regras"]));

    axios
      .post(`${apiUrl}/acomodacoes`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Acomodação cadastrada com sucesso!");
        }
      })
      .catch((error) => {
        if (error.code === 400) {
          alert(
            "Ocorreu um erro ao cadastrar sua acomodação, Verifique as informações e tente novamente!",
          );
        }
      });
  }

  return (
    <>
      <h2 className={styles.titleForm}> Cadastre sua acomodação</h2>
      <form
        className={styles.cadastroAcomodacoes}
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label htmlFor="nome">Dê um nome para sua acomodação</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Ex: Lugar Tranquilo com área verde"
          value={acomodacoes.nome}
          onChange={(event) =>
            setAcomodacoes({ ...acomodacoes, nome: event.target.value })
          }
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          name="descricao"
          id="descricao"
          placeholder="Descreva o que o seu espaço tem a oferecer, por ex: Piscina, churrasqueira, wifi..."
          value={acomodacoes.descricao}
          onChange={(event) =>
            setAcomodacoes({ ...acomodacoes, descricao: event.target.value })
          }
        />

        <label htmlFor="categoria">Tipo de acomodação</label>
        <select
          name="categoria"
          id="categoria"
          value={acomodacoes.categoria}
          onChange={(event) =>
            setAcomodacoes({ ...acomodacoes, categoria: event.target.value })
          }
        >
          <option value="selecao">Selecione</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="pousada">Pousada</option>
          <option value="hotel">Hotel</option>
          <option value="fazenda">Fazenda</option>
          <option value="chale">Chalé</option>
        </select>

        <label htmlFor="imagem">Adicione fotos da sua acomodação</label>
        <label
          className={styles.imagem}
          style={{ backgroundImage: `url(${preview})` }}
        >
          <input
            type="file"
            onChange={(event: any) => setImagem(event.target.files[0])}
            className={imagem ? "has-imagem" : ""}
          />
          <img src={camera} alt="Select img" />
        </label>

        <label htmlFor="preco">Preço</label>
        <input
          type="number"
          name="preco"
          id="preco"
          placeholder="Valor cobrado por dia"
          value={acomodacoes.preco}
          onChange={(event) =>
            setAcomodacoes({
              ...acomodacoes,
              preco: Number.parseFloat(event.target.value),
            })
          }
        />

        <label htmlFor="Local">Onde fica a sua acomodação</label>
        <fieldset className={styles.grupo1}>
          <input
            type="text"
            name="rua"
            id="rua"
            placeholder="Rua"
            value={acomodacoes.local.rua}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: { ...acomodacoes.local, rua: event.target.value },
              })
            }
          />
          <input
            type="number"
            name="numero"
            id="numero"
            placeholder="Nº"
            value={acomodacoes.local.numero}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: {
                  ...acomodacoes.local,
                  numero: Number.parseFloat(event.target.value),
                },
              })
            }
          />

          <input
            type="text"
            name="complemento"
            id="complemento"
            placeholder="Complemento"
            value={acomodacoes.local.complemento}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: {
                  ...acomodacoes.local,
                  complemento: event.target.value,
                },
              })
            }
          />

          <input
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            value={acomodacoes.local.cidade}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: { ...acomodacoes.local, cidade: event.target.value },
              })
            }
          />

          <select
            name="estado"
            id="estado"
            value={acomodacoes.local.estado}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: { ...acomodacoes.local, estado: event.target.value },
              })
            }
          >
            <option value="selecao">Selecione um estado</option>
            {estados.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="pais"
            id="pais"
            placeholder="País"
            value={acomodacoes.local.pais}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: { ...acomodacoes.local, pais: event.target.value },
              })
            }
          />

          <input
            type="number"
            name="cep"
            id="cep"
            placeholder="CEP"
            value={acomodacoes.local.cep}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: {
                  ...acomodacoes.local,
                  cep: Number.parseFloat(event.target.value),
                },
              })
            }
          />
        </fieldset>
        <label htmlFor="numeroDePessoas">Numero De Pessoas</label>
        <input
          type="number"
          name="numeroDePessoas"
          id="numeroDePessoas"
          placeholder="Quantidade de Pessoas"
          value={acomodacoes.numeroDePessoas}
          onChange={(event) =>
            setAcomodacoes({
              ...acomodacoes,
              numeroDePessoas: Number.parseFloat(event.target.value),
            })
          }
        />

        <label htmlFor="comodidades">Comodidades</label>
        <fieldset className={styles.comodidades}>
          <label htmlFor="quartos" id="quartosLabel">
            Quartos
          </label>
          <span className={styles.espaco1}></span>
          <input
            type="number"
            name="quartos"
            id="quartos"
            placeholder="Quantidade de quartos"
            value={acomodacoes.comodidades.quartos}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                comodidades: {
                  ...acomodacoes.comodidades,
                  quartos: Number.parseFloat(event.target.value),
                },
              })
            }
          />
          <span className={styles.espaco2}></span>
          <label htmlFor="banheiros" id="banheirosLabel">
            Banheiros
          </label>
          <span className={styles.espaco1}></span>
          <input
            type="number"
            name="banheiros"
            id="banheiros"
            placeholder="Quantidade de banheiros"
            value={acomodacoes.comodidades.banheiros}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                comodidades: {
                  ...acomodacoes.comodidades,
                  banheiros: Number.parseFloat(event.target.value),
                },
              })
            }
          />
        </fieldset>

        <label htmlFor="regras">Regras</label>
        <fieldset className={styles.regras}>
          <label htmlFor="fumar">Fumantes</label>
          <input
            type="checkbox"
            name="fumar"
            id="fumar"
            value={acomodacoes.regras.fumar as unknown as number}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                regras: {
                  ...acomodacoes.regras,
                  fumar: !!event.target.checked,
                },
              })
            }
          />

          <label htmlFor="animais">Animais</label>
          <input
            type="checkbox"
            name="animais"
            id="animais"
            value={acomodacoes.regras.animais as unknown as number}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                regras: {
                  ...acomodacoes.regras,
                  animais: !!event.target.checked,
                },
              })
            }
          />
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
