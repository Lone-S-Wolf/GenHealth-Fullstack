import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorsPage } from './view-doctors-page';

describe('ViewDoctorsPage', () => {
  let component: ViewDoctorsPage;
  let fixture: ComponentFixture<ViewDoctorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDoctorsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
