import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { DoctorCard } from '../../models/landing.model';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-card.html',
})
export class DoctorCardComponent {
  @Input({ required: true }) doctor!: DoctorCard;

  readonly stars = [1, 2, 3, 4, 5];

  get roundedRating(): number {
    return Math.round(this.doctor.rating);
  }
}
