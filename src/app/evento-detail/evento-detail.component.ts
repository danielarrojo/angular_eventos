import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { IEvento } from '../interfaces/i-evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  evento:IEvento;
  constructor(private servicios:EventoService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id:number=this.ruta.snapshot.params["id"];
    this.servicios.getEvento(id).subscribe(
      respServ => this.evento=respServ.evento,
      error => console.log(error)
    )
  }

  goBack(){
    this.router.navigate(['/eventos']);
  }

}
