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

    public static criaTerminal() : Terminal {
      return new Terminal(
        "",
        "",
        StatusTerminal.INATIVO,
        new Date().toString()
      );
    }
  
  }

  export enum StatusTerminal {
    ATIVO, INATIVO
  }
  