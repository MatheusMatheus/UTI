import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../../negocio/service/cliente.service';
import {Cliente} from '../../negocio/dominio/cliente';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css'],
  animations: [
    trigger('grow', [
      transition(':enter', [
        style({display: 'block', opacity: 0, transform: 'scale(0)'}),
        animate('500ms', style({opacity: 1, transform: 'scale(1)'})),
      ]),
      transition(':leave', [
        style({display: 'block', opacity: 1, transform: 'scale(1)'}),
        animate('500ms', style({opacity: 0, transform: 'scale(0)'})),
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({display: 'block', opacity: 0, transform: 'translateX(-100%)'}),
        animate('500ms', style({opacity: 1, transform: 'translateX(0)'})),
      ]),
      transition(':leave', [
        style({display: 'block'}),
        animate('500ms', style({opacity: 0, transform: 'translateX(100%)'})),
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({display: 'block', opacity: 0}),
        animate('500ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        style({display: 'block'}),
        animate('500ms', style({opacity: 0})),
      ])
    ])
  ]
})
export class CrudClienteComponent implements OnInit {

  clientes: Array<Cliente>;

  cadastrando: Cliente;
  visualizando: Cliente;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    console.log('Iniciou o CrudClienteComponent');

    this.buscaClientes();
  }

  private buscaClientes() {
    let observable = this.clienteService.buscaTodos();

    observable.subscribe(clientes => {
      this.clientes = clientes;

      console.log(this.clientes);
    });
  }

  async cadastrar(cliente: Cliente) {
    /*
    this.clienteService
      .cadastra(cliente)
      .subscribe(() => {

        if (cliente.status === 'ATIVO') {
          this.clienteService.ativa(cliente).subscribe(() => {

            this.buscaClientes();

            this.cadastrando = undefined;

          });
        } else {
          this.buscaClientes();

          this.cadastrando = undefined;
        }

    });
  */

    await this.clienteService.cadastra(cliente).toPromise();

    if (cliente.status === 'ATIVO') {
      await this.clienteService.ativa(cliente).toPromise();
    }

    this.buscaClientes();

    this.cadastrando = undefined;

  }

  ativar() {
    this.clienteService.ativa(this.visualizando);

    this.visualizando = this.clienteService.buscaPorCPF(this.visualizando.cpf)

    this.buscaClientes();
  }

  async remover() {
    await this.clienteService.remove(this.visualizando);

    this.buscaClientes();
  }

  novoCadastro() {
    this.cadastrando = new Cliente(
      undefined,
      undefined,
      'PENDENTE'
    );
  }
}
