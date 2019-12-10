import { Component, OnInit, Input } from '@angular/core';
import { Pressao } from 'src/app/negocio/dominio/pressao';
import { Monitoramento } from 'src/app/negocio/dominio/monitoramento';
import { AtributoMonitoravelComponent } from '../atributo-monitoravel/atributo-monitoravel.component';

@Component({
  selector: 'app-pressao',
  templateUrl: './pressao.component.html',
  styleUrls: ['./pressao.component.css']
})
export class PressaoComponent extends AtributoMonitoravelComponent implements OnInit {

  constructor() { 
    super();
  }

  @Input() monitoramento: Monitoramento;
  novaPressao = new Pressao(0, 0);

  miniPressao: Pressao = new Pressao(0, 0);

  async ngOnInit() {
    super.ngOnInit();
    setInterval(() => {
      this.miniPressao.sistolica = this.alteraAtributo(130, 170);
      this.miniPressao.diastolica = this.alteraAtributo(90, 110);
    }, 5000);    
  }

  alteraAtributo(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  isAvailable(): boolean {
    return this.monitoramento.paciente !== null && this.monitoramento.terminal !== null;
  }

}
