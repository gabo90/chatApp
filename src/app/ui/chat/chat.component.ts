import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: any[] = [];
  showForm: boolean = false;
  message: Message;
  new_message: string = '';

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    let msg = new Message();
    msg.text = this.new_message;
    msg.autor = 'User1';
    this.messages.push(msg);
    this.new_message = '';
  }

}
