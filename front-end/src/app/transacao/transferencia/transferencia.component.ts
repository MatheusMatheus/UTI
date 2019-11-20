import { Component, OnInit } from '@angular/core';
import {ContaService} from '../../negocio/service/conta.service';
import {TransacaoService} from '../../negocio/service/transacao.service';
import {Conta} from '../../negocio/dominio/conta';
import {Transferencia} from '../../negocio/dominio/transferencia';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  transferencia: Transferencia = {};

  contas: Array<Conta>;

  constructor(
    private contaService: ContaService,
    private transacaoService: TransacaoService
  ) { }

  async ngOnInit() {
    console.log('Iniciou o TransferenciaComponent');

    this.contas = await this.contaService.buscaAtivas();
  }

  async transferir(form: NgForm) {
    if (!form.valid) return;

    await this.transacaoService.transfere(this.transferencia);

    form.resetForm();
  }
}
