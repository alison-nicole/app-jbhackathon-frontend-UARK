import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './shared/services/profile.service';
import { HttpClientModule, HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { JudgeModule } from './features/judge/judge.module';
import { HackathonSignUpModule } from './features/hackathon-sign-up/hackathon-sign-up.module';
import { CommonComponentsModule } from './features/common-components/common-components.module';
import { LoginModule } from './features/login/login.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonComponentsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JudgeModule,
    LoginModule,
    HackathonSignUpModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    })
  ],
  providers: [
    ProfileService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
