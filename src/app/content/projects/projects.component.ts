import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoComponent } from 'src/app/material/Dilogs/todo/todo.component';
import { TelephonyChatComponent } from './project-content/telephony-chat/telephony-chat.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private dialog:MatDialog){}
  Projects = [
    {title:'Telephony & Chat',duration:'',info:'',link:'',component:TelephonyChatComponent},
    {title:'Todo App',duration:'',info:'',link:'',component:TodoComponent},
  ]

  openDialog(item:any){
    this.dialog.open(item);
  }
}
