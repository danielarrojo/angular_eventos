import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit, OnDestroy {
  public eventos:IEvento[]=[];
  filtroBusqueda:string="";
  constructor(private eventosService:EventoService) { }



  ngOnInit(): void {
    //this.eventos=this.eventosService.getEventos();
    this.eventosService.getEventos().subscribe(
      respEventos => this.eventos=respEventos.eventos,
      error => console.log(error),
      () => console.log("Finalizada la carga de eventos")
    );
  }

  ngOnDestroy(): void {
  }

  orderDate(event){
    this.filtroBusqueda = '';
    this.eventos.sort((evento1, evento2) =>
    evento1.date < evento2.date ? -1 : 1);
    event.preventDefault();
   // evento1.date.localeCompare(evento2.date));

  }

  orderPrice(event){
    this.filtroBusqueda = '';
    this.eventos.sort((evento1, evento2) =>
    evento1.price < evento2.price ? -1 : 1);
    event.preventDefault();
  }

  eliminarEvento(evento: IEvento){
    this.eventos=this.eventos.filter(e => e!=evento);
  }




}
