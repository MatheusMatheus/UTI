export class Terminal {

    private statusInterno: string;
    identificador: number;
  
    constructor(
      public nome: string,
      public mac: string,
      public statusTerminal: StatusTerminal,
      public dataCadastro: string
    ) {
    }
  
  }

  export enum StatusTerminal {
    ATIVO, INATIVO
  }
  