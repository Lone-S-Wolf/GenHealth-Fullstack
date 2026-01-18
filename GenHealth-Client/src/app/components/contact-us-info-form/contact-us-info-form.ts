import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterModule } from '@angular/router';

function indianPhoneValidator(): ValidatorFn {
  const re = /^(?:\+91|0)?[6-9]\d{9}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const v = (control.value ?? '').toString().trim();
    if (v === '') return null;
    return re.test(v) ? null : { invalidIndianPhone: true };
  };
}

@Component({
  selector: 'app-contact-info-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: "./contact-us-info-form.html",
  styleUrl: "./contact-us-info-form.css"
})
export class ContactInfoFormComponent {
  // form
  form = new FormBuilder().group({
    name: ['', [Validators.required]],
    email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
    mobile: [{ value: '', disabled: true }, [Validators.required, indianPhoneValidator()]],
    message: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(20), Validators.maxLength(200)]],
  });

  // reactive signals / state
  isSubmitting = false;
  messageLength = signal(0);

  constructor() {
    // wire sequential enabling: enable next control only when previous is valid
    const nameCtrl = this.form.get('name')!;
    const emailCtrl = this.form.get('email')!;
    const mobileCtrl = this.form.get('mobile')!;
    const messageCtrl = this.form.get('message')!;

    // when name becomes valid -> enable email
    nameCtrl.statusChanges.subscribe(() => {
      if (nameCtrl.valid && emailCtrl.disabled) {
        emailCtrl.enable({ emitEvent: false });
      } else if (!nameCtrl.valid && !emailCtrl.disabled) {
        // keep email disabled until name valid
        emailCtrl.disable({ emitEvent: false });
        mobileCtrl.disable({ emitEvent: false });
        messageCtrl.disable({ emitEvent: false });
      }
    });

    // when email valid -> enable mobile
    emailCtrl.statusChanges.subscribe(() => {
      if (emailCtrl.valid && mobileCtrl.disabled) {
        mobileCtrl.enable({ emitEvent: false });
      } else if (!emailCtrl.valid && !mobileCtrl.disabled) {
        mobileCtrl.disable({ emitEvent: false });
        messageCtrl.disable({ emitEvent: false });
      }
    });

    // when mobile valid -> enable message
    mobileCtrl.statusChanges.subscribe(() => {
      if (mobileCtrl.valid && messageCtrl.disabled) {
        messageCtrl.enable({ emitEvent: false });
      } else if (!mobileCtrl.valid && !messageCtrl.disabled) {
        messageCtrl.disable({ emitEvent: false });
      }
    });

    // message length reactive update
    messageCtrl.valueChanges.subscribe(val => {
      const len = (val ?? '').toString().length;
      this.messageLength.set(len);
      // enforce maxlength (HTML also prevents, but keep defensive)
      if (len > 200) {
        messageCtrl.setValue((val ?? '').toString().substring(0, 200), { emitEvent: false });
        this.messageLength.set(200);
      }
    });
  }

  // convenience getters for template
  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get mobile() { return this.form.get('mobile')!; }
  get message() { return this.form.get('message')!; }

  // submit
  async submit() {
    if (!this.form.valid) {
      // mark all touched so errors show
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    const payload = {
      name: this.name.value,
      email: this.email.value,
      mobile: this.mobile.value,
      message: this.message.value,
    };

    try {
      // replace this with your actual API call
      await this.sendToApi(payload);
      // optional: reset or show success
      this.form.reset();
      // disable dependent controls again until sequence filled
      this.form.get('email')!.disable();
      this.form.get('mobile')!.disable();
      this.form.get('message')!.disable();
      this.messageLength.set(0);
    } catch (err) {
      console.error('Send failed', err);
      // handle error, show toast, etc.
    } finally {
      this.isSubmitting = false;
    }
  }

  // placeholder: change to real HTTP call
  private sendToApi(payload: any) {
    console.log('payload ready for API:', payload);
    // simulate network latency
    return new Promise<void>((res) => setTimeout(() => res(), 900));
  }
}
