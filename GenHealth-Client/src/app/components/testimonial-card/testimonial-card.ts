import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { Testimonial } from '../../models/landing.model';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
})
export class TestimonialCardComponent {
  @Input({ required: true }) item!: Testimonial;

  stars = [1, 2, 3, 4, 5];
}
