import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {

  contactForm!: FormGroup;
  submitMessage = '';
  isSubmitting = false;

  constructor(private fb: FormBuilder, public i18n: I18nService) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get privacyPolicy() { return this.contactForm.get('privacyPolicy'); }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;
      console.log('Form gesendet:', formData);

      setTimeout(() => {
        this.submitMessage = this.i18n.translate('contact.success');
        this.contactForm.reset();
        this.isSubmitting = false;

        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }, 1000);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
