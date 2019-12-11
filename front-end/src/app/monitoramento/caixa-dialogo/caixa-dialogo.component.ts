import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Terminal } from 'src/app/negocio/dominio/terminal';
import { Paciente } from 'src/app/negocio/dominio/paciente';

@Component({
  selector: 'app-caixa-dialogo',
  templateUrl: './caixa-dialogo.component.html',
  styleUrls: ['./caixa-dialogo.component.css']
})
export class CaixaDialogoComponent implements OnInit {

  terminalPacienteSelecionados: TerminalPacienteSelecionados;

  constructor(
    public dialogRef: MatDialogRef<CaixaDialogoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {terminais, pacientes},
  ) { }

  ngOnInit() {
    this.terminalPacienteSelecionados = {
      pacienteSelecionado: Paciente.criaPaciente(),
      terminalSelecionado: Terminal.criaTerminal()
    }
  }

  isTerminaisAvailable() {
    return this.data.terminais !== null && this.data.terminais.length > 0;
  }

  isPacientesAvailable() {
    return this.data.pacientes !== null && this.data.pacientes.length > 0;
  }
}

export interface TerminalPacienteSelecionados {
  terminalSelecionado: Terminal;
  pacienteSelecionado: Paciente;
}