import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'white',
        height: '350px',
        opacity: 1
      })),
      state('close', style({
        backgroundColor: 'white',
        height: '100px',
        opacity: 0.5
      })),
      transition('open => close', animate('1s')),
      transition('close => open', animate('2s'))
    ])
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})

export class  AnimationComponent {
  ani = false;
  shadow = false ;
  constructor() {}
  trigger() {
    this.ani = !this.ani;
  }
  shadowIn() {
    this.shadow = true;
  }
  shadowOut() {
    this.shadow = false;
  }
}
