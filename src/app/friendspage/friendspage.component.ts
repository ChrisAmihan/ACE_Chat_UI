import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-friendspage',
  templateUrl: './friendspage.component.html',
  styleUrls: ['./friendspage.component.css']
})
export class FriendspageComponent implements OnInit {

  constructor(private authen: AuthenticationService) { }

  ngOnInit(): void {
    this.authen.authenticate();
  }

}
