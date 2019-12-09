import { Component, OnInit, Input, Output } from '@angular/core';
import { Terminal, StatusTerminal } from 'src/app/negocio/dominio/terminal';
import { TerminalService } from 'src/app/negocio/service/terminal.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  terminal: Terminal;
  private _original: Terminal;
  @Output() novoTerminal = new EventEmitter();

  constructor(private terminalService: TerminalService) {
    this.terminal = new Terminal(
      "",
      "",
      StatusTerminal.INATIVO,
      this.getDate()
    );
   }

  ngOnInit() {
    this.terminal.mac = this.getMAC();
  }

  private getDate(): string {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const event = new Date();
    return event.toLocaleDateString('pt-BR', options);  
  }

  private getMAC(): string {
    return "XX:XX:XX:XX:XX:XX".replace(/X/g, () => "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16)));
  }

  async cadastrar() {
    await this.terminalService.cadastrar(this.terminal).toPromise();
  } 
}
