import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';
  categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'ai-ml', label: 'AI/ML' },
    { value: 'mobile', label: 'Mobile' }
  ];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getProjectCount(category: string): number {
    if (category === 'all') {
      return this.projects.length;
    }
    return this.projects.filter(project => project.category === category).length;
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
