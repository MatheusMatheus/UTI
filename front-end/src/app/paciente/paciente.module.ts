import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MatButtonModule, MatSlideToggleModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { NegocioModule } from '../negocio/negocio.module';

@NgModule({
  declarations: [CadastrarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    NegocioModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: 'cadastro',
        component: CadastrarComponent
      }
    ])
  ]
})
export class PacienteModule { }
