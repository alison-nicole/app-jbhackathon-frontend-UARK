import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  html: HTMLElement;
  body: HTMLElement;

  constructor() {
    this.html = document.getElementById('html');
    this.body = document.getElementById('body');
  }

  ngOnInit() {
    if (this.html && this.body) {
      this.html.classList.add('hide-scrollbar');
      this.body.classList.add('hide-scrollbar');
    }
  }

  ngOnDestroy() {
    if (this.html && this.body) {
      this.html.classList.remove('hide-scrollbar');
      this.body.classList.remove('hide-scrollbar');
    }
  }

}
