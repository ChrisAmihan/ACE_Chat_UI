import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Block } from '../Block';
import { Friend } from '../Friend';
import { ServiceblockService } from '../service-block.service';
import { User } from '../User';

@Component({
  selector: 'app-allfriends',
  templateUrl: './allfriends.component.html',
  styleUrls: ['./allfriends.component.css']
})
export class AllfriendsComponent implements OnInit {

  constructor(private blockService : ServiceblockService, private cookie : CookieService) { }

  ngOnInit(): void {
  }

  @Input() friend!: Friend;
  @Input() approvedFriend! :Friend;
  
  
  blockUser(): void {
    let blocker : User = new User("", "", parseInt(this.cookie.get("userid")), "",""); 
    let block : Block = new Block(0,  blocker, this.friend.requesterid)
    this.blockService.block(block).subscribe();
    }

  


}