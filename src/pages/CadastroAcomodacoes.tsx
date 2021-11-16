import React, {useState} from "react";
import styles from "../styles/cadastroAcomodacoes.module.css";


export default function CadastroAcomodacoes() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [local, setLocal] = useState('');
    const [numeroDePessoas, setNumeroDePessoas] = useState('');
    const [comodidades, setComodidades] = useState('');
    const [regras, setRegras] = useState('');

    function handleSubmit(){
        

    }
    return (
        <>
            <form className={styles.CadastroAcomodacoes}onSubmit={handleSubmit}>
            <label htmlFor="nome">Dê um nome para sua acomodação</label>
                    <input 
                    type="text" 
                    id="descnomericao" 
                    placeholder="Lugar Tranquilo com área verde"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                    />

                <label htmlFor="descricao">Descrição</label>
                    <textarea
                    id="descricao" 
                    placeholder="Descreva o que o seu espaço tem a oferecer, por ex: Piscina, churrasqueira, wifi..."
                    value={descricao}
                    onChange={event => setDescricao(event.target.value)}
                    />

                    <label htmlFor="categoria">Tipo de acomodação</label>
                    <select 
                    id="categoria" 
                    name="categoria"
                    value={categoria}
                    onChange={event => setCategoria(event.target.value)}
                    >
                    <option value="selecao">Selecione</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="pousada">Pousada</option>
                    <option value="hotel">Hotel</option>
                    <option value="fazenda">Fazenda</option>
                    </select>

                    <label id="thumbnail"></label>
                    <input type="file" />
                    <img src={''} alt="Selecionar imagem" />

                    <label htmlFor="preco">Preço</label>
                    <input 
                    type="text"
                     id="preco" 
                     placeholder= "Valor cobrado por dia"
                     value={preco}
                    onChange={event => setPreco(event.target.value)}
                    />
                   
                    <label htmlFor="Local">Endereço</label>
                    <fieldset className={styles.grupo1}>
                    <input 
                    type="text" 
                    id="rua"
                    placeholder="Rua"

                    />
                    <input 
                    type="number" 
                    id="numero"
                    placeholder="Número"
                    />

                    <input 
                    type="text" 
                    id="complemento"
                    placeholder="Complemento"
                    />

                    <input 
                    type="text" 
                    id="cidade"
                    placeholder="Cidade"
                    />
                    
                    <select 
                    id="estados" 
                    name="estados"
                    >

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
                    />

                    <input 
                    type="number" 
                    id="cep"
                    placeholder="CEP"
                    />

                    </fieldset>

                    <label htmlFor="numeroDePessoas">Numero De Pessoas</label>
                    <input 
                    type="number" 
                    id="numeroDePessoas"
                    placeholder="Quantidade de Pessoas"
                    value={numeroDePessoas}
                    onChange={event => setNumeroDePessoas(event.target.value)}
                    />



                    <label htmlFor="comodidades">Comodidades</label>
                    <fieldset className={styles.grupo2}>
                    <label htmlFor="quartos">Quartos</label>
                    <input 
                    type="number"
                    id="quartos"
                    placeholder="Quantidade de quartos"
                     />
                    <label 
                    htmlFor="banheiros">Banheiros</label>
                    <input 
                    type="number"
                    id="banheiros" 
                    placeholder="Quantidade de banheiros"
                    />
                    </fieldset>
                    
                    <label htmlFor="regras">Regras</label>
                    <fieldset className={styles.regras}>
                   <label htmlFor="fumar">Fumantes</label>
                    <input
                    type="checkbox"
                    id="fumar" 
                    />
                   
                    <label htmlFor="animais">Animais</label>
                    <input 
                    type="checkbox"
                    id="animais" 
                    /> 
                   
                   </fieldset>
                    <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}
