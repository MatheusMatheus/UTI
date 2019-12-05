import { Pressao } from './pressao';

export class EstadoPaciente {

  constructor(
    public temperaturaAtual: number,
    public temperaturaMinima: number,
    public temperaturaMaxima: number,
    public pressaoAtual: Pressao,
    public pressaoMinima: Pressao,
    public pressaoMaxima: Pressao
  ) {

  }



}
