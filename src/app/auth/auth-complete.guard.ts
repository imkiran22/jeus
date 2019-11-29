import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthCompleteGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthenticated = this.authService.isAuthenticated();
        if (isAuthenticated) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
    }
}
