import { Contato } from './contato';
import { Endereco } from './endereco';
import { EstadoPaciente } from './estadoPaciente';
import { Pessoa } from './pessoa';
import { Pressao } from './pressao';

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

  public static criaPaciente() : Paciente {
    return new Paciente("", "", Paciente.getContato(), Paciente.getEndereco(), Paciente.getEstadoPaciente());
  }

  private static getContato():Contato{
    return new Contato("", "", "")
  }

  private static getEndereco():Endereco{
    return new Endereco("", "", "")
  }

  private static getEstadoPaciente():EstadoPaciente{
    return new EstadoPaciente(0, 0, 0, this.getPressao(), this.getPressao(), this.getPressao())
  }

  private static getPressao():Pressao{
    return new Pressao(0, 0)
  }



}
