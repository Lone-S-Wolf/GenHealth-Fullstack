import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportItem } from './support-item';

describe('SupportItem', () => {
  let component: SupportItem;
  let fixture: ComponentFixture<SupportItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
