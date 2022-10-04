/* eslint-disable */

import { routerTransition } from '../../../../shared/app.animations';
import { Component, NgModule, OnInit } from '@angular/core';



@Component({
  selector: 'app-past-winners',
  templateUrl: './past-winners.component.html',
  styleUrls: ['./past-winners.component.scss'],
  animations: [routerTransition],

})

export class PastWinnersComponent implements OnInit {
  state = 'in';

  expandButton = 'expand-btn';
  showMoreBtn = true;
  
  toggleExpand(index) {
    this.pastWinners[index].expand = !this.pastWinners[index].expand;
    document.getElementsByClassName("btn-blue")[index].classList.toggle("hidden");
    document.getElementsByClassName("close-btn")[index].classList.toggle("hidden");
  }

  pastWinners = [
    {
      image: '../../../../assets/image/Project2.jpg',
      title: 'past.section-two.title',
      topic: 'past.section-two.topic',
      description: 'past.section-two.body',
      technologiesUsed: 'past.section-two.technologies',
      pastMembers: 'past.section-two.members',
      expand: false

    },
    {
      image: '../../../../assets/image/SpiritAnimal.png',
      title: 'past.section-one.title',
      topic: 'past.section-one.topic',
      description: 'past.section-one.body',
      pastMembers: 'past.section-one.members',
      technologiesUsed: 'past.section-one.technologies',
      expand: false

    },
    {
      image: '../../../../assets/image/project4.jpg',
      title: 'past.section-four.title',
      topic: 'past.section-four.topic',
      description: 'past.section-four.body',
      technologiesUsed: 'past.section-four.technologies',
      pastMembers: 'past.section-four.members',
      expand: false

    },
    {
      image: '../../../../assets/image/project3.jpg',
      description: 'past.section-three.body',
      title: 'past.section-three.title',
      topic: 'past.section-three.topic',
      technologiesUsed: 'past.section-three.technologies',
      pastMembers: 'past.section-three.members',
      expand: false

    },
    {
      expand: false,
      image: '../../../../assets/image/mucky_bottle.jpg',
      title: 'past.section-five.title',
      topic: 'past.section-five.topic',
      description: 'past.section-five.body',
      technologiesUsed: 'past.section-five.technologies',
      pastMembers: 'past.section-five.members',

    },
    {
      image: '../../../../assets/image/Hackermen.JPG',
      title: 'past.section-six.title',
      topic: 'past.section-six.topic',
      description: 'past.section-six.body',
      technologiesUsed: 'past.section-six.technologies',
      pastMembers: 'past.section-six.members',
      expand: false

    }
  ];

  scroll(id: string): void {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
