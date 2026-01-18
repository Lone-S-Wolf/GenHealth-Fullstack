import { Routes } from '@angular/router';
import { DoctorDashboardPage } from './pages/doctor-dashboard-page/doctor-dashboard-page';
import { DoctorLayoutComponent } from './layout/doctor-layout-component/doctor-layout-component';
import { DoctorProfilePage } from './pages/doctor-profile-page/doctor-profile-page';
import { SupportPage } from '../../pages/support-page/support-page';

export const DOCTOR_ROUTES: Routes = [
  {
    path: '',
    component: DoctorLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DoctorDashboardPage,
        data: { title: 'DOCTOR DASHBOARD' },
      },
      {
        path: 'profile',
        component: DoctorProfilePage,
        data: { title: 'DOCTOR PROFILE' },
      },
      {
        path: 'support',
        component: SupportPage,
        data: { title: 'DOCTOR SUPPORT' },
      },
      {
        path: '**',
        component: DoctorDashboardPage,
        data: { title: 'DOCTOR DASHBOARD' },
      }
    ],
  },
];
