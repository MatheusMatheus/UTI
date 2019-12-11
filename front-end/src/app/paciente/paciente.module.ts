import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MatButtonModule, 
  MatSlideToggleModule, 
  MatCardModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatSelectModule, 
  MatToolbarModule, 
  MatDialogModule,
  MatExpansionModule} from '@angular/material';
import { NegocioModule } from '../negocio/negocio.module';
import { CaixaDialogoComponent } from './caixa-dialogo/caixa-dialogo.component';
import { ListagemPacienteComponent } from './listagem-paciente/listagem-paciente.component';

@NgModule({
  declarations: [CadastrarComponent, CaixaDialogoComponent, ListagemPacienteComponent],
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
    MatDialogModule,
    MatExpansionModule,
    RouterModule.forChild([
      {
        path: 'cadastro',
        component: CadastrarComponent
      }
    ])
  ],
  entryComponents: [
    CaixaDialogoComponent
  ]
})
export class PacienteModule { }
