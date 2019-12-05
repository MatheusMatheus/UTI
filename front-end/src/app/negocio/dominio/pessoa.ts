import { Contato } from './contato';
import { Endereco } from './endereco';
import { EstadoPaciente } from './estadoPaciente';

export class Pessoa {

  constructor(
    public nome: string,
    public cpf: string,
    public contato: Contato,
    public endereco: Endereco
  ) {

  }



}
