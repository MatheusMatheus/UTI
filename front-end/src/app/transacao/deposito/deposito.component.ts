import { Component, OnInit } from '@angular/core';
import {Conta} from '../../negocio/dominio/conta';
import {ContaService} from '../../negocio/service/conta.service';
import {TransacaoService} from '../../negocio/service/transacao.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  numero: number;
  valor: number;

  contas: Array<Conta>;

  constructor(
    private contaService: ContaService,
    private transacaoService: TransacaoService
  ) { }

  async ngOnInit() {
    console.log('Iniciou o DepositoComponent');

    this.contas = await this.contaService.buscaAtivas();
  }

  async depositar(form: NgForm) {
    if (!form.valid) return;

    await this.transacaoService.deposita(this.numero, this.valor);

    form.resetForm();
  }

}
