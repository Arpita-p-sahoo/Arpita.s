import { Component } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent {
  constructor(){}

  Talks:any[]=[
    {id:1,topic:'GitHub',mode:'offline'},
    {id:1,topic:'GitHub',mode:'offline'},
  ]
}
