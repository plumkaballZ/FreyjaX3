import {Observable} from 'rxjs/Rx';
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'doomCounterComp',
    templateUrl:'./doomCounter.html',
    styleUrls:['./doomCounter.scss']
})
export class DoomCounterComp implements OnInit {

@Input() _trialEndsAt;
public _diff: number;
public _days: number;
public _hours: number;
public _minutes: number;
public _seconds: number;

constructor() {
}

ngOnInit() {    
    Observable.interval(1000).map((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        }).subscribe((x) => {           
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }

    private getDays(t){return Math.floor( t/(1000*60*60*24) );}
    private getHours(t){return Math.floor( (t/(1000*60*60)) % 24 );}
    private getMinutes(t){return Math.floor( (t/1000/60) % 60 );}
     private getSeconds(t){return Math.floor( (t/1000) % 60 );}}