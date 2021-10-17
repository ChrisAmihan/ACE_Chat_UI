import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUserService } from '../service-user.service';
import { User } from '../User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private userService:ServiceUserService, private route : Router) { }


  user:User = new User("","",0,"","");
  
  newAccount(){
    let user = new User(this.user.username,this.user.password,0,this.user.name,this.user.profilepic);
    this.userService.newAccount(user).subscribe(res =>{
      this.route.navigate(['/login']);
    })
  }
}
