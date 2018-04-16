import { Component } from '@angular/core';
import { WebShooter } from './../../_service/SpiderMan'
import { warpCtrll, warpWebRequest } from './../../_service/IronSpiderArmor'
import { userLogin } from './../../_model/userLogin'
import { userLoginManager } from './../../_logic/auth/userLoginManager';

@Component({
    selector: 'loginComp',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
  })

export class LoginComp {
    _webShooter: WebShooter;

    constructor(webShooter : WebShooter) {
        this._webShooter = webShooter;
        this.login();
      }

    login() {
        console.log('login()');
        this._webShooter.post(new warpCtrll(), new warpWebRequest().userLogin_login('dragonland', 'powerMetal9000')).subscribe(data => {
            
            let userLogin : userLogin = JSON.parse(data);
            
            if(userLogin) {
                let tokenManager:userLoginManager = new userLoginManager();
                tokenManager.saveUser(userLogin);
                window.location.reload();
            }
        });
      }
  }