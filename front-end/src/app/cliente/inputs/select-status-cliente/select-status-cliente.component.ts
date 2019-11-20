import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select-status-cliente',
  templateUrl: './select-status-cliente.component.html',
  styleUrls: ['./select-status-cliente.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectStatusClienteComponent,
      multi: true
    }
  ]
})
export class SelectStatusClienteComponent implements OnInit, ControlValueAccessor {

  private onChange = val => {};
  private onTouched = val => {};

  disabled: boolean = false;

  ativo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mudoStatus() {
    this.ativo = !this.ativo;

    let estado = this.ativo ? 'ATIVO' : 'PENDENTE';
    this.onTouched(estado);
    this.onChange(estado);
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
    this.ativo = obj == 'ATIVO';
  }

}
