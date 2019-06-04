import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCe92Bh8Vhspbm1c33paMjd6R8tW2XRnTg',
      {
        email,
        password,
        returnSecureToken: true
      });
  }
}
