import { Contato } from './contato';
import { Endereco } from './endereco';
import { EstadoPaciente } from './estadoPaciente';
import { Pessoa } from './pessoa';


export class Paciente extends Pessoa {

  constructor(
    public nome: string,
    public cpf: string,
    public contato: Contato,
    public endereco: Endereco,
    public estadoPaciente: EstadoPaciente
  ) {
    super(nome, cpf, contato, endereco)
  }



}
