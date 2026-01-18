import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SupportItem } from '../../models/support.model';
import { SupportService } from '../../services/support.service';
import { SupportItemComponent } from '..//../components/support-item/support-item';

@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [CommonModule, SupportItemComponent],
  templateUrl: './support-page.html',
  styleUrl: './support-page.css',
})
export class SupportPage {
  // 1. Fetch support items from service (mock or real HTTP)
  private readonly items$: Observable<SupportItem[]>;

  // 2. Observable holding current search term
  private readonly searchTerm$ = new BehaviorSubject<string>('');

  // 3. Final combined filtered stream for template
  readonly filteredItems$: Observable<SupportItem[]>;

  constructor(private supportService: SupportService) {
    // Call the service directly; async pipe will subscribe/unsubscribe
    this.items$ = this.supportService.getSupportItems();

    // Combine items + search query → emit filtered list
    this.filteredItems$ = combineLatest([this.items$, this.searchTerm$]).pipe(
      map(([items, query]) => {
        const q = query.trim().toLowerCase();
        if (!q) return items ?? [];

        return (items ?? []).filter(item =>
          (item.title ?? '').toLowerCase().includes(q) ||
          (item.details ?? '').toLowerCase().includes(q)
        );
      })
    );
  }

  // Called when user types or presses search
  applyFilter(query?: string) {
    this.searchTerm$.next(query ?? '');
  }
}
