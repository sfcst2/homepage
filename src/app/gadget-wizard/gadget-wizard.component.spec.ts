import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetWizardComponent } from './gadget-wizard.component';

describe('GadgetWizardComponent', () => {
  let component: GadgetWizardComponent;
  let fixture: ComponentFixture<GadgetWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
