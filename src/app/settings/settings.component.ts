import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServiceUserService } from '../service-user.service';
import { User } from '../User';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user:User = new User("","",0,"","");
  user2:User = new User("","",0,"","");
  constructor(private cookie:CookieService,private userService:ServiceUserService) { }

  ngOnInit(): void {
  }

  updateprofilepic(){
    this.user.userid=Number(this.cookie.get("userid"));
    this.userService.updateAccount(this.user).subscribe()
  }


  update(){
    this.user2.userid=Number(this.cookie.get("userid"));
    console.log(this.user2)
    this.userService.updateAccount(this.user2).subscribe()
  }
}
