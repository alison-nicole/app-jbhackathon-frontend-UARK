import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { JudgingComponent } from './judging.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from '../../../shared/services/profile.service';
import { of } from 'rxjs';
import { SignUpService } from 'src/app/shared/services/sign-up.service';

describe('JudgingComponent', async () => {
  let component: JudgingComponent;
  let fixture: ComponentFixture<JudgingComponent>;
  let mockProfileService;
  let mockSignUpService;

  const TEAMS = [
    'Wheres Pythons Compiler',
    'Teams[0]',
    'OBU Sebastian'
  ];

  const JUDGES = [
    'first1 last1'
  ];

  beforeEach(fakeAsync(() => {
    mockProfileService = jasmine.createSpyObj(['addScore', 'checkTeamScoreExists', 'getTeamNames', 'getJudgeNames']);
    mockSignUpService = jasmine.createSpyObj(['getAllTeams']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
            deps: [HttpClient]
          }
        }),
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: ProfileService, useValue: mockProfileService },
                  { provide: SignUpService, useValue: mockSignUpService }],
      declarations: [JudgingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JudgingComponent);
    component = fixture.componentInstance;

    mockProfileService.getTeamNames.and.returnValue(of(TEAMS));
    mockSignUpService.getAllTeams.and.returnValue(of(TEAMS));
    mockProfileService.getJudgeNames.and.returnValue(of(JUDGES));
    fixture.detectChanges();
    tick();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate teamNam and teamName', () => {
    mockProfileService.addScore.and.returnValue(of({}));
    component.judgingForm.value['teamName'] = TEAMS[0];
    component.judgingForm.value['judgeName'] = JUDGES[0];
    component.onSubmit();

    expect(component.judgingForm.value['teamName']).toBe(TEAMS[0]);
    expect(component.judgingForm.value['judgeName']).toBe(JUDGES[0]);
  });

  it('should update texts with slider inputs', () => {
    (document.getElementById('inputRange1') as HTMLInputElement).value = '75';
    document.getElementById('inputRange1').dispatchEvent(new InputEvent('input'));
    expect(component.scoreArr[0]).toEqual(75);
    expect((document.getElementById('inputNumber1') as HTMLInputElement).value).toEqual('75');
    expect((document.getElementById('inputNumber1') as HTMLInputElement).value).toEqual('75');
    expect(component.totalScore).toEqual(75);
  });

  it('should update sliders with text inputs', () => {
    (document.getElementById('inputNumber2') as HTMLInputElement).value = '75';
    document.getElementById('inputNumber2').dispatchEvent(new InputEvent('input'));
    expect(component.scoreArr[1]).toEqual(75);
    expect((document.getElementById('inputRange2') as HTMLInputElement).value).toEqual('75');
    expect((document.getElementById('inputRange2') as HTMLInputElement).value).toEqual('75');
    expect(component.totalScore).toEqual(75);
  });
  
  it('should save feedback on submit', () => {
    (document.getElementById('feedbackBox') as HTMLInputElement).value = 'test text';
    document.getElementById('submitButton').click();
    expect(component.feedback).toEqual('test text');
  })

});
