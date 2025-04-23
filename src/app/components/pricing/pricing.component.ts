import { Component } from '@angular/core';
import {PricingCardComponent} from '../../share/pricing-card/pricing-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [
    PricingCardComponent,
    NgForOf
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = [

    {
      title: 'Plan Básico',
      features: ['Hasta 50 tareas/mes', 'Reportes limitados', '1 usuario supervisor','Soporte'],
      price: 'S/3999'
    },
    {
      title: 'Plan Pro',
      features: ['Hasta 500 tareas/mes', 'Reportes limitados', '2 usuario supervisor','Soporte'],
      price: 'S/4999'
    },
    {
      title: 'Plan Empresarial',
      features: ['Tareas ilimitadas', 'Integración con ERP', 'Usuarios ilimitados', 'Soporte prioritario'],
      price: 'S/9999'
    }
  ];


}
