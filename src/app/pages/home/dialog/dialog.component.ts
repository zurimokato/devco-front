import { Component, Inject, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RecruiterService } from "src/app/services/recruiter.service";
import { TestService } from "src/app/services/test.service";

@Component({
    selector: 'dialog-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})

export class DialogEditCandidate implements OnInit {
    userForm: UntypedFormGroup;
    tests:any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private recruiterService:RecruiterService, private testSrvice:TestService) {
        console.log(data);
        this.userForm = new UntypedFormGroup({
            firstName: new UntypedFormControl('', Validators.compose([Validators.required])),
            lastName: new UntypedFormControl('', Validators.compose([])),
            email: new UntypedFormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
            test:new UntypedFormControl('',Validators.compose([]))
        });
        this.userForm.setValue({
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            email: data.user.email,
            test:'Asigne un Test'
         });
    }
    ngOnInit(): void {
       this.testSrvice.getTests().then(data=>{
           this.tests=data;
       })
    }

    updateCandidate() {
        let candidate=this.userForm.value;
        this.recruiterService.updateCandidate(this.data.user.id,JSON.stringify(candidate)).then((data)=>{
            console.log(data);
        });
        let testId=this.userForm.controls['test'].value as string;
        if(testId!==''){
            this.testSrvice.updateTest(this.data.user.id, testId);
        }
        
    }

    //obtener el email form para validar sus valores
    get email() {
        return this.userForm.get('email') as UntypedFormControl;
    }
    //obtener el firtsName control para validar si es requerido
    get firstName() {
        return this.userForm.get('firstName') as UntypedFormControl;
    }
}