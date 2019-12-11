import { Monitoramento } from './monitoramento';

export interface RespostaPacienteMorrendo {
    monitoramentos: Monitoramento[];
    msgAlerta: string
  }