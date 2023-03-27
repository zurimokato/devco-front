export class User{
    id?: string;
    realm?:string;
    username?: string;
    email?: string;
    emailVerified?: true;
    firstName?:string;
    lastName?:string;
    verificationToken?: string;
    password?: string
    
   
    
    roles?:string[]

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