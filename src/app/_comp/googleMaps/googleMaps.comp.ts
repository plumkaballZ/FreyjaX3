import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'googleMapsComp',
  styles: [`
    agm-map {
      height: 300px;
      width: 540px;
    }
  `],
  templateUrl:'./googleMaps.html',
})

export class GoogleMapsComp implements OnInit {
    
  @Input() lat: number;
  @Input() lng: number;
    
    ngOnInit() {
    }
  }