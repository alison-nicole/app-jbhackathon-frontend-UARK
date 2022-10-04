import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountdownTimerComponent } from './countdown-timer.component';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTimeDifference should call allocateTimeUnits function', () => {
    spyOn(component, 'allocateTimeUnits');
    component.getTimeDifference();
    expect(component.allocateTimeUnits).toHaveBeenCalled();
  });

  it('should set variables', () => {
    component.secondsToDday = null;
    component.minutesToDday = null;
    component.hoursToDday = null;
    component.daysToDday = null;
    const dDay = new Date;
    const timeDifference = dDay.getTime() - new  Date().getTime();

    component.allocateTimeUnits(timeDifference);

    expect(component.secondsToDday).toBe(Math.floor((timeDifference) / 1000 % 60));
    expect(component.minutesToDday).toBe(Math.floor((timeDifference) / (1000 * 60) % 60));
    expect(component.hoursToDday).toBe(Math.floor((timeDifference) / (1000 * 60 * 60) % 24));
    expect(component.daysToDday).toBe(Math.floor((timeDifference) / 1000 * 60 * 60 * 24));
  });
});
