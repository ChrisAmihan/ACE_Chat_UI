import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-newmessagepage',
  templateUrl: './newmessagepage.component.html',
  styleUrls: ['./newmessagepage.component.css']
})
export class NewmessagepageComponent implements OnInit {

  constructor(private authen: AuthenticationService) { }

  ngOnInit(): void {
    this.authen.authenticate();
  }

}
