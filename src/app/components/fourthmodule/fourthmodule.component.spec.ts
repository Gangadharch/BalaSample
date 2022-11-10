import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthmoduleComponent } from './fourthmodule.component';

describe('FourthmoduleComponent', () => {
  let component: FourthmoduleComponent;
  let fixture: ComponentFixture<FourthmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
