import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'AI-Powered Sales Agent Platform',
      description: 'Intelligent sales automation platform that transforms customer interactions across WhatsApp, Messenger, Instagram, and websites into actionable sales opportunities. Features 24/7 customer engagement, intelligent lead scoring, and automated follow-up systems.',
      tech: ['Kotlin', 'Next.js', 'MongoDB', 'Docker', 'Kubernetes', 'Spring Boot'],
      github: 'https://github.com/khslsahan',
      demo: '#',
      featured: true,
      category: 'fullstack'
    },
    {
      id: 2,
      name: 'High-Performance URL Resolver',
      description: 'Enterprise-grade system that efficiently processes and resolves shortened URLs in real time. Designed for seamless integration with SMS firewalls, ensuring fast, accurate URL redirection while maintaining security and compliance.',
      tech: ['Kotlin', 'Redis', 'MySQL', 'Spring Boot', 'Rate Limiting', 'Licensing'],
      github: 'https://github.com/khslsahan',
      demo: '#',
      featured: true,
      category: 'backend'
    },
    {
      id: 3,
      name: 'Enterprise SD-WAN Management Platform',
      description: 'Comprehensive platform that functions as a middleware solution to Cisco SD-WAN, offering advanced SD-WAN features to enterprise customers including incident reporting, high availability, and network optimization.',
      tech: ['Kotlin', 'React', 'React Native', 'MySQL', 'Docker', 'Cisco API'],
      github: 'https://github.com/khslsahan',
      demo: '#',
      featured: true,
      category: 'fullstack'
    },
    {
      id: 4,
      name: 'Advanced Sentiment Analysis Framework',
      description: 'Innovative research project on high-quality feature selection through PoS tag-based attention mechanisms in sentiment analysis. Developed a novel framework that significantly improves accuracy of sentiment analysis for short/medium text using state-of-the-art BERT embeddings and attention mechanisms.',
      tech: ['Python', 'PyTorch', 'BERT', 'NLP', 'Machine Learning', 'Research', 'Attention Mechanisms'],
      github: 'https://github.com/khslsahan',
      demo: '#',
      featured: false,
      category: 'ai-ml'
    },
    {
      id: 5,
      name: 'Enterprise POS & Delivery Management System',
      description: 'Comprehensive point-of-sale and delivery management platform designed for retail operations. Features tablet-optimized interface, real-time inventory management, order tracking, and comprehensive reporting capabilities.',
      tech: ['Angular', 'SCSS', 'ASP.NET', 'Web Application', 'Tablet UI', 'Real-time Updates'],
      github: 'https://github.com/khslsahan',
      demo: '#',
      featured: false,
      category: 'frontend'
    },
    {
      id: 6,
      name: 'Enterprise Database Migration Tool',
      description: 'Robust database migration system that facilitates seamless transitions between different database platforms. Implemented comprehensive migration scripts, data validation, and rollback mechanisms for enterprise applications.',
      tech: ['Java', 'MySQL', 'Oracle', 'Database Migration', 'Spring Boot'],
      github: 'https://github.com/khslsahan',
      demo: '#',
      featured: false,
      category: 'backend'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    return of(this.projects.filter(project => project.category === category));
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }
}
