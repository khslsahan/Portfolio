import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PerformanceService } from '../../services/performance.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() scrollToSection = new EventEmitter<string>();
  
  isMenuOpen = false;
  currentTheme = 'light';
  isLoading = false;

  constructor(
    private themeService: ThemeService,
    private performanceService: PerformanceService
  ) {}

  ngOnInit() {
    this.themeService.getTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
    
    // Subscribe to loading state
    this.performanceService.getLoadingState().subscribe(loading => {
      this.isLoading = loading;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onScrollToSection(sectionId: string) {
    // Start performance monitoring
    const startTime = this.performanceService.startNavigation();
    
    // Emit scroll event
    this.scrollToSection.emit(sectionId);
    this.closeMenu();
    
    // End performance monitoring
    setTimeout(() => {
      this.performanceService.endNavigation(startTime);
    }, 100);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
