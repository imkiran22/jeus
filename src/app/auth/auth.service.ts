import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../app-services/local-storage.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    
  }

  isAuthenticated() {
    const bearer_token = this.localStorageService.getItem('medorama_bearer-token');
    const medorama_uuid = this.localStorageService.getItem('medorama_uuid');
    const name = this.localStorageService.getItem('name');
    const loggedIn = bearer_token && medorama_uuid ? true : false;
    this.loggedIn.next(loggedIn);
    return loggedIn;
  }

  private get loginUrl() {
    return `${environment.entityServiceUrl}/api/v1/users/sign_in`;
  }
  login(user: User) {
    const { userName, password } = user;
    if (userName && password) {
      const userObj = { user_name: userName, password }
      return this.http.post(this.loginUrl, userObj);
    }
  }

  storeAuthTokens(data) {
    this.localStorageService.setItem('medorama_bearer-token', data['bearer-token'])
    this.localStorageService.setItem('name', data['name'])
    this.localStorageService.setItem('user_type', data['user_type']);
    this.localStorageService.setItem('medorama_uuid', data['uuid']);
    this.localStorageService.setItem('hospitals', JSON.stringify(data['hospitals']));
    this.localStorageService.setItem('current_hospital', JSON.stringify(data['hospitals'][0]))
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}