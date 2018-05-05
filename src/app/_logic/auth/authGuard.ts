import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { userLoginManager } from './userLoginManager';

@Injectable()

export class authGuard implements CanActivate {
    constructor(private router: Router){}
    
    canActivate() {

        let tokenManager:userLoginManager = new userLoginManager();
<<<<<<< HEAD

        if(tokenManager.hasAccsess) return true
        
        this.router.navigate(['/login']);
        return false;
=======
        
        if(tokenManager.hasAccsess) return true
        
         this.router.navigate(['/login']);
          return false;
>>>>>>> 14896610e76f53043a6b2181c4c6d200d9c6a29e
      }
}