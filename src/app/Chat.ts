export class Chat{
    constructor(public chatid:number,public userid:number, public groupname:String,public status:String){
        this.chatid = chatid;
        this.groupname = groupname;
        this.userid = userid;
        this.status = status;
    }
}