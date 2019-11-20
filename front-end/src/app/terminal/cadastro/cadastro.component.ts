import { Component, OnInit, Input } from '@angular/core';
import { Terminal } from 'src/app/negocio/dominio/terminal';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  terminal: Terminal;
  private _original: Terminal;

  constructor() {
    this.terminal = new Terminal(
      "",
      "",
      "",
      new Date()
    );
   }

  ngOnInit() {
  }

}
