import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { WinnerStoriesComponent } from './previous-hackathons/winner-stories/winner-stories.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RubricComponent } from './rubric/rubric.component';
import { ResourcesComponent } from './resources/resources.component';
import { PastWinnersComponent } from './previous-hackathons/past-winners/past-winners.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CurrentTeamsComponent } from './current-teams/current-teams.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { PreviousHackathonsComponent } from './previous-hackathons/previous-hackathons.component';
import { CompetitionComponent } from './competition/competition.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeScheduleComponent } from './home/home-schedule/home-schedule.component';
import { HomeExperienceComponent } from './home/home-experience/home-experience.component';
import { HomeInfoComponent } from './home/home-info/home-info.component';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        RxReactiveFormsModule,
        CommonComponentsModule
    ],
    declarations: [
        WinnerStoriesComponent,
        RubricComponent,
        ResourcesComponent,
        PastWinnersComponent,
        NotFoundComponent,
        HomeComponent,
        FaqComponent,
        CountdownTimerComponent,
        CurrentTeamsComponent,
        PreviousHackathonsComponent,
        CompetitionComponent,
        HomeHeroComponent,
        HomeScheduleComponent,
        HomeExperienceComponent,
        HomeInfoComponent
    ],
    exports: [
        WinnerStoriesComponent,
        RubricComponent,
        ResourcesComponent,
        PastWinnersComponent,
        NotFoundComponent,
        HomeComponent,
        FaqComponent,
        CurrentTeamsComponent,
        PreviousHackathonsComponent,
        CompetitionComponent
    ]
})
export class HackathonSignUpModule {}
