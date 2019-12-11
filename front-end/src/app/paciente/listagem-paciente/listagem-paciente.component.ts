import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/negocio/dominio/paciente';
import { PacienteService } from 'src/app/negocio/service/paciente.service';

@Component({
  selector: 'app-listagem-paciente',
  templateUrl: './listagem-paciente.component.html',
  styleUrls: ['./listagem-paciente.component.css']
})
export class ListagemPacienteComponent implements OnInit {

  @Input()
  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  async ngOnInit() {
  }

}
