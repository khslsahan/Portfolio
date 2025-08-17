import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AosOptimizerService {
  private aosInstance: any;

  constructor() {
    this.initializeAOS();
  }

  private initializeAOS() {
    // Wait for AOS to be available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      this.aosInstance = (window as any).AOS;
      this.optimizeAOS();
    } else {
      // AOS not loaded yet, wait for it
      const checkAOS = setInterval(() => {
        if (typeof window !== 'undefined' && (window as any).AOS) {
          this.aosInstance = (window as any).AOS;
          this.optimizeAOS();
          clearInterval(checkAOS);
        }
      }, 100);
    }
  }

  private optimizeAOS() {
    if (!this.aosInstance) return;

    // Optimize AOS settings for better performance
    this.aosInstance.init({
      // Reduce animation duration for faster feel
      duration: 600,
      // Use easing that feels snappy
      easing: 'ease-out-cubic',
      // Reduce delay between animations
      delay: 0,
      // Only animate elements that are actually visible
      once: true,
      // Disable animations on mobile for better performance
      disable: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
      // Use transform3d for hardware acceleration
      useClassNames: true,
      // Optimize for performance
      offset: 50,
      // Reduce throttle for smoother scrolling
      throttleDelay: 99
    });
  }

  // Method to refresh AOS when needed
  refresh() {
    if (this.aosInstance) {
      this.aosInstance.refresh();
    }
  }

  // Method to disable AOS on low-end devices
  disableOnLowEnd() {
    if (this.aosInstance) {
      this.aosInstance.init({
        disable: true
      });
    }
  }

  // Method to enable AOS on high-end devices
  enableOnHighEnd() {
    if (this.aosInstance) {
      this.aosInstance.init({
        disable: false
      });
    }
  }
}
