import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PastWinnersComponent } from './past-winners.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

describe('PastWinnersComponent', () => {
  let component: PastWinnersComponent;
  let fixture: ComponentFixture<PastWinnersComponent>;
  let PastWinners;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
            deps: [HttpClient]
          }
        }),
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [PastWinnersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    PastWinners = [
      {
        image: 'x',
        title: 'x',
        topic: 'x',
        description: 'x',
        technologiesUsed: 'x',
        pastMembers: '',
        expand: false
      }
    ];


  });

  it('should toggle boolean button to TRUE', () => {
    component.showMoreBtn = false;
    component.toggleExpand(0);
    expect(component.pastWinners[0].expand).toBe(true);
    expect(document.getElementsByClassName('btn-blue')[0].classList.contains('hidden'));
    expect(document.getElementsByClassName('close-btn')[0].classList.contains('hidden'));
  });

  it('should toggle boolean button to FALSE', () => {
    component.showMoreBtn = true;

    component.toggleExpand(0);
    component.toggleExpand(0);
    expect(component.pastWinners[0].expand).toBe(false);
    expect(!document.getElementsByClassName('btn-blue')[0].classList.contains('hidden'));
    expect(!document.getElementsByClassName('close-btn')[0].classList.contains('hidden'));
  });

  it('should expand value to TRUE', () => {
    component.pastWinners = PastWinners;
    PastWinners.expand = true;
  });

  it('should expand value to FALSE', () => {
    component.pastWinners = PastWinners;
    PastWinners.expand = false;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll into view', () => {
    spyOn(component, 'scroll').and.callThrough();
    component.scroll('0');
    expect(component.scroll).toHaveBeenCalled();
  });
});
