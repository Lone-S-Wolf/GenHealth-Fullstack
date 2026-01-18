import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsInfoForm } from './contact-us-info-form';

describe('ContactUsInfoForm', () => {
  let component: ContactUsInfoForm;
  let fixture: ComponentFixture<ContactUsInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsInfoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsInfoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
