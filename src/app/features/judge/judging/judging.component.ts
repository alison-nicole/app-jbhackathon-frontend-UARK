import { Component, OnInit, HostListener, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../../shared/services/profile.service';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/shared/services/sign-up.service';

@Component({
  selector: 'app-judging',
  templateUrl: './judging.component.html',
  styleUrls: ['./judging.component.scss']
})
export class JudgingComponent implements OnInit {

  categoryDescription = [
    'Problem Identification/Innovative Solution',
    'Level of Implementation',
    'Presentation Quality',
    'Connection to the Theme'
  ];

  judgingForm: UntypedFormGroup = this.fb.group({
    'question1': new UntypedFormControl('', Validators.required),
    'question2': new UntypedFormControl('', Validators.required),
    'question3': new UntypedFormControl('', Validators.required),
    'question4': new UntypedFormControl('', Validators.required),
    'feedback': new UntypedFormControl('', Validators.maxLength(4000))
  });

  // teamNames = [];
  // judgeNames = [];

  scoreArr: number[] = [0,0,0,0];
  feedback: string;
  totalScore;

  // eslint-disable-next-line max-len
  constructor(private fb: UntypedFormBuilder, private profileService: ProfileService, private router: Router, private signUpService: SignUpService) {}

  async ngOnInit() {
    // this.profileService.getJudgeNames().subscribe( data => {
    //   data.forEach(e => {
    //     this.judgeNames.push({label: e, value: e});
    //   });
    // });

    // this.signUpService.getAllTeams().subscribe( data => {
    //   data.forEach(e => {
    //     this.teamNames.push({label: e.teamName, value: e.teamName});
    //   });
    // });

    this.totalScore = '---';
    var _judgeClass = this;
    for (let i=0; i<4; i++) {
      let rangeId = '#inputRange' + (i + 1);
      let fieldId = '#inputNumber' + (i + 1);
      let range = <HTMLInputElement>document.querySelector(rangeId);
      let field = <HTMLInputElement>document.querySelector(fieldId);

      range.addEventListener('input', (e) => {
        let val: number = +(<HTMLTextAreaElement>e.target).value;
        if (val < 0) val = 0;
        if (val > 250) val = 250;

        field.value = val.toString();
        _judgeClass.scoreArr[i] = val;
        _judgeClass.totalScore = _judgeClass.scoreArr.reduce((sum, cur) => {
          return sum + cur;
        }, 0);
      });
      field.addEventListener('input', (e) => {
        let val: number = +(<HTMLTextAreaElement>e.target).value;
        if (val < 0) val = 0;
        if (val > 250) val = 250;

        range.value = val.toString();
        _judgeClass.scoreArr[i] = val;
        _judgeClass.totalScore = _judgeClass.scoreArr.reduce((sum, cur) => {
          return sum + cur;
        }, 0);
      });
    }

    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.addEventListener('input', (e) => {
      feedbackBox.style.height = 'auto';
      feedbackBox.style.height = feedbackBox.scrollHeight + 'px';
    });
  }

  onSubmit() {
    this.feedback = (document.getElementById('feedbackBox') as HTMLInputElement).value;
    console.log(this.feedback);
    console.log(this.scoreArr);


    // let question;
    // let internalQuestion;
    // let externalQuestion;
    // const judgeFirst = this.judgingForm.value['judgeName'].split(' ')[0];
    // const judgeLast = this.judgingForm.value['judgeName'].split(' ')[1];
    // const teamName = this.judgingForm.value['teamName'];
    // let postBody;
    // for (let i = 1; i < 5; i++) {
    //   question = 'question' + i;
    //   internalQuestion = question + 'internalFeedback';
    //   externalQuestion = question + 'externalFeedback';
    //   postBody = {
    //       // 'teamName': teamName,
    //       // 'judgeFirstName': judgeFirst,
    //       // 'judgeLastName': judgeLast,
    //       'categoryDescription': this.categoryDescription[i - 1],
    //       'ratingNumber': this.judgingForm.value[question],
    //       'judgementInternalFeedback': this.judgingForm.value[internalQuestion],
    //       'judgementExternalFeedback': this.judgingForm.value[externalQuestion]
    //   };

    //   this.profileService.addScore(postBody).subscribe(data => {});
    // }

    // this.onResults();
  }

  // onResults() {
  //   this.router.navigateByUrl('/XJlWkNAZoYgmQtsYhItrnfBV');
  // }

  // onBreakdown() {
  //   this.router.navigateByUrl('/ud73EH4gidl8LUsZF8Gzg53e');
  // }

  get teamName() {
    return this.judgingForm.get('teamName');
  }

  get question1() {
    return this.judgingForm.get('question1');
  }

  get question2() {
    return this.judgingForm.get('question2');
  }

  get question3() {
    return this.judgingForm.get('question3');
  }

  get question4() {
    return this.judgingForm.get('question4');
  }

  get judgeName() {
    return this.judgingForm.get('judgeName');
  }
}
