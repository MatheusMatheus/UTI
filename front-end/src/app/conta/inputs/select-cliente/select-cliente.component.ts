import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Cliente} from '../../../negocio/dominio/cliente';

@Component({
  selector: 'app-select-cliente',
  templateUrl: './select-cliente.component.html',
  styleUrls: ['./select-cliente.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectClienteComponent,
      multi: true
    }
  ]
})
export class SelectClienteComponent implements OnInit, ControlValueAccessor {

  private onChange: any = val => {
    console.log(val);
  };

  private onTouched: any = val => {
    console.log(val);
  };

  disabled: boolean = false;

  cliente: Cliente;

  @Input() clientes: Array<Cliente>;

  constructor() { }

  ngOnInit() {
  }

  get cpfCliente() {
    return this.cliente ? this.cliente.cpf : undefined;
  }

  set cpfCliente(cpf) {
    this.cliente = this.clientes.find(cli => cli.cpf == cpf);
    this.onTouched(this.cliente);
    this.onChange(this.cliente);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.cliente = obj;
  }

}
