import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {

  isActiveTab = 'Home'

  constructor(){}
  isActive(val:any){
    this.isActiveTab = val;
  }
}
