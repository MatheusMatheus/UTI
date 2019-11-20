import {Component, Input, OnInit} from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.component.html',
  styleUrls: ['./dados-conta.component.css']
})
export class DadosContaComponent implements OnInit {

  @Input() conta: Conta;

  constructor() { }

  ngOnInit() {}

}
