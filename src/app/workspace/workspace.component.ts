import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {

  isActiveTab = 'Projects'
  
  ActiveTab(param:string){
    this.isActiveTab = param;
  }

}
