import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() eventoHijo:IEvento;

  @Output() borrame = new EventEmitter<void>();

  constructor(private servicios:EventoService) { }

  ngOnInit(): void {
  }

  deleteEvento(){
    this.servicios.deleteEvento(this.eventoHijo.id).subscribe(
      eventResp => {
        console.log("El servido ha borrado "+eventResp.evento+" fila");
        if(eventResp.ok)
          this.borrame.emit();
      },
      error => console.log(error)
    )
    //this.borrame.emit();
  }
}
