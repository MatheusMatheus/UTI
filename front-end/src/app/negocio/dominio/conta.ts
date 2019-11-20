import {Cliente} from './cliente';

export class Conta {

  constructor(
    public agencia: number,
    public numero: number,
    public saldo: string,
    public tipo: string,
    public titular: Cliente,
    public estado: string,
    public diaDeAniversario: number
  ){}
}
