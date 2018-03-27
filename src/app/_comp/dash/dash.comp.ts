import { Component } from '@angular/core';
import { WebShooter } from './../../_service/SpiderMan'
import { userzCtrll, IronWebRequest } from './../../_service/IronSpiderArmor'

@Component({
    selector: 'dashComp',
    templateUrl: './dash.html',
    styleUrls: ['./dash.scss']
  })
  
  export class DashComp{

      constructor(webShooter : WebShooter){
        webShooter.get(new userzCtrll()).subscribe(data => {});
        webShooter.post(new userzCtrll(), new IronWebRequest('asdf')).subscribe(data => {});
        webShooter.put(new userzCtrll(), new IronWebRequest('asdf')).subscribe(data => {});
      }
  }