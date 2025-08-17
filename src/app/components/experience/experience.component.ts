import { Component } from '@angular/core';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education';
  icon: string;
  color: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Enterprise Software Company',
      period: 'Jan 2025 - Present',
      description: 'Leading development of enterprise solutions using Kotlin, Spring Boot, and modern web technologies. Contributing to high-impact projects and mentoring junior developers.',
      technologies: ['Kotlin', 'Spring Boot', 'React', 'Docker', 'Kubernetes', 'MySQL'],
      type: 'work',
      icon: 'fas fa-briefcase',
      color: '#0ea5e9'
    },
    {
      id: 2,
      title: 'Associate Software Engineer',
      company: 'Enterprise Software Company',
      period: 'Feb 2023 - Dec 2024',
      description: 'Developed and maintained critical systems including AI-powered sales agents, high-performance URL resolution systems, and SD-WAN management platforms. Implemented key features and bug fixes.',
      technologies: ['Kotlin', 'Spring Boot', 'React', 'MongoDB', 'Docker', 'Redis'],
      type: 'work',
      icon: 'fas fa-laptop-code',
      color: '#06b6d4'
    },
    {
      id: 3,
      title: 'Trainee Associate Software Engineer',
      company: 'Financial Technology Company',
      period: 'Jan 2021 - Jul 2021',
      description: 'Contributed to database migration from MySQL to Oracle, developed SMS API endpoints, and enhanced HSM key import tool functionality.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Oracle', 'Cryptography'],
      type: 'work',
      icon: 'fas fa-code',
      color: '#38bdf8'
    },
    {
      id: 4,
      title: 'Bachelor of Computer Science (Special)',
      company: 'University of Ruhuna',
      period: '2018 - 2022',
      description: 'Graduated with Second Class - Upper Division (GPA: 3.58). Specialized in software engineering and artificial intelligence. Completed research project on sentiment analysis using BERT.',
      technologies: ['Java', 'Python', 'PyTorch', 'NLP', 'Machine Learning', 'Data Structures'],
      type: 'education',
      icon: 'fas fa-graduation-cap',
      color: '#10b981'
    },
    {
      id: 5,
      title: 'G.C.E Advanced Level',
      company: 'Physical Science Stream',
      period: '2017',
      description: 'Completed Advanced Level examination with Z-score: 1.5689. Specialized in Mathematics, Physics, and Chemistry.',
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'English'],
      type: 'education',
      icon: 'fas fa-award',
      color: '#f59e0b'
    }
  ];

  getWorkExperiences(): ExperienceItem[] {
    return this.experiences.filter(exp => exp.type === 'work');
  }

  getEducationExperiences(): ExperienceItem[] {
    return this.experiences.filter(exp => exp.type === 'education');
  }
}
