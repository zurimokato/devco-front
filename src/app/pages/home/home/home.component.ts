import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any;
  title="Home";
  loading=true;
  constructor(private authService:AuthService, private router:Router) { 

    this.loading=true;
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((data:any)=>{
      if(data){
        this.user=data;
        this.loading=false;
      }
    })
  }

  logoutUser(){
    
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
