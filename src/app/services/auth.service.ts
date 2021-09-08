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
  public headers = new HttpHeaders();


  constructor(private httpClient: HttpClient) { }

  login(user: any) {
    return this.httpClient.post(`${this.baseUrl}/users/login`, {
      email: user.userEmail,
      password: user.userPassword
    });
    
  }

  getUser(){
    let user=JSON.parse(sessionStorage.getItem("user") as string) as any;
    this.user.next(user);
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

  getHeaders():HttpHeaders{
    let token=sessionStorage.getItem("token") as string;
    return this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8').set("Authorization", token);
  }

  getUserData(id:string){
    

    return this.httpClient.get(`${this.baseUrl}/users/${id}`, {
      headers:this.getHeaders()
    }).toPromise();
  }

  setTokenByUser(token: string) {
    this.tokenBerear.next(token);
    sessionStorage.setItem("token", token)
  }
  getTokenUSer(){
    let token=sessionStorage.getItem("token") as string
    this.tokenBerear.next(token)
    return this.tokenBerear.asObservable();
  }
  setUser(user: any) {
    this.user.next(user);
    sessionStorage.setItem("user",JSON.stringify(user));
  }

  logout(){
    this.user.next(null);
    this.tokenBerear.next("");
    sessionStorage.clear();
  }


}
