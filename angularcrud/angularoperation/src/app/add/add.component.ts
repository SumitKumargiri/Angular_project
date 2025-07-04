import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  name: string = '';
  email: string = '';
  country: string = '';
  message: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.dataService.insertData(this.name, this.email, this.country)
      .subscribe(
        (response) => {
          this.message = response.message; 
        },
        (error) => {
          this.message = 'Error inserting data: ' + error.error.error;
        }
      );
  }
}
