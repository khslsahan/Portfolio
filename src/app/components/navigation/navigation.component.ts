import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Output() scrollToSection = new EventEmitter<string>();
  
  isMenuOpen = false;
  currentTheme = 'dark';
  private themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    try {
      this.themeSubscription = this.themeService.getTheme().subscribe({
        next: (theme) => {
          this.currentTheme = theme;
        },
        error: (error) => {
          console.error('Error getting theme:', error);
          this.currentTheme = 'dark'; // Fallback
        }
      });
    } catch (error) {
      console.error('Error in navigation init:', error);
      this.currentTheme = 'dark'; // Fallback
    }
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  toggleMenu() {
    try {
      this.isMenuOpen = !this.isMenuOpen;
    } catch (error) {
      console.error('Error toggling menu:', error);
      this.isMenuOpen = false; // Reset to safe state
    }
  }

  closeMenu() {
    try {
      this.isMenuOpen = false;
    } catch (error) {
      console.error('Error closing menu:', error);
      this.isMenuOpen = false; // Reset to safe state
    }
  }

  onScrollToSection(sectionId: string) {
    try {
      // Emit scroll event
      this.scrollToSection.emit(sectionId);
      this.closeMenu();
    } catch (error) {
      console.error('Error scrolling to section:', error);
      this.closeMenu(); // Ensure menu is closed
    }
  }

  toggleTheme() {
    try {
      this.themeService.toggleTheme();
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  }
}
