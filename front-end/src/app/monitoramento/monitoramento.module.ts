import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import { PressaoComponent } from './pressao/pressao.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { InfoPacienteComponent } from './info-paciente/info-paciente.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { BatimentosComponent } from './batimentos/batimentos.component';

@NgModule({
  declarations: [MonitoramentoComponent, PressaoComponent, TemperaturaComponent, InfoPacienteComponent, BatimentosComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: 'monitoramento',
        component: MonitoramentoComponent
      }
    ])
  ]
})
export class MonitoramentoModule { }
