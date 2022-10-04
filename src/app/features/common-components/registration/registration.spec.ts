import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { executionAsyncId } from 'async_hooks';
import { of } from 'rxjs';
import { SignUpService } from 'src/app/shared/services/sign-up.service';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let signUpService;
  let router;

  const mockTeams: any[] = [
    { 'teamName': 'team1', 'teamCode': '123456', 'teamIconCode': 'medal.svg', 'teamColorCode': '#ffffff' },
    { 'teamName': 'team2', 'teamCode': '111111', 'teamIconCode': 'medal.svg', 'teamColorCode': '#003300' },
    { 'teamName': 'team3', 'teamCode': '222222', 'teamIconCode': 'medal.svg', 'teamColorCode': '#ffffff' }
  ];
  const mockPostResponse = {
    body: '{}',
    status: 201,
    statusText: 'OK'
  };
  const mockParticipantInfoResponse = {
    body: '{"teamID": 1}'
  };


  beforeEach(fakeAsync(() => {
    signUpService = jasmine.createSpyObj(['getAllSchools', 'getAllEducationYears', 'getAllMajors',
      'getAllSkills', 'getAllTeams', 'postNewParticipant', 'getNumberOfTeamMembers', 'getNumberOfGradStudentsOnTeam', 'checkEmail',
      'getTeamByTeamID', 'getTeam']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http, './assets/i18n/', '.json');
            },
            deps: [HttpClient]
          }
        }),
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: SignUpService, useValue: signUpService },
      ],
      declarations: [RegistrationComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);

    signUpService.getAllTeams.and.returnValue(of(mockTeams));
    signUpService.checkEmail.and.returnValue(of(true));
    signUpService.postNewParticipant.and.returnValue(of(mockParticipantInfoResponse));
    signUpService.getTeamByTeamID.and.returnValue(of(mockTeams[0]));
    // signUpService.getTeam.and.returnValue(of(mockTeams[0]));
    fixture.detectChanges();
    tick();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.signUpForm).toBeTruthy();
    expect(component.signUpForm).toBeTruthy();
  });

  it('next works', () => {
    component.next('module1', 'module2');
    expect(document.getElementById('module1').classList).toContain('hidden');
    expect(document.getElementById('module2').classList).not.toContain('hidden');
  });

  it('back works', () => {
    component.back('module1', 'module2');
    expect(document.getElementById('module1').classList).toContain('hidden');
    expect(document.getElementById('module2').classList).not.toContain('hidden');
  });

  it('reset works', () => {
    component.reset();
    expect(document.getElementById('module1').classList.remove('hidden'));
    expect(document.getElementById('module1').classList.add('hidden'));
    expect(document.getElementById('module2').classList.add('hidden'));
    expect(document.getElementById('module3-1').classList.add('hidden'));
    expect(document.getElementById('module3-2').classList.add('hidden'));
    expect(document.getElementById('module4').classList.add('hidden'));
  });

  it('closing sign up works', () => {
    spyOn(component, 'reset');
    component.closeSignUp();
    expect(component.reset).toHaveBeenCalled();
    expect(component.createdTeam).toBe(false);
    expect(component.createdTeamCode).toBeNull();
    expect(component.success).toBe(false);
  });

  it('should change graduate value', () => {
    component.gradCheckBox = false;
    component.changeGradVal();
    expect(component.gradCheckBox).toBeTrue();
  })

  it('should submit', () => {
    component.submit();

    expect(signUpService.postNewParticipant(component.signUpForm.value)).toBeTruthy();
    expect(component.closeSignUp());
  });

  it('should submit', () => {
    component.createdTeam = true;
    component.submit();

    expect(signUpService.postNewParticipant(component.signUpForm.value)).toBeTruthy();
    expect(component.closeSignUp());
    expect(component.displayTeamCode(1));
  });


  it('should change loading svg', () => {
    component.displayLoadingSvg();
    expect(component.isLookingForTeam).toBeTrue();
  });

  it('should change icon color', () => {
    component.changeIconColor()
    expect(component.changeIconColor()).not.toBe(null);
  });

  it('should save color', () => {
    component.saveColor('#000000')
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#000000');
  });

  it('should change background', () => {
    component.saveColor('#000000');
    var response = component.changeBackground();
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#000000');
    expect(response).toEqual({'background-color': '#000000'});
  });

  it('should check team code', () => {
    spyOn(component, 'checkTeamSize');
    component.invalidTeamCode = true;
    signUpService.getTeam.and.returnValue(of(mockTeams[0]));
    component.checkTeamCode('123456');
    expect(component.invalidTeamCode).toBeFalse();
    expect(component.checkTeamSize).toHaveBeenCalled();
  });

  it('should check team code - invalid', () => {
    spyOn(component, 'checkTeamSize');
    component.invalidTeamCode = true;
    signUpService.getTeam.and.returnValue(of(null));
    component.checkTeamCode('123456');
    expect(component.invalidTeamCode).toBeTrue();
    expect(component.checkTeamSize).not.toHaveBeenCalled();
  });

  it('should check team size', () => {
    spyOn(component, 'checkNumGrads');
    signUpService.getNumberOfTeamMembers.and.returnValue(of(3));
    component.checkTeamSize(mockTeams[0]);
    expect(component.invalidTeamCode).toBeFalse();
    expect(component.checkNumGrads).toHaveBeenCalled();
  });

  it('should check team size - invalid', () => {
    spyOn(component, 'checkNumGrads');
    signUpService.getNumberOfTeamMembers.and.returnValue(of(6));
    component.checkTeamSize(mockTeams[0]);
    expect(component.checkNumGrads).not.toHaveBeenCalled();
    expect(component.invalidTeamCode).toBeTrue();
  });

  it('should check num grads', () => {
    spyOn(component, 'assignTeam');
    component.checkNumGrads(mockTeams[0]);
    expect(component.assignTeam).toHaveBeenCalled();
  });

  it('should assign team', () => {
    expect(component.signUpForm.get('teamName').value).toEqual('');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('');
    component.assignTeam(mockTeams[0]);
    expect(component.signUpForm.get('teamName').value).toEqual('team1');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('medal.svg');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#ffffff');
  });

  it('should save color', () => {
    expect(component.signUpForm.get('teamColorCode').value).toEqual('');
    component.saveColor('#ffffff');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#ffffff');
  });

  it('should assign team', () => {
    expect(component.signUpForm.get('teamIconCode').value).toEqual('');
    component.saveIcon('medal.svg');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('medal.svg');
  });

  it('should change background', () => {
    expect(component.signUpForm.get('teamColorCode').value).toEqual('');
    component.saveColor('#ffffff');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#ffffff');
    expect(component.changeBackground()).toEqual({ 'background-color': '#ffffff' });
  });

  it('should change icon color - dark color', () => {
    expect(component.signUpForm.get('teamName').value).toEqual('');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('');
    component.assignTeam(mockTeams[1]);
    expect(component.signUpForm.get('teamName').value).toEqual('team2');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('medal.svg');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#003300');
    expect(component.changeIconColor()).toEqual({
      'background-color': 'white',
      '-webkit-mask-image': 'url( "../../../../medal.svg")',
    });
  });

  it('should change icon color - light color', () => {
    expect(component.signUpForm.get('teamName').value).toEqual('');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('');
    component.assignTeam(mockTeams[0]);
    expect(component.signUpForm.get('teamName').value).toEqual('team1');
    expect(component.signUpForm.get('teamIconCode').value).toEqual('medal.svg');
    expect(component.signUpForm.get('teamColorCode').value).toEqual('#ffffff');
    expect(component.changeIconColor()).toEqual({
      'background-color': 'black',
      '-webkit-mask-image': 'url( "../../../../medal.svg")',
    });
  });

});
