import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../shared/app.animations';

@Component({
  selector: 'app-winner-stories',
  templateUrl: './winner-stories.component.html',
  styleUrls: ['./winner-stories.component.scss'],
  animations: [routerTransition]
})
export class WinnerStoriesComponent implements OnInit {
  successStories = [
    {
      image: 'assets/image/past-winners/Jaden.jpg',
      name: 'success-stories.winner-one.name',
      answerOne: 'success-stories.winner-one.answer-one',
      answerTwo: 'success-stories.winner-one.answer-two',
      answerThree: 'success-stories.winner-one.answer-three',
      answerFour: 'success-stories.winner-one.answer-four',
      answerFive: 'success-stories.winner-one.answer-five',
      expand: true

    },
    {
      answerFive: 'success-stories.winner-two.answer-five',
      image: 'assets/image/past-winners/Blake1.png',
      name: 'success-stories.winner-two.name',
      answerThree: 'success-stories.winner-two.answer-three',
      answerOne: 'success-stories.winner-two.answer-one',
      answerTwo: 'success-stories.winner-two.answer-two',
      answerFour: 'success-stories.winner-two.answer-four',
      expand: false
    },
    {
      image: 'assets/image/past-winners/Luke.jpg',
      answerOne: 'success-stories.winner-three.answer-one',
      answerThree: 'success-stories.winner-three.answer-three',
      answerFour: 'success-stories.winner-three.answer-four',
      expand: false,
      name: 'success-stories.winner-three.name',
      answerTwo: 'success-stories.winner-three.answer-two',
      answerFive: 'success-stories.winner-three.answer-five',
    },
    {
      answerOne: 'success-stories.winner-four.answer-one',
      answerTwo: 'success-stories.winner-four.answer-two',
      image: 'assets/image/past-winners/Eli.jpg',
      answerThree: 'success-stories.winner-four.answer-three',
      name: 'success-stories.winner-four.name',
      answerFour: 'success-stories.winner-four.answer-four',
      answerFive: 'success-stories.winner-four.answer-five',
      expand: false
    },
    {
      answerThree: 'success-stories.winner-five.answer-three',
      image: 'assets/image/past-winners/Trevor.jpg',
      name: 'success-stories.winner-five.name',
      answerOne: 'success-stories.winner-five.answer-one',
      answerFour: 'success-stories.winner-five.answer-four',
      answerFive: 'success-stories.winner-five.answer-five',
      expand: false,
      answerTwo: 'success-stories.winner-five.answer-two',
    }
  ];


  state = 'in';

  revealInformation(index) {
    const currentStory = this.successStories[index];
    const arrayLength = this.successStories.length;
    for (let i = 0; i < arrayLength; i++) {
      this.successStories[i].expand = false;
      if (i === index) { this.successStories[i].expand = true; }
    }
  }


  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }
}
