import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatButtonModule, MatSlideToggleModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS, MatDialogModule, MatToolbarModule } from '@angular/material';
import { NegocioModule } from '../negocio/negocio.module';
import { ListagemTerminaisComponent } from './listagem-terminais/listagem-terminais.component';
import { EditarComponent } from './editar/editar.component';
import { CaixaDialogoComponent } from './caixa-dialogo/caixa-dialogo.component';

@NgModule({
  declarations: [
    CadastroComponent, 
    ListagemTerminaisComponent, 
    EditarComponent,
    CaixaDialogoComponent
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NegocioModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: 'cadastro',
        component: CadastroComponent
      }
    ])
  ],
  entryComponents: [
    CaixaDialogoComponent
  ]
})
export class TerminalModule { }
