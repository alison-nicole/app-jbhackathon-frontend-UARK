import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Event, NavigationEnd } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
    TestBed.inject(Router).events;
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
