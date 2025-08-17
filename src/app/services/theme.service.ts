import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('light');

  constructor() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.currentTheme.next(savedTheme);
      this.applyTheme(savedTheme);
    }
  }

  getTheme(): BehaviorSubject<Theme> {
    return this.currentTheme;
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.currentTheme.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  private applyTheme(theme: Theme): void {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
