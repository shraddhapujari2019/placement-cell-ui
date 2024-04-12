
export class User{
    userId:string;
    password:string;
    fname:string;
    lname:string;
    role:string;

    constructor(userId:string, password:string, fname:string, lname:string, role:string){
        this.userId = userId;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.role = role;
    }
}