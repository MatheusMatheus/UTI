import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css'],
  animations: [
    trigger('showLines', [
      transition('hide => show', [

        query('tr', [
          style({opacity: 0, transform: 'translateY(-100%)'}),
          stagger('150ms', [
            animate('150ms', style({opacity: 1, transform: 'translateY(0)'})),
          ])
        ])

      ])
    ])
  ]
})
export class ListagemClientesComponent implements OnInit {

  @Input() clientes: Array<Cliente>;

  @Output() clienteSelecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  seleciona(cliente: Cliente) {
    this.clienteSelecionado.emit(cliente);
  }
}
