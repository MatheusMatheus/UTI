import { Component, OnInit, OnChanges, SimpleChanges, Output } from '@angular/core';
import { MonitoramentoService } from 'src/app/negocio/service/monitoramento.service';
import { TerminalService } from 'src/app/negocio/service/terminal.service';
import { MatDialog } from '@angular/material';
import { CaixaDialogoComponent } from '../caixa-dialogo/caixa-dialogo.component';
import { Terminal, StatusTerminal } from 'src/app/negocio/dominio/terminal';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { Paciente } from 'src/app/negocio/dominio/paciente';
import { PacienteService } from 'src/app/negocio/service/paciente.service';
import { Pressao } from 'src/app/negocio/dominio/pressao';
import { AtributoMonitoravel } from '../atributo-monitoravel/atributo-monitoravel.component';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit, OnChanges {
  constructor(
    private monitoraService: MonitoramentoService,
    private terminalSerice: TerminalService,
    private pacienteService: PacienteService,
    private dialog: MatDialog
  ) { }

  monitoramento: Monitoramento;
  terminais: Terminal[];
  pacientes: Paciente[];
  dataAtual: string;

  async ngOnInit() {
    this.monitoramento = {
      pressaoConsultada: null,
      temperaturaConsultada: null,
      momentoConsulta: new Date().toLocaleString('pt-BR'),
      terminal: null,
      paciente: null,
    }

    this.terminais = await this.terminalSerice.buscaTerminaisLivres().toPromise();
    this.pacientes = await this.pacienteService.buscaPacientesNaoMonitorados().toPromise();

    const dialogRef = this.dialog.open(CaixaDialogoComponent, {
      data: { terminais: this.terminais, pacientes: this.pacientes },
      width: '250px',
      disableClose: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(resultado => {
      this.monitoramento.terminal = resultado.terminalSelecionado;
      this.monitoramento.paciente = resultado.pacienteSelecionado;
    });
    this.atualizaData();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  atualizaData() {
    return setInterval(() => this.dataAtual = new Date().toLocaleString('pt-BR'), 100)
  }

  async atributoAlterou(atributoMonitoravel: AtributoMonitoravel) {
    this.monitoramento.temperaturaConsultada = atributoMonitoravel.temperatura;
    this.monitoramento.pressaoConsultada = atributoMonitoravel.pressao;
    this.monitoramento.momentoConsulta = new Date().toLocaleString('pt-BR');
    if (this.monitoramento.terminal !== null && this.monitoramento.paciente !== null) {
      await this.monitoraService.gravaMonitoramento(this.monitoramento).toPromise();
    }

  }
}