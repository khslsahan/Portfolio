import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('dark');

  constructor() {
    try {
      // Check for saved theme preference or default to dark
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        this.currentTheme.next(savedTheme);
        this.applyTheme(savedTheme);
      } else {
        // Default to dark theme
        this.applyTheme('dark');
      }
    } catch (error) {
      console.warn('Theme service error:', error);
      // Fallback to dark theme
      this.applyTheme('dark');
    }
  }

  getTheme(): Observable<Theme> {
    return this.currentTheme.asObservable();
  }

  toggleTheme(): void {
    try {
      const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
      this.currentTheme.next(newTheme);
      this.applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  }

  private applyTheme(theme: Theme): void {
    try {
      const body = document.body;
      if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }
}
