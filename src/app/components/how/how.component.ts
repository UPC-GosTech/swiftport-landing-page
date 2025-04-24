import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-how',
  imports: [
    TranslatePipe
  ],
  templateUrl: './how.component.html',
  styleUrl: './how.component.css'
})
export class HowComponent {
  steps = [
    {
      title: 'Paso 1',
      description: 'El supervisor crea las tareas y fases de trabajo.'
    },
    {
      title: 'Paso 2',
      description: 'Se asignan recursos según disponibilidad en campo.'
    },
    {
      title: 'Paso 3',
      description: 'Los operarios reciben notificaciones y ejecutan las tareas.'
    },
    {
      title: 'Paso 4',
      description: 'Si hay retrasos o bloqueos, pueden informar en tiempo real.'
    },
    {
      title: 'Paso 5',
      description: 'El supervisor valida, reprograma o reasigna en función del entorno.'
    }
  ];
}
