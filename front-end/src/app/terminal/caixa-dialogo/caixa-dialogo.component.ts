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

  terminal: Terminal;
  constructor(
    public dialogRef: MatDialogRef<CaixaDialogoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {terminal},
  ) { }

  ngOnInit() {
    this.terminal = this.data.terminal;
  }
}

