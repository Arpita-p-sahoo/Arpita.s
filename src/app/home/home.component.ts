import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ZebaqExpComponent } from '../material/Dilogs/zebaq-exp/zebaq-exp.component';
import { VisExpComponent } from '../material/Dilogs/vis-exp/vis-exp.component';
import { GDGComponent } from '../material/Dilogs/communityDialogs/gdg/gdg.component';
import { WTMComponent } from '../material/Dilogs/communityDialogs/wtm/wtm.component';
import { DEVFESTComponent } from '../material/Dilogs/communityDialogs/devfest/devfest.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog:MatDialog){}
  
 
  community_Experience = [
    {communityName:'GDG Bhubaneswar',communityloggo:'../../assets/logo/gdg.bbsr.png',Dialogname:GDGComponent},
    {communityName:'WTM Bhubaneswar',communityloggo:'../../assets/logo/wtm.bbsr.jpeg',Dialogname:WTMComponent},
    {communityName:'DevFest Bhubaneswar',communityloggo:'../../assets/logo/images.jpeg',Dialogname:DEVFESTComponent},
  ];
  skills = [
    {logo:'../../assets/logo/angular-logo-24.png',title:''},
    {logo:'../../assets/logo/typescript-logo-24.png',title:''},
    {logo:'../../assets/logo/javascript-logo-24.png',title:''},
    {logo:'../../assets/logo/bootstrap-logo-24.png',title:''},
    {logo:'../../assets/logo/html5-logo-24.png',title:''},
    {logo:'../../assets/logo/css3-logo-24.png',title:''},
    
  ]

  OpenDialog(component:any){
    this.dialog.open(component,{
      height: '500px',
      width: '1000px',
    });
  }

  OpenComunityDialog(param:any){
    this.dialog.open(param,{
      height: '500px',
      width: '900px',
    });
  }
}
