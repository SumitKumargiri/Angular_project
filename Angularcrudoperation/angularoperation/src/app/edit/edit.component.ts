import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  rowData: any = {}; 

  constructor(private route: ActivatedRoute,private dataService: DataService,private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.dataService.getDataById(id).subscribe((data: any) => {
      this.rowData = data;
    });
  }

  onSubmit(): void {
    this.dataService.updateData(this.rowData).subscribe(() => {
      alert('Data updated successfully!');
      this.router.navigate(['/']); 
    });
  }
}
