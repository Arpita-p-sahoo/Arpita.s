import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TelephonyChatComponent } from './project-content/telephony-chat/telephony-chat.component';
import { DatetimeFormatterComponent } from './project-content/datetime-formatter/datetime-formatter.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private dialog:MatDialog){}
  Projects = [
    {title:'Telephony & Chat',duration:'',info:'',link:'',component:TelephonyChatComponent},
    {title:'DateTime Formatting',duration:'',info:'',link:'',component:DatetimeFormatterComponent},
  ]

  openDialog(item:any){
    this.dialog.open(item);
  }
}
