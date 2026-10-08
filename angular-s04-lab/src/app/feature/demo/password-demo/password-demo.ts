import { Component } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-password-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './password-demo.html',
  styleUrl: './password-demo.css',
})
export class PasswordDemo {
  passworValidator(control: AbstractControl): ValidationErrors | null {
    const password = String(control.value ?? '');
    return password.length >= 8 ? null : { weakPassword: true };
    
  }

  passwordControl = new FormControl('', [Validators.required, this.passworValidator]);
}
