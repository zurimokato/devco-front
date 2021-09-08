import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.scss']
})
export class TakeTestComponent implements OnInit {

  testId:string="";
  user:any;
  test:any;

  constructor(private testService:TestService,private activeRouter:ActivatedRoute,private authService:AuthService, private router:Router, private location:Location) { }

  ngOnInit(): void {

      this.testId=this.activeRouter.snapshot.paramMap.get("id") as string;
      console.log(this.testId);
      this.authService.getUser().subscribe((data:any)=>{
        if(data){
          this.user=data;
          
        }
      });
  }

  logoutUser(){
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  backClicked() {
    this.location.back();
  }
  getTest(testId:string){
    this.testService.getTest(testId).then(data=>{
      this.test=data;
      this.testService.getQuestions(testId).then(questions=>{
        console.log(questions);
      })
    })
  }
}
