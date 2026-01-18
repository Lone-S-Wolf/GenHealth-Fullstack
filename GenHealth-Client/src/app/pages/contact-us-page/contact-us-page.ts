import { Component } from '@angular/core';
import { ContactInfoFormComponent } from '../../components/contact-us-info-form/contact-us-info-form';
import { FaqSection } from '../../components/faq-section/faq-section';
import { Faq } from '../../models/faq.model';

@Component({
  selector: 'app-contact-us-page',
  imports: [ContactInfoFormComponent, FaqSection],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css',
})
export class ContactUsPage {
  faqList: Faq[] = [];

  ngOnInit() {
    this.faqList = [
      {
        "question": "What are your hospital visiting hours?",
        "answer": "Our general visiting hours are from 10:00 AM to 1:00 PM and 4:00 PM to 7:00 PM daily. Some departments may have restricted access for patient recovery."
      },
      {
        "question": "How do I book an appointment with a doctor?",
        "answer": "You can book an appointment through our website, mobile app, or by calling our reception desk. Walk-in appointments are also accepted based on doctor availability."
      },
      {
        "question": "Do you accept health insurance?",
        "answer": "Yes, we accept most major health insurance providers. Please check with our billing desk for your specific insurance coverage and required documentation."
      },
      {
        "question": "Do you offer emergency services 24/7?",
        "answer": "Yes, our Emergency Department operates 24/7 with fully equipped trauma care, on-call specialists, and advanced diagnostic support."
      },
      {
        "question": "What specialties are available at GENHEALTH?",
        "answer": "We offer multispecialty care including cardiology, orthopedics, pediatrics, neurology, dermatology, gynecology, and general medicine, among others."
      },
      {
        "question": "Is parking available at the hospital?",
        "answer": "Yes, we provide dedicated visitor parking with security assistance. Accessible parking spaces are also available near the main entrance."
      },
      {
        "question": "Can I get prescription refills online?",
        "answer": "Yes, patients can request prescription refills through our patient portal or mobile app. The doctor will review and approve if appropriate."
      },
      {
        "question": "What COVID-19 safety measures does the hospital follow?",
        "answer": "We follow strict safety protocols including sanitization, mandatory masking in sensitive areas, symptom screening, and separate zones for respiratory cases."
      },
      {
        "question": "How do I obtain my medical records?",
        "answer": "You can request medical records through our online portal or by visiting our records department. Verification of identity is required for patient privacy."
      },
      {
        "question": "Do you provide ambulance services?",
        "answer": "Yes, our ambulance services operate 24/7 and can be requested through our emergency hotline for patient transport or urgent medical assistance."
      }
    ]
  }
}
