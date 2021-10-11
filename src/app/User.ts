export class User{
    constructor(public username:String,public password:String, public userid:number,public name:String, public profilepic:String){
        this.username = username;
        this.password = password;
        this.userid = userid;
        this.name = name;
        this.profilepic = profilepic;
    }
}