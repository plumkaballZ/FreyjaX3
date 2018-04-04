import { Component } from '@angular/core';
import { WebShooter } from './../../_service/SpiderMan'
import { warpCtrll, warpWebRequest } from './../../_service/IronSpiderArmor'
import { userLogin } from './../../_model/userLogin'
import { userLoginManager } from './../../_logic/auth/userLoginManager';

@Component({
    selector: 'dashComp',
    templateUrl: './dash.html',
    styleUrls: ['./dash.scss']
  })
  
  export class DashComp {
    constructor(webShooter : WebShooter) {
      
    }
  }