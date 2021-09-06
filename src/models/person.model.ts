export class User{
    userName:string;
    name:string;
    email:string;
    roles?:string[]

    constructor(){
        this.userName="";
        this.name="";
        this.email="";
    }
}


export class Candidate extends User{
    constructor(){
        super()
    }
}


export class Recruiter extends User{
    constructor(){
        super()
    }

}