import { Component, ViewEncapsulation } from '@angular/core';
import { WebShooter } from './../../_service/SpiderMan'
import { warpCtrll, warpWebRequest } from './../../_service/IronSpiderArmor'
import { userLogin } from './../../_model/userLogin'
import { userLoginManager } from './../../_logic/auth/userLoginManager';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'dashComp',
    templateUrl: './dash.html',
    styleUrls: ['./dash.scss'],
    encapsulation: ViewEncapsulation.None
  })
  
  export class DashComp {
    private translate: TranslateService;
    
    constructor(webShooter : WebShooter, translate: TranslateService) {
      // let tokenManager:userLoginManager = new userLoginManager();
      //   tokenManager.removeUser();
      this.translate = translate;
     }
  }