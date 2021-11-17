import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/cadastroAcomodacoes.module.css";
import { Acomodacao } from "../util/interfaces";

export default function CadastroAcomodacoes() {
  const [acomodacoes, setAcomodacoes] = useState<Acomodacao>({
    local: {} as Acomodacao["local"],
    comodidades: {} as Acomodacao["comodidades"],
    regras: {} as Acomodacao["regras"],
  } as Acomodacao);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    axios.post(`${apiUrl}/acomodacoes/criar`, acomodacoes).catch((err) => {
      alert(err);
    });
  }
  return (
    <>
      <form className={styles.CadastroAcomodacoes} onSubmit={handleSubmit}>
        <label htmlFor="nome">Dê um nome para sua acomodação</label>
        <input
          type="text"
          id="descnomericao"
          placeholder="Lugar Tranquilo com área verde"
          value={acomodacoes.nome}
          onChange={(event) =>
            setAcomodacoes({ ...acomodacoes, nome: event.target.value })
          }
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          placeholder="Descreva o que o seu espaço tem a oferecer, por ex: Piscina, churrasqueira, wifi..."
          value={acomodacoes.descricao}
          onChange={(event) =>
            setAcomodacoes({ ...acomodacoes, descricao: event.target.value })
          }
        />

        <label htmlFor="categoria">Tipo de acomodação</label>
        <select
          id="categoria"
          name="categoria"
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
        </select>

        <label id="file">Escolha a imagem</label>
        <input
          type="text"
          id="imagem"
          value={acomodacoes.imagem}
          onChange={(event) =>
            setAcomodacoes({ ...acomodacoes, imagem: event.target.value })
          }
        />

        <label htmlFor="preco">Preço</label>
        <input
          type="number"
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
            id="estados"
            name="estados"
            value={acomodacoes.local.estado}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                local: { ...acomodacoes.local, estado: event.target.value },
              })
            }
          >
            <option value="selecao">Selecione um estado</option>
            <option value="acre">AC</option>
            <option value="alagoas">AL</option>
            <option value="amapa">AP</option>
            <option value="amazonas">AM</option>
            <option value="bahia">BA</option>
            <option value="ceara">CE</option>
            <option value="espiritoSanto">ES</option>
            <option value="goias">GO</option>
            <option value="maranhao">MA</option>
            <option value="matoGrosso">MT</option>
            <option value="matoGrossoDoSul">MS</option>
            <option value="minasGerais">MG</option>
            <option value="para">PA</option>
            <option value="paraiba">PB</option>
            <option value="parana">PR</option>
            <option value="pernambuco">PE</option>
            <option value="piaui">PI</option>
            <option value="rioDeJaneiro">RJ</option>
            <option value="rioGrandeDoNorte">RN</option>
            <option value="rioGrandeDoSul">RS</option>
            <option value="rondonia">RO</option>
            <option value="roraima">RR</option>
            <option value="santaCatarina">SC</option>
            <option value="saoPaulo">SP</option>
            <option value="sergipe">SE</option>
            <option value="tocantins">TO</option>
            <option value="distritoFederal">DF</option>
          </select>

          <input
            type="text"
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
        <fieldset className={styles.grupo2}>
          <label htmlFor="quartos">Quartos</label>
          <input
            type="number"
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
          <label htmlFor="banheiros">Banheiros</label>
          <input
            type="number"
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
            id="fumar"
            value={acomodacoes.regras.fumar as unknown as number}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                regras: { ...acomodacoes.regras, fumar: !!event.target.value },
              })
            }
          />

          <label htmlFor="animais">Animais</label>
          <input
            type="checkbox"
            id="animais"
            value={acomodacoes.regras.animais as unknown as number}
            onChange={(event) =>
              setAcomodacoes({
                ...acomodacoes,
                regras: {
                  ...acomodacoes.regras,
                  animais: !!event.target.value,
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
