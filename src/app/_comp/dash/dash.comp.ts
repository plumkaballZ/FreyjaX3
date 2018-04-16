import { Component, ViewEncapsulation } from '@angular/core';
import { WebShooter } from './../../_service/SpiderMan'
import { warpCtrll, warpWebRequest } from './../../_service/IronSpiderArmor'
import { userLogin } from './../../_model/userLogin'
import { userLoginManager } from './../../_logic/auth/userLoginManager';

@Component({
    selector: 'dashComp',
    templateUrl: './dash.html',
    styleUrls: ['./dash.scss'],
     encapsulation: ViewEncapsulation.None
  })
  
  export class DashComp {
    myDate : Date;
    constructor(webShooter : WebShooter) {
<<<<<<< HEAD
=======
       this.myDate = new Date();
>>>>>>> 5538f43e03d59e3682d439cb9b998edc314a6fb2
    }
  }