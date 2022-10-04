import { Component, OnInit, Output, EventEmitter, Testability } from '@angular/core';
import colorsJson from '../../../../../assets/jsonFiles/colors.json';
import teamsJson from '../../../../../assets/jsonFiles/teamIcons.json';

@Component({
  selector: 'app-team-icon-color-selector',
  templateUrl: './team-icon-color-selector.component.html',
  styleUrls: ['./team-icon-color-selector.component.scss']
})

export class TeamIconColorSelectorComponent implements OnInit {
  @Output() sendIcon = new EventEmitter<string>();
  @Output() sendColor = new EventEmitter<string>();

  colors = colorsJson;
  teamIcons = teamsJson;

  onIconMenu = false;
  onColorPicker = true;

  selectedIcon = this.teamIcons[0].icon;
  selectedColor = this.colors[0].background;
  whiteIcon = this.colors[0].darkColor;

  changeIconColor() {
    return {
      'background-color': this.whiteIcon ? 'white' : 'black',
      '-webkit-mask-image': 'url(' + this.selectedIcon + ')'
    };
  }

  showIcons() {
    this.onIconMenu = true;
    this.onColorPicker = false;
  }

  showColors() {
    this.onColorPicker = true;
    this.onIconMenu = false;
  }

  saveIcon(index) {
    this.selectedIcon = this.teamIcons[index].icon;
    this.sendIcon.emit(this.selectedIcon);
  }

  saveColor(index) {
    this.selectedColor = this.colors[index].background;
    this.whiteIcon = this.colors[index].darkColor;
    this.sendColor.emit(this.selectedColor);
  }

  changeBackground() {
    return { 'background-color': this.selectedColor };
  }

  randomSelector() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.selectedColor = randomColor.background;
    this.whiteIcon = randomColor.darkColor;
    this.sendColor.emit(this.selectedColor);


    const randomIcon = this.teamIcons[Math.floor(Math.random() * this.teamIcons.length)];
    this.selectedIcon = randomIcon.icon;
    this.sendIcon.emit(this.selectedIcon);

  }

  constructor() { }

  ngOnInit() {
    this.onIconMenu = true;
    this.onColorPicker = false;
    this.sendIcon.emit(this.selectedIcon);
    this.sendColor.emit(this.selectedColor);
  }
}
