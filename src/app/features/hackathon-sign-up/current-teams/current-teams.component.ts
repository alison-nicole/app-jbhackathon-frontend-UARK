import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/shared/services/sign-up.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import colorsJson from '../../../../assets/jsonFiles/colors.json';
import iconsJson from '../../../../assets/jsonFiles/teamIcons.json';

@Component({
  selector: 'app-current-teams',
  templateUrl: './current-teams.component.html',
  styleUrls: ['./current-teams.component.scss']
})
export class CurrentTeamsComponent implements OnInit {
  teams = [];
  icons = iconsJson;
  colors = colorsJson;

  teamMemberAmount = [];
  loggedInUser: any;
  userOnWinningTeam = false;
  currentTeam: any;
  teamInfoFilled = false;

  teamNames = [];

  constructor(private signUpService: SignUpService, private fb: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.signUpService.getAllTeams().subscribe(data => {
      data.forEach(item => {
        item.teamIconCode = this.getIconSource(item.teamIconCode);
        item.teamIconColor = this.getIconColor(item.teamColorCode);
        this.teams.push(item);
        this.getAmountOfTeamMembers(item['teamID']);
        this.teamNames.push({ label: item.teamName, value: item.teamName });
      });
    });
  }

  getAmountOfTeamMembers(teamID) {
    this.signUpService.getNumberOfTeamMembers(teamID).subscribe(data => {
      this.teamMemberAmount.push(data);
    });
  }

  getIconSource(iconName: string): string {
    let iconSource = '';
    this.icons.forEach((icon) => {
      if (icon.icon === iconName) {
        iconSource = ('../../../../' + icon.icon);
      }
    });
    return iconSource;
  }

  getIconColor(color: string) {
    let iconColor = 'black';
    this.colors.forEach((c) => {
      if (c.background === color) {
        iconColor = c.darkColor ? 'white' : 'black';
      }
    });
    return iconColor;
  }
}
