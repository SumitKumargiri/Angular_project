import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { sha512 } from 'js-sha512';
import { response } from 'express';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isVisible = false;
  registerby:string = '';
  username:string = '';
  password:string = '';

  constructor(private dataService:DataService,private toastr: ToastrService,private router: Router){}

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  onSubmit() {
    const hashedPassword = sha512(this.password);

    const loginData = {
      registerby: this.registerby,
      username: this.username,
      password: hashedPassword
    };

    this.dataService.LoginUser(loginData).subscribe(
      response=>{
        this.toastr.success('Login Successful');
        this.closePopup();
        this.router.navigate(['/admin/admindashboard']);
      },error=>{
        this.toastr.error('Login failed,please try again.');
      }
    )
  }
}
