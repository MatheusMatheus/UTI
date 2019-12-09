import { Component, OnInit } from '@angular/core';
import { MonitoramentoService } from 'src/app/negocio/service/monitoramento.service';
import { TerminalService } from 'src/app/negocio/service/terminal.service';
import { MatDialog } from '@angular/material';
import { CaixaDialogoComponent } from '../caixa-dialogo/caixa-dialogo.component';
import { Terminal } from 'src/app/negocio/dominio/terminal';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {

  constructor(
    private monitoraService: MonitoramentoService,
    private terminalSerice: TerminalService,
    private dialog: MatDialog
  ) { }

  terminais: Terminal[];
  monitoramento: Monitoramento;
  dataAtual: string;
  
  async ngOnInit() {
    this.terminais = await this.terminalSerice.buscaTodos().toPromise();

    const dialogRef = this.dialog.open(CaixaDialogoComponent, {
      data: this.terminais,
      width: '250px',
      disableClose: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(resultado => {
      this.monitoraService.monitora(resultado).subscribe(monitora => {
        this.monitoramento = monitora
        console.log(this.monitoramento.terminal.identificador);
      });
    });
    this.atualizaData();
  }

   atualizaData()  {
    return setInterval(() => this.dataAtual = new Date().toLocaleString('pt-BR'), 100)
  } 
}
