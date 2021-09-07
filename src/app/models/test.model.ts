export class Test{
    name?:string;
    questions:SimpleQuestion[];

    constructor(){
        this.questions=[];
    }
}


export class SimpleQuestion{ 
    answers:Answer[]
    constructor(){
        this.answers=[]
    }

}


export class MultiSelecQuestion extends SimpleQuestion{

}


export class Answer{
    value:number;
    isCorrect:boolean;
    constructor(){
        this.isCorrect=false;
        this.value=4;
    }
}