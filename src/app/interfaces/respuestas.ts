import { IEvento } from './i-evento';

export interface EventosResponse {
  eventos: IEvento[];
  ok:boolean;
  error:string;
}

export interface EventoResponse{
  evento: IEvento;
  ok:boolean;
  errors?:string[];
  error?:string;
}
