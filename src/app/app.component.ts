import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }
                                                                                                                                                                                                                                                                                                               
}