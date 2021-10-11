import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrls: ['./settingspage.component.css']
})
export class SettingspageComponent implements OnInit {

  constructor(private authen: AuthenticationService) { }

  ngOnInit(): void {
    this.authen.authenticate();
  }

}
