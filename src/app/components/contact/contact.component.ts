import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, ContactForm } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  message = '';
  messageType: 'success' | 'error' | '' = '';

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sahan-lakshitha-168792167/',
      icon: 'fab fa-linkedin',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/khslsahan',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'HackerRank',
      url: 'https://hackerrank.com/sahanbcsrh',
      icon: 'fas fa-code',
      color: '#00ea64'
    },
    {
      name: 'Email',
      url: 'mailto:sahanbcsrh@gmail.com',
      icon: 'fas fa-envelope',
      color: '#ea4335'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Lightweight initialization - no subscriptions
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.clearMessage();

    try {
      const formData: ContactForm = {
        fullName: this.contactForm.get('fullName')?.value || '',
        email: this.contactForm.get('email')?.value || '',
        subject: this.contactForm.get('subject')?.value || '',
        message: this.contactForm.get('message')?.value || ''
      };

      const result = await this.contactService.sendEmail(formData);
      
      if (result.success) {
        this.showMessage(result.message, 'success');
        this.contactForm.reset();
      } else {
        this.showMessage(result.message, 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.showMessage('An unexpected error occurred. Please try again.', 'error');
    } finally {
      this.isSubmitting = false;
    }
  }

  private showMessage(text: string, type: 'success' | 'error'): void {
    this.message = text;
    this.messageType = type;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }

  private clearMessage(): void {
    this.message = '';
    this.messageType = '';
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
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

  scrollToContact(): void {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToEducation(): void {
    const aboutSection = document.querySelector('.about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
