import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PastWinnersComponent } from './past-winners/past-winners.component';
import { WinnerStoriesComponent } from './winner-stories/winner-stories.component';
import { PreviousHackathonsComponent } from './previous-hackathons.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PreviousHackathonsComponent', () => {
  let component: PreviousHackathonsComponent;
  let fixture: ComponentFixture<PreviousHackathonsComponent>;

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
      declarations: [ PreviousHackathonsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousHackathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll into view', () => {
    const Misc = document.createElement('misc');
    spyOn(Misc, 'scrollIntoView').and.callThrough();
    component.scroll(Misc);
    expect(Misc.scrollIntoView).toHaveBeenCalled();
  });
});
