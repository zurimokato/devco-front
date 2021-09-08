import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'devco';
  user:any;
  constructor(private router:Router, private location:Location, private authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.getUser().subscribe(data=>{
      this.user=data;
    })
  }
  logoutUser() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  backClicked() {
    this.location.back();
  }
}
