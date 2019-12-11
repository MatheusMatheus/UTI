import { Component, OnInit } from '@angular/core';
import { Pressao } from '../../negocio/dominio/pressao';
import { EstadoPaciente } from '../../negocio/dominio/estadoPaciente';
import { Endereco } from '../../negocio/dominio/endereco';
import { Contato } from '../../negocio/dominio/contato';
import { Paciente } from '../../negocio/dominio/paciente';
import { PacienteService } from 'src/app/negocio/service/paciente.service';
import { TerminalService } from 'src/app/negocio/service/terminal.service';
import { MatDialog } from '@angular/material';
import { CaixaDialogoComponent } from '../caixa-dialogo/caixa-dialogo.component';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  paciente: Paciente;
  pacientes: Paciente[];
  panelOpenState = false;

  constructor(
    public pacienteService: PacienteService,
    public terminalService: TerminalService,
    private dialog: MatDialog
  ) {
    this.paciente = new Paciente("", "", this.getContato(), this.getEndereco(), this.getEstadoPaciente());
  }

  private getContato(): Contato {
    return new Contato("", "", "")
  }

  private getEndereco(): Endereco {
    return new Endereco("", "", "")
  }

  private getEstadoPaciente(): EstadoPaciente {
    return new EstadoPaciente(0, 0, 0, this.getPressao(), this.getPressao(), this.getPressao())
  }

  private getPressao(): Pressao {
    return new Pressao(0, 0)
  }

  async cadastrar() {
    let resultadoCadastro = await this.pacienteService.cadastrar(this.paciente).toPromise();
    if (resultadoCadastro != null) {
      const dialogRef = this.dialog.open(CaixaDialogoComponent, {
        data: { resultadoCadastro },
        width: '400px'
      });

      await dialogRef.afterClosed().toPromise();
      this.paciente = Paciente.criaPaciente();
    }

  }

  async ngOnInit() {

  }

  async buscaPacientes() {
    this.pacientes = await this.pacienteService.buscaTodos().toPromise();
  }
}
