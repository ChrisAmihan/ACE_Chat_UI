import { User } from "./User";

export class Friend{
    constructor(public friendtableid:number,public requesterid:User, public requesteeid:User,public status:String){
        this.friendtableid = friendtableid;
        this.requesteeid = requesteeid;
        this.requesterid = requesterid;
        this.status = status;
    }
}