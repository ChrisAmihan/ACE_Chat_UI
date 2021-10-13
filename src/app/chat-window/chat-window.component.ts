import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Chat } from '../Chat';
import { Chatlog } from '../Chatlog';
import { ServicechatService } from '../service-chat.service';
import { ServicechatlogService } from '../service-chatlog.service';
import { User } from '../User';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  constructor(private route : Router, private cookie:CookieService,private chatService:ServicechatService, private chatlogService:ServicechatlogService) { }
  oldurl:string = "";
  user:User = new User("","",0,"","");
  chatlog:Chatlog[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.getgroup()
    setTimeout( ()=>{
      this.ngAfterViewInit()
    }, 1000)

  }

  
  getgroup(){
    let id = this.route.url.slice(10)
    if(this.oldurl!="/messages/"+id){
    this.chatlog=[];
    window.location.reload  
    }
    let chat = new Chat(Number(id),this.user,"","");
    this.chatService.getOne(chat).subscribe((data)=>{chat=data
     this.getmessages(chat);
    })
    this.oldurl = this.route.url;
  }

  getmessages(chat:Chat){
    let cl= new Chatlog(0,this.user,chat.groupname,"","");
    this.chatlogService.getChats(cl).subscribe(
      (data)=>{this.chatlog=data
      })
  }

}
