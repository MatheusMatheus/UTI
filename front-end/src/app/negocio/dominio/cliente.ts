export class Cliente {

  private statusInterno: string;

  constructor(
    public nome: string,
    public cpf: string,
    status: string
  ) {
    this.status = status;
  }

  get status(): string {
    return this.statusInterno;
  }

  set status(status: string) {

    if (status === 'ATIVO' ||
      status === 'PENDENTE') {
      this.statusInterno = status;
    }

  }

}

