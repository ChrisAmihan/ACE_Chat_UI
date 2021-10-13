import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from './Chat';
import { environment } from 'src/environments/environment';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ServicechatService {

  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  newChat(chat:Chat){
    return this.httpClient.post(environment.newChat,chat,this.httpOptions);
  }

  deleteChat(chat:Chat){
    return this.httpClient.post(environment.deleteChat,chat,this.httpOptions);
  }

  muteChat(chat:Chat){
    return this.httpClient.post(environment.muteChat,chat, this.httpOptions);
  }

  getAllChats(chat:User):Observable<Chat[]>{
    return this.httpClient.post(environment.getAllChats,chat,this.httpOptions) as Observable<Chat[]>
  }

  searchChats(user:User):Observable<Chat[]>{
    return this.httpClient.post(environment.searchChats,user,this.httpOptions) as Observable<Chat[]>
  }

  getGroups(chat:Chat):Observable<Chat[]>{
    return this.httpClient.post(environment.getGroups,chat,this.httpOptions) as Observable<Chat[]>
  }

  getOne(chat:Chat):Observable<Chat>{
    return this.httpClient.post(environment.getone,chat,this.httpOptions)as Observable<Chat>
  }
}
