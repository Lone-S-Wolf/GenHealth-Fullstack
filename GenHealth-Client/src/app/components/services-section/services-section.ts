import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ServiceBlock, ServicesSection } from '../../models/landing.model';
import { ServiceBlockComponent } from '../service-block/service-block';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceBlockComponent],
  templateUrl: './services-section.html',
})
export class ServicesSectionComponent {
  @Input({ required: true }) section: ServicesSection | null = null;

  trackBlock = (_index: number, block: ServiceBlock) => block.id;
}
