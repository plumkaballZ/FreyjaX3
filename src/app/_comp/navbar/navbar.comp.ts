//core stuff
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbarComp',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})

export class NavbarComp {
    navList = [
        {
        "id": 1,
        "name": "FrontPage", 
        "link": '/dash'
        },
        {
        "id": 2,
        "name": "MoreInfo", 
        "link": '/moreInfo'
        },
        {
          "id": 3,
          "name": "Picz", 
          "link": '/picz'
        },
        {
        "id": 4,
        "name": "Contact",
        "link": '/contact'
        }
      ];
    constructor(private router: Router) {

    }
    
    selectNav(nav) {
        this.router.navigateByUrl(nav.link);
      }
}