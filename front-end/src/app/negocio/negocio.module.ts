import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteService} from './service/cliente.service';
import {ContaService} from './service/conta.service';
import {TransacaoService} from './service/transacao.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    ContaService,
    TransacaoService
  ]
})
export class NegocioModule { }
