import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamIconColorSelectorComponent } from './team-icon-color-selector.component';

describe('TeamIconColorSelectorComponent', () => {
  let component: TeamIconColorSelectorComponent;
  let fixture: ComponentFixture<TeamIconColorSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TeamIconColorSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIconColorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changeIconColor - white', () => {
    component.whiteIcon = true;
    component.selectedIcon = 'assets/svg/team-icons/bowling.svg';
    expect(component.changeIconColor()).toEqual({
      'background-color': 'white',
      '-webkit-mask-image': 'url(assets/svg/team-icons/bowling.svg)'
    })
  });

  it('should changeIconColor - black', () => {
    component.whiteIcon = false;
    component.selectedIcon = 'assets/svg/team-icons/bowling.svg';
    expect(component.changeIconColor()).toEqual({
      'background-color': 'black',
      '-webkit-mask-image': 'url(assets/svg/team-icons/bowling.svg)'
    })
  });

  it('should showIcons', () => {
    component.onIconMenu = false;
    component.onColorPicker = true;
    component.showIcons();
    expect(component.onIconMenu).toBeTrue();
    expect(component.onColorPicker).toBeFalse();
  });

  it('should showColorPicker', () => {
    component.onIconMenu = true;
    component.onColorPicker = false;
    component.showColors();
    expect(component.onIconMenu).toBeFalse();
    expect(component.onColorPicker).toBeTrue();
  });

  it('should saveColor', () => {
    spyOn(component.sendColor, 'emit');
    component.selectedColor = '#003300';
    component.whiteIcon = true;
    component.saveColor(1);
    expect(component.selectedColor).toEqual(component.colors[1].background);
    expect(component.whiteIcon).toEqual(component.colors[1].darkColor);
    expect(component.sendColor.emit).toHaveBeenCalled();
  });

  it('should saveIcon', () => {
    spyOn(component.sendIcon, 'emit');
    component.selectedIcon = 'assets/svg/team-icons/bowling.svg';
    component.saveIcon(1);
    expect(component.selectedIcon).toEqual(component.teamIcons[1].icon);
    expect(component.sendIcon.emit).toHaveBeenCalled();
  });

  it('should changeBackground', () => {
    component.selectedColor = '#003300';
    expect(component.changeBackground()).toEqual({ 'background-color': '#003300' });
  });

  it('should randomSelector', () => {
    spyOn(component.sendColor, 'emit');
    spyOn(component.sendIcon, 'emit');
    component.selectedColor = '#003300';
    component.whiteIcon = true;
    component.selectedIcon = 'assets/svg/team-icons/bowling.svg';
    component.randomSelector();
    expect(component.sendColor.emit).toHaveBeenCalled();
    expect(component.sendIcon.emit).toHaveBeenCalled();
  });
});
