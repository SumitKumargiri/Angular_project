// import { Component, OnInit } from '@angular/core';
// import { DataService } from './service/data.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   data: any[] = [];
//   newData = { name: '', email: '', country: '' }; 
//   selectedData: any = null; 
//   isAddModalOpen = false;

//   constructor(private dataService: DataService) {}

//   ngOnInit(): void {
//     this.loadData();
//   }

//   loadData(): void {
//     this.dataService.getData().subscribe((response) => {
//       this.data = response;
//     });
//   }

//   addData(): void {
//     this.dataService.createData(this.newData).subscribe(() => {
//       this.loadData();
//       this.newData = { name: '', email: '', country: '' }; 
//       this.closeAddModal();
//     });
//   }

//   updateData(): void {
//     if (this.selectedData && this.selectedData.id) {
//       this.dataService.updateData(this.selectedData.id, this.selectedData).subscribe(() => {
//         this.loadData();
//         this.selectedData = null; 
//       });
//     }
//   }

//   deleteData(id: number): void {
//     if (confirm('Are you sure you want to delete this item?')) {
//       this.dataService.deleteData(id).subscribe(() => {
//         this.loadData();
//       });
//     }
//   }

//   openAddModal(): void {
//     this.isAddModalOpen = true;
//   }

//   closeAddModal(): void {
//     this.isAddModalOpen = false;
//   }

//   openEditForm(item: any): void {
//     this.selectedData = { ...item };
//   }
// }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  "title":"hello";
}