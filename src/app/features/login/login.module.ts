import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    ProfileService
  ]
})

export class LoginModule {}