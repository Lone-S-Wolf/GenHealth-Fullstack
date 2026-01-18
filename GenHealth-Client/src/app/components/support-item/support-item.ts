import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-support-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support-item.html',
  styleUrl: './support-item.css',
})
export class SupportItemComponent {
  @Input() title: string = '';
  @Input() details: string = '';
  @Input() errorMode = false;

  opened = signal(false);

  toggle() {
    if (this.errorMode) return;
    this.opened.update(v => !v);
  }
}
