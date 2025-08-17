import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/khslsahan',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sahanlakshitha',
      icon: 'fab fa-linkedin',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sahanlakshitha',
      icon: 'fab fa-twitter',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      url: 'mailto:sahan@example.com',
      icon: 'fas fa-envelope',
      color: '#ea4335'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${requiredLength} characters`;
      }
    }
    return '';
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }
}
