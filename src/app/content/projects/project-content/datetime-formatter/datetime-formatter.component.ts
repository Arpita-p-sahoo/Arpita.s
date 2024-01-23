import { Component } from '@angular/core';

@Component({
  selector: 'app-datetime-formatter',
  templateUrl: './datetime-formatter.component.html',
  styleUrls: ['./datetime-formatter.component.css']
})
export class DatetimeFormatterComponent {
  constructor(){}
   DateTimeFormatter = [
    {
      projectname:'ClockFormatter',
      text:'I built a simple todo Web app for easy task management. It lets you add tasks, check them off, User can tag them as their types, I have used Localstorage for seamless user experience,The design is clean, and it works smoothly on any device.',
      skills:['Angular','TypeScript','Bootstrap','AngularMaterial'],
      duration:'2 days',
      projectlink:'https://github.com/Arpita-p-sahoo/clock-formatter'
    }
   ]
}
// I built a simple todo Web app for easy task management. It lets you add tasks, check them off,
//       User can tag them as their types, I have used Localstorage for seamless user experience,
//        The design is clean, and it works smoothly on any device.