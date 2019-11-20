import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';
import { EstadoContaPipe } from './pipes/estado-conta.pipe';
import { TipoContaPipe } from './pipes/tipo-conta.pipe';
import { FormularioContaComponent } from './formulario-conta/formulario-conta.component';
import {FormsModule} from '@angular/forms';
import {UtilModule} from '../util/util.module';
import {SelectClienteComponent} from './inputs/select-cliente/select-cliente.component';
import {SelectTipoContaComponent} from './inputs/select-tipo-conta/select-tipo-conta.component';
import {SelectEstadoContaComponent} from './inputs/select-estado-conta/select-estado-conta.component';
import { DadosContaComponent } from './dados-conta/dados-conta.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilModule
  ],
  exports: [
    ListagemContasComponent,
    FormularioContaComponent,
    DadosContaComponent
  ],

  declarations: [
    ListagemContasComponent,
    EstadoContaPipe,
    TipoContaPipe,
    FormularioContaComponent,
    SelectClienteComponent,
    SelectTipoContaComponent,
    SelectEstadoContaComponent,
    DadosContaComponent,
  ]
})
export class ContaModule { }
