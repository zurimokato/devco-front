import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { }

  getTest(userId:string){

  }
  addTest(userId:string, test:any){

  }
  getTests(){
    return this.httpClient.get(`${this.authService.baseUrl}/tests`,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }
  
  updateTest(userId:string, testid:string){

  }

}
