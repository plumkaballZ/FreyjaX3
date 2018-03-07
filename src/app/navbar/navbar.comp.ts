import { Component } from '@angular/core';

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
        "link": './'
        },
        {
        "id": 2,
        "name": "MoreInfo", 
        "link": '',
        childNavList : 
        [
            {
                "id": 22,
                "name": "link001", 
                "link": 'link001'
            },
            {
                "id": 23,
                "name": "link002", 
                "link": 'link002'
            },
            {
                "id": 24,
                "name": "link003", 
                "link": 'link003'
            }
        ]
        },
        {
          "id": 3,
          "name": "Picz", 
          "link": 'picz'
        },
        {
        "id": 4,
        "name": "Contact",
        "link": 'contact'
        }
      ];
    constructor() {
    }

    selectNav(nav) {
        console.log('select nav');
        console.log(nav);
        // this.router.navigateByUrl(taxon.link);
      }
}