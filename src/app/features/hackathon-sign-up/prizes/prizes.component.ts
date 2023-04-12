import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prizes } from '../models/prizes.model';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPrizeService } from 'src/app/shared/services/add-prize.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {

  prizes: Prizes[];
  prizeForm: FormGroup;
  editMode: boolean;

  constructor(readonly fb: FormBuilder, public auth: AuthService, readonly addPrizeService: AddPrizeService) { }

  ngOnInit() {
    this.editMode = false;
    this.prizeForm = this.fb.group({
      'name': new FormControl('', Validators.compose([Validators.required, hasValue])),
      'price': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]*$")])),
      'link': new FormControl('', Validators.compose([Validators.required, 
        Validators.pattern("^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$"), hasValue])),
      'imageURL': new FormControl('', Validators.compose([Validators.required, hasValue])),
    });
  }

  changeEditMode() {
    this.editMode = !this.editMode;
    if(this.editMode === false) {
      document.getElementById('module').classList.add('hidden');
      this.prizeForm.reset();
    }
  }

  showPrizeForm(): void {
    document.getElementById('module').classList.remove('hidden');
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