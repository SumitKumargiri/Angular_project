import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from '../home-page/home-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { HeaderComponent } from './header.component';
import { headerRoutingModule } from './header-routing.module'; // Import headerRoutingModule

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule, // Add RouterModule
    headerRoutingModule, // Use headerRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
