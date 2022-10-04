import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss']
})
export class CodeVerificationComponent implements OnInit {

  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  inputKeyDown(e, id): void {
    let boxesFilled = 0;
    if (isFinite(e.key)) {
      e.target.value = e.key;
      if (id < 6) {
        let next = document.getElementById(`input-${id + 1}`);
        next.focus();
      }
    } else if (e.key === "Backspace") {
      e.target.value = '';
    }
    // Arrow key movement through cells.
    else if (e.key === "ArrowLeft") {
      if (id === 1) document.getElementById(`input-6`).focus();
      document.getElementById(`input-${id - 1}`).focus();
    } else if (e.key === "ArrowRight") {
      if (id === 6) document.getElementById(`input-1`).focus();
      document.getElementById(`input-${id + 1}`).focus();
    }
    for (let i = 1; i <= 6; i++) {
      if (((document.getElementById(`input-${i}`) as HTMLInputElement).value.length)) {
        boxesFilled++;
      }
    }
    if (boxesFilled == 6) {
      var code = '';
      for (let i = 1; i <= 6; i++) {
        code += (document.getElementById(`input-${i}`) as HTMLInputElement).value;
      }
      this.submitForm.emit(code);
    }
  }

}
