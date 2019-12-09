import { Pressao } from './pressao';
import { Terminal } from './terminal';
import { Paciente } from './paciente';

export class Monitoramento {

    constructor(    
        public pressaoConsultada: Pressao,
        public temperaturaConsultada: number,
        public momentoConsulta: Date,
        public terminal: Terminal,
        public paciente: Paciente,
    ) {

    }
}