import { HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClientJsonpModule) { }

  getTest(userId:string){

  }
  addTest(userId:string, test:any){

  }
  
  updateTest(userId:string, testid:string){

  }

}
