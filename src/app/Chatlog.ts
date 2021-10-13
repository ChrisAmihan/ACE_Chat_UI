import { User } from "./User";

export class Chatlog{
    constructor(public chatlogid:number,public userid:User, public groupname:String,public message:String,public senttime:String){
        this.chatlogid = chatlogid;
        this.groupname = groupname;
        this.userid = userid;
        this.message = message;
        this.senttime= senttime;
    }
}