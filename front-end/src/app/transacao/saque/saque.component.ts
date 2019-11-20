import { Component, OnInit } from '@angular/core';
import {ContaService} from '../../negocio/service/conta.service';
import {TransacaoService} from '../../negocio/service/transacao.service';
import {Conta} from '../../negocio/dominio/conta';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  numero: number;
  valor: number;

  contas: Array<Conta>;

  constructor(
    private contaService: ContaService,
    private transacaoService: TransacaoService
  ) { }

  async ngOnInit() {
    console.log('Iniciou o SaqueComponent');

    this.contas = await this.contaService.buscaAtivas();
  }

  async sacar(form: NgForm) {
    if (!form.valid) return;

    await this.transacaoService.saca(this.numero, this.valor);

    form.resetForm();
  }
}
