import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  
  isFlipped = false;

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'frontend': '#61dafb',
      'backend': '#339933',
      'fullstack': '#667eea',
      'ai-ml': '#ff6f00',
      'mobile': '#ff6b6b'
    };
    return colors[category] || '#6c757d';
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'frontend': 'fas fa-laptop-code',
      'backend': 'fas fa-server',
      'fullstack': 'fas fa-layer-group',
      'ai-ml': 'fas fa-brain',
      'mobile': 'fas fa-mobile-alt'
    };
    return icons[category] || 'fas fa-code';
  }
}
