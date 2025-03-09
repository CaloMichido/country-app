import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'translateDay'
})
export class TranslateDayPipe implements PipeTransform {

  private daysMap: {[key: string]: string}={
    'monday': 'Lunes',
    'tuesday': 'Martes',
    'wednesday': 'Miércoles',
    'thursday': 'Jueves',
    'friday': 'Viernes',
    'saturday': 'Sábado',
    'sunday': 'Domingo'
  };

  transform(value: string): string {
    return this.daysMap[value.toLowerCase()] || value;
  }
}