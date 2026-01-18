import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  imports: [CommonModule],
  templateUrl: './faq-item.html',
  styleUrl: './faq-item.css',
})
export class FaqItem {
  @Input() question: string = '';
  @Input() answer: string = '';
  @Input() errorMode: boolean = false;

  opened = signal(false);

  toggle() {
    if (this.errorMode) return;
    this.opened.update(v => !v);
  }
}
