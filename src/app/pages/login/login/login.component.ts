import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loading:boolean=false;
  loginFormGroup:FormGroup;

  constructor() { 
    this.loginFormGroup=new FormGroup(
      {
        userEmail:new FormControl('',Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
        userPassword:new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)]))
      }
    )
  }

  ngOnInit(): void {
  }


  //metodo para el llamado del serivicio para iniciar sesion y traer el token
  login(){
    this.loading=true;
    setTimeout(()=>{
      this.loading=false;
    },3000)
  }


  //obtener el email form para validar sus valores
  get userEmail(){
    return this.loginFormGroup.get('userEmail') as FormControl;
  }

  //obtener el password form para validar sus valores
  get userPassword(){
    return this.loginFormGroup.get('userPassword') as FormControl;
  }

}
