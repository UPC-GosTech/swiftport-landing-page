import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadesSwiftportComponent } from './funcionalidades-swiftport.component';

describe('FuncionalidadesSwiftportComponent', () => {
  let component: FuncionalidadesSwiftportComponent;
  let fixture: ComponentFixture<FuncionalidadesSwiftportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionalidadesSwiftportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionalidadesSwiftportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
