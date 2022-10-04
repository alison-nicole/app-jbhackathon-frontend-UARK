import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../shared/app.animations';
import { CompetitionComponent } from '../competition/competition.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition]
})
export class HomeComponent implements OnInit {
  state = 'in';

  scrollSpeed = 10;
  schools: HTMLElement;
  prizes: HTMLElement;
  scrolling = true;

  intervalID;
  intervalID2;

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  navigate() {
    this.router.navigate(['/competition']);
  }

}
