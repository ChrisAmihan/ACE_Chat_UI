import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../authentication.service';
import { Friend } from '../Friend';
import { ServicefriendService } from '../service-friend.service';
import { ServiceUserService } from '../service-user.service';
import { User } from '../User';

@Component({
  selector: 'app-friendspage',
  templateUrl: './friendspage.component.html',
  styleUrls: ['./friendspage.component.css']
})
export class FriendspageComponent implements OnInit {

  constructor(private authen: AuthenticationService, private friendService: ServicefriendService, private cookie: CookieService, private userService: ServiceUserService) { }

  ngOnInit(): void {
    this.authen.authenticate();
    this.findAllUsers();
    this.findAllFriends();

    setTimeout(() => {
      this.displayAllUsers();
    }, 2500)
  }

  ngAfterViewInit() {
    this.findAllFriends()
  }


  all: boolean = false;
  approved: boolean = true;
  pending: boolean = false;
  friends: Friend[] = [];
  pendingFriends: Friend[] = [];
  approvedFriends: Friend[] = [];
  friendTableId!: number;
  users: User[] = [];
  allUsers: User[] = [];
  id: number = parseInt(this.cookie.get("userid"));
  user: User = new User("", "", this.id, "", "");
  friend: Friend = new Friend(0, this.user, this.user, "");

  findAllFriends() {
    this.friends = [];
    this.friendService.getAllFriends(this.friend).subscribe(
      (data) => {
        this.friends = data;
      }
    )
  }

  displayAllUsers() {
    this.allUsers=[]
    for (let u of this.users) {
      if (u.userid != this.id) {
        this.allUsers.push(u);
      }
    }
    this.all = true;
    this.pending = false;
    this.approved = false;
  }

  findAllUsers() {
    this.userService.getallUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      }
    )
    setTimeout(() => {
      this.ngAfterViewInit()
    })
  }

  findPendingFriends() {
    this.pendingFriends = [];
    
    for (let f of this.friends) {
      if (f.status == "Pending") {
        if (f.requesterid.userid == this.id) {
          let u: User = f.requesteeid;
          let currentUser = f.requesterid;
          f.requesterid = u;
          f.requesteeid = currentUser;
          let pendingFriend : Friend = f;
          this.pendingFriends.push(pendingFriend)
          
        } else {
          this.pendingFriends.push(f);
        }
      }
    }
    this.all = false;
    this.pending = true;
    this.approved = false;
    
  }



  findApprovedFriends() {
    this.approvedFriends = [];

    for (let f of this.friends) {

      if (f.status == "Friends") {
        if (f.requesterid.userid == this.id) {
          let u: User = f.requesteeid;
          let currentUser = f.requesterid;
          f.requesterid = u;
          f.requesteeid = currentUser;
          let approvedFriend : Friend = f;
          this.approvedFriends.push(approvedFriend)
          
        } else {
          this.approvedFriends.push(f);
        }
      }
    }
    this.all = false;
    this.pending = false;
    this.approved = true;
    console.log(this.approvedFriends);
  }
}
