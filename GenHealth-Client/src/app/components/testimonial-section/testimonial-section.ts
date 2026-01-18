import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import type { TestimonialsSection, Testimonial } from '../../models/landing.model';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  templateUrl: './testimonial-section.html',
})
export class TestimonialsSectionComponent {
  @Input({ required: true }) section: TestimonialsSection | null = null;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  trackItem = (_: number, item: Testimonial) => item.id;

  scrollLeft(): void {
    const el = this.scrollContainer.nativeElement;
    const cardWidth = el.clientWidth * 0.6; // roughly one card
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  scrollRight(): void {
    const el = this.scrollContainer.nativeElement;
    const cardWidth = el.clientWidth * 0.6;
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}
