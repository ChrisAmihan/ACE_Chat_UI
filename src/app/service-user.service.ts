import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  login(user:User):Observable<User>{
    return this.httpClient.post<any>(environment.login, user, this.httpOptions) as Observable<User>;
  }


  newAccount(user:User){
    console.log(user)
    return this.httpClient.post<any>(environment.newAccount, user);
  }


  updateAccount(user:User){
    return this.httpClient.post<User>(environment.updateAccount, user, this.httpOptions);
  }


  getallUsers():Observable<User[]>{

    return this.httpClient.get(environment.getallUsers) as Observable<User[]>
  }

  getoneUser(user:User):Observable<User>{
    return this.httpClient.post(environment.getoneUser,user,this.httpOptions) as Observable<User>
  }
  
}