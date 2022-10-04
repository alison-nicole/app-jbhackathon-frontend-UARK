import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache,no-store,max-age=0,must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '-1',
    'Strict-Transport-Security': 'max-age=15552000; includeSubDomains; preload',
    'X-XSS-Protection': '1;mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': 'script-src \'self\'*.jbhunt.com',
    'X-Content-Type-Options': 'nosniff'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly getAll = 'all';
  readonly apiRoot = '/api/ws_infrastructure_university_hackathon';
  constructor(readonly http: HttpClient) {
  }

  addScore(formData): Observable<any> {
    return this.http.post(`${this.apiRoot}/judging/submit`, formData, { observe: 'response', responseType: 'text' });
  }

  getSumForTeam(): Observable<any> {
    return this.http.get(`${this.apiRoot}/judging/teamTotals`, httpOptions);
  }

  getBreakdown() {
    return this.http.get(`${this.apiRoot}/judging/getBreakdown`, httpOptions).toPromise();
  }

  getJudgeNames(): Observable<any> {
    return this.http.get<any>(`${this.apiRoot}/judge/${this.getAll}`);
  }
}
