import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RecruiterService } from '../../../services/recruiter.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: any;
  loading: boolean = false;

  userForm: FormGroup;
  constructor(private location:Location,private authService: AuthService, private router: Router, private recruiterService: RecruiterService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName: new FormControl('', Validators.compose([])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)])),
    })

  }

  ngOnInit() {
    this.authService.getUser().subscribe((data: any) => {
      if (data) {
        this.user = data;
        console.log(data)
      }
    })
  }
  logoutUser() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  //obtener el email form para validar sus valores
  get email() {
    return this.userForm.get('email') as FormControl;
  }
  //obtener el firtsName control para validar si es requerido
  get firstName(){
    return this.userForm.get('firstName') as FormControl;
  }

  //obtener el password form para validar sus valores
  get password() {
    return this.userForm.get('password') as FormControl;
  }

  createCandidate(){
    let candidate=this.userForm.value;
    this.recruiterService.createCandidate(JSON.stringify(candidate)).then(success=>{
      console.log(success);
    });
  }

  //regresar atras
  backClicked() {
    this.location.back();
  }
}


