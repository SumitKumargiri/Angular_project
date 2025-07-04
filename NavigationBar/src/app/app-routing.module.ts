// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterlayoutComponent } from './layout/outerlayout/outerlayout.component';


const routes: Routes = [
//     {path:'outer',component:OuterlayoutComponent,
// children:[
//     {
//         path:'header',
//         loadChildren:()=> import('./outer/header/header.module'),then(m=>m.HeaderModule)
//     }
// ]}
];


// export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);
