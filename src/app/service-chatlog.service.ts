import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chatlog } from './Chatlog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicechatlogService {

  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  message(chatlog:Chatlog){
    return this.httpClient.post(environment.message, chatlog,this.httpOptions);
  }

  getChats(chatlog:Chatlog):Observable<Chatlog[]>{
    return this.httpClient.post(environment.getChats,chatlog,this.httpOptions) as Observable<Chatlog[]>
  }

  notifications(chatlog:Chatlog):Observable<boolean>{
    return this.httpClient.post(environment.notifications,chatlog,this.httpOptions) as Observable<boolean>;
  }
}
