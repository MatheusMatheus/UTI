import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Terminal } from 'src/app/negocio/dominio/terminal';

@Component({
  selector: 'app-caixa-dialogo',
  templateUrl: './caixa-dialogo.component.html',
  styleUrls: ['./caixa-dialogo.component.css']
})
export class CaixaDialogoComponent implements OnInit {

  terminalSelecionado: Terminal

  constructor(
    public dialogRef: MatDialogRef<CaixaDialogoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public terminais: Terminal[]
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



