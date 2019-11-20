import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';
import {Cliente} from '../../negocio/dominio/cliente';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent implements OnInit {

  @Input() contas: Array<Conta>;
  @Output() contaSelecionada = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  seleciona(conta: Conta) {
    this.contaSelecionada.emit(conta);
  }
}

