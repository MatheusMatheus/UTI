import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.css']
})
export class DadosClienteComponent implements OnInit {

  @Input() cliente: Cliente;

  @Output() nomeSelecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  clickName() {
    this.nomeSelecionado.emit('nome selecionado');
  }
}
