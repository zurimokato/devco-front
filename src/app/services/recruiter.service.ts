import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
    return this.httpClient.get(`${environment.baseUrl}/users/candidates?filter[where][roles][inq]='candidate'`,{headers:this.authService.getHeaders()} ).toPromise();
  }

  createCandidate(candidate:any){
    return this.httpClient.post(`${environment.baseUrl}/users`,candidate,{
      headers:this.authService.getHeaders()
    }).toPromise();
  }

  updateCandidate(id:string,candidate:any){
    return this.httpClient.put(`${environment.baseUrl}/users/${id}`,candidate,{
      headers:this.authService.getHeaders()
    }).toPromise()
  }
}
