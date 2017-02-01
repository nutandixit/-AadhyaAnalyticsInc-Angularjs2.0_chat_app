import { Component} from '@angular/core';
import {messageData } from './message';
import * as io from 'socket.io-client';

@Component({
  selector: 'chat-message',
  templateUrl:'./app/middlepanel/chat.component.html',
})
export class chatComponent { 
 socket : any;
 
 constructor(){
      this.socket = io('http://35.163.1.178:3000');
      console.log(this.socket);
      }
 
 chatMessages = [
        new messageData(100, 'abcdsss', 'fsvfdsgdg','Raja','Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.'),

        new messageData(101, 'abcdsss', 'fsvfdsgdg','Srinivas','Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.'),
       

         new messageData(102, 'abcdsss', 'fsvfdsgdg','shiveji','Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.Donec sit amet ligula enim. Duis vel condimentum massa. Donec sit amet ligula enim. Duis vel condimentum massa.')
        ];




}
