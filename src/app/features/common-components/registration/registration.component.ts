import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective,
  ValidationErrors, Validators
} from '@angular/forms';
import { SignUpService } from '../../../shared/services/sign-up.service';
import iconsJson from '../../../../assets/jsonFiles/teamIcons.json';
import colorsJson from '../../../../assets/jsonFiles/colors.json';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  icons = iconsJson;
  colors = colorsJson;

  gradCheckBox = false;
  isLookingForTeam = false;
  displayTeamHeader = false;
  signUpForm: FormGroup;
  formattedForm: FormGroup;

  success = false;
  invalidTeamCode = false;

  teamID: number;
  createdTeam = false;
  createdTeamCode: number;
  teamModule: string;

  constructor(readonly fb: FormBuilder, readonly signUpService: SignUpService) {
  }

  ngOnInit() {
    this.gradCheckBox = false;
    this.isLookingForTeam = false;

    this.signUpForm = this.fb.group({
      'teamName': new FormControl('', Validators.compose([Validators.maxLength(25), Validators.minLength(6), hasValue])),
      'firstName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(37), hasValue])),
      'lastName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(37), hasValue])),
      'schoolEmailAddress': new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.maxLength(50), schoolEmail])),
      'phoneNumber': new FormControl('', Validators.compose([Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)])),
      'developerType': new FormControl('', Validators.compose([Validators.required])),
      'class': new FormControl('', Validators.compose([Validators.required])),
      'accommodations': new FormControl('', Validators.maxLength(1000)),
      'isGradStudent': new FormControl(this.gradCheckBox),
      'teamIconCode': new FormControl('', hasValue),
      'teamColorCode': new FormControl('', hasValue),
      'teamCode': new FormControl('')
    });
  }

  next(start: string, end: string) {
    document.getElementById(start).classList.toggle('hidden');
    document.getElementById(end).classList.toggle('hidden');
  }

  back(start: string, end: string) {
    document.getElementById(start).classList.toggle('hidden');
    document.getElementById(end).classList.toggle('hidden');
  }

  reset(): void {
    document.getElementById('module1').classList.remove('hidden');
    document.getElementById('module2').classList.add('hidden');
    document.getElementById('module3-1').classList.add('hidden');
    document.getElementById('module3-2').classList.add('hidden');
    document.getElementById('module4').classList.add('hidden');
  }

  closeSignUp(): void {
    this.reset();
    this.signUpForm.reset();
    this.createdTeam = false;
    this.createdTeamCode = null;
    this.success = false;
  }

  checkTeamCode(teamCode: string) {
    this.invalidTeamCode = false;
    this.signUpService.getTeam(teamCode).subscribe(response => {
      if(response !== null) {
        this.checkTeamSize(response);
      } else {
        this.invalidTeamCode = true;
      }
    })
  }

  assignTeam(team: any) {
    this.signUpForm.get('teamName').setValue(team['teamName']);
    this.signUpForm.get('teamIconCode').setValue(team['teamIconCode']);
    this.signUpForm.get('teamColorCode').setValue(team['teamColorCode']);
  }

  checkTeamSize(team: any) {
    this.signUpService.getNumberOfTeamMembers(team['teamID']).subscribe(data => {
      if(data < 6) {
        this.checkNumGrads(team);
      } else {
        this.invalidTeamCode = true;
      }
    });
  }

  checkNumGrads(team: any) {
    this.assignTeam(team);
    // this.signUpService.getNumberOfGradStudentsOnTeam(team['teamID']).subscribe(data => {
    //   if (data < 2) {
    //     this.assignTeam(team);
    //   } else {
    //     console.warn(data + 'too many grads');
    //     this.invalidTeamCode = true;
    //   }
    // });
  }

  submit(): void {
    this.signUpService.postNewParticipant(this.signUpForm.value).subscribe(data => {
      this.afterSubmission(data);
    });
  }

  afterSubmission(participantData: any) {
    if (this.createdTeam) {
      this.displayTeamCode(JSON.parse(participantData.body).teamID);
    }
    document.getElementById('module4').classList.add('hidden');
    this.success = true;
  }

  displayTeamCode(teamID: number) {
    this.signUpService.getTeamByTeamID(teamID).subscribe(data => {
      this.createdTeamCode = data.teamCode;
    });
  }

  changeGradVal() {
    this.gradCheckBox = !this.gradCheckBox;
    this.signUpForm.get('isGradStudent').setValue(this.gradCheckBox);
  }

  displayLoadingSvg() {
    this.isLookingForTeam = true;
  }

  saveIcon(icon: any) {
    this.signUpForm.get('teamIconCode').setValue(icon);
  }

  saveColor(color: any) {
    this.signUpForm.get('teamColorCode').setValue(color);
  }

  changeBackground() {
    return { 'background-color': this.signUpForm.get('teamColorCode').value };
  }

  changeIconColor() {
    let whiteIcon = false;
    for(let color of this.colors) {
      if (this.signUpForm.get('teamColorCode').value === color.background) {
        whiteIcon = color.darkColor;
        break;
      }
    }
    return {
      'background-color': whiteIcon ? 'white' : 'black',
      '-webkit-mask-image': 'url( "../../../../' + this.signUpForm.get('teamIconCode').value + '")',
    };
  }
}

function hasValue(control: AbstractControl): { [key: string]: any } | null {
  const value: string = control.value;
  if (value === '' || value == null) {
    return { 'emptyString': true };
  } else if (value.includes('  ')) {
    return { 'emptyString': true };
  }
  return null;
}

function schoolEmail(control: AbstractControl): { [key: string]: any } | null {
  const value: string = control.value;
  if (value == null) {
    return null;
  } else if (!value.includes('.edu')) {
    return { 'notSchoolEmail': true };
  }
  return null;
}
