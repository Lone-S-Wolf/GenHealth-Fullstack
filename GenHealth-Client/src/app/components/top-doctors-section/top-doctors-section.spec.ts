import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDoctorsSection } from './top-doctors-section';

describe('TopDoctorsSection', () => {
  let component: TopDoctorsSection;
  let fixture: ComponentFixture<TopDoctorsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopDoctorsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDoctorsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
