import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  getTest(testId:string){
    return this.httpClient.get(`${this.authService.baseUrl}/tests/${testId}`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }
  addTest(userId:string, test:any){

  }
  getTests(){
    return this.httpClient.get(`${this.authService.baseUrl}/tests`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }

  getThemes(){
    return this.httpClient.get(`${this.authService.baseUrl}/themes`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }
  
  updateTest(userId:string, testid:string){

    return this.httpClient.patch(`${this.authService.baseUrl}/tests/${testid}`,
    {
 
      "userIdCandidate": userId
      },
      {
        headers:this.authService.getHeaders()
      })

  }

  getQuestions(testId:string){
    return this.httpClient.get(`${this.authService.baseUrl}/tests/${testId}/simple-questions`,{
      headers:this.authService.getHeaders()
    }).toPromise()
  }

}
