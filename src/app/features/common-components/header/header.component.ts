import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { lessThanEqualToValidatorExtension } from '@rxweb/reactive-form-validators/validators-extension';
import { SignUpService } from 'src/app/shared/services/sign-up.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() signUpEvent: EventEmitter<any> = new EventEmitter<any>();

  displayBanner: boolean = false;
  displayLogin: boolean = true; 
  displayLoginButton: boolean = true;

  constructor(private router: Router, public signUpService: SignUpService, public authService: AuthService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        if(event.url === '/home' || event.url === '/')
          this.displayBanner = false;
        else {
          this.displayBanner = true;
        }

        if(event.url === '/login')
          this.displayLogin = false;
        else 
          this.displayLogin = true; 

        if(event.url === '/JGdrGCSnGnLyuXYfIRfEdUDA')
          this.displayLoginButton = false;
        else
          this.displayLoginButton = true;
      }
    })
  }

  

  routeTo(target: string) {
    this.router.navigateByUrl(target);
  }
}
