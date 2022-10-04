import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-hackathons',
  templateUrl: './previous-hackathons.component.html',
  styleUrls: ['./previous-hackathons.component.scss']
})
export class PreviousHackathonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
}

}
