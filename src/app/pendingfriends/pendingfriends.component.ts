import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../Friend';
import { ServicefriendService } from '../service-friend.service';

@Component({
  selector: 'app-pendingfriends',
  templateUrl: './pendingfriends.component.html',
  styleUrls: ['./pendingfriends.component.css']
})
export class PendingfriendsComponent implements OnInit {

  constructor(private friendService : ServicefriendService) { }

  ngOnInit(): void {
  }

  @Input() friend!: Friend;
 
acceptFriendRequest() {
  this.friendService.requestUpdate(this.friend).subscribe(); 
}
  
}