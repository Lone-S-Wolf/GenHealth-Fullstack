import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import type { TopDoctorsSection, DoctorCard } from '../../models/landing.model';
import { DoctorCardComponent } from '../doctor-card/doctor-card';

@Component({
  selector: 'app-top-doctors-section',
  standalone: true,
  imports: [CommonModule, DoctorCardComponent],
  templateUrl: './top-doctors-section.html',
})
export class TopDoctorsSectionComponent {
  @Input({ required: true }) section: TopDoctorsSection | null = null;

  trackDoctor = (_index: number, doc: DoctorCard) => doc.id;
}
