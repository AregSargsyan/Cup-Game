import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state, keyframes
} from '@angular/animations';

export const Randomising = trigger('openClose', [


  state('1', style({
    left: "200px",
    top: "800px",
  }), { params: { time: '1000ms'}}),
  state('2', style({
    left: "400px",
    top: "800px",
  }), { params: { time: '1000ms'}}),
  state('3', style({
    left: "600px",
    top: "800px",
  }), { params: { time: '1000ms'}}),
  state('4', style({
    left: "800px",
    top: "800px",
  }), { params: { time: '1000ms'}}),
  state('5', style({
    left: "1000px",
    top: "800px",
  }), { params: { time: '1000ms'}}),

  transition(':enter', []),
  transition('* <=> *', [
group([
  
  animate("{{ time }}ms", keyframes([
    style({ top: "750px", offset: 0 }),
    style({ top: "600px", offset: 0.5 }),
    style({ top: "750px", offset: 1 }),

  ],)
  ),
  animate("{{ time }}ms",),
])




  ]),
  transition(':enter', [])

]);


