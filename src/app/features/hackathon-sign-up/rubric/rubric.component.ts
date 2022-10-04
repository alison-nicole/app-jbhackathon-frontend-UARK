import { Component, OnInit, HostListener, Input } from '@angular/core';
import { routerTransition } from '../../../shared/app.animations';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.scss'],
  animations: [routerTransition]
})
export class RubricComponent implements OnInit {
  state = 'in';
  screenWidth: any;
  isBigScreen: boolean;

  @Input()
  rate: boolean;

  @Input()
  judgingForm: UntypedFormGroup;

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.isBigScreen = this.screenWidth > 1200;
  }
}
