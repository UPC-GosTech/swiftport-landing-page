import { Component } from '@angular/core';
import { FunctionComponent } from '../../share/function/function.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionalidades-swiftport',
  standalone: true,
  imports: [FunctionComponent, CommonModule],
  templateUrl: './funcionalidades-swiftport.component.html',
  styleUrl: './funcionalidades-swiftport.component.css'
})
export class FuncionalidadesSwiftportComponent {

  funcionalidades = [
    {
      title: 'Planificación inteligente',
      description: 'Crea tareas, define fases y agrupa actividades',
      accentColor: '#FF8C29' // Naranja brillante
    },
    {
      title: 'Asignación efectiva',
      description: 'Distribuye tareas según disponibilidad real de personal y recursos.',
      accentColor: '#F86F03' // Naranja intenso
    },
    {
      title: 'Monitoreo en tiempo real',
      description: 'Seguimiento por GPS e integración con alertas del clima o fallos.',
      accentColor: '#FFA41B' // Naranja amarillento
    },
    {
      title: 'Reprogramación',
      description: 'Permite modificar horarios y tareas logísticas en tiempo real.',
      accentColor: '#FF5B22' // Naranja rojizo
    },
    {
      title: 'Gestión de incidencias',
      description: 'Reportes directos desde campo con opción de validación y asignación.',
      accentColor: '#E14D2A' // Rojo anaranjado
    },
    {
      title: 'Visibilidad de desempeño',
      description: 'Visibilidad de tareas, bloqueos, tiempos muertos y cumplimiento.',
      accentColor: '#FD841F' // Naranja cálido
    },
    {
      title: 'Flexibilidad operativa',
      description: 'Solicitudes de reprogramación y actualizaciones de estado en terreno.',
      accentColor: '#FF7700' // Naranja estándar
    }
  ];
}
