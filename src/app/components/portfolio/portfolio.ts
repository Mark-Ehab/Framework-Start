import { Component } from '@angular/core';
import { Modal } from "./modal/modal";

@Component({
  selector: 'app-portfolio',
  imports: [Modal],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  images:string[]=["port1.png","port2.png","port3.png","port1.png","port2.png","port3.png"]
  modalImage:string="";
}
