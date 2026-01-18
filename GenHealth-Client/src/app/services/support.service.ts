import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SupportItem } from '../models/support.model';

@Injectable({ providedIn: 'root' })
export class SupportService {

    // Mock API response
    getSupportItems(): Observable<SupportItem[]> {
        return of([
            {
                title: 'How do I reset my password?',
                details:
                    'Go to the Login page → click “Forgot Password” → follow the instructions sent to your email.',
            },
            {
                title: 'How to book an appointment?',
                details:
                    'Navigate to Appointments → choose a doctor → select a time slot → confirm your booking.',
            },
            {
                title: 'Payment failed. What should I do?',
                details:
                    'Please try using another payment method or check if your bank has blocked the transaction.',
            },
            {
                title: 'How can I update my profile?',
                details:
                    'Go to the Profile section → click Edit → update your information → save changes.',
            },
            {
                title: 'Where can I view my medical reports?',
                details:
                    'Go to Reports → select the desired report → click download or view online.',
            },
        ]);
    }
}
