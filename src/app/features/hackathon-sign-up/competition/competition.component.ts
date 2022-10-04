import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from '../../common-components/registration/registration.component';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  hackathonStart = new Date('Mar 11 2023 18:00:00');
  signUpDeadline = new Date('Mar 4 2023 23:59:00');
  hackathonEnd = new Date('Mar 13 2023 16:00:00');
  dateNow = new Date();
  showSignUpCountdown = false;
  showHackathonStartCountdown = false;
  showHackathonEndCountdown = false;

  constructor() { }

  ngOnInit() {

    if (this.dateNow < this.signUpDeadline) {
      this.showSignUpCountdown = true;
    } else if (this.dateNow < this.hackathonStart && this.showSignUpCountdown === false) {
      this.showHackathonStartCountdown = true;
    } else if (this.dateNow < this.hackathonEnd && this.showSignUpCountdown === false && this.showHackathonStartCountdown === false) {
      this.showHackathonEndCountdown = true;
    }
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }

}
