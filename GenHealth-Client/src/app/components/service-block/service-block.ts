import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-block.html',
})
export class ServiceBlockComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) body: string[] = [];
  @Input({ required: true }) imageUrl!: string;
  @Input() imageAlt?: string;
  @Input() layout: 'text-left' | 'text-right' = 'text-left';
}
