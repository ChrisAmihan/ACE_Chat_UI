export class Chatlog{
    constructor(public chatlogid:number,public userid:number, public groupname:String,public message:String,public senttime:String){
        this.chatlogid = chatlogid;
        this.groupname = groupname;
        this.userid = userid;
        this.message = message;
        this.senttime= senttime;
    }
}