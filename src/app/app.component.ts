import { Component } from '@angular/core';
import { userLoginManager } from './_logic/auth/userLoginManager';
import { WebShooter } from './_service/SpiderMan'
import { warpCtrll, warpWebRequest } from './_service/IronSpiderArmor'
import { userLogin } from './_model/userLogin'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(webShooter : WebShooter, translate: TranslateService){
    let tokenManager:userLoginManager = new userLoginManager();
    var user = tokenManager.getUser();

    if(user){

        webShooter.post(new warpCtrll(), new warpWebRequest().userLogin_login(user.id, user.pw)).subscribe(data => {

          let userLogin : userLogin = JSON.parse(data);

          if(userLogin){
            userLogin.pw = user.pw;
            tokenManager.saveUser(userLogin)

            webShooter.getIpCliente().subscribe(data => {
              webShooter.post(new warpCtrll(), new warpWebRequest().loginLog_log(userLogin.uid, data)).subscribe(data => {  
            }, err => {
            });
          });
        }
          if(userLogin == null){
            tokenManager.removeUser();
            window.location.reload();
          }
        }, err => {
        });
      }
      
      var localFlag = localStorage.getItem('localFlag');
      if(localFlag) translate.use(localFlag)
      else translate.use('dk')
  }
}
