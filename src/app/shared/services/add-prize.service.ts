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
export class AddPrizeService {

  constructor(readonly http: HttpClient) { }

  readonly getAll = 'all';
  readonly apiRoot = 'http://localhost:8080/ws_infrastructure_university_hackathon';

  getAllPrizes(): Observable<any> {
    return this.http.get<any>(`${this.apiRoot}/prizes/${this.getAll}`);
  }

  postNewPrize(formData): Observable<any> {
    return this.http.post(`${this.apiRoot}/prizes`, formData, { observe: 'response', responseType: 'text'});
  }
}
