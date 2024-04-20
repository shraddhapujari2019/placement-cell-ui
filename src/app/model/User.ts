
export class User{
    username:string;
    password:string;
    fname:string;
    lname:string;
    role:string;

    constructor(username:string, password:string, fname:string, lname:string, role:string){
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.role = role;
    }
}