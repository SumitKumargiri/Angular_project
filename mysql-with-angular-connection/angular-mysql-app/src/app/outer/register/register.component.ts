import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { sha512 } from 'js-sha512';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isVisible = false;
  registerby: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private dataService: DataService,private toastr: ToastrService) {}

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const hashedPassword = sha512(this.password);

    const registrationData = {
      registerby: this.registerby,
      username: this.username,
      email: this.email,
      password: hashedPassword
    };

    this.dataService.RegisterUser(registrationData).subscribe(
      response => {
        this.toastr.success('Registration successful!');
        this.closePopup();
      },
      error => {
        this.toastr.error('Registration failed. Please try again.');
      }
    );
  }
}
