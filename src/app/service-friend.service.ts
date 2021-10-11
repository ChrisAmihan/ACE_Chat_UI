import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from './Friend';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicefriendService {

  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  friendRequest(friend:Friend){
    return this.httpClient.post(environment.friendRequest, friend, this.httpOptions);
  }


  requestUpdate(friend:Friend){
    return this.httpClient.post(environment.requestUpdate, friend, this.httpOptions);
  }


  deleteFriend(friend:Friend){
    return this.httpClient.post(environment.deleteFriend, friend, this.httpOptions);
  }

  
  getAllFriends(friend:Friend):Observable<Friend[]>{
    return this.httpClient.post(environment.getAllFriends,friend,this.httpOptions) as Observable<Friend[]>;
  }
}
