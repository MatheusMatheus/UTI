import { Component, OnInit, Input } from '@angular/core';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { AtributoMonitoravelComponent } from '../atributo-monitoravel/atributo-monitoravel.component';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent extends AtributoMonitoravelComponent implements OnInit {

  constructor() { 
    super();
  }

  @Input() monitoramento: Monitoramento;
  temperaturaConsultada: number;
  miniTemp: number;

  ngOnInit() {
    super.ngOnInit();
    setInterval(() => {
      this.miniTemp = this.alteraAtributo(37, 42);
    }, 5000);
  }

  alteraAtributo(min, max): number {
    let n = Math.random() * (max - min) + min; 
    return Number(n.toFixed(1));
  }

  isAvailable() {
    return (this.monitoramento.paciente !== null && this.monitoramento.paciente.cpf !== "")
    && (this.monitoramento.terminal !== null && this.monitoramento.terminal.mac !== "");
  }
  
}
