import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().subscribe((response: any[]) => {
      this.data = response;
    });
  }


  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.dataService.deleteData(id).subscribe(() => {
        alert('Data deleted successfully!');
        this.fetchData(); // Refresh the list
      });
    }
  }
}
