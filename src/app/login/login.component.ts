import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceUserService } from '../service-user.service';
import { User } from '../User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router, private cookie:CookieService,private userService:ServiceUserService) { }

  ngOnInit(): void {
  }

 user:User = new User("","",0,"","");
  login(){
    let user = new User(this.user.username,this.user.password,0,"","");
    this.userService.login(user).subscribe((data)=>{this.user=data
    this.cookie.set("userid", this.user+"");
    
    })
    this.route.navigate(["/content"]);
  }
}
