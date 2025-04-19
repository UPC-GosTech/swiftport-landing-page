import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-benefit',
  imports: [],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css'
})
export class BenefitComponent {
  @Input() image: string = 'assets/check.png';
  @Input() text: string = 'name';
}
