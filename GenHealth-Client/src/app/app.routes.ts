import { Routes } from '@angular/router';
import { PublicLayout } from './layout/public-layout/public-layout';
import { LandingPage } from './pages/landing-page/landing-page';
import { ViewDoctorsPage } from './pages/view-doctors-page/view-doctors-page';
import { ContactUsPage } from './pages/contact-us-page/contact-us-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayout,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: LandingPage,
            },
            {
                path: 'doctors',
                component: ViewDoctorsPage,
            },
            {
                path: 'contact-us',
                component: ContactUsPage,
            },
            {
                path: 'login',
                component: LoginPage,
            },
        ]
    },
    {
        path: 'patient',
        loadChildren: () =>
            import('./features/patient/patient.routes').then(
                (m) => m.PATIENT_ROUTES,
            ),
    },
    {
        path: 'doctor',
        loadChildren: () =>
            import('./features/doctor/doctor.routes').then(
                (m) => m.DOCTOR_ROUTES,
            ),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./features/admin/admin.routes').then(
                (m) => m.ADMIN_ROUTES,
            ),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
