import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  participant =
    {
      name: 'participant 1',
      teamCode: '319698',
      email: 'participant1@email.com'
    };


  winningTeamCodes = ['521689', '111111', '123456', '374995', '317395', '319698', '674719', '319698'];


  constructor() { }

  getLoggedInUser(): Observable<any> {
    return of(this.participant);
  }

  checkIfOnWinningTeam(participant: any): boolean {
    let winner = false;

    this.winningTeamCodes.forEach((teamCode) => {
      if (participant.teamCode === teamCode) {
        winner = true;
      }
    });

    return winner;
  }
}
