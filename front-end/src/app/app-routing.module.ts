import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'terminal',
        loadChildren: './terminal/terminal.module#TerminalModule'
      },
      {
        path: 'paciente',
        loadChildren: './paciente/paciente.module#PacienteModule'
      },
      {
        path: 'monitoramento',
        loadChildren: './monitoramento/monitoramento.module#MonitoramentoModule'
      },
      {
        path: 'crud',
        loadChildren: './crud/crud.module#CrudModule'
      },
      {
        path: 'transacoes',
        loadChildren: './transacao/transacao.module#TransacaoModule'
      }
    ], {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
