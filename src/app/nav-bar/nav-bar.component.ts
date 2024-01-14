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

  navigationLinks = [
    { label: 'Hire me', route: 'hireme' },
    { label: 'About me', route: 'about' },
    { label: 'Workspace', route: 'about' }, // Adjust the route as needed
    { label: 'Experience', route: 'experience' },
    { label: 'Home', route: '/' }
  ];

}
