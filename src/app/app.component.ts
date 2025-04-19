import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FunctionComponent} from '../share/function/function.component';
import {
  FuncionalidadesSwiftportComponent
} from '../components/funcionalidades-swiftport/funcionalidades-swiftport.component';
import {BeneficiosComponent} from '../components/beneficios/beneficios.component';
import {WhatComponent} from '../components/what/what.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FuncionalidadesSwiftportComponent,
    BeneficiosComponent,
    WhatComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiftport-landing-page';
}
