import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JudgingComponent } from './judging/judging.component';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { TranslateModule } from '@ngx-translate/core';
import { StandingsComponent } from './standings/standings.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [JudgingComponent, StandingsComponent],
  exports: [JudgingComponent, StandingsComponent],
  providers: [
    ProfileService
  ]
})

export class JudgeModule {}