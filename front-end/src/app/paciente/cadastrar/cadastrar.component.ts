import { Component, OnInit } from '@angular/core';
import { Pressao } from '../../negocio/dominio/pressao';
import { EstadoPaciente } from '../../negocio/dominio/estadoPaciente';
import { Endereco } from '../../negocio/dominio/endereco';
import { Contato } from '../../negocio/dominio/contato';
import { Paciente } from '../../negocio/dominio/paciente';
import { PacienteService } from 'src/app/negocio/service/paciente.service';
import { Terminal } from 'src/app/negocio/dominio/terminal';
import { TerminalService } from 'src/app/negocio/service/terminal.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  paciente: Paciente;
  terminais: Terminal[];
  constructor(
    public pacienteService: PacienteService,
    public terminalService: TerminalService
  ) {
    this.paciente = new Paciente("", "", this.getContato(), this.getEndereco(), this.getEstadoPaciente());
   }

  private getContato():Contato{
    return new Contato("", "", "")
  }

  private getEndereco():Endereco{
    return new Endereco("", "", "")
  }

  private getEstadoPaciente():EstadoPaciente{
    return new EstadoPaciente(0, 0, 0, this.getPressao(), this.getPressao(), this.getPressao())
  }

  private getPressao():Pressao{
    return new Pressao(0, 0)
  }

  async cadastrar() {
    await this.pacienteService.cadastrar(this.paciente).toPromise();
  }

  async buscaTerminais() {
    await this.terminalService.buscaTodos();
  }

  ngOnInit() {
  }

}
