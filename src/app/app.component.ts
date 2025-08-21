import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sahan Lakshitha - Software Engineer Portfolio';

  constructor(private router: Router) {}

  ngOnInit() {
    try {
      // Simple initialization
      console.log('App component initialized successfully');
    } catch (error) {
      console.error('Error in app component init:', error);
    }
  }

  scrollToSection(sectionId: string) {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        // Simple smooth scrolling
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.warn(`Section ${sectionId} not found`);
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
      // Fallback to simple scroll
      try {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView();
        }
      } catch (fallbackError) {
        console.error('Fallback scroll also failed:', fallbackError);
      }
    }
  }
}
