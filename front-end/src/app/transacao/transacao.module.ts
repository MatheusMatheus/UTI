import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransferenciaComponent} from './transferencia/transferencia.component';
import {DepositoComponent} from './deposito/deposito.component';
import {SaqueComponent} from './saque/saque.component';
import {FormsModule} from '@angular/forms';
import {NegocioModule} from '../negocio/negocio.module';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SaqueComponent,
    DepositoComponent,
    TransferenciaComponent,
  ],
  imports: [
    CommonModule,
    NegocioModule,
    FormsModule,
    UtilModule,
    RouterModule.forChild([
      {
        path: 'saque',
        component: SaqueComponent
      },
      {
        path: 'deposito',
        component: DepositoComponent
      },
      {
        path: 'transferencia',
        component: TransferenciaComponent
      }
    ])
  ]
})
export class TransacaoModule { }
