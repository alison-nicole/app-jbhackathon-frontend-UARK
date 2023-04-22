import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,
  ValidationErrors, Validators
} from '@angular/forms';
import { SignUpService } from '../../../shared/services/sign-up.service';
import iconsJson from '../../../../assets/jsonFiles/teamIcons.json';
import colorsJson from '../../../../assets/jsonFiles/colors.json';


@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(input:Array<any>, sep = ','): string {
    input = input.filter(str => str != "");
    return input.join(sep);
  }
}

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

export interface TShirtSize {
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

  participationCheckBox = false;
  isGraduate = false;
  selectedClass: string;

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
  
  developerType: DevType[] = [
    {value: 'front-end', viewValue: 'Front-End Developer'},
    {value: 'back-end', viewValue: 'Back-End Developer'},
    {value: 'full-stack', viewValue: 'Full-Stack Developer'},
  ]

  classLevel: Class[] = [
    {value: 'highSchool', viewValue: 'High School'},
    {value: 'freshman', viewValue: 'Freshman'},
    {value: 'sophomore', viewValue: 'Sophomore'},
    {value: 'junior', viewValue: 'Junior'},
    {value: 'senior', viewValue: 'Senior'},
    {value: 'gradStudent', viewValue: 'Graduate Student'},
  ]

  tShirtSizes: TShirtSize[] = [
    {value: 'S', viewValue: 'S'},
    {value: 'M', viewValue: 'M'},
    {value: 'L', viewValue: 'L'},
    {value: 'XL', viewValue: 'XL'},
    {value: 'XXL', viewValue: 'XXL'},
  ]

  techStack: TechStack[] = [
    {name: 'Angular', value: 'Angular'},
    {name: 'React', value: 'React'},
    {name: 'jQuery', value: 'jQuery'},
    {name: 'HTML/CSS', value: 'HTML/CSS'},
    {name: 'Oracle', value: 'Oracle'},
    {name: 'mySQL', value: 'mySQL'},
    {name: 'MongoDB', value: 'MongoDB'},
    {name: 'PostgreSQL', value: 'PostgreSQL'},
    {name: 'Java', value: 'Java'},
    {name: 'C++', value: 'C++'},
    {name: 'Python', value: 'Python'},
    {name: 'Other', value: ''},
  ]

  numYears: number[] = [1, 2, 3, 4, 5, 6]
  
  constructor(readonly fb: FormBuilder, readonly signUpService: SignUpService) {
  }

  ngOnInit() {
    this.isGraduate = false;
    this.participationCheckBox = false;
    this.isLookingForTeam = false;
    this.selectedClass = "";
    this.createdTeam = false;

    this.signUpForm = this.fb.group({
      'firstName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(37), hasValue])),
      'lastName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(37), hasValue])),
      'schoolEmailAddress': new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.maxLength(50), schoolEmail])),
      'classSeniority': new FormControl(null, Validators.compose([Validators.required])),
      'devType': new FormControl(null, Validators.compose([Validators.required])),
      'phoneNumber': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(1),Validators.maxLength(10)])),
      'techStack': this.fb.array([], Validators.compose([Validators.required, Validators.minLength(1), validateFormArray])),
      'isGradStudent': new FormControl(this.isGraduate),
      'teamName': new FormControl('', Validators.compose([Validators.maxLength(25), Validators.minLength(6), hasValue])),
      'teamOpen': new FormControl(this.createdTeam),
      'teamColorCode': new FormControl('', hasValue),
      'teamIconCode': new FormControl('', hasValue),
      'accommodations': new FormControl('', Validators.maxLength(1000)),
      'major': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), hasValue])),
      'universityName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), hasValue])),
      'graduateYear': new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(4)])),
      'discordName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), hasValue])),
      'tShirtSize': new FormControl(null, Validators.compose([Validators.required])),
      'otherLang': new FormControl({ value: '', disabled: true }, Validators.compose([Validators.maxLength(250)])),
      'prevParticipation': new FormGroup({
        participation: new FormControl(this.participationCheckBox),
        years: new FormControl({ value: 0, disabled: true })
      }),

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

  changeCreatedTeamValue() {
    this.createdTeam = !this.createdTeam;
    this.signUpForm.get('teamOpen').setValue(this.createdTeam);
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
    if(this.selectedClass != null && this.selectedClass.includes('Graduate')) {
      this.isGraduate = !this.isGraduate;
      this.signUpForm.get('isGradStudent').setValue(this.isGraduate);
    } else {
      if(this.isGraduate) {
        this.isGraduate = !this.isGraduate;
        this.signUpForm.get('isGradStudent').setValue(this.isGraduate);
      }
    }
  }

  changeParticipationVal(e) {
    if(e.target.value == 'true') {
      this.signUpForm.get('prevParticipation').get('years').enable();
      this.participationCheckBox = true;
    } else {
      this.signUpForm.get('prevParticipation').get('years').disable();
      this.participationCheckBox = false;
    }

    this.signUpForm.get('prevParticipation').get('participation').setValue(this.participationCheckBox);

  }

  onCheckboxChange(e) {
    const techStack: FormArray = this.signUpForm.get('techStack') as FormArray;
    if(e.target.checked) {
        techStack.push(new FormControl(e.target.value));
        if(e.target.value == '')
          this.signUpForm.get('otherLang').enable();
    } else {
      let i: number = 0;
      techStack.controls.forEach((item: FormControl) => {
        if(item.value == e.target.value) {
          techStack.removeAt(i);
          return;
        }
        i++;
      })

      if(e.target.value == '')
        this.signUpForm.get('otherLang').disable();
    }
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
