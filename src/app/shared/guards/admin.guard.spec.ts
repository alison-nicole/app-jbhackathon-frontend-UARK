import { TestBed, inject, getTestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let injector: TestBed;
  let guard: AdminGuard;
  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/home'};
  const routerMock = {navigateByUrl: jasmine.createSpy('home')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard, { provide: Router, useValue: routerMock }],
      imports: [RouterTestingModule],
    });

    injector = getTestBed();
    guard = injector.get(AdminGuard);
  });


  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate admin page when user is an admin', () => {
    guard.isAdmin = true;
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });

  it('should not activate admin page when user is not an admin', () => {
    guard.isAdmin = false;
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
