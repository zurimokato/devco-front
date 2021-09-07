import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loading:boolean=false;
  loginFormGroup:FormGroup;

  constructor(private authService:AuthService, private router:Router) { 
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
    console.log(this.loginFormGroup.value);
    let user=this.loginFormGroup.value
    this.authService.login(user).then((token:any)=>{
      this.authService.setTokenByUser(`Bearer ${token.token}`)
      this.authService.getUserId(token.token).then(id=>{
        console.log(id)
        this.authService.getUserData(token.token,id).then(data=>{
          console.log(data);
          this.authService.setUser(data);
          this.loading=false;
          this.router.navigate(["/home"])
        })
      });
    });
    
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
