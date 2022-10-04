import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/shared/services/sign-up.service';
import { Teams } from '../models/teams.model';


@Component({
  selector: 'app-results',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  teams: Teams[] = [];
  teamMemberAmount = [];
  constructor(private signUpService: SignUpService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.signUpService.getAllTeams().subscribe( data => {
      this.teams = data;
      this.orderTeams();
      this.getTeamSizes();
    });
  }

  orderTeams() {
    this.teams.sort((a, b) => b.score - a.score);
  }

  getTeamSizes() {
    this.teams.forEach(item => {
      this.getAmountOfTeamMembers(item['teamID']);
    })
  }

  getAmountOfTeamMembers(teamID) {
    this.signUpService.getNumberOfTeamMembers(teamID).subscribe(data => {
      this.teamMemberAmount.push(data);
    });
  }
}
