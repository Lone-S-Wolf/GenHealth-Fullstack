import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import type { CarouselImage } from '../../models/landing.model';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
})
export class HeroCarouselComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) slides: CarouselImage[] | null = null;

  currentIndex = 0;
  private slideTimer: ReturnType<typeof setInterval> | null = null;
  private readonly intervalMs = 3000;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slides']) {
      this.currentIndex = 0;

      if (this.slides && this.slides.length > 1) {
        this.restartAutoSlide();
      } else {
        this.clearAutoSlide();
      }
    }
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  get hasSlides(): boolean {
    return Array.isArray(this.slides) && this.slides.length > 0;
  }

  get activeSlide(): CarouselImage | null {
    if (!this.hasSlides) return null;
    return this.slides![this.currentIndex];
  }

  next(): void {
    if (!this.hasSlides || this.slides!.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.slides!.length;
  }

  prev(): void {
    if (!this.hasSlides || this.slides!.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.slides!.length) % this.slides!.length;
  }

  goTo(index: number): void {
    if (!this.hasSlides) return;
    if (index < 0 || index >= this.slides!.length) return;
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  private startAutoSlide(): void {
    if (this.slideTimer || !this.hasSlides || this.slides!.length <= 1) return;

    this.slideTimer = setInterval(() => {
      this.next();
    }, this.intervalMs);
  }

  private clearAutoSlide(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    }
  }

  private restartAutoSlide(): void {
    this.clearAutoSlide();
    this.startAutoSlide();
  }
}
