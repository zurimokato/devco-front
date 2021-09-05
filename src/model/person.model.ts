export class Person{
    userName:string;
    name:string;
    lastName:string;
    password?:string;
    email:string;

    constructor(){
        this.userName="";
        this.name="";
        this.lastName="";
        this.email="";
    }
}


export class Candidate extends Person{
    constructor(){
        super()
    }
}


export class Recruiter extends Person{
    constructor(){
        super()
    }

}