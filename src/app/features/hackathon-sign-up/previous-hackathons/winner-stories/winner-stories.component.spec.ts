import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WinnerStoriesComponent } from './winner-stories.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ECANCELED } from 'constants';

describe('WinnerStoriesComponent', () => {
  let component: WinnerStoriesComponent;
  let fixture: ComponentFixture<WinnerStoriesComponent>;
  let SuccessStories;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http, './assets/i18n/', '.json');
            },
            deps: [HttpClient]
          }
        }),
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [WinnerStoriesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    SuccessStories = [
      {
        name: 'success-stories.winner-one.name',
        image: 'assets/image/past-winners/Jaden.jpg',
        answerTwo: 'success-stories.winner-one.answer-two',
        answerOne: 'success-stories.winner-one.answer-one',
        answerFour: 'success-stories.winner-one.answer-four',
        answerThree: 'success-stories.winner-one.answer-three',
        expand: false,
        answerFive: 'success-stories.winner-one.answer-five'

      },
      {
        expand: false,
        image: 'assets/image/past-winners/Blake1.png',
        name: 'success-stories.winner-two.name',
        answerFour: 'success-stories.winner-two.answer-four',
        answerOne: 'success-stories.winner-two.answer-one',
        answerTwo: 'success-stories.winner-two.answer-two',
        answerFive: 'success-stories.winner-two.answer-five',
        answerThree: 'success-stories.winner-two.answer-three',
      },
      {
        answerThree: 'success-stories.winner-three.answer-three',
        name: 'success-stories.winner-three.name',
        answerOne: 'success-stories.winner-three.answer-one',
        image: 'assets/image/past-winners/Luke.jpg',
        answerFour: 'success-stories.winner-three.answer-four',
        answerTwo: 'success-stories.winner-three.answer-two',
        answerFive: 'success-stories.winner-three.answer-five',
        expand: false
      },
      {
        answerFive: 'success-stories.winner-four.answer-five',
        name: 'success-stories.winner-four.name',
        answerOne: 'success-stories.winner-four.answer-one',
        answerTwo: 'success-stories.winner-four.answer-two',
        answerThree: 'success-stories.winner-four.answer-three',
        image: 'assets/image/past-winners/Eli.jpg',
        answerFour: 'success-stories.winner-four.answer-four',
        expand: false
      },
      {
        image: 'assets/image/past-winners/Trevor.jpg',
        name: 'success-stories.winner-five.name',
        answerOne: 'success-stories.winner-five.answer-one',
        answerTwo: 'success-stories.winner-five.answer-two',
        answerThree: 'success-stories.winner-five.answer-three',
        answerFour: 'success-stories.winner-five.answer-four',
        answerFive: 'success-stories.winner-five.answer-five',
        expand: false
      }
    ];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should traverse array and set values to FALSE', () => {
    component.successStories = SuccessStories;
    const lengthArray = SuccessStories.length;
    for (let i = 0; i < lengthArray; i++) {
      expect(SuccessStories[i].expand).toBe(false);
    }
  });

  it('should expect story at ith posititon to have expand True', () => {
    component.successStories = SuccessStories;
    const lengthArray = SuccessStories.length;
    component.revealInformation(1);
      for (let i = 0; i < lengthArray; i++) {
        SuccessStories[i].expand = false;
        if (i === 1) {
          SuccessStories[i].expand = true;
          expect(SuccessStories[i].expand).toBe(true);
        }
      }
    }
  );
});
