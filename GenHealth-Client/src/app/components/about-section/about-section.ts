import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { AboutSection, AboutBlock } from '../../models/landing.model';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
})
export class AboutSectionComponent {
  @Input({ required: true }) section: AboutSection | null = null;

  trackBlock = (_index: number, block: AboutBlock) => block.id;
}