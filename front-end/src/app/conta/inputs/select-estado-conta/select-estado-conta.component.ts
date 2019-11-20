import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select-estado-conta',
  templateUrl: './select-estado-conta.component.html',
  styleUrls: ['./select-estado-conta.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectEstadoContaComponent,
      multi: true
    }
  ]
})
export class SelectEstadoContaComponent implements OnInit, ControlValueAccessor {

  private onChange = val => {};
  private onTouched = val => {};

  disabled: boolean = false;

  ativo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mudoStatus() {
    this.ativo = !this.ativo;

    let estado = this.ativo ? 'ATIVA' : 'INATIVA';
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
    this.ativo = obj == 'ATIVA';
  }

}
