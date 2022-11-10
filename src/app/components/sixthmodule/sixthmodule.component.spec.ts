import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthmoduleComponent } from './sixthmodule.component';

describe('SixthmoduleComponent', () => {
  let component: SixthmoduleComponent;
  let fixture: ComponentFixture<SixthmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
