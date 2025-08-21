import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private isInitialized = false;

  constructor() {
    this.initEmailJS();
  }

  private initEmailJS(): void {
    try {
      emailjs.init('XTziRCphn1qDCWGY4');
      this.isInitialized = true;
    } catch (error) {
      console.error('EmailJS init failed:', error);
      this.isInitialized = false;
    }
  }

  async sendEmail(form: ContactForm): Promise<{ success: boolean; message: string }> {
    if (!this.isInitialized) {
      return { success: false, message: 'Email service not ready. Please refresh and try again.' };
    }

    try {
      const response = await emailjs.send(
        'service_x7x54dq',
        'template_339b3rg',
        {
          from_name: form.fullName,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: 'Sahan Lakshitha'
        }
      );

      if (response.status === 200) {
        return { 
          success: true, 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        };
      } else {
        return { 
          success: false, 
          message: 'Failed to send message. Please try again.' 
        };
      }
    } catch (error) {
      console.error('Email send error:', error);
      return { 
        success: false, 
        message: 'Error sending message. Please try again or contact me directly.' 
      };
    }
  }

  validateForm(form: ContactForm): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!form.fullName?.trim()) errors.push('Full name is required');
    if (!form.email?.trim()) errors.push('Email is required');
    if (!form.subject?.trim()) errors.push('Subject is required');
    if (!form.message?.trim()) errors.push('Message is required');

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.push('Please enter a valid email');
    }

    if (form.subject && form.subject.trim().length < 5) {
      errors.push('Subject must be at least 5 characters');
    }

    if (form.message && form.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    }

    return { isValid: errors.length === 0, errors };
  }
}
