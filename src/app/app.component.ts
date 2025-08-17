import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PerformanceService } from './services/performance.service';
import { AosOptimizerService } from './services/aos-optimizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Sahan Lakshitha - Software Engineer Portfolio';

  constructor(
    private performanceService: PerformanceService,
    private aosOptimizer: AosOptimizerService
  ) {}

  ngOnInit() {
    // Performance monitoring
    this.initializePerformanceMonitoring();
    
    // Optimize AOS animations
    this.optimizeAnimations();
  }

  private initializePerformanceMonitoring() {
    // Monitor scroll performance
    const debouncedScroll = this.performanceService.debounceScroll(() => {
      // Optimize images when scrolling
      this.performanceService.optimizeImages();
    }, 16);
    
    window.addEventListener('scroll', debouncedScroll);
  }

  private optimizeAnimations() {
    // Check device performance and optimize accordingly
    if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      // Low-end device - disable animations
      this.aosOptimizer.disableOnLowEnd();
    } else {
      // High-end device - enable optimized animations
      this.aosOptimizer.enableOnHighEnd();
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use performance-optimized scrolling
      const startTime = performance.now();
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Log performance
      setTimeout(() => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        if (duration > 100) {
          console.warn(`Scroll to ${sectionId} took ${duration.toFixed(2)}ms`);
        }
      }, 100);
    }
  }
}
