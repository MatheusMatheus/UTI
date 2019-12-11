import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Terminal } from 'src/app/negocio/dominio/terminal';

@Component({
  selector: 'app-caixa-dialogo-outro-terminal',
  templateUrl: './caixa-dialogo-outro-terminal.component.html',
  styleUrls: ['./caixa-dialogo-outro-terminal.component.css']
})
export class CaixaDialogoOutroTerminalComponent implements OnInit {
  terminal: Terminal;
  constructor(
    public dialogRef: MatDialogRef<CaixaDialogoOutroTerminalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { terminais },
  ) { }

  ngOnInit() {
    this.terminal = Terminal.criaTerminal();
  }

  isAvailable(): boolean {
    return this.data.terminais !== null && this.data.terminais.length > 0;
  }

}
