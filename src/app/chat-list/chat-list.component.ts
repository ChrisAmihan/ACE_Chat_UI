import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Chat } from '../Chat';
import { ServicechatService } from '../service-chat.service';
import { User } from '../User';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private route : Router, private cookie:CookieService,private chatService:ServicechatService) { }
  showing:boolean = true;
  currentterm:String="";

  ngOnInit(): void {
    this.chatsearch(this.currentterm);
    setTimeout(() => { this.ngOnInit() }, 10000);
  }

  chatarr:Chat[] = []
  user:User = new User("","",0,"","");

  delete(id:number){
      let chat = new Chat(id,this.user,"","")
      this.chatService.deleteChat(chat).subscribe((data)=>{
         window.location.replace(this.route.url);
      });  
  }

  chatsearch(term:String):void{
    this.currentterm=term;
    let user3 = new User("","",Number(this.cookie.get("userid")),term,"");
    this.chatService.searchChats(user3).subscribe((data)=>{this.chatarr = data
  });
  
  }

  mute(chat:Chat){
    
    let chatstatus = new Chat(chat.chatid, chat.user, chat.groupname,"") 
    if(chat.status == "unmuted"){
      chatstatus = new Chat(chat.chatid, chat.user, chat.groupname,"muted") 
    }else{
      chatstatus = new Chat(chat.chatid, chat.user, chat.groupname,"unmuted") 
    }
    this.chatService.muteChat(chatstatus).subscribe();
  }

}
