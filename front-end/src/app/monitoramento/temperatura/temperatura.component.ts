import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { BehaviorSubject } from 'rxjs';
import { MomentoConsulta } from 'src/app/negocio/dominio/momentoConsulta';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit, OnChanges {

  constructor() { }

  private _monitoramento = new BehaviorSubject<Monitoramento>(null);

  miniTemp;

  @Input() 
  set monitoramento(valor) {
    this._monitoramento.next(valor);
  }

  get monitoramento() {
    return this._monitoramento.getValue();
  }

  ngOnInit() {
    setInterval(() => this.monitoramento.temperaturaConsultada = this.alteraTemeperatura(35, 45), 5000);
    setInterval(() => this.miniTemp = this.alteraTemeperatura(37, 42), 5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.monitoramento);
  }

  alteraTemeperatura(min, max): number {
    let n = Math.random() * (max - min) + min; 
    return Number(n.toFixed(1));
  }
  
}
