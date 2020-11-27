import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEvento } from '../interfaces/i-evento';
import { catchError, map } from 'rxjs/operators'
import { EventoResponse, EventosResponse } from '../interfaces/respuestas';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private eventoURL:string="eventos"
  constructor(private http:HttpClient) { }

  /*getEventos(): Observable <IEvento[]>{
    return this.http.get<EventosResponse>(this.eventoURL).pipe(
      map(res=>res.eventos)
    );
  }*/
  getEventos(): Observable <EventosResponse>{
    return this.http.get<EventosResponse>(this.eventoURL);
  }

  getEvento(idEvento: number): Observable<EventoResponse>{
    return this.http.get<EventoResponse>(this.eventoURL+"/"+idEvento);
  }

  addEvento(evento: IEvento):Observable<EventoResponse>{
    return this.http.post<EventoResponse>(this.eventoURL,evento).pipe(
      map(res=>res),
      catchError((resp: HttpErrorResponse) =>
        throwError(`Error insertando producto!. Código de servidor: ${resp.status}.Mensaje: ${resp.message}`)
      )
    );
  }

  deleteEvento(idEvento: number):Observable<EventoResponse>{
    return this.http.delete<EventoResponse>(this.eventoURL+"/"+idEvento);
  }


}
