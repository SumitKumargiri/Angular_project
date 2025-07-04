import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterlayoutComponent } from './layout/outerlayout/outerlayout.component';
import { LoginComponent } from './outer/login/login.component';
import { RegisterComponent } from './outer/register/register.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { ViewpostComponent } from './admin/employee/viewpost/viewpost.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';


const routes: Routes = [

  // ++++++++++ Admin Page routing process +++++++++

  {
    path:'admin',
    component:AdminlayoutComponent,
    children:[
      {path:'viewpost',component:ViewpostComponent},
      {path:'admindashboard',component:AdmindashboardComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ]
  },

  // ++++++++ Home page routing process +++++++++++
  {
    path:'',
    component:OuterlayoutComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
