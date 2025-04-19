import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatComponent } from './what.component';

describe('WhatComponent', () => {
  let component: WhatComponent;
  let fixture: ComponentFixture<WhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
