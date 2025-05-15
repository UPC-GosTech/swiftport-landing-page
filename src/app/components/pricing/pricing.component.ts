import { Component } from '@angular/core';
import { PricingCardComponent } from '../../share/pricing-card/pricing-card.component';
import { NgForOf } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PricingCardComponent,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  constructor(private translate: TranslateService) {}

  plans = [
    {
      title: 'pricing.plans.basic.title',
      features: [
        'pricing.plans.basic.features.f1',
        'pricing.plans.basic.features.f2',
        'pricing.plans.basic.features.f3',
        'pricing.plans.basic.features.f4'
      ],
      price: 'pricing.plans.basic.price'
    },
    {
      title: 'pricing.plans.pro.title',
      features: [
        'pricing.plans.pro.features.f1',
        'pricing.plans.pro.features.f2',
        'pricing.plans.pro.features.f3',
        'pricing.plans.pro.features.f4'
      ],
      price: 'pricing.plans.pro.price'
    },
    {
      title: 'pricing.plans.enterprise.title',
      features: [
        'pricing.plans.enterprise.features.f1',
        'pricing.plans.enterprise.features.f2',
        'pricing.plans.enterprise.features.f3',
        'pricing.plans.enterprise.features.f4'
      ],
      price: 'pricing.plans.enterprise.price'
    }
  ];

  getTranslatedFeatures(features: string[]): string[] {
    return features.map(feature => this.translate.instant(feature));
  }
}
