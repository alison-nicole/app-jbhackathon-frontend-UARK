import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeTo(target: string) {
    this.router.navigateByUrl(target);
  }

}
