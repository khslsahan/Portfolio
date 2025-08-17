import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  typingTexts = [
    'Enterprise Architect',
    'Cloud-Native Developer',
    'System Designer',
    'Performance Engineer',
    'DevOps Specialist',
    'AI/ML Engineer'
  ];
  
  currentTextIndex = 0;
  currentText = '';
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 2000;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    const currentFullText = this.typingTexts[this.currentTextIndex];
    
    if (this.isDeleting) {
      // Deleting text
      this.currentText = currentFullText.substring(0, this.currentText.length - 1);
      setTimeout(() => this.typeText(), this.deletingSpeed);
      
      if (this.currentText === '') {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.typingTexts.length;
        setTimeout(() => this.typeText(), 500);
      }
    } else {
      // Typing text
      this.currentText = currentFullText.substring(0, this.currentText.length + 1);
      setTimeout(() => this.typeText(), this.typingSpeed);
      
      if (this.currentText === currentFullText) {
        setTimeout(() => {
          this.isDeleting = true;
          this.typeText();
        }, this.pauseTime);
      }
    }
  }

  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  onImageError(event: any) {
    console.error('Image failed to load:', event);
    // Hide the image and show fallback icon
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    
    // Show fallback icon
    const fallbackIcon = document.querySelector('.fallback-icon') as HTMLElement;
    if (fallbackIcon) {
      fallbackIcon.style.display = 'block';
    }
  }

  onImageLoad() {
    console.log('Profile image loaded successfully!');
  }
}
