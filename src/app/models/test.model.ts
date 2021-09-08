export class Test{
    name?:string;
    questions:Question[];

    constructor(){
        this.questions=[];
    }
}


export class Question{ 
    answers?:Answer[]
    type?:string;
    constructor(){
        
    }

}


export class Answer{
    value:number;
    isCorrect:boolean;
    constructor(){
        this.isCorrect=false;
        this.value=4;
    }
}