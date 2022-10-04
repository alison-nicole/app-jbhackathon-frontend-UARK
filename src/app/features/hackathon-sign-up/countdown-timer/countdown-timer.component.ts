import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  dateNow = new Date();
  dDay: Date;
  @Input() date: string;
  @Input() message: string;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  timeDifference;
  secondsToDday;
  minutesToDday;
  hoursToDday;
  daysToDday;

  constructor() { }

  ngOnInit() {
    this.dDay = new Date(this.date);
    this.subscription = interval(1000)
        .subscribe(x => { this.getTimeDifference(); });
 }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute)
    % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) /
    (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

}
