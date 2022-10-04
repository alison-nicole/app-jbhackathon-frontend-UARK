import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/competition']);
  }

  moveDuck(element: Element) {
    element.classList.add('move-duck');
  }

}
