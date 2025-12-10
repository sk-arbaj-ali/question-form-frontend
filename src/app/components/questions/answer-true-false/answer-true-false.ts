import { Component, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-true-false',
  imports: [ReactiveFormsModule],
  templateUrl: './answer-true-false.html',
  styleUrl: './answer-true-false.css',
})
export class AnswerTrueFalse {
  form = model();
  subForm = new FormGroup({
    correctAnswer : new FormControl(false)
  });
  trackChange(){
    this.form.set(this.subForm);
  }
}
