import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-container" [class.small]="size === 'small'">
      <div class="loading-spinner"></div>
      <p *ngIf="message" class="loading-message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      min-height: 200px;
    }
    
    .loading-container.small {
      padding: 1rem;
      min-height: 100px;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--border-color);
      border-top: 3px solid var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    .loading-container.small .loading-spinner {
      width: 24px;
      height: 24px;
      border-width: 2px;
    }
    
    .loading-message {
      margin-top: 1rem;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoadingComponent {
  @Input() message: string = 'Loading...';
  @Input() size: 'normal' | 'small' = 'normal';
}
