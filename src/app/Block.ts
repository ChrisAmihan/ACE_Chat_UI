import { User } from "./User";

export class Block{
    constructor(public blockusertableid:number,public blockerid:User, public blockeeid:User){
        this.blockusertableid = blockusertableid;
        this.blockerid = blockerid;
        this.blockeeid = blockeeid;
    }
}