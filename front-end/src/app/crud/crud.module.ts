import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudClienteComponent} from './crud-cliente/crud-cliente.component';
import {CrudContaComponent} from './crud-conta/crud-conta.component';
import {ContaModule} from '../conta/conta.module';
import {NegocioModule} from '../negocio/negocio.module';
import {ClienteModule} from '../cliente/cliente.module';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    CrudClienteComponent,
    CrudContaComponent,
  ],
  imports: [
    CommonModule,
    ContaModule,
    NegocioModule,
    ClienteModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: 'cliente',
        component: CrudClienteComponent,
      },
      {
        path: 'conta',
        component: CrudContaComponent
      }
    ])
  ]
})
export class CrudModule { }
