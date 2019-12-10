import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import { Terminal } from 'src/app/negocio/dominio/terminal';
import { TerminalService } from 'src/app/negocio/service/terminal.service';
import { MatDialog } from '@angular/material';
import { CaixaDialogoComponent } from '../caixa-dialogo/caixa-dialogo.component';

@Component({
  selector: 'app-listagem-terminais',
  templateUrl: './listagem-terminais.component.html',
  styleUrls: ['./listagem-terminais.component.css']
})
export class ListagemTerminaisComponent implements OnInit {

  terminais: Array<Terminal>;

  constructor(
    private terminalService: TerminalService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.terminais = await this.terminalService.buscaTerminaisLivres().toPromise();
  }

  seleciona(terminal: Terminal) {
    const dialogRef = this.dialog.open(CaixaDialogoComponent, {
      data: { terminal },
      width: '400px',
      disableClose: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(resultado => {
      
    });
  }
}

