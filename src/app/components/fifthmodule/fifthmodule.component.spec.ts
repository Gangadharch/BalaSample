import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthmoduleComponent } from './fifthmodule.component';

describe('FifthmoduleComponent', () => {
  let component: FifthmoduleComponent;
  let fixture: ComponentFixture<FifthmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
