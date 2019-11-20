import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from '../../negocio/dominio/cliente';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  private _original: Cliente;
  private _cliente: Cliente;

  @Output() clienteChange = new EventEmitter();

  constructor() {}

  @Input() set cliente(cliente: Cliente) {
    this._original = cliente;
    this._cliente = new Cliente(
      cliente.nome,
      cliente.cpf,
      cliente.status
    );
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  aplicarAlteracoes(form: NgForm) {
    if (form.valid) {
      this._original = new Cliente(
        this.cliente.nome,
        this.cliente.cpf,
        this.cliente.status
      );

      this.clienteChange.emit(this._original);

      form.resetForm();
    }
  }

  ngOnInit() {}

  cancelar(form:NgForm) {
    this.cliente = this._original;
  }
}
