import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServicechatService } from '../service-chat.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  
  constructor(private route : Router, private cookie:CookieService,private chatService:ServicechatService) { }
  oldurl:string = "";
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.test()
    setTimeout( ()=>{
      this.ngAfterViewInit()
    }, 500)
  }
  test(){
    let id = this.route.url.slice(10)
    if(this.oldurl!="/messages/"+id){
    window.location.reload
    //change this to get messages
    console.log(id)
    }
    this.oldurl = this.route.url;

  }
}
