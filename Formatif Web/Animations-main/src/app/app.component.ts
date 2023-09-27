import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce, shake} from "ng-animate";
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('bounce', [transition(':increment', useAnimation(bounce, {
      // Set the duration to 3 seconds and delay to 1 second
      params: { timing: 3, delay: 1 }
    }))]),
    trigger('shake', [transition(':decrement', useAnimation(shake, ))]),

  ]
})
export class AppComponent {

  mavariable = 0;
  shake= false;
  bounce = false;

  constructor() {
  }

  shakeMe() {
    this.shake = true;
    setTimeout(() => {this.shake = false;},1000);
  }

  bounceMe() {
    this.bounce = true;
    setTimeout(() => {this.bounce = false;},1000);
  }

  shakebounce(){
    this.shake = true ;
    
    this.bounce = true;
    setTimeout(() => {this.bounce = false;},3000);
  
  }

  shakebounceAngular(){

    this.mavariable = this.mavariable - 1;

    setTimeout(() => {this.mavariable = this.mavariable + 1;    
      this.mavariable = this.mavariable + 1;
       setTimeout(() => { this.mavariable - 1 }, 1000);
    }, 1000);

  }
}
