import { Component, signal, inject, DestroyRef } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { DoctorNavbarComponent } from "../../components/doctor-navbar/doctor-navbar";

@Component({
  selector: 'app-doctor-layout-component',
  imports: [RouterOutlet, DoctorNavbarComponent],
  templateUrl: './doctor-layout-component.html',
  styleUrl: './doctor-layout-component.css',
})
export class DoctorLayoutComponent {
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
