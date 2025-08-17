import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleMonitorService {
  private performanceLogs: Array<{action: string, duration: number, timestamp: number}> = [];

  constructor() {
    this.initializeConsoleMonitoring();
  }

  private initializeConsoleMonitoring() {
    // Only in development mode
    if (!environment.production) {
      this.setupPerformanceLogging();
      this.setupNavigationMonitoring();
    }
  }

  private setupPerformanceLogging() {
    // Override console methods to track performance
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    console.log = (...args: any[]) => {
      this.logPerformance('LOG', args);
      originalLog.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      this.logPerformance('WARN', args);
      originalWarn.apply(console, args);
    };

    console.error = (...args: any[]) => {
      this.logPerformance('ERROR', args);
      originalError.apply(console, args);
    };
  }

  private setupNavigationMonitoring() {
    // Monitor navigation performance
    if ('performance' in window && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
              const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
              
              console.log(`🚀 Performance Metrics:
                📊 Load Time: ${loadTime.toFixed(2)}ms
                ⚡ DOM Ready: ${domContentLoaded.toFixed(2)}ms
                🔍 Total Navigation: ${(navEntry.loadEventEnd - navEntry.fetchStart).toFixed(2)}ms
              `);
            }
          }
        });
        
        observer.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }

  private logPerformance(level: string, args: any[]) {
    const timestamp = performance.now();
    this.performanceLogs.push({
      action: `${level}: ${args[0]}`,
      duration: 0,
      timestamp
    });

    // Keep only last 100 logs
    if (this.performanceLogs.length > 100) {
      this.performanceLogs.shift();
    }
  }

  logNavigationTime(sectionId: string, duration: number) {
    this.performanceLogs.push({
      action: `Navigation to ${sectionId}`,
      duration,
      timestamp: performance.now()
    });

    if (duration > 100) {
      console.warn(`🐌 Slow navigation to ${sectionId}: ${duration.toFixed(2)}ms`);
    } else {
      console.log(`⚡ Fast navigation to ${sectionId}: ${duration.toFixed(2)}ms`);
    }
  }

  getPerformanceSummary() {
    const slowActions = this.performanceLogs.filter(log => log.duration > 100);
    const totalActions = this.performanceLogs.length;
    
    console.log(`📊 Performance Summary:
      🎯 Total Actions: ${totalActions}
      🐌 Slow Actions (>100ms): ${slowActions.length}
      ⚡ Performance Score: ${((totalActions - slowActions.length) / totalActions * 100).toFixed(1)}%
    `);
    
    if (slowActions.length > 0) {
      console.warn('🐌 Slow Actions:', slowActions);
    }
  }

  clearLogs() {
    this.performanceLogs = [];
    console.log('🧹 Performance logs cleared');
  }
}

// Simple environment check
const environment = {
  production: false
};
