import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';






import { CommonModule } from '@angular/common';
import { FormserviceService } from '../formservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule
    
  ],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent {
  Empregister: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  dob: FormControl;
  gender: FormControl;
  guardian: FormControl;
  group: FormControl;
  email: FormControl;
  phone: FormControl;
  street: FormControl;
  city: FormControl;
  currentStep: number = 1;

  constructor(private fb: FormBuilder, private dataservice: FormserviceService, private http: HttpClient) {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.dob = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.guardian = new FormControl('', Validators.required);
    this.group = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.phone = new FormControl('', Validators.required);
    this.street = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);

    this.Empregister = this.fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      dob: this.dob,
      gender: this.gender,
      guardian: this.guardian,
      group: this.group,
      contact: this.fb.group({
        email: this.email,
        phone: this.phone
      }),
      address: this.fb.group({
        street: this.street,
        city: this.city
      })
    });
  }

  ngOnInit(): void {}

  HandleSubmit() {
    if (this.Empregister.valid) {
      this.dataservice.addData(this.Empregister.value).subscribe({
        next: () => {
          console.log("Form is valid and data is submitted");
          alert("Form submitted succesfully")
        },
        error: (err) => {
          console.error("Error submitting form", err);
        }
      });
    } else {
      console.log("Form is invalid");
    }
  }

  showBasicDetails() {
    this.currentStep = 1;
  }

  showContactDetails() {
    this.currentStep = 2;
  }

  showAddressDetails() {
    this.currentStep = 3;
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
}
