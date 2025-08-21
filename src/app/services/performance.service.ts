import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private pageLoadTime = new BehaviorSubject<number>(0);
  private isOptimized = new BehaviorSubject<boolean>(false);

  constructor() {
    this.measurePageLoadTime();
    this.optimizePerformance();
  }

  private measurePageLoadTime() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        this.pageLoadTime.next(loadTime);
        
        // Log if page load is slow
        if (loadTime > 3000) {
          console.warn(`Page load took ${loadTime.toFixed(2)}ms - consider optimization`);
        }
      });
    }
  }

  private optimizePerformance() {
    // Optimize images for better performance
    this.optimizeImages();
    
    // Mark as optimized
    this.isOptimized.next(true);
  }

  getPageLoadTime() {
    return this.pageLoadTime.asObservable();
  }

  getOptimizationStatus() {
    return this.isOptimized.asObservable();
  }

  // Optimize images for better performance
  optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
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
  }

  // Method to manually trigger optimizations
  triggerOptimizations() {
    this.optimizeImages();
  }
}
