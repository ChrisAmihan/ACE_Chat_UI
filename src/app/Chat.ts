import { User } from "./User";

export class Chat{
    constructor(public chatid:number,public userid:User, public groupname:String,public status:String){
        this.chatid = chatid;
        this.groupname = groupname;
        this.userid = userid;
        this.status = status;
    }
}