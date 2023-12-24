import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContatMeComponent } from '../material/Dilogs/contat-me/contat-me.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  constructor(private dialog:MatDialog){}
  

  openDilog(){
    this.dialog.open(ContatMeComponent)
  }
}
