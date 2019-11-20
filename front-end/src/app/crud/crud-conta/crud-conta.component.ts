import {Component, OnInit} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';
import {ContaService} from '../../negocio/service/conta.service';
import {Cliente} from '../../negocio/dominio/cliente';
import {ClienteService} from '../../negocio/service/cliente.service';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-crud-conta',
  templateUrl: './crud-conta.component.html',
  styleUrls: ['./crud-conta.component.css'],
  animations: [
    trigger('spin', [
      transition(':enter', [
        style({display: 'block'}),
        animate('500ms', keyframes([
          style({offset: 0.25, transform: 'rotate(90deg)'}),
          style({offset: 0.5, transform: 'rotate(180deg)'}),
          style({offset: 0.75, transform: 'rotate(270deg)'}),
          style({offset: 1, transform: 'rotate(360deg)'})
        ]))
      ])
    ])
  ]
})
export class CrudContaComponent implements OnInit {

  contas: Array<Conta>;
  abertura: Conta;
  encerramento: Conta;

  clientes: Array<Cliente>;

  constructor(
    private contaService: ContaService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    console.log('Iniciou o CrudContaComponent');

    let observable = this.clienteService.buscaTodos();

    observable.subscribe(clientes => {
      this.clientes = clientes;

      console.log(this.clientes);
    });

    this.buscaContas();
  }

  private async buscaContas() {
    this.contas = await this.contaService.buscaTodas();
  }

  async abre(conta: Conta) {
    await this.contaService.abre(conta);
    this.abertura = undefined;

    this.buscaContas();
  }

  async encerrar() {
    await this.contaService.encerra(this.encerramento);
    this.encerramento = undefined;

    this.buscaContas();
  }

  novaConta() {
    this.abertura = new Conta(
      undefined,
      undefined,
      undefined,
      undefined,
      new Cliente(
        undefined,
        undefined,
        undefined
      ),
      undefined,
      undefined
    );
  }

}
