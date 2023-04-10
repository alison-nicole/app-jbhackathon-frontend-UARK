import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {

  noBuilderPageForUrl: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
