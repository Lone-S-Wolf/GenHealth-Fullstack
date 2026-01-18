import { Routes } from '@angular/router';
import { AdminDashboardPage } from './pages/admin-dashboard-page/admin-dashboard-page';
import { AdminLayoutComponent } from './layout/admin-layout-component/admin-layout-component';
import { AdminProfilePage } from './pages/admin-profile-page/admin-profile-page';
import { SupportPage } from '../../pages/support-page/support-page';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminDashboardPage,
        data: { title: 'ADMIN DASHBOARD' },
      },
      {
        path: 'profile',
        component: AdminProfilePage,
        data: { title: 'ADMIN PROFILE' },
      },
      {
        path: 'support',
        component: SupportPage,
        data: { title: 'ADMIN SUPPORT' },
      },
      {
        path: '**',
        component: AdminDashboardPage,
        data: { title: 'ADMIN DASHBOARD' },
      }
    ],
  },
];
