import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select-tipo-conta',
  templateUrl: './select-tipo-conta.component.html',
  styleUrls: ['./select-tipo-conta.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectTipoContaComponent,
      multi: true
    }
  ]
})
export class SelectTipoContaComponent implements OnInit, ControlValueAccessor {

  private onChange: any = val => {};
  private onTouched: any = val => {};

  disabled: boolean = false;

  tipo: string;

  constructor() { }

  ngOnInit() {
  }

  seleciona(tipo: string) {
    this.tipo = tipo;
    this.onChange(this.tipo);
    this.onTouched(this.tipo);
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
    this.tipo = obj;
  }

}
