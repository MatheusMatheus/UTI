import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { Paciente } from 'src/app/negocio/dominio/paciente';

@Component({
  selector: 'app-batimentos',
  templateUrl: './batimentos.component.html',
  styleUrls: ['./batimentos.component.css']
})
export class BatimentosComponent implements OnInit{
  
  @Input() monitoramento: Monitoramento;
  @Input() msgAlerta: string;
  paciente: Paciente;
 
  ngOnInit() {
    this.paciente = this.monitoramento.paciente ? this.monitoramento.paciente : Paciente.criaPaciente();
  }

}








