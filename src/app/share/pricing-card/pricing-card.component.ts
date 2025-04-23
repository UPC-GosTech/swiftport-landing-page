import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  imports: [
    NgForOf
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css'
})
export class PricingCardComponent {
  @Input() title!: string;
  @Input() features!: string[];
  @Input() price!: string;
}
