import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective,
  ValidationErrors, Validators
} from '@angular/forms';
import { SignUpService } from '../../../shared/services/sign-up.service';
import iconsJson from '../../../../assets/jsonFiles/teamIcons.json';
import colorsJson from '../../../../assets/jsonFiles/colors.json';

export interface TechStack {
  name: string;
  value: string;
}

export interface DevType {
  value: string;
  viewValue: string;
}

export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  icons = iconsJson;
  colors = colorsJson;

  gradCheckBox = false;
  YesCheckBox = false ;
  NoCheckBox=false;


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
  
  devType: DevType[] = [
    {value: 'front-end', viewValue: 'Front-End Developer'},
    {value: 'back-end', viewValue: 'Back-End Developer'},
    {value: 'full-stack', viewValue: 'Full-Stack Developer'},
  ]

  selectedDevType: DevType;

  classLevel: Class[] = [
    {value: 'highSchool', viewValue: 'High School'},
    {value: 'freshman', viewValue: 'Freshman'},
    {value: 'sophomore', viewValue: 'Sophmomore'},
    {value: 'junior', viewValue: 'Junior'},
    {value: 'senior', viewValue: 'Senior'},
    {value: 'gradStudent', viewValue: 'Graduate Student'},
  ]

  techStack: TechStack[] = [
    {name: 'Angular', value: 'angular'},
    {name: 'React', value: 'react'},
    {name: 'jQuery', value: 'jquery'},
    {name: 'HTML/CSS', value: 'html-css'},
    {name: 'Oracle', value: 'oracle'},
    {name: 'mySQL', value: 'mysql'},
    {name: 'MongoDB', value: 'mongodb'},
    {name: 'PostgreSQL', value: 'postgressql'},
    {name: 'Java', value: 'java'},
    {name: 'C++', value: 'c++'},
    {name: 'Python', value: 'python'},
    {name: 'Other', value: ''},
  ]
  
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
      'phoneNumber': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(1),Validators.maxLength(10)])),
      'developerType': new FormControl(null, Validators.compose([Validators.required])),
      'class': new FormControl(null, Validators.compose([Validators.required])),
      'accommodations': new FormControl('', Validators.maxLength(1000)),
      'isGradStudent': new FormControl(this.gradCheckBox),
      'techStack': this.fb.array([], Validators.compose([Validators.required, Validators.minLength(1), validateFormArray])),
      'otherLang': new FormControl('', Validators.compose([Validators.maxLength(250)])),
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

  onCheckboxChange(e) {
    const techStack: FormArray = this.signUpForm.get('techStack') as FormArray;
    if(e.target.checked) {
        techStack.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      techStack.controls.forEach((item: FormControl) => {
        if(item.value == e.target.value) {
          techStack.removeAt(i);
          return;
        }
        i++;
      })
      
    }
    this.signUpForm.get('techStack').markAllAsTouched;
    console.log(techStack.value);
    console.log(this.signUpForm.get('techStack').touched);
  }
     

changeNoval(){
  this.NoCheckBox = !this.NoCheckBox;
  this.signUpForm.get('hasNo').setValue(this.NoCheckBox);
}
changeYesval(){
  this.YesCheckBox = !this.YesCheckBox;
  this.signUpForm.get('hasYes').setValue(this.YesCheckBox);
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

function validateFormArray(controls: FormArray): ValidationErrors | null {
  if (controls.value.length) {
    controls.markAllAsTouched();
    return null;
  }
  return { notValid: true };
}
