import { Component, HostListener, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Getintouch } from "./components/getintouch/getintouch";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Getintouch, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrameworkStart');
    isScrolled:number = 0;
    @HostListener('window:scroll', ['$event'])
  showEvent(event: Event): void {
     this.isScrolled = window.scrollY
    }
}
