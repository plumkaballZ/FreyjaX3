import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { userLoginManager } from './../../_logic/auth/userLoginManager';

@Component({
  selector: 'navbarComp',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})

export class NavbarComp {
    navList = [
        {
        "id": 1,
        "name": "", 
        "link": '/dash'
        },
        {
        "id": 2,
        "name": "", 
        "link": '/moreInfo'
        },
        {
          "id": 3,
          "name": "", 
          "link": '/picz'
        },
        {
        "id": 4,
        "name": "",
        "link": '/contact'
        },
        {
          "id": 99,
          "name": "",
          "link": 'logOff'
        }
      ];

      
    constructor(private router: Router, private translate: TranslateService) {
      this.translate.get('navbarComp.frontSide').subscribe((res: string) => {
        this.navList[0].name = res;
      });
      this.translate.get('navbarComp.moreInfo').subscribe((res: string) => {
        this.navList[1].name = res;
      });
      this.translate.get('navbarComp.picz').subscribe((res: string) => {
        this.navList[2].name = res;
      });
      this.translate.get('navbarComp.contact').subscribe((res: string) => {
        this.navList[3].name = res;
      });
      this.translate.get('navbarComp.logOff').subscribe((res: string) => {
        this.navList[4].name = res;
      }); 
    }
    selectNav(nav) {
      if(nav.id == 99){
        let tokenManager:userLoginManager = new userLoginManager();
        tokenManager.removeUser();
        window.location.reload();
      }
      else{
        this.router.navigateByUrl(nav.link);
      }
    }
}