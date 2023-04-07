import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminLoginForm: FormGroup;

  constructor(private router: Router, readonly fb: FormBuilder) { }

  ngOnInit() {
    this.adminLoginForm = this.fb.group({
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30)])),
    })
  }

  routeTo(target: string) {
    this.router.navigateByUrl(target);
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
