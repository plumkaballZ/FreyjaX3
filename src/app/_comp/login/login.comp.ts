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
    _id: string;
    _password: string;
    _webShooter: WebShooter;

    constructor(webShooter : WebShooter) {
        this._webShooter = webShooter;
      }

    public loginEvent() {
        this._webShooter.post(new warpCtrll(), new warpWebRequest().userLogin_login(this._id, this._password)).subscribe(data => {
            
            let userLogin : userLogin = JSON.parse(data);

            if(userLogin) {
                
                let tokenManager:userLoginManager = new userLoginManager();
                tokenManager.saveUser(userLogin);

                this._webShooter.post(new warpCtrll(), new warpWebRequest().loginLogCreate(userLogin.uid)).subscribe(data => {});   

                window.location.reload();
            }
        }, err => {
            console.log('err');
        });
      }
  }