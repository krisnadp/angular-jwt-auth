import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class JwtDecoderService {

  constructor() { }

  public decodeToken(token: any) {
    const helper = new JwtHelperService(token);
    const decodedToken = helper.decodeToken(token);

    // other function on the jwt helper service
    // const expirationDate = helper.getTokenExpirationDate(token);
    // const isExpired = helper.isTokenExpired(token);
    return decodedToken;
  }

  public getTokenExpirationDate(token: string) {
    
  }
  
}