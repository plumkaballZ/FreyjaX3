import {Observable} from 'rxjs/Rx';
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'flagSelectComp',
    templateUrl:'./flagSelectComp.html',
    styleUrls:['./flagSelectComp.scss']
})

export class flagSelectComp implements OnInit {

@Input() flagArray;

constructor() {
}
ngOnInit() {
}
clickEvt(data) {
    console.log(data);
  }
}