import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Cliente} from '../../negocio/dominio/cliente';
import {Conta} from '../../negocio/dominio/conta';

@Component({
  selector: 'app-formulario-conta',
  templateUrl: './formulario-conta.component.html',
  styleUrls: ['./formulario-conta.component.css']
})
export class FormularioContaComponent implements OnInit {
  private _original: Conta;
  private _conta: Conta;

  @Output() contaChange = new EventEmitter();
  @Input() clientes: Array<Cliente>;

  constructor() {}

  @Input() set conta(conta: Conta) {
    this._original = conta;
    this._conta = new Conta(
      conta.agencia,
      conta.numero,
      conta.saldo,
      conta.tipo,
      conta.titular,
      conta.estado,
      conta.diaDeAniversario
    );
  }

  get conta(): Conta {
    return this._conta;
  }

  aplicarAlteracoes(form: NgForm) {
    if (form.valid) {
      this._original = new Conta(
        this.conta.agencia,
        this.conta.numero,
        this.conta.saldo,
        this.conta.tipo,
        this.conta.titular,
        this.conta.estado,
        this.conta.diaDeAniversario
      );

      this.contaChange.emit(this._original);

      form.resetForm();
    }
  }

  ngOnInit() {}

  cancelar(form:NgForm) {
    this.conta = this._original;
  }

}
