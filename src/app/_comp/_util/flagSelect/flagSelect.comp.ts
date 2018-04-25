import {Observable} from 'rxjs/Rx';
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'flagSelectComp',
    templateUrl:'./flagSelectComp.html',
    styleUrls:['./flagSelectComp.scss']
})

export class flagSelectComp implements OnInit {

@Input() flagArray;
public localFlag: string;

constructor() {
    this.localFlag = 'dk';
    var localFlag = localStorage.getItem('localFlag');
    if(localFlag) this.localFlag = localFlag;
}
ngOnInit() {
}
saveFlag(flag : string){
    if(this.localFlag != flag){
        // localStorage.setItem('localFlag', flag);
        // location.reload();
    }
}
}