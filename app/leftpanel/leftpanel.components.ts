import {Component} from '@angular/core';
import {UserProfile} from './userprofile';

@Component({
    selector: 'chat-leftpanel',
    templateUrl: './app/leftpanel/leftpanel.components.html',
})
export class LeftpanelComponent {

    userList = [
        new UserProfile(1, 'Sunil', true),
        new UserProfile(2, 'Raheem', false),
        new UserProfile(3, 'Punit', false),
        new UserProfile(4, 'Saritha', false),
        new UserProfile(5, 'Konark', true),
        new UserProfile(7, 'venket', false),
        new UserProfile(8, 'Srini', true),
        new UserProfile(10, 'Laxmi', false),
        new UserProfile(11, 'Harish', false)

    ];

    addUsers(usName:string){
    
     this.userList.push(new UserProfile(15, usName, false));


    }



}