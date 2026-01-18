import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel';
import {
  CarouselImage, AboutSection, ServicesSection,
  WhyChooseUsSection, TopDoctorsSection, TestimonialsSection
} from '../../models/landing.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';
import { AboutSectionComponent } from '../../components/about-section/about-section';
import { ServicesSectionComponent } from '../../components/services-section/services-section';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us';
import { TopDoctorsSectionComponent } from '../../components/top-doctors-section/top-doctors-section';
import { TestimonialsSectionComponent } from '../../components/testimonial-section/testimonial-section';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, HeroCarouselComponent, AboutSectionComponent,
    ServicesSectionComponent, WhyChooseUsComponent, TopDoctorsSectionComponent,
    TestimonialsSectionComponent, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  heroError: string | null = null;

  // heroSlides$ = new Observable<CarouselImage[] | null>();

  // Replace this with an injected service later
  heroSlides$ = of<CarouselImage[]>([
    {
      id: 'slide-1',
      imageUrl: './images/App-image-docs-cropped.png',
      altText: 'Doctors standing together in hospital lobby',
    },
    {
      id: 'slide-2',
      imageUrl: './images/App-image-dept-cropped.png',
      altText: 'Modern hospital building exterior',
    },
    {
      id: 'slide-3',
      imageUrl: './images/App-image-hosp-cropped.png',
      altText: 'Nurse assisting patient in ward',
    },
  ]).pipe(
    // keep the shape same even on error
    catchError((err) => {
      console.error('Error loading hero slides', err);
      this.heroError = 'Unable to load hero images. Please try again later.';
      return of<CarouselImage[]>([]);
    })
  );

  aboutError: string | null = null;

  aboutSection$ = of<AboutSection>({
    heading: 'ABOUT US',
    blocks: [
      {
        id: 'brief-about',
        title: 'Brief About',
        body: [
          'Established in 2020, GENHEALTH is a leading multispecialty hospital powered by 70+ expert doctors across 5+ specialized departments.',
          'By combining advanced medical technology with personalized attention, our team ensures every patient receives individualized care in a modern, healing environment.',
          'At GENHEALTH, our vision is clear — to be the region’s most trusted healthcare provider, blending expertise, empathy, and technology.',
          'Every day, we strive to deliver exceptional outcomes by focusing on patient comfort, safety, and continuous medical excellence.'
        ],

        imageUrl: './images/About-us-1.png',
        imageAlt: 'Doctors standing together in hospital corridor',
        layout: 'text-left',
      },
      {
        id: 'our-history',
        title: 'Our History',
        body: [
          'GENHEALTH began as a vision in 2018 when healthcare experts united to create a patient-first hospital blending advanced technology with compassionate care.',
          'From day one, we invested in state-of-the-art medical equipment and top-tier doctors and nurses, continuously expanding our team.',
          'Today, GENHEALTH stands as a trusted multispecialty hospital dedicated to enhancing patient quality of life and fostering healing and trust throughout the region.',
          'As we continue to grow, our commitment remains the same: delivering world-class healthcare rooted in compassion, innovation, and community well-being.'
        ],

        imageUrl: './images/About-us-2.png',
        imageAlt: 'GENHEALTH hospital building exterior',
        layout: 'text-right',
      },
    ],
  }).pipe(
    catchError((err) => {
      console.error('Error loading about section', err);
      this.aboutError = 'Unable to load About Us content. Please try again later.';
      return of<AboutSection | null>(null);
    })
  );

  servicesError: string | null = null;

  servicesSection$ = of<ServicesSection>({
    heading: 'OUR SERVICES',
    subtitle: 'Comprehensive, patient-first care powered by advanced technology and experienced specialists.',
    blocks: [
      {
        id: 'advanced-diagnostics',
        title: 'Advanced Diagnostic Services',
        body: [
          'At GENHEALTH, accurate diagnosis is the foundation of every treatment plan. Our diagnostic center is equipped with high-resolution MRI, CT, digital X-ray, and advanced laboratory analyzers to deliver precise, timely results.',
          'A dedicated team of radiologists and pathologists work closely with our clinicians to interpret reports quickly, helping patients begin the right treatment without delay.',
          'From routine health screenings to complex diagnostic evaluations, our protocols are designed around patient comfort, safety, and clarity at every step.'
        ],
        imageUrl: './images/service-section-1.png',
        imageAlt: 'Technician operating an MRI scanner in a modern diagnostic room',
        layout: 'text-left',
      },
      {
        id: 'emergency-critical-care',
        title: '24/7 Emergency & Critical Care',
        body: [
          'GENHEALTH’s emergency department operates round the clock with triage-based protocols that prioritize the most critical cases within minutes of arrival.',
          'Our multidisciplinary critical care team includes intensivists, emergency physicians, anesthesiologists, and trauma nurses trained to handle stroke, cardiac emergencies, accidents, and pediatric emergencies.',
          'With fully equipped resuscitation bays, dedicated ICUs, and rapid access to imaging and labs, we ensure that life-saving interventions are started without delay.'
        ],
        imageUrl: './images/service-section-2.png',
        imageAlt: 'Emergency team rushing a patient on a stretcher in the hospital corridor',
        layout: 'text-right',
      },
      {
        id: 'mother-child-care',
        title: 'Mother & Child Care',
        body: [
          'Our dedicated Mother & Child unit offers compassionate, family-centered care from pregnancy to postnatal support, combining medical expertise with a warm, reassuring environment.',
          'Expectant mothers are guided by experienced obstetricians, fetal medicine specialists, and lactation consultants, supported by a 24/7 neonatal team for high-risk deliveries.',
          'From prenatal classes and painless delivery options to neonatal intensive care for premature babies, every protocol is built around safety, bonding, and long-term wellbeing.'
        ],
        imageUrl: './images/service-section-3.png',
        imageAlt: 'New parents with a newborn in a maternity ward supported by a nurse',
        layout: 'text-left',
      },
      {
        id: 'rehab-preventive-care',
        title: 'Rehabilitation & Preventive Health',
        body: [
          'Recovery doesn’t end at discharge. GENHEALTH’s rehabilitation team helps patients regain strength, mobility, and confidence after surgery, injury, or stroke.',
          'Physiotherapists, occupational therapists, and clinical nutritionists work together to design personalized rehab and lifestyle plans tailored to each patient’s goals.',
          'Our preventive health programs—including annual check-ups, cardiac risk assessments, and lifestyle counseling—are focused on identifying issues early and empowering patients to stay healthy longer.'
        ],
        imageUrl: './images/service-section-4.png',
        imageAlt: 'Physiotherapist assisting a patient with guided rehabilitation exercises',
        layout: 'text-right',
      },
    ],
  }).pipe(
    catchError((err) => {
      console.error('Error loading services section', err);
      this.servicesError = 'Unable to load services at the moment. Please try again later.';
      return of<ServicesSection | null>(null);
    })
  );

  whyError: string | null = null;

  whyChooseUs$ = of<WhyChooseUsSection>({
    heading: 'WHY CHOOSE GENHEALTH?',
    reasons: [
      {
        id: 'experienced-doctors',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: '70+ expert doctors across multiple specialties'
      },
      {
        id: 'advanced-technology',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Cutting-edge medical equipment and diagnostics'
      },
      {
        id: 'patient-centered-care',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Compassionate, patient-first treatment approach'
      },
      {
        id: '24x7-emergency',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Round-the-clock emergency and critical care'
      },
      {
        id: 'personalized-treatment',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Personalized treatment plans for every patient'
      },
      {
        id: 'modern-infrastructure',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Modern infrastructure with fully equipped ICUs'
      },
      {
        id: 'trusted-by-thousands',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Trusted by over 10,000+ patients and families'
      },
      {
        id: 'holistic-wellbeing',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Holistic wellness and preventive health programs'
      },
      {
        id: 'nabh-compliant',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'NABH-guided safety and quality protocols'
      },
      {
        id: 'affordable-care',
        iconUrl: './icons/Genhealth-logo-dark.png',
        text: 'Affordable, transparent pricing with no hidden costs'
      }
    ],
  }).pipe(
    catchError((err) => {
      console.error('Error loading Why Choose Us section', err);
      this.whyError = 'Unable to load this section at the moment.';
      return of<WhyChooseUsSection | null>(null);
    })
  );

  topDoctorsError: string | null = null;

  topDoctorsSection$ = of<TopDoctorsSection>({
    heading: 'OUR TOP DOCTORS',
    subtitle: 'Highly experienced specialists dedicated to delivering compassionate, evidence-based care.',
    doctors: [
      {
        id: 'doc-ananya-rao',
        name: 'Dr. Ananya Rao',
        rating: 4.9,
        experienceYears: 15,
        speciality: 'Consultant Cardiologist',
        bio: 'Dr. Ananya Rao specializes in interventional cardiology, complex angioplasties, and cardiac risk management with a strong focus on preventive heart care.',
        photoUrl: '/assets/doctors/dr-ananya-rao.jpg',
      },
      {
        id: 'doc-arjun-menon',
        name: 'Dr. Arjun Menon',
        rating: 4.8,
        experienceYears: 12,
        speciality: 'Senior Orthopedic Surgeon',
        bio: 'Dr. Arjun Menon is known for minimally invasive joint replacement surgeries and sports injury management, helping patients return to an active lifestyle.',
        photoUrl: '/assets/doctors/dr-arjun-menon.jpg',
      },
      {
        id: 'doc-meera-kapoor',
        name: 'Dr. Meera Kapoor',
        rating: 5.0,
        experienceYears: 14,
        speciality: 'Consultant Obstetrician & Gynecologist',
        bio: 'Dr. Meera Kapoor has extensive experience in high-risk pregnancies, painless deliveries, and women’s health, with a strong emphasis on patient education.',
        photoUrl: '/assets/doctors/dr-meera-kapoor.jpg',
      },
      {
        id: 'doc-rahul-sen',
        name: 'Dr. Rahul Sen',
        rating: 4.7,
        experienceYears: 11,
        speciality: 'Senior Neurologist',
        bio: 'Dr. Rahul Sen manages complex neurological disorders including stroke, epilepsy, and movement disorders with an evidence-based, multidisciplinary approach.',
        photoUrl: '/assets/doctors/dr-rahul-sen.jpg',
      },
      {
        id: 'doc-sneha-iyer',
        name: 'Dr. Sneha Iyer',
        rating: 4.9,
        experienceYears: 10,
        speciality: 'Consultant Pediatrician',
        bio: 'Dr. Sneha Iyer provides comprehensive child care, including newborn follow-up, vaccinations, and chronic disease management in children.',
        photoUrl: '/assets/doctors/dr-sneha-iyer.jpg',
      },
      {
        id: 'doc-vikram-sharma',
        name: 'Dr. Vikram Sharma',
        rating: 4.8,
        experienceYears: 13,
        speciality: 'Senior General & Laparoscopic Surgeon',
        bio: 'Dr. Vikram Sharma is skilled in advanced laparoscopic procedures, day-care surgeries, and emergency surgical care with fast recovery protocols.',
        photoUrl: '/assets/doctors/dr-vikram-sharma.jpg',
      },
    ],
  }).pipe(
    catchError((err) => {
      console.error('Error loading top doctors', err);
      this.topDoctorsError = 'Unable to load top doctors at the moment. Please try again later.';
      return of<TopDoctorsSection | null>(null);
    })
  );

  testimonialsError: string | null = null;

  testimonialsSection$ = of<TestimonialsSection>({
    heading: 'WHAT OUR PATIENTS SAY',
    subtitle: 'Real experiences from patients who trusted GENHEALTH with their care.',
    testimonials: [
      {
        id: 'tst-ravi-kumar',
        name: 'Ravi Kumar',
        role: 'Cardiac Patient',
        rating: 5,
        message: 'From the moment I entered GENHEALTH, I felt reassured. The team explained everything clearly and supported me throughout recovery.',
        photoUrl: '/assets/testimonials/ravi-kumar.jpg',
      },
      {
        id: 'tst-aisha-shaikh',
        name: 'Aisha Shaikh',
        role: 'Maternity Patient',
        rating: 5,
        message: 'My delivery was smooth and comforting. The doctors and nurses ensured both my baby and I were always safe and informed.',
        photoUrl: '/assets/testimonials/aisha-shaikh.jpg',
      },
      {
        id: 'tst-sunil-mehta',
        name: 'Sunil Mehta',
        role: 'Orthopedic Surgery Patient',
        rating: 4.8,
        message: 'Knee replacement surgery recovery was faster than expected. The rehabilitation staff kept me motivated every day.',
        photoUrl: '/assets/testimonials/sunil-mehta.jpg',
      },
      {
        id: 'tst-neha-verma',
        name: 'Neha Verma',
        role: 'Parent of Pediatric Patient',
        rating: 4.9,
        message: 'Nurses handled my child with so much care. The pediatric team patiently answered all our concerns.',
        photoUrl: '/assets/testimonials/neha-verma.jpg',
      },
      {
        id: 'tst-rahul-desai',
        name: 'Rahul Desai',
        role: 'Health Check-up Package',
        rating: 4.7,
        message: 'Preventive check-up was very organized. The doctors explained my reports and gave helpful lifestyle guidance.',
        photoUrl: '/assets/testimonials/rahul-desai.jpg',
      }
    ]
  }).pipe(
    catchError((err) => {
      console.error('Error loading testimonials', err);
      this.testimonialsError = 'Unable to load testimonials at the moment.';
      return of<TestimonialsSection | null>(null);
    })
  );
}
