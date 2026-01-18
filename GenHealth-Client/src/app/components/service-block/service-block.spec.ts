import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlock } from './service-block';

describe('ServiceBlock', () => {
  let component: ServiceBlock;
  let fixture: ComponentFixture<ServiceBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
