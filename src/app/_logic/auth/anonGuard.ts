import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { userLoginManager } from './userLoginManager';

@Injectable()

export class anonGuard implements CanActivate {
    constructor(private router: Router){}
    
    canActivate() {
        let tokenManager:userLoginManager = new userLoginManager();
        
        if(tokenManager.hasAccsess) {
            this.router.navigate(['/dash']);
            return false
        }

        return true;
      }
}