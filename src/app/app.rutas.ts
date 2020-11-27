import { Route } from '@angular/router';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';


export const APP_RUTAS: Route[]=[
  { path: 'events', component: EventosShowComponent },
  { path: 'events/add', component: EventoAddComponent },
  // :id es un parámetro (id del producto)
  { path: 'events/:id', component: EventoDetailComponent },
  // Ruta por defecto (vacía) -> Redirigir a /events
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // Ruta que no coincide con ninguna de las anteriores
  { path: '**', redirectTo: '/events', pathMatch: 'full' }
]
