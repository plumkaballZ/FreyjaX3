import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'googleMapsComp',
  styleUrls: ['./googleMaps.scss'],
  templateUrl:'./googleMaps.html',
})

export class GoogleMapsComp implements OnInit {
    
  @Input() lat: number;
  @Input() lng: number;
    
    ngOnInit() {
    }
  }