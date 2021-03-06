import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import { PressaoComponent } from './pressao/pressao.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { InfoPacienteComponent } from './info-paciente/info-paciente.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatDialogModule, MatSelectModule, MatButtonModule, MatListModule } from '@angular/material';
import { BatimentosComponent } from './batimentos/batimentos.component';
import { NegocioModule } from '../negocio/negocio.module';
import { CaixaDialogoComponent } from './caixa-dialogo/caixa-dialogo.component';
import { FormsModule } from '@angular/forms';
import { AtributoMonitoravelComponent } from './atributo-monitoravel/atributo-monitoravel.component';
import { CaixaDialogoOutroTerminalComponent } from './caixa-dialogo-outro-terminal/caixa-dialogo-outro-terminal.component';

@NgModule({
  declarations: [
    MonitoramentoComponent, 
    PressaoComponent, 
    TemperaturaComponent, 
    InfoPacienteComponent, 
    BatimentosComponent, 
    CaixaDialogoComponent, 
    AtributoMonitoravelComponent, 
    CaixaDialogoOutroTerminalComponent
  ],
  imports: [
    NegocioModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: 'monitoramento',
        component: MonitoramentoComponent
      }
    ])
  ],
  entryComponents: [
    CaixaDialogoComponent,
    CaixaDialogoOutroTerminalComponent
  ]
})
export class MonitoramentoModule { }
