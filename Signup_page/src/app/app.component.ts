import { Component } from '@angular/core';
import {AbstractControl,FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import Validation from './utils/validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  submitted = false;
  formData: any[] = [];

  years: number[] = [];
  currentYear = new Date().getFullYear();


  constructor(private formBuilder: FormBuilder) {

    this.years = Array.from({length:this.currentYear - 1979}, (_, index)=>1980+index);

//++++++++++++ Generate the range of years from 1980 to 2024++++++++++
    for (let i = 1980; i <= 2024; i++) {
      this.years.push(i);
    }
    // ++++++++++++++++++++++++

    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      year: ['', [Validators.required, Validators.min(1980), Validators.max(this.currentYear)]],

      password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(40),],],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: [Validation.match('password', 'confirmPassword')],
    }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

  // ++++++++++++ Push form data ++++++++++

    this.formData.push(this.form.value);
    console.log(this.form.value);
    // console.log(JSON.stringify(this.form.value, null, 2));

  //+++++++++ Reset the form +++++++++++
    this.form.reset();
    this.submitted = false; 
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
