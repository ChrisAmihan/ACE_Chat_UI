import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../Friend';
import { User } from '../User';
import { ServiceblockService } from '../service-block.service'
import { Block } from '../Block';
import { CookieService } from 'ngx-cookie-service';
import { ServicefriendService } from '../service-friend.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private blockService: ServiceblockService, private cookie: CookieService, private friendService: ServicefriendService) { }


  ngOnInit(): void {
  }
  
  @Input() user!: User;

  blockUser(): void {
    let blocker: User = new User("", "", parseInt(this.cookie.get("userid")), "", "");
    let block: Block = new Block(0, blocker, this.user)
    this.blockService.block(block).subscribe();
  }

  addFriend(): void {
    let requesterid: User = new User("", "", parseInt(this.cookie.get("userid")), "", "");
    let friend = new Friend(0, requesterid, this.user, "");
    this.friendService.friendRequest(friend).subscribe();
  }

}