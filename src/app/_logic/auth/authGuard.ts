import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { userLoginManager } from './userLoginManager';

@Injectable()

export class authGuard implements CanActivate {
    constructor(private router: Router){}
    
    canActivate() {

        let tokenManager:userLoginManager = new userLoginManager();

        return true;
        // if(tokenManager.hasAccsess) return true
        
        // this.router.navigate(['/login']);
        // return false;
      }
}