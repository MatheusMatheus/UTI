import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import { Terminal } from 'src/app/negocio/dominio/terminal';
import { TerminalService } from 'src/app/negocio/service/terminal.service';

@Component({
  selector: 'app-listagem-terminais',
  templateUrl: './listagem-terminais.component.html',
  styleUrls: ['./listagem-terminais.component.css']
})
export class ListagemTerminaisComponent implements OnInit {

  terminais: Array<Terminal>;

  constructor(
    private terminalService: TerminalService
  ) {}

  async ngOnInit() {
    this.terminais = await this.terminalService.buscaTodos().toPromise();
  }
}

