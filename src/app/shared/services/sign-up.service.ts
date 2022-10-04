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
    'X-Content-Type-Options': 'nosniff'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(readonly http: HttpClient) { }

  readonly getAll = 'all';
  readonly apiRoot = '/api/ws_infrastructure_university_hackathon';

  getAllTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiRoot}/team/${this.getAll}`);
  }

  getTeam(teamCode: string): Observable<any> {
    return this.http.get(`${this.apiRoot}/team/${teamCode}`, httpOptions);
  }

  updateTeam(teamData, teamCode): Observable<any> {
    return this.http.put(`${this.apiRoot}/team/${teamCode}`, teamData, httpOptions);
  }

  getNumberOfTeamMembers(teamID: number): Observable<number> {
    return this.http.get<number>(`${this.apiRoot}/team/memberAmount/${teamID}`, httpOptions);
  }

  getNumberOfGradStudentsOnTeam(teamID: number): Observable<number> {
    return this.http.get<number>(`${this.apiRoot}/team/gradAmount/${teamID}`, httpOptions);
  }

  postNewParticipant(formData): Observable<any> {
    return this.http.post(`${this.apiRoot}/signup`, formData, { observe: 'response', responseType: 'text' });
  }

  checkEmail(email): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiRoot}/participant/email/${email}`, httpOptions);
  }

  getTeamByTeamID(teamID: number): Observable<any> {
    return this.http.get(`${this.apiRoot}/team/getTeam/${teamID}`, httpOptions);
  }
}
