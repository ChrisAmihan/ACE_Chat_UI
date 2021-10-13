import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Block } from '../Block';
import { Chat } from '../Chat';
import { Chatlog } from '../Chatlog';
import { ServiceblockService } from '../service-block.service';
import { ServicechatService } from '../service-chat.service';
import { ServicechatlogService } from '../service-chatlog.service';
import { User } from '../User';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private route : Router, private cookie:CookieService,private chatService:ServicechatService, private chatlogService:ServicechatlogService, private blockService:ServiceblockService) { }
  chatarr:Chat[] = []
  
  messagearr:Chatlog[] = []
  oldmessages:Chatlog[] =[];
  notification:String=""
  id:Number=0
  count:number = 0;
  user:User = new User("","",0,"","");
  blockarr:Block[]=[];
  ngOnInit(): void {
     this.allchats();
  }

  ngAfterViewInit(){
    this.allchatstoupdate();
    setTimeout( ()=>{
      this.ngAfterViewInit()
    }, 5000)
  }

  allchats(){
    let user2 = new User("","",Number(this.cookie.get("userid")),"","");
    this.chatService.getAllChats(user2).subscribe((data)=>{this.chatarr=data
      this.setold(this.chatarr)
    });
  }

  setold(chatar:Chat[]){
    for(let i =0;i<chatar.length;i++){
      let chatlog = new Chatlog(0,this.user,chatar[i].groupname,"","");
      this.chatlogService.getChats(chatlog).subscribe((data)=>{this.messagearr=data
        this.save(this.messagearr[this.messagearr.length-1]) 
      })
    }
  }
  save(chatlog:Chatlog){
    if(chatlog != undefined){
    this.oldmessages[this.count]=chatlog;
    this.count++
    }
  }

  allchatstoupdate(){
    this.notification="";
    let user2 = new User("","",Number(this.cookie.get("userid")),"","");
    this.chatService.getAllChats(user2).subscribe((data)=>{this.chatarr=data
      this.checkfornew(this.chatarr)
    });
  }

  checkfornew(chatar:Chat[]){
    this.chatarr=chatar;
    if(this.oldmessages !=undefined){
    for(let i =0;i<chatar.length;i++){
      let chatlog = new Chatlog(0,this.user,chatar[i].groupname,"","");
      this.chatlogService.getChats(chatlog).subscribe((data)=>{this.messagearr=data
        this.update(this.messagearr);
      })
    }
  }
  }
  
  update(chatlog:Chatlog[]){
    for(let i=0;i<chatlog.length;i++){
      for(let j=0;j<this.oldmessages.length;j++){
        if(chatlog[i].groupname == this.oldmessages[j].groupname){
          if(chatlog[i].chatlogid>this.oldmessages[j].chatlogid){
            this.notify(chatlog[i]);
            this.oldmessages[j]=chatlog[i];
          }
        }
    }
    }
}

notify(chatlog:Chatlog){
  let user2 = new User("","",Number(this.cookie.get("userid")),"","")
  let block = new Block(0,user2,user2);
  this.blockService.getblock(block).subscribe((data)=>{
    this.blockarr=data
  for(let i=0;i<this.chatarr.length;i++){
    for(let j=0;j<this.blockarr.length;j++){
      if(chatlog.userid.userid === this.blockarr[j].blockeeid.userid){
        console.log(chatlog)
      console.log(this.blockarr[j])
      return
      }
    }
    if(chatlog.groupname===this.chatarr[i].groupname){
      if(this.chatarr[i].status == "unmuted")
      this.notification=chatlog.groupname
      this.id=this.chatarr[i].chatid;
    }
  }
})
}



}
