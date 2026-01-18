import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './admin-navbar.html'
})
export class AdminNavbarComponent implements OnInit, OnDestroy {
  @Input({ required: true }) pageTitle = signal<string>('Dashboard');
  @Output() toggleSidebar = new EventEmitter<void>();

  currentTime = signal<Date>(new Date());
  private clockSubscription!: Subscription;
  hasNewNotifications: boolean = true;

  ngOnInit(): void {
    this.startClock();
  }

  ngOnDestroy(): void {
    if (this.clockSubscription) {
      this.clockSubscription.unsubscribe();
    }
  }

  private startClock(): void {
    this.clockSubscription = interval(1000)
      .pipe(startWith(0))
      .subscribe(() => {
        this.currentTime.set(new Date());
      });
  }

  notificationsClicked(): void {
    this.hasNewNotifications = false;
  }
}