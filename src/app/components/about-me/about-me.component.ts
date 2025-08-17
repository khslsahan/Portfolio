import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Kotlin',
      level: 95,
      category: 'backend',
      icon: 'fab fa-kotlin',
      color: '#7f52ff'
    },
    {
      name: 'Spring Boot',
      level: 90,
      category: 'backend',
      icon: 'fas fa-leaf',
      color: '#6db33f'
    },
    {
      name: 'React',
      level: 85,
      category: 'frontend',
      icon: 'fab fa-react',
      color: '#61dafb'
    },
    {
      name: 'Angular',
      level: 80,
      category: 'frontend',
      icon: 'fab fa-angular',
      color: '#dd0031'
    },
    {
      name: 'TypeScript',
      level: 85,
      category: 'frontend',
      icon: 'fab fa-js-square',
      color: '#3178c6'
    },
    {
      name: 'Java',
      level: 80,
      category: 'backend',
      icon: 'fab fa-java',
      color: '#007396'
    },
    {
      name: 'Docker',
      level: 85,
      category: 'devops',
      icon: 'fab fa-docker',
      color: '#2496ed'
    },
    {
      name: 'Kubernetes',
      level: 75,
      category: 'devops',
      icon: 'fas fa-dharmachakra',
      color: '#326ce5'
    },
    {
      name: 'MongoDB',
      level: 80,
      category: 'database',
      icon: 'fas fa-database',
      color: '#47a248'
    },
    {
      name: 'MySQL',
      level: 75,
      category: 'database',
      icon: 'fas fa-database',
      color: '#4479a1'
    },
    {
      name: 'Redis',
      level: 70,
      category: 'database',
      icon: 'fas fa-database',
      color: '#dc382d'
    },
    {
      name: 'Machine Learning',
      level: 70,
      category: 'ai-ml',
      icon: 'fas fa-brain',
      color: '#ff6f00'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
