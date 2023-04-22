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

  prizes: Prizes[] = [];
  prizeForm: FormGroup;
  selectedPrizeName;
  selectedRemovalOption;
  editMode: boolean;
  addPrizeMode: boolean;
  modifyPrizeMode: boolean;
  deletePrizeMode: boolean;

  removalOptions = [
    {label: 'Remove a prize', value: 'removePrize'},
    {label: 'Remove all prizes', value: 'removeAllPrizes'},
  ]


  constructor(readonly fb: FormBuilder, public auth: AuthService, readonly addPrizeService: AddPrizeService) { }

  ngOnInit() {
    this.getPrizes();
    this.selectedPrizeName = null;
    this.selectedRemovalOption = null;
    this.editMode = false;
    this.addPrizeMode = false;
    this.modifyPrizeMode = false;
    this.deletePrizeMode = false; 
    this.prizeForm = this.fb.group({
      'prizeName': new FormControl('', Validators.compose([Validators.required, hasValue])),
      'prizeMonetaryValue': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]*$")])),
      'prizeLink': new FormControl('', Validators.compose([Validators.required, 
        Validators.pattern("^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$"), hasValue])),
      'prizeImageCode': new FormControl('', Validators.compose([Validators.required, hasValue])),
    });
  }

  getPrizeByName() {
    this.addPrizeService.getPrize(this.selectedPrizeName).subscribe(data => {
      //data.forEach(item => {
        this.prizeForm.patchValue({'prizeName': data.prizeName});
        console.log(data.prizeName);
        this.prizeForm.patchValue({'prizeMonentaryValue': data.prizeMonetaryValue});
        this.prizeForm.patchValue({'prizeLink': data.prizeLink});
        this.prizeForm.get('prizeMonetaryValue').setValue(data.prizeMonetaryValue);

      //});
        
    });
  }

  getPrizes() {
    this.addPrizeService.getAllPrizes().subscribe(data => {
      data.forEach(item => {
        this.prizes.push({
          prizeName: item.prizeName,
          prizeMonetaryValue: item.prizeMonetaryValue,
          prizeLink: item.prizeLink,
          prizeImageCode: item.prizeImageCode,
        });
      });
    });
  }

  changeEditMode() {
    this.editMode = !this.editMode;
    this.modifyPrizeMode = false;
    this.addPrizeMode = false;
    if(this.editMode === false) {
      this.hideAddPrizeForm();
      this.hideModifyPrizeForm();
      this.hideDeletePrizeForm();
    }
      
  }

  savePrize(): void {
    this.addPrizeService.postNewPrize(this.prizeForm.value).subscribe(data => {
       
    });
    this.hideAddPrizeForm();
    this.reload();
  }

  modifyPrize(): void {
    this.addPrizeService.updatePrize(this.prizeForm.value, this.selectedPrizeName).subscribe(data => {

    });
    this.hideModifyPrizeForm();
    this.reload();

  }

  deletePrize(): void {
    this.addPrizeService.removePrize(this.selectedPrizeName).subscribe(data => {

    });
    this.hideDeletePrizeForm();
    this.reload();
  }

  showAddPrizeForm(): void {
    if(!this.modifyPrizeMode && !this.deletePrizeMode) {
      document.getElementById('add-module').classList.remove('hidden');
      this.addPrizeMode = true;
    }

  }

  showModifyPrizeForm(): void {
    if(!this.addPrizeMode && !this.deletePrizeMode) {
      document.getElementById('modify-module').classList.remove('hidden');
      this.modifyPrizeMode = true;
    }
  }

  showDeletePrizeForm(): void {
    if(!this.addPrizeMode && !this.modifyPrizeMode) {
      document.getElementById('delete-module').classList.remove('hidden');
      this.deletePrizeMode = true; 
    }
  }

  hideAddPrizeForm(): void {
    document.getElementById('add-module').classList.add('hidden');
    this.prizeForm.reset();
    this.addPrizeMode = false;
  }

  hideModifyPrizeForm(): void {
    document.getElementById('modify-module').classList.add('hidden');
    this.prizeForm.reset();
    this.modifyPrizeMode = false;
    document.getElementById('modify-prize-first').classList.remove('hidden');
    document.getElementById('modify-prize-second').classList.add('hidden');
  }

  hideDeletePrizeForm(): void {
    document.getElementById('delete-module').classList.add('hidden');
    
  }

  reload(): void {
    window.location.reload();
  }

  next(start: string, end: string) {
    document.getElementById(start).classList.toggle('hidden');
    document.getElementById(end).classList.toggle('hidden');
  }

  back(start: string, end: string) {
    document.getElementById(start).classList.toggle('hidden');
    document.getElementById(end).classList.toggle('hidden');
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