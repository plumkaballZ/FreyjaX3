import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dinoComp',
    templateUrl:'./dino.html',
    styleUrls:['./dino.scss']
})

export class dinoComp implements OnInit {
    
    speed: number = 1;

    constructor() {
        console.log('dino ctor');
    }

    ngOnInit() {
        console.log('dino init');
    }
    runRight(){

    }
    runLeft(){

    }
}