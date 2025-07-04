import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './outer/home/home.component';
import { OuterlayoutComponent } from './layout/outerlayout/outerlayout.component';
import { HeaderComponent } from './layout/outerlayout/header/header.component';
import { FooterComponent } from './layout/outerlayout/footer/footer.component';
import { LoginComponent } from './outer/login/login.component';
import { RegisterComponent } from './outer/register/register.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { ViewpostComponent } from './admin/employee/viewpost/viewpost.component';
import { DeletepostComponent } from './admin/employee/deletepost/deletepost.component';
import { SidebarComponent } from './layout/adminlayout/sidebar/sidebar.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OuterlayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminlayoutComponent,
    ViewpostComponent,
    DeletepostComponent,
    SidebarComponent,
    AdmindashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(), 
    provideToastr(),
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
