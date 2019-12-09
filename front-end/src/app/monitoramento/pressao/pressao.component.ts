import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { Pressao } from 'src/app/negocio/dominio/pressao';

@Component({
  selector: 'app-pressao',
  templateUrl: './pressao.component.html',
  styleUrls: ['./pressao.component.css']
})
export class PressaoComponent implements OnInit, OnChanges {

  constructor() { }

  private _monitoramento = new BehaviorSubject<Monitoramento>(null);
  miniPressao: Pressao = new Pressao(0, 0);

  @Input() 
  set monitoramento(valor) {
    this._monitoramento.next(valor);
  }

  get monitoramento() {
    return this._monitoramento.getValue();
  }

  ngOnInit() {
    setInterval(() => this.monitoramento.pressaoConsultada.sistolica = this.alteraPressao(120, 180), 5000);
    setInterval(() => this.monitoramento.pressaoConsultada.diastolica = this.alteraPressao(80, 120), 5000);

    setInterval(() => this.miniPressao.sistolica = this.alteraPressao(130, 170), 5000);
    setInterval(() => this.miniPressao.diastolica = this.alteraPressao(90, 110), 5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.monitoramento);
  }

  alteraPressao(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min; 
  }

}
