import { Component, Input, OnInit } from '@angular/core';
import { routerTransition } from '../../../shared/app.animations';
import { Router } from '@angular/router';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [routerTransition]
})
export class FaqComponent implements OnInit {
  state = 'in';

  accordionConfig = [
      {
        header: 'Do I need to know how to code to participate?',
        info: 'faq.general.code',
      },
      {
        header: 'Does it cost anything?',
        info: 'faq.general.cost',
        click: 'sign-up',
        link: 'faq.general.cost-link'
      },
      {
        header: 'Where can I park?',
        info: 'faq.general.parking'
      },
      {
        header: 'How many members can a team have?',
        info: 'faq.teams.size',
      },
      {
        header: 'Does every team member need to sign up?',
        info: 'faq.teams.all-sign-up'
      },
      {
        header: 'What if a team member forgot to sign up or, what if we get a team member last minute?',
        info: 'faq.teams.forgot-sign-up'
      },
      {
        header: 'What if I can\'t find a team?',
        info: 'faq.teams.no-team'
      },
      {
        header: 'Can I have team members that are not college undergraduates?',
        info: 'faq.teams.not-undergraduates'
      },
      {
        header: 'Will food be provided?',
        info: 'faq.during.food',
      },
      {
        header: 'Do I need to bring anything?',
        info: 'faq.during.bring'
      },
      {
        header: 'Can I use code that I\'ve written before the Hackathon?',
        info: 'faq.during.code'
      },
      {
        header: 'Can I use code from outside sources?',
        info: 'faq.during.outside'
      },
      {
        header: 'Do I have to stay for everyone\'s presentations?',
        info: 'faq.after.presentations'
      },
      {
        header: 'What if one or more members of my team leave before the Hackathon ends?',
        info: 'faq.after.leave'
      }
  ];

  @Input() accordion = {
    multiple: false,
    style: null,
    styleClass: null,
    activeIndex: null,
    expandIcon: 'fa fa-caret-down',
    collapseIcon: 'fa fa-caret-up',
  };

  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  goToItems(routerLocation: string) {
    this.router.navigate([routerLocation]);
  }

  toggleAccordion(i) {
    document.getElementById(i).classList.toggle('expand');
  }
}
