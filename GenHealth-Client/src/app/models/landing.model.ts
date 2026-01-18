export interface CarouselImage {
  id: string;
  imageUrl: string;
  altText?: string;
}

export interface AboutBlock {
  id: string;
  title: string;
  body: string[];
  imageUrl: string;
  imageAlt?: string;
  layout: 'text-left' | 'text-right';
}

export interface AboutSection {
  heading: string;
  blocks: AboutBlock[];
}

export interface ServiceBlock {
  id: string;
  title: string;
  body: string[];
  imageUrl: string;
  imageAlt?: string;
  layout: 'text-left' | 'text-right';
}

export interface ServicesSection {
  heading: string;
  subtitle?: string;
  blocks: ServiceBlock[];
}

export interface WhyChooseReason {
  id: string;
  iconUrl: string;
  text: string;
}

export interface WhyChooseUsSection {
  heading: string;
  reasons: WhyChooseReason[];
}

export interface DoctorCard {
  id: string;
  name: string;
  rating: number;
  experienceYears: number;
  speciality: string;
  bio: string;
  photoUrl: string;
}

export interface TopDoctorsSection {
  heading: string;
  subtitle?: string;
  doctors: DoctorCard[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  message: string;
  photoUrl: string;
}

export interface TestimonialsSection {
  heading: string;
  subtitle?: string;
  testimonials: Testimonial[];
}