import { Component , HostListener} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isScrolled:number = 0;
  @HostListener('window:scroll', ['$event'])
  showEvent(event: Event): void {
     this.isScrolled = window.scrollY
    }
}
