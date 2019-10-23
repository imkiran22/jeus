import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    
  }

  isAuthenticated() {
    const bearer_token = localStorage.getItem('medorama_bearer-token');
    const medorama_uuid = localStorage.getItem('medorama_uuid');
    const name = localStorage.getItem('name');
    const loggedIn = bearer_token && medorama_uuid ? true : false;
    this.loggedIn.next(loggedIn);
    return loggedIn;
  }

  private get loginUrl() {
    return `${environment.authServiceUrl}/api/v1/users/sign_in`;
  }
  login(user: User) {
    const { userName, password } = user;
    if (userName && password) {
      const userObj = { user_name: userName, password }
      return this.http.post(this.loginUrl, userObj);
    }
  }

  storeAuthTokens(data) {
    localStorage.setItem('medorama_bearer-token', data['bearer-token']);
    localStorage.setItem('name', data['name']);
    localStorage.setItem('user_type', data['user_type']);
    localStorage.setItem('medorama_uuid', data['uuid']);
    localStorage.setItem('hospitals', data['hospitals']);
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}