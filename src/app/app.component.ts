import { Component } from '@angular/core';
import {
  FuncionalidadesSwiftportComponent
} from './components/funcionalidades-swiftport/funcionalidades-swiftport.component';
import {BeneficiosComponent} from './components/beneficios/beneficios.component';
import {WhatComponent} from './components/what/what.component';
import {WhyComponent} from './components/why/why.component';
import {HowComponent} from './components/how/how.component';
import {FaqComponent} from './components/faq/faq.component';
import {HeaderComponent} from './components/header/header.component';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {PricingComponent} from './components/pricing/pricing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FuncionalidadesSwiftportComponent,
    BeneficiosComponent,
    WhatComponent,
    WhyComponent,
    HowComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    PricingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiftport-landing-page';
}
