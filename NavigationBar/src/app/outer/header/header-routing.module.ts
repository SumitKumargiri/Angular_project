import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './header.component';

const routes: Routes = [
  { path: '', component:HeaderComponent }
// { path: 'header', component: headerRoutingModule},
  // { path: 'aboutus', component: AboutusComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild() here
 
})
export class headerRoutingModule { }
