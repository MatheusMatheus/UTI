import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { StatusClientePipe } from './pipes/status-cliente.pipe';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import {FormsModule} from '@angular/forms';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import {SelectStatusClienteComponent} from './inputs/select-status-cliente/select-status-cliente.component';
import {UtilModule} from '../util/util.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    DadosClienteComponent,
    CpfPipe,
    StatusClientePipe,
    FormularioClienteComponent,
    ListagemClientesComponent,
    SelectStatusClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    DadosClienteComponent,
    FormularioClienteComponent,
    ListagemClientesComponent
  ]
})
export class ClienteModule { }
