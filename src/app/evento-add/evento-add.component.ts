import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from '../interfaces/i-evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  @Output() insertame = new EventEmitter<IEvento>();

  newEvento:IEvento={
    title:"",
    description:"",
    image:"",
    price:0,
    date:""
  }


  constructor(private eventoServicio: EventoService,
              private enrutar: Router) { }

  ngOnInit(): void {
  }

  addEvento(){
    //this.eventos.push(this.newEvento);
    //this.insertame.emit(this.newEvento);

    this.eventoServicio.addEvento(this.newEvento).subscribe(
      eventoResp => {
        this.enrutar.navigate(['/events']);
      },
      error => console.log(error)
    );



  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result.toString();
    });
  }

}
