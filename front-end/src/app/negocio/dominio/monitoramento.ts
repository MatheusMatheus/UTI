import { Pressao } from './pressao';
import { Terminal } from './terminal';
import { Paciente } from './paciente';

export class Monitoramento {

    constructor(    
        public pressaoConsultada: Pressao,
        public temperaturaConsultada: number,
        public momentoConsulta: string,
        public terminal: Terminal,
        public paciente: Paciente,
    ) {

    }

    public static criaMonitoramento() : Monitoramento{
        return new Monitoramento(new Pressao(0,0), 0, new Date().toString(), Terminal.criaTerminal(), Paciente.criaPaciente());
    }
}