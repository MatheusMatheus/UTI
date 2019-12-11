import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Paciente } from 'src/app/negocio/dominio/paciente';

@Component({
  selector: 'app-caixa-dialogo',
  templateUrl: './caixa-dialogo.component.html',
  styleUrls: ['./caixa-dialogo.component.css']
})
export class CaixaDialogoComponent implements OnInit {

  paciente: Paciente;
  constructor(
    public dialogRef: MatDialogRef<CaixaDialogoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {paciente},
  ) { }

  ngOnInit() {
    this.paciente = this.data.paciente;
  }
}

