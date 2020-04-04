import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterState } from '@angular/router';

@Component({
  selector: 'app-wild',
  animations: [ trigger(
    'currentHover', [
  // current state
  state('current', style({
    backgroundColor: 'pink',
    opacity: 0.8,
    width: '80%'
  })
  ),
  // hover state
  state('hover', style({
    backgroundColor: 'green',
    opacity: 1,
    width: '100%',
    color: 'white',
    })
  ),
  // transition from current => hover
  transition('current => hover', animate('0.5s')),
  // transition from hover to current
  transition('hover => current', animate('0.3s')),
  // transition void to any state *
  transition('void => *', animate('1s')),
  // transition any state(*) => void
  transition('* => void', animate('1s'))
 ]
  )],
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})

export class WildComponent {
  stateChange = false;
  product = {
    name: 'shirt',
    category: 'cloth',
    image: '../../favicon.ico',
    sku: '#233555',
    shortDescription: 'awesome',
    longDescription: 'last long'
  };
  constructor() {}
  onTrigger() {
    this.stateChange = !this.stateChange;
  }
}
