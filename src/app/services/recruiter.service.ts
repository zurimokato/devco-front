import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  token:string="";

  constructor(private httpClient:HttpClient, private authService:AuthService) { 

    this.authService.getTokenUSer().subscribe(token=>{
      console.log(token);
    })
  }

  getCandidates(){
    return this.httpClient.get(`${this.authService.baseUrl}/users/candidates?filter[where][roles][inq]='candidate'`,{headers:this.authService.headers} ).toPromise();
  }

  createCandidate(candidate:any){
    return this.httpClient.post(`${this.authService.baseUrl}/users`,candidate,{
      headers:this.authService.headers
    }).toPromise();
  }
}
