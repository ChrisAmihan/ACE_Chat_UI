import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-messagespage',
  templateUrl: './messagespage.component.html',
  styleUrls: ['./messagespage.component.css']
})
export class MessagespageComponent implements OnInit {

  constructor(private authen: AuthenticationService) { }

  ngOnInit(): void {
    this.authen.authenticate();
  }

}
