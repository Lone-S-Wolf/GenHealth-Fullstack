import {
  CommonModule,
} from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import type { WhyChooseUsSection, WhyChooseReason } from '../../models/landing.model';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.html',
})
export class WhyChooseUsComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input({ required: true }) section: WhyChooseUsSection | null = null;

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;

  reasonsExtended: WhyChooseReason[] = [];

  private animationFrame: number | null = null;
  private isPaused = false;
  private viewInitialized = false;

  // You can now use a *much smaller* speed safely
  private readonly scrollSpeed = 0.25;

  private scrollOffset = 0; // floating-point scroll accumulator

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['section']) {
      if (this.section?.reasons?.length) {
        this.reasonsExtended = [
          ...this.section.reasons,
          ...this.section.reasons,
        ];
        this.tryStartOrRestart();
      } else {
        this.reasonsExtended = [];
        this.stopScrolling();
      }
    }
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.tryStartOrRestart();
  }

  ngOnDestroy(): void {
    this.stopScrolling();
  }

  pauseScrolling(): void {
    this.isPaused = true;
  }

  resumeScrolling(): void {
    this.isPaused = false;
  }

  private tryStartOrRestart(): void {
    if (!this.viewInitialized) return;
    if (!this.section?.reasons?.length) return;
    if (!this.scrollContainer) return;

    this.stopScrolling();

    const el = this.scrollContainer.nativeElement;
    el.scrollLeft = 0;
    this.scrollOffset = 0;

    this.startScrolling();
  }

  private startScrolling(): void {
    const step = () => {
      if (!this.isPaused && this.scrollContainer) {
        const el = this.scrollContainer.nativeElement;

        // update floating-point offset
        this.scrollOffset += this.scrollSpeed;

        // apply rounded offset to DOM
        el.scrollLeft = Math.floor(this.scrollOffset);

        // reset when reaching half of total width
        if (this.scrollOffset >= el.scrollWidth / 2) {
          this.scrollOffset = 0;
          el.scrollLeft = 0;
        }
      }

      this.animationFrame = requestAnimationFrame(step);
    };

    this.animationFrame = requestAnimationFrame(step);
  }

  private stopScrolling(): void {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
}
