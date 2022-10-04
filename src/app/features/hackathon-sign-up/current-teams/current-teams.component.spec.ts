import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CurrentTeamsComponent } from './current-teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpService } from 'src/app/shared/services/sign-up.service';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import colorsJson from '../../../../assets/jsonFiles/colors.json';
import iconsJson from '../../../../assets/jsonFiles/teamIcons.json';

describe('CurrentTeamsComponent', () => {
  let component: CurrentTeamsComponent;
  let fixture: ComponentFixture<CurrentTeamsComponent>;
  let mockSignUpService;
  let mockAuthService;

  const mockTeamResponse = [{
    'teamID': 0,
    'teamName': 'test team',
    'hackathonEventID': 0,
    'teamCode': '123456',
    'teamPicture': [
      [1, 2, 3, 4, 5, 6, 7, 8]
    ],
    'teamColorCode': '#6600CC',
    'teamIconCode': 'assets/svg/team-icons/medal.svg',
    'projectName': 'test project name',
    'projectDescription': 'test project description',
    'projectTechnologyDescription': 'test project technology description',
    'publicIndicator': 1
  }];

  const mockParticipant = {
    name: 'participant 1',
    teamCode: '123456',
    email: 'participant1@email.com'
  };

  beforeEach(async(() => {
    mockSignUpService = jasmine.createSpyObj(['getAllTeams', 'getTeam', 'updateTeam', 'getNumberOfTeamMembers']);
    mockAuthService = jasmine.createSpyObj(['getLoggedInUser', 'checkIfOnWinningTeam']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ CurrentTeamsComponent ],
      providers: [
        { provide: SignUpService, useValue: mockSignUpService },
        { provide: AuthService, useValue: mockAuthService },
      ]
    })
    .compileComponents();

    mockSignUpService.getAllTeams.and.returnValue(of(mockTeamResponse));
    mockSignUpService.getNumberOfTeamMembers.and.returnValue(of(3));

    mockAuthService.getLoggedInUser.and.returnValue(of(mockParticipant));
    mockAuthService.checkIfOnWinningTeam.and.returnValue(true);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.teams[0].teamIconColor).toEqual('white');
    expect(component.teams[0].teamIconCode).toEqual('../../../../assets/svg/team-icons/medal.svg');
  });

});
