import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { StandingsComponent } from './standings.component';
import { Teams } from '../models/teams.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpService } from '../../../shared/services/sign-up.service';
import { of, from } from 'rxjs';

describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;
  let mockSignUpService;
  const mockTeams: Teams[] = [
    { teamName: 'team1', score: 700,  },
    { teamName: 'team2', score: 600 }
  ];
  const mockTeamMemberAmount: number[] = [2, 3];

  beforeEach(fakeAsync(() => {
    mockSignUpService = jasmine.createSpyObj(['getAllTeams', 'getNumberOfTeamMembers']);
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
        HttpClientModule
      ],
      providers: [{ provide: SignUpService, useValue: mockSignUpService }],
      declarations: [StandingsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(StandingsComponent);
    component = fixture.componentInstance;

    mockSignUpService.getAllTeams.and.returnValue(of(mockTeams));
    mockSignUpService.getNumberOfTeamMembers.and.returnValue(from(mockTeamMemberAmount));

    fixture.detectChanges();
    tick();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two separate teams', () => {
    expect(component.teams.length).toEqual(2);
  });

  it('should contain two separate team scores', () => {
    expect(component.teams[0].score).not.toEqual(component.teams[1].score);
  });

  it('should contain two separate team sizes', () => {
    expect(component.teamMemberAmount[0]).not.toEqual(component.teamMemberAmount[1]);
  });
});
