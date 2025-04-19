import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FuncionalidadesSwiftportComponent
} from '../components/funcionalidades-swiftport/funcionalidades-swiftport.component';
import {BeneficiosComponent} from '../components/beneficios/beneficios.component';
import {WhatComponent} from '../components/what/what.component';
import {WhyComponent} from '../components/why/why.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FuncionalidadesSwiftportComponent,
    BeneficiosComponent,
    WhatComponent,
    WhyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiftport-landing-page';
}
