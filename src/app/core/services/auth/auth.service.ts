import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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
    username: string, password: string
  }): Observable<any>{
    return this.http.post('https://dummyjson.com/auth/login', user).pipe(
      // if using the backend services below code is used the dummy json
      // tap(tokens => this.doLoginUser(user.username, tokens))
      tap((response: any) => this.doLoginUser(user.username, response.token))
    )
  }

  // if using the backend services below code is used the dummy json
  // private doLoginUser(username: string, tokens: any) {
  private doLoginUser(username: string, token: any) {
    this.loggedUser = username;
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

}
