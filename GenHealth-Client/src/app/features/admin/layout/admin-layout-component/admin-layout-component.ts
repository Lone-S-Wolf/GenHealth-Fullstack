import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { AdminNavbarComponent } from "../../components/admin-navbar/admin-navbar";

@Component({
  selector: 'app-admin-layout-component',
  standalone: true,
  imports: [RouterOutlet, AdminNavbarComponent],
  templateUrl: './admin-layout-component.html',
  styleUrl: './admin-layout-component.css',
})
export class AdminLayoutComponent {
  // Sidebar open state as signal
  isSidebarOpen = signal(true);

  // Current page title shown in navbar
  currentPageTitle = signal('Admin Profile');

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  constructor() {
    const sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        const newTitle = data['title'] ?? 'Unknown Page';
        this.currentPageTitle.set(newTitle);
      });

    // Auto-cleanup when component destroyed
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }
}
