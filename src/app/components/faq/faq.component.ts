import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionPanelComponent } from '../../share/extension-panel/extension-panel.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ExtensionPanelComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqItems = [
    {
      question: '¿Qué es SwiftPort y para quién es?',
      answer: 'SwiftPort es una plataforma que facilita la planificación, asignación y supervisión de actividades logísticas de campo, ideal para empresas que operan en zonas remotas con vehículos y cuadrillas de trabajo.'
    },
    {
      question: '¿Cómo obtengo visibilidad en tiempo real de mis operaciones?',
      answer: 'Utilizamos simulaciones de IoT (GPS, estado de maquinaria y condiciones ambientales) que se actualizan periódicamente en el panel de control, mostrando el avance y posibles incidencias en cada tarea.'
    },
    {
      question: '¿Cómo maneja SwiftPort los imprevistos en campo?',
      answer: 'SwiftPort detecta desviaciones (clima, fallas mecánicas, retrasos) y ofrece una interfaz rápida para reprogramar tareas y notificar automáticamente a los equipos afectados.'
    },
    {
      question: '¿SwiftPort se adapta a mi tamaño de operación?',
      answer: 'Sí, nuestra arquitectura modular escala desde flotas y equipos pequeños hasta implementaciones más grandes sin afectar el rendimiento ni la usabilidad.'
    },
    {
      question: '¿En cuánto tiempo puedo iniciar un piloto?',
      answer: 'Puedes desplegar un piloto funcional en menos de 2 semanas y comenzar a obtener datos de tus operaciones desde el primer mes.'
    }
  ];
  
}
