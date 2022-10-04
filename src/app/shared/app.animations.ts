import { trigger, state, style, transition, animate } from '@angular/animations';

export const routerTransition =
    trigger('transition', [
        state('in', style({transform: 'translateY(0)', opacity: '1'})),
        transition('void => *', [
            style({transform: 'translateY(100%)', opacity: '0'}),
            animate('500ms ease-out')
        ])
    ]);
