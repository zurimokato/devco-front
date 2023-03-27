import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  getTest(testId:string){
    return this.httpClient.get(`${environment.baseUrl}/tests/${testId}`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }
  
  getTests(){
    return this.httpClient.get(`${environment.baseUrl}/tests`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }

  getThemes(){
    return this.httpClient.get(`${environment.baseUrl}/themes`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }
  
  updateTest(userId:string, testid:string){

    return this.httpClient.patch(`${environment.baseUrl}/tests/${testid}`,
    {
 
      "userIdCandidate": userId
      },
      {
        headers:this.authService.getHeaders()
      })

  }

  getQuestions(testId:string){
    return this.httpClient.get(`${environment.baseUrl}/tests/${testId}/simple-questions`,{
      headers:this.authService.getHeaders()
    }).toPromise()
  }

  getAnwser(questionId:string){
    console.log(questionId)
    return this.httpClient.get(`${environment.baseUrl}/simple-questions/${questionId}/anwsers`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }

}
