import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from './shared/app.animations';
import { RegistrationComponent } from './features/common-components/registration/registration.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent implements OnInit {
  readonly signUpComponent!: RegistrationComponent;

  screenWidth: any;
  isBigScreen: boolean;
  notFound = false;
  home = false;
  pathname = '';
  title = 'Hackathon';
 
  constructor(private translate: TranslateService, public auth: AuthService) {
    this.getScreenSize();
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.isBigScreen = this.screenWidth > 900;
  }

  resetSignUp(): void {
    this.signUpComponent.reset();
  }
}
