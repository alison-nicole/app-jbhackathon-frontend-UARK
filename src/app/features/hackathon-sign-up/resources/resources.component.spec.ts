import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from '../faq/faq.component';
import { RubricComponent } from '../rubric/rubric.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

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
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        ResourcesComponent,
        FaqComponent,
        RubricComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
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
