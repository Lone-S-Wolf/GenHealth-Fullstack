import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faq } from '../../models/faq.model';
import { FaqItem } from '../faq-item/faq-item';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, FaqItem],
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.css'],
})

export class FaqSection {
  private _allFaqs: Faq[] = [];
  filteredFaqs: Faq[] = [];

  @Input()
  set faqs(value: Faq[] | null) {
    this._allFaqs = value ? [...value] : [];
    this.filteredFaqs = [...this._allFaqs];
  }
  get faqs() {
    return this._allFaqs;
  }

  filterFaqs(query?: string) {
    const q = (query ?? '').trim().toLowerCase();

    if (!q) {
      this.filteredFaqs = [...this._allFaqs];
      return;
    }

    this.filteredFaqs = this._allFaqs.filter(f =>
      (f.question ?? '').toLowerCase().includes(q) ||
      (f.answer ?? '').toLowerCase().includes(q)
    );
  }
}
