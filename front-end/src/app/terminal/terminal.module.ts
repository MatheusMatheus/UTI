import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatButtonModule, MatSlideToggleModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { NegocioModule } from '../negocio/negocio.module';
import { ListagemTerminaisComponent } from './listagem-terminais/listagem-terminais.component';

@NgModule({
  declarations: [
    CadastroComponent, 
    ListagemTerminaisComponent
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
    RouterModule.forChild([
      {
        path: 'cadastro',
        component: CadastroComponent
      }
    ])
  ]
})
export class TerminalModule { }
