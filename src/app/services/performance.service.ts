import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private navigationTime = new BehaviorSubject<number>(0);
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor() {
    // Monitor performance metrics
    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring() {
    // Monitor navigation performance
    if ('performance' in window && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              this.navigationTime.next(navEntry.loadEventEnd - navEntry.loadEventStart);
            }
          }
        });
        
        observer.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }

  startNavigation() {
    this.isLoading.next(true);
    const startTime = performance.now();
    return startTime;
  }

  endNavigation(startTime: number) {
    const endTime = performance.now();
    const duration = endTime - startTime;
    this.navigationTime.next(duration);
    this.isLoading.next(false);
    
    // Log performance for debugging
    if (duration > 100) {
      console.warn(`Navigation took ${duration.toFixed(2)}ms - consider optimization`);
    }
    
    return duration;
  }

  getNavigationTime() {
    return this.navigationTime.asObservable();
  }

  getLoadingState() {
    return this.isLoading.asObservable();
  }

  // Performance optimization methods
  optimizeImages() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset['src'] || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  debounceScroll(callback: Function, delay: number = 16) {
    let timeoutId: any;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => callback.apply(null, args), delay);
    };
  }
}
