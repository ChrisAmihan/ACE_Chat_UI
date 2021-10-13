import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Chat } from '../Chat';
import { Chatlog } from '../Chatlog';
import { ServicechatService } from '../service-chat.service';
import { ServicechatlogService } from '../service-chatlog.service';
import { User } from '../User';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  
  constructor(private route : Router, private cookie:CookieService,private chatService:ServicechatService,private chatlogService:ServicechatlogService) { }
  user:User = new User("","",0,"","");
  chat:Chat = new Chat(0,this.user,"","")
  chatlog:Chatlog = new Chatlog(0,this.user,"","","");
  ngOnInit(): void {

  }

   sendmessage(){
    let id = this.route.url.slice(10)
    this.chat.chatid=Number(id);
    this.chatService.getOne(this.chat).subscribe((data)=>{
      this.chat=data;
      this.sending(this.chat)
    })
  }

  sending(chat:Chat){
    this.chatlog.groupname=chat.groupname;
    this.chatlog.userid= new User("","",Number(this.cookie.get("userid")),"","");
    this.chatlogService.message(this.chatlog).subscribe()
  }
}
