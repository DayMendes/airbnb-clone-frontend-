export interface Acomodacao {
  _id: string;
  nome: string;
  idLocador: string;
  descricao: string;
  categoria: string;
  imagem_url: string;
  imagem: string;
  preco: number;
  local: {
    rua: string;
    numero: number;
    complemento: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: number;
  };
  numeroDePessoas: number;
  comodidades: {
    quartos: number;
    banheiros: number;
  };
  regras: {
    fumar: boolean;
    animais: boolean;
  };
}
