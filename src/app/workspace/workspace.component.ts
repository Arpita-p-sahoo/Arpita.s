import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {

  IsActiveTab = 'Projects'
  constructor(){}
  MoveToProjects(activeTab:string){
    this.IsActiveTab = activeTab;
  }
}
