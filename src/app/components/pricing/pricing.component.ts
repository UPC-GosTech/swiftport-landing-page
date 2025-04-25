import { Component } from '@angular/core';
import {PricingCardComponent} from '../../share/pricing-card/pricing-card.component';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  imports: [
    PricingCardComponent,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = [

    {
      title: 'Plan Básico',
      features: ['Hasta 50 tareas/mes', 'Reportes limitados', '1 usuario supervisor','Soporte'],
      price: '$50'
    },
    {
      title: 'Plan Pro',
      features: ['Hasta 500 tareas/mes', 'Reportes limitados', '2 usuario supervisor','Soporte'],
      price: '$100'
    },
    {
      title: 'Plan Empresarial',
      features: ['Tareas ilimitadas', 'Integración con ERP', 'Usuarios ilimitados', 'Soporte prioritario'],
      price: '$250'
    }
  ];


}
