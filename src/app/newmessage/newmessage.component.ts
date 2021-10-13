import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Chat } from '../Chat';
import { ServicechatService } from '../service-chat.service';
import { ServiceUserService } from '../service-user.service';
import { User } from '../User';

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {

  constructor(private userService:ServiceUserService, private cookie:CookieService,private chatService:ServicechatService) { }

  ngOnInit(): void {
  }
  user:User=new User("","",0,"","")
  ch:User[]= []
  userarr:User[]= []
  test:number=0
  chat:Chat= new Chat(0,this.user,"","")


  newgroup(){
    this.user.userid=Number(this.cookie.get("userid"))
    this.chat.userid=this.user;
    this.chatService.newChat(this.chat).subscribe();
    for(let i=0;i<this.ch.length;i++){
      this.user.userid=this.ch[i].userid;
      this.chat.userid=this.user;
      this.chatService.newChat(this.chat).subscribe();
    }
  }
  search(name:String){
    
    let user2 = new User("","",0,name,"");
      this.userService.search(user2).subscribe((data)=>{
      this.userarr=data
      })
  }

  adduser(user:User){
    this.ch[this.test]=user;
    this.test++;
  }
}
