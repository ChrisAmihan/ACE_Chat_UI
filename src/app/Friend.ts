export class Friend{
    constructor(public friendtableid:number,public requesterid:number, public requesteeid:number,public status:String){
        this.friendtableid = friendtableid;
        this.requesteeid = requesteeid;
        this.requesterid = requesterid;
        this.status = status;
    }
}