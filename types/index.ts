export type ServiceType = 'higher-education' | 'japanese-language' | 'research' | 'employment';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  department: string;
  currentYear: string;
  graduationYear: string;
  japaneseProficiency: string;
  avatar?: string;
  enrolledServices?: ServiceType[];
  createdAt: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  domain: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: 'Recruiting' | 'In Progress' | 'Published' | 'Under Review';
  teamSize: number;
  openPositions: number;
  mentor: string;
  leadStudent: string;
  requirements: string[];
  duration: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  skills: string[];
  japaneseLevel: string;
  experience: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  description: string;
  responsibilities: string[];
  qualifications: string[];
  isDemo: boolean;
}

export interface UniversityProgram {
  id: string;
  university: string;
  country: string;
  flag: string;
  degrees: string[];
  ranking: string;
  scholarshipAvailable: boolean;
  intake: string;
  tuitionRange: string;
  popularFields: string[];
  description: string;
}

export interface JapaneseCourse {
  level: string;
  kanjiCount: string;
  vocabularyCount: string;
  grammarPoints: string;
  estimatedHours: string;
  description: string;
  suitableFor: string;
  keyTopics: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  currentOrganization: string;
  destination: string;
  image: string;
  quote: string;
  service: string;
  year: string;
  isVerified?: boolean;
  tag?: string;
  badgeText?: string;
  programOrLevel?: string;
}
