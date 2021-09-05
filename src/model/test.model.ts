export class Test{
    questions:SimpleQuestion[];

    constructor(){
        this.questions=[];
    }
}


export class SimpleQuestion{

}


export class MultiSelecQuestion extends SimpleQuestion{

}


export class Answer{
    isCorrect:boolean;
    constructor(){
        this.isCorrect=false;
    }
}