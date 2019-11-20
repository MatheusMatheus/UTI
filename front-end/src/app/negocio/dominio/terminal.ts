export class Terminal {

    private statusInterno: string;
  
    constructor(
      public nome: string,
      public id: string,
      public enderecoMac: string,
      public dataCadastro: Date
    ) {
    }
  
    get status(): string {
      return this.statusInterno;
    }
  
    set status(status: string) {
  
      if (status === 'I' ||
        status === 'A') {
        this.statusInterno = status;
      }
  
    }
  
  }
  