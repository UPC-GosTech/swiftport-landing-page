import { Component } from '@angular/core';
import {BenefitComponent} from '../../share/benefit/benefit.component';

@Component({
  selector: 'app-beneficios',
  imports: [BenefitComponent],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.css'
})
export class BeneficiosComponent {
  benefits = [
    {
      image: '../../../assets/check.png',
      text: 'Organiza todas tus operaciones logísticas desde un solo lugar. SwiftPort permite crear tareas, establecer fases del proceso y asignar responsables fácilmente, asegurando una planificación clara y sin solapamientos.'
    },
    {
      image: '../../../assets/tools.png',
      text: 'Supervisores y operarios trabajan en sincronía. Cada rol tiene acceso a la información y acciones específicas, promoviendo la colaboración sin generar caos operativo.'
    },
    {
      image: '../../../assets/person.png',
      text: 'Reportar problemas desde el campo nunca fue tan fácil. Los operarios pueden registrar incidencias y los supervisores asignarlas para su resolución sin interrupciones.'
    }
  ];
}
