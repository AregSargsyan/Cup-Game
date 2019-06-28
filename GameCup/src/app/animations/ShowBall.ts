import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, state, keyframes, sequence
} from '@angular/animations';

  export const ShowBall = trigger("ShowBall", [
    state('2', style({   }),{ params: { time: '500ms'}}),
    state('1', style({  }),{ params: { time: '500ms'}}),
    transition(':enter', []),
    transition('* <=> *',
  
      group([
        // animate('2s'),
        sequence([
          animate('{{ time }}ms ease-in', style({ transform: "translateY(-100px)" })),
          animate('{{ time }}ms ease-in', style({ transform: "translateY(0px)" }))
        ]
        ),
      ])
    ),
  ])





      // animate('2s', keyframes([
      //   style({ top: '300px' }),
      //   style({ top: '200px' }),
      //   style({ top: '300px' }),
      // ])),