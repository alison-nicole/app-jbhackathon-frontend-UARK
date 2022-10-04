import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../shared/app.animations';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  animations: [routerTransition]
})
export class ResourcesComponent implements OnInit {
  state = 'in';

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  scroll(el: HTMLElement): void {
      el.scrollIntoView();
  }

}
