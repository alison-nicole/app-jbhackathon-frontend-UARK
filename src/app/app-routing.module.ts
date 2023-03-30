import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/hackathon-sign-up/home/home.component';
import { ResourcesComponent } from './features/hackathon-sign-up/resources/resources.component';
import { JudgingComponent } from './features/judge/judging/judging.component';
import { StandingsComponent } from './features/judge/standings/standings.component';
import { NotFoundComponent } from './features/hackathon-sign-up/not-found/not-found.component';
import { PreviousHackathonsComponent } from './features/hackathon-sign-up/previous-hackathons/previous-hackathons.component';
import { CompetitionComponent } from './features/hackathon-sign-up/competition/competition.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'competition', component: CompetitionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'previous-hackathons', component: PreviousHackathonsComponent },
  { path: 'JGdrGCSnGnLyuXYfIRfEdUDA', component: JudgingComponent},
  { path: 'XJlWkNAZoYgmQtsYhItrnfBV', component: StandingsComponent},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
