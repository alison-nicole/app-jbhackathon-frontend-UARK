import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegistrationComponent } from '../../common-components/registration/registration.component';
// eslint-disable-next-line max-len
import { TeamIconColorSelectorComponent } from '../../common-components/registration/team-icon-color-selector/team-icon-color-selector.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { CurrentTeamsComponent } from '../current-teams/current-teams.component';
import { CompetitionComponent } from './competition.component';
import { MockComponent } from 'ng-mocks';

describe('CompetitionComponent', () => {
  let component: CompetitionComponent;
  let fixture: ComponentFixture<CompetitionComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompetitionComponent,
        MockComponent(TeamIconColorSelectorComponent) ,
        MockComponent(RegistrationComponent),
        MockComponent(CurrentTeamsComponent),
        MockComponent(CountdownTimerComponent)
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http, './assets/i18n/', '.json');
            },
            deps: [HttpClient]
          }
        }),
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify date', () => {
    component.ngOnInit

    if (component.dateNow < component.signUpDeadline) {
      expect(component.showSignUpCountdown).toBeTrue
    } else if (component.dateNow < component.hackathonStart && component.showSignUpCountdown === false) {
      expect(component.showHackathonStartCountdown).toBeTrue
    } else if (component.dateNow < component.hackathonEnd && component.showSignUpCountdown === false && component.showHackathonStartCountdown === false) {
      expect(component.showHackathonEndCountdown).toBeTrue
    }
  })
});
