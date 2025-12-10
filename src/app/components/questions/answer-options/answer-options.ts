import { Component, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-options',
  imports: [ReactiveFormsModule],
  templateUrl: './answer-options.html',
  styleUrl: './answer-options.css',
})
export class AnswerOptions {
  form = model();
  formGroup = new FormGroup({
    optionA: new FormControl(''),
    optionB: new FormControl(''),
    optionC: new FormControl(''),
    optionD: new FormControl(''),
    correctAnswer: new FormControl('')
  });
  trackChange(){
    this.form.set(this.formGroup);
  }
}
