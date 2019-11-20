import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {MensagensErroComponent} from './mensagens-erro/mensagens-erro.component';
import {MinDirective} from './validadores/min/min.directive';
import {MaxDirective} from './validadores/max/max.directive';
import {CpfDirective} from './validadores/cpf/cpf.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, MensagensErroComponent, MinDirective, MaxDirective, CpfDirective, ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HighlightDirective,
    MensagensErroComponent,
    MinDirective,
    MaxDirective,
    CpfDirective,
  ]
})
export class UtilModule { }
