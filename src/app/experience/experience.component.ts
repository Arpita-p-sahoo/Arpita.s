import { ProjectsComponent } from './../content/projects/projects.component';
import { Component } from '@angular/core';
import { VisExpComponent } from '../material/Dilogs/vis-exp/vis-exp.component';
import { ZebaqExpComponent } from '../material/Dilogs/zebaq-exp/zebaq-exp.component';
import { MatDialog } from '@angular/material/dialog';
import { WtmComponent } from '../material/Dilogs/wtm/wtm.component';
import { GdgComponent } from '../material/Dilogs/gdg/gdg.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  isActiveTab = 'Projects'
  constructor(private dilog:MatDialog){}
  experience = [
    {orgName:'VIS NETWORK',Experience:'July 2022 - Present',logo:'../../assets/logo/vis.jpeg',degignation:'Angular Developer' ,isPresent:true,dialogComp:VisExpComponent},
    {orgName:'Zebaq PVT.LTD',Experience:'3 Months',logo:'../../assets/logo/zebaq.jpeg',degignation:'Wordpress Developer',isPresent:false,dialogComp:ZebaqExpComponent},
  ]; 

  CommunityExperience = [
    {orgName:'WTM Bhubaneswar',logo:'../../assets/logo/wtm.bbsr.jpeg',degignation:'Core member' ,isPresent:true,dialogComp:WtmComponent},
    {orgName:'GDG',logo:'../../assets/logo/images.jpeg',degignation:'Core member' ,isPresent:true,dialogComp:GdgComponent},
  ];




  openDialog(param:any){
    this.dilog.open(param);
  }

  // ActiveTab(param:string){
  //   this.isActiveTab = param;
  // }


}


