import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  ValidatorFn,
} from '@angular/forms';

const strongPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = (control.value || '') as string;

  if (!value) {
    return null; // required handles empty
  }

  const errors: any = {};
  if (value.length < 8) errors.minLength = true;
  if (!/[A-Z]/.test(value)) errors.uppercase = true;
  if (!/[a-z]/.test(value)) errors.lowercase = true;
  if (!/[0-9]/.test(value)) errors.number = true;
  if (!/[!@#$%^&*()_\-+=\[{\]};:'",.<>/?\\|`~]/.test(value))
    errors.special = true;

  return Object.keys(errors).length ? errors : null;
};

const indianMobileValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = (control.value || '') as string;

  if (!value) {
    return null; // required handles empty
  }

  // Indian mobile: 10 digits, starting with 6–9
  const pattern = /^[6-9]\d{9}$/;
  return pattern.test(value) ? null : { indianMobile: true };
};

@Component({
  selector: 'app-auth-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  currentForm: 'login' | 'register' = 'login';

  loginForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;

  registerForm: FormGroup<{
    email: FormControl<string>;
    mobile: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.nonNullable.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, strongPasswordValidator]],
    });

    this.registerForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, indianMobileValidator]],
      password: ['', [Validators.required, strongPasswordValidator]],
    });
  }

  // getters for convenience
  get loginUsername() {
    return this.loginForm.controls.username;
  }
  get loginPassword() {
    return this.loginForm.controls.password;
  }

  get registerEmail() {
    return this.registerForm.controls.email;
  }
  get registerMobile() {
    return this.registerForm.controls.mobile;
  }
  get registerPassword() {
    return this.registerForm.controls.password;
  }

  switchToRegister() {
    this.currentForm = 'register';
  }

  switchToLogin() {
    this.currentForm = 'login';
  }

  onLoginSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    // Call login API here
    console.log('Login payload', this.loginForm.getRawValue());
  }

  onRegisterSubmit() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) return;

    // Call register API here
    console.log('Register payload', this.registerForm.getRawValue());
  }
}
