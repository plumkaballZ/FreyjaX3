import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dinoGameComp',
    templateUrl:'./dinoGame.html',
    styleUrls:['./dinoGame.scss']
})

export class dinoGameComp implements OnInit {
    constructor() {
        console.log('dinoGame ctor');
    }
    ngOnInit() {
        console.log('dinoGame init');
    }
}