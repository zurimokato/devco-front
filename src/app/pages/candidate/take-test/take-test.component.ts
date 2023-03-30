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

  testId: string = "";
  user: any;
  test: any;
  questions: any;
  title="Exman"
  loading=true;

  constructor(private testService: TestService, private activeRouter: ActivatedRoute, private authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit(): void {

    this.testId = this.activeRouter.snapshot.paramMap.get("id") as string;
    console.log(this.testId);
    this.authService.getUser().subscribe((data: any) => {
      if (data) {
        this.user = data;

      }
    });

    this.getTest(this.testId);
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  backClicked() {
    this.location.back();
  }
 async getTest(testId: string) {
    this.testService.getTest(testId).then(data => {
      if (data) {
       
        this.test = data;
        this.testService.getQuestions(testId).then(async questions => {
          if (questions) {
            this.test.questions = questions
            for (let i = 0; i < this.test.questions.length; i++) {
              this.test.questions[i].anwsers =  await this.testService.getAnwser(this.test.questions[i].id)
            }
            console.log(this.test)
            this.loading=false;
          }
        });
      }
    });
    
      

  }
}
