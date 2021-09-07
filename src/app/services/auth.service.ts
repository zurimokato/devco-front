import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = "https://devco-back.herokuapp.com";
  tokenBerear = new BehaviorSubject<string>("");
  user = new BehaviorSubject<any>(null);


  constructor(private httpClient: HttpClient) { }

  login(user: any) {
    return this.httpClient.post(`${this.baseUrl}/users/login`, {
      email: user.userEmail,
      password: user.userPassword
    });
    
  }

  getUser(){
    return this.user.asObservable();
  }


  getUserId(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set("Authorization", `Bearer ${token}`);

    console.log(token)
    return this.httpClient.get(`${this.baseUrl}/whoAmI`, {
      responseType: 'text',
      headers: headers
    }).toPromise();
  }

  getUserData(token:string, id:string){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set("Authorization", `Bearer ${token}`);

    return this.httpClient.get(`${this.baseUrl}/users/${id}`, {
      headers:headers
    }).toPromise();
  }

  setTokenByUser(token: string) {
    this.tokenBerear.next(token);
  }
  setUser(user: any) {
    this.user.next(user);
  }

  logout(){
    this.user.next(null);
    this.tokenBerear.next("");
  }


}
