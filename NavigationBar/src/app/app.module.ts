import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './admin/college/college.component';
import { RegisterComponent } from './admin/register/register.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { CollegelayoutComponent } from './layout/collegelayout/collegelayout.component';
import { OuterlayoutComponent } from './layout/outerlayout/outerlayout.component';
import { StudentlayoutComponent } from './layout/studentlayout/studentlayout.component';
import { TeacherlayoutComponent } from './layout/teacherlayout/teacherlayout.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AboutusComponent } from './outer/aboutus/aboutus.component';
// import { HeaderComponent } from './outer/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    CollegeComponent,
    RegisterComponent,
    AdminlayoutComponent,
    CollegelayoutComponent,
    OuterlayoutComponent,
    StudentlayoutComponent,
    TeacherlayoutComponent,
    StudentComponent,
    TeacherComponent,
    AboutusComponent
    // HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
