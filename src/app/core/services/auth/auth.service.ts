import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtDecoderService } from '../jwt/jwt-decoder.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private http = inject(HttpClient);

  constructor() { }

  login(user: {
    email: string, password: string
  }): Observable<any>{
    return this.http.post('https://api.escuelajs.co/api/v1/auth/login', user)
    .pipe(
      // if using the backend services below code is used the dummy json
      tap((tokens: any) => 
        this.doLoginUser(user.email, tokens.access_token))
      // tap((response: any) => this.doLoginUser(user.username, response.token))
    )
  }

  // if using the backend services below code is used the dummy json
  // private doLoginUser(username: string, tokens: any) {
  private doLoginUser(email: string, token: any) {

    this.loggedUser = email;
    // if using the backend services below code is used the dummy json
    // this.storeJwtToken(tokens.jwt);
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout(){
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentAuthUser() {
    let token = localStorage.getItem(this.JWT_TOKEN);
    
    // get decoded value from token
    // const decodedToken = new JwtDecoderService().decodeToken(token);
    // console.log(decodedToken);
    // return decodedToken;
    // console.log(token);
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile');
  }

  public isLoggedIn() {
    return this.isAuthenticatedSubject.value;
  }

}
