import { Component } from '@angular/core';

@Component({
  selector: 'app-telephony-chat',
  templateUrl: './telephony-chat.component.html',
  styleUrls: ['./telephony-chat.component.css']
})
export class TelephonyChatComponent {
  telephonyChat = [
    {text:'In developing our chat and phone app, our team prioritized a smooth user experience with an easy interface, real-time communication, and high-quality calls. We used special tools to make everything work well, fixed any issues promptly, and ensured strong security. The result? A reliable and versatile app that exceeds expectations, offering a polished and user-friendly experience.',
    skills:['Angular','TypeScript','Bootstrap','HTML & CSS','Git','GitLab'],
    duration:'Two Months',
  
  }
  ]
}
