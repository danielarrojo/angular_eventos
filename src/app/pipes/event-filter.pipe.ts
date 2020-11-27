import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], filterBy:string): IEvento[] {
    const filter=filterBy ? filterBy.toUpperCase():null;
    if(filter){
      return eventos
      .filter(evento => evento.description.toUpperCase().includes(filter));
    }
    return eventos;
  }

}
