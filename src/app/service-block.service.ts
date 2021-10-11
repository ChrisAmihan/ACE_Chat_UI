import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Block } from './Block';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceblockService {

  constructor(private httpClient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  block(block:Block){
    return this.httpClient.post(environment.block,block,this.httpOptions);
  }

  unblock(block:Block){
    return this.httpClient.post(environment.unblock, block, this.httpOptions);
  }

  getblock(block:Block):Observable<Block[]>{
    return this.httpClient.post(environment.getblock,block,this.httpOptions) as Observable<Block[]>;
  }
}
