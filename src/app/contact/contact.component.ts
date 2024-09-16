import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // senderNameControl = new FormControl('', [Validators.required]);
  // senderEmailControl = new FormControl('', [Validators.required, Validators.email]);
  // senderMessageControl = new FormControl('', [Validators.required]);

  contactForm = new FormGroup({
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl(''),
  });

  submitForm() {
    console.log(this.contactForm.valid);
  }

}
