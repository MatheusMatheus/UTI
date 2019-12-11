import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MonitoramentoService } from 'src/app/negocio/service/monitoramento.service';
import { TerminalService } from 'src/app/negocio/service/terminal.service';
import { MatDialog } from '@angular/material';
import { CaixaDialogoComponent } from '../caixa-dialogo/caixa-dialogo.component';
import { Terminal } from 'src/app/negocio/dominio/terminal';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { Paciente } from 'src/app/negocio/dominio/paciente';
import { PacienteService } from 'src/app/negocio/service/paciente.service';
import { AtributoMonitoravel } from '../atributo-monitoravel/atributo-monitoravel.component';
import { CaixaDialogoOutroTerminalComponent } from '../caixa-dialogo-outro-terminal/caixa-dialogo-outro-terminal.component';
import { RespostaPacienteMorrendo } from 'src/app/negocio/dominio/respostaPacienteMorrendo';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {
  constructor(
    private monitoraService: MonitoramentoService,
    private terminalService: TerminalService,
    private pacienteService: PacienteService,
    private dialog: MatDialog
  ) { }

  monitoramento: Monitoramento;
  monitoramentos: Monitoramento[];
  terminaisLivres: Terminal[];
  terminaisVinculados: Terminal[];
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

    this.terminaisLivres = await this.terminalService.buscaTerminaisLivres().toPromise();
    this.pacientes = await this.pacienteService.buscaPacientesNaoMonitorados().toPromise();

    this.abrirModalNovoMonitoramento();
    this.atualizaData();
  }

  novoMonitoramento() {
    this.abrirModalNovoMonitoramento();
  }

  async abrirModalNovoMonitoramento() {
    const dialogRef = this.dialog.open(CaixaDialogoComponent, {
      data: { terminais: this.terminaisLivres, pacientes: this.pacientes },
      width: '250px',
      disableClose: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(resultado => {
      this.monitoramento.terminal = resultado.terminalSelecionado;
      this.monitoramento.paciente = resultado.pacienteSelecionado;
    });
  }

  escolherOutroTerminal() {
      this.abrirModalOutroTerminal();
  }

  async abrirModalOutroTerminal() {
    this.terminaisVinculados = await this.terminalService.buscaTerminaisVinculados().toPromise();
    const dialogRef = this.dialog.open(CaixaDialogoOutroTerminalComponent, {
      data: { terminais: this.terminaisVinculados },
      width: '250px',
      disableClose: true,
      autoFocus: true
    });

    let resultado = await dialogRef.afterClosed().toPromise();
    if(resultado != null) {

    }
  }

  atualizaData() {
    return setInterval(() => this.dataAtual = new Date().toLocaleString('pt-BR'), 100)
  }

  async atributoAlterou(atributoMonitoravel: AtributoMonitoravel) {
    this.monitoramento.temperaturaConsultada = atributoMonitoravel.temperatura;
    this.monitoramento.pressaoConsultada = atributoMonitoravel.pressao;
    this.monitoramento.momentoConsulta = new Date().toLocaleString('pt-BR');
    
    if (this.isAvailable()) {
      let retorno = await this.monitoraService.gravaMonitoramento(this.monitoramento).toPromise();
      console.log(retorno);
    }

  }

  isAvailable() {
    return (this.monitoramento.paciente !== null && this.monitoramento.paciente.cpf !== "")
      && (this.monitoramento.terminal !== null && this.monitoramento.terminal.mac !== "");
  }
}