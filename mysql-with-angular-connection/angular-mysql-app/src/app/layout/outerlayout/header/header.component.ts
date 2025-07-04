import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isVisible = false;
  isShow = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  openPopup() {
    this.isVisible = true;
  }
  openpopup(){
    this.isShow = true;
  }
}
