import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pressao } from 'src/app/negocio/dominio/pressao';

@Component({
  selector: 'app-atributo-monitoravel',
  template: `Sem-template`,
  styleUrls: ['./atributo-monitoravel.component.css']
})
export class AtributoMonitoravelComponent implements OnInit {

  @Output() atributoAlterado = new EventEmitter();
  atributoMonitoravel: AtributoMonitoravel;

  constructor() {
    this.atributoMonitoravel = {
        pressao: new Pressao(0,0),
        temperatura: 0
    }
   }

  ngOnInit() {
    setInterval(() => {
      this.atributoMonitoravel.pressao.sistolica = this.alteraAtributo(120, 180);
      this.atributoMonitoravel.pressao.diastolica = this.alteraAtributo(80, 120);
      this.atributoMonitoravel.temperatura = this.alteraAtributo(35, 45);
      this.atributoAlterado.emit(this.atributoMonitoravel);
    }, 5000);    
  }

  alteraAtributo(min: number, max: number) : number{
    return 0;
  }

}

export interface AtributoMonitoravel {
  pressao: Pressao;
  temperatura: number;
}
