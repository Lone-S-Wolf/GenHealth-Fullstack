// src/app/features/patient/patient.routes.ts
import { Routes } from '@angular/router';
import { PatientLayoutComponent } from './layout/patient-layout-component/patient-layout-component';
import { PatientDashboardPage } from './pages/patient-dashboard-page/patient-dashboard-page';
import { PatientProfilePage } from './pages/patient-profile-page/patient-profile-page';
import { SupportPage } from '../../pages/support-page/support-page';

export const PATIENT_ROUTES: Routes = [
  {
    path: '',
    component: PatientLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PatientDashboardPage,
        data: { title: 'PATIENT DASHBOARD' }
      },
      {
        path: 'profile',
        component: PatientProfilePage,
        data: { title: 'PATIENT PROFILE' }
      },
      {
        path: 'support',
        component: SupportPage,
        data: { title: 'PATIENT SUPPORT' }
      },
      {
        path: '**',
        component: PatientDashboardPage,
        data: { title: 'PATIENT DASHBOARD' }
      }
    ],
  },
];
