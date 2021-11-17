import axios from "axios";
import React, { useState, useMemo } from "react";
import styles from "../styles/cadastroAcomodacoes.module.css";
import camera from "../camera.svg";

export default function CadastroAcomodacoes() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [preco, setPreco] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [cep, setCep] = useState("");
  const [numeroDePessoas, setNumeroDePessoas] = useState("");
  const [quartos, setQuartos] = useState("");
  const [banheiros, setBanheiros] = useState("");
  const [fumar, setFumar] = useState("");
  const [animais, setAnimais] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: any) {
    event.preventDefault();

    const acomodacoes = {
      nome,
      descricao,
      categoria,
      imagem,
      preco,
      rua,
      numero,
      complemento,
      cidade,
      estado,
      pais,
      cep,
      numeroDePessoas,
      quartos,
      banheiros,
      fumar,
      animais,
    };
  }
  return (
    <>
      <form className={styles.CadastroAcomodacoes} onSubmit={handleSubmit}>
        <label htmlFor="nome">Dê um nome para sua acomodação</label>
        <input
          type="text"
          id="descnomericao"
          placeholder="Lugar Tranquilo com área verde"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          placeholder="Descreva o que o seu espaço tem a oferecer, por ex: Piscina, churrasqueira, wifi..."
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />

        <label htmlFor="categoria">Tipo de acomodação</label>
        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
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
          type="file"
          id="file"
          value={imagem}
          onChange={(event) => setImagem(event.target.value)}
        />

        <label htmlFor="preco">Preço</label>
        <input
          type="number"
          id="preco"
          placeholder="Valor cobrado por dia"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
        />

        <label htmlFor="Local">Onde fica a sua acomodação</label>
        <fieldset className={styles.grupo1}>
          <input
            type="text"
            id="cidade"
            placeholder="Rua"
            value={rua}
            onChange={(event) => setRua(event.target.value)}
          />
          <input
            type="number"
            id="numero"
            placeholder="Nº"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />

          <input
            type="text"
            id="complemento"
            placeholder="Complemento"
            value={complemento}
            onChange={(event) => setComplemento(event.target.value)}
          />

          <input
            type="text"
            id="cidade"
            placeholder="Cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />

          <select
            id="estados"
            name="estados"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
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
            value={pais}
            onChange={(event) => setPais(event.target.value)}
          />

          <input
            type="number"
            id="cep"
            placeholder="CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </fieldset>
        <label htmlFor="numeroDePessoas">Numero De Pessoas</label>
        <input
          type="number"
          id="numeroDePessoas"
          placeholder="Quantidade de Pessoas"
          value={numeroDePessoas}
          onChange={(e) => setNumeroDePessoas(e.target.value)}
        />

        <label htmlFor="comodidades">Comodidades</label>
        <fieldset className={styles.grupo2}>
          <label htmlFor="quartos">Quartos</label>
          <input
            type="number"
            id="quartos"
            placeholder="Quantidade de quartos"
            value={quartos}
            onChange={(e) => setQuartos(e.target.value)}
          />
          <label htmlFor="banheiros">Banheiros</label>
          <input
            type="number"
            id="banheiros"
            placeholder="Quantidade de banheiros"
            value={banheiros}
            onChange={(event) => setBanheiros(event.target.value)}
          />
        </fieldset>

        <label htmlFor="regras">Regras</label>
        <fieldset className={styles.regras}>
          <label htmlFor="fumar">Fumantes</label>
          <input
            type="checkbox"
            id="fumar"
            value={fumar}
            onChange={(event) => setFumar(event.target.value)}
          />

          <label htmlFor="animais">Animais</label>
          <input
            type="checkbox"
            id="animais"
            value={animais}
            onChange={(event) => setAnimais(event.target.value)}
          />
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
