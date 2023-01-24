import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamIconColorSelectorComponent } from './registration/team-icon-color-selector/team-icon-color-selector.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    TranslateService,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    TeamIconColorSelectorComponent,
    CodeVerificationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
  ]
})
export class CommonComponentsModule { }

