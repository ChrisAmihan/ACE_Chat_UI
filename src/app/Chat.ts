import { User } from "./User";

export class Chat{
    constructor(public chatid:number,public user:User, public groupname:String,public status:String){
        this.chatid = chatid;
        this.groupname = groupname;
        this.user = user;
        this.status = status;
    }
}