
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { Router, Event, NavigationEnd } from '@angular/router';
import { CompetitionComponent } from '../../hackathon-sign-up/competition/competition.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
    TestBed.inject(Router).events;

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home' || event.url === '/') {
          expect(component.displayBanner).toBeFalse
        } else {
          expect(component.displayBanner).toBeTrue
        }
      }
    });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to target', () => {
    spyOn(router, 'navigateByUrl');
    component.routeTo('/home');
    expect(router.navigateByUrl).toHaveBeenCalled();
  })

});
