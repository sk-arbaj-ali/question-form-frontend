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
    optA: new FormControl(''),
    optB: new FormControl(''),
    optC: new FormControl(''),
    optD: new FormControl(''),
    correctAnswer: new FormControl('')
  });
  trackChange(){
    this.form.set(this.formGroup);
  }
}
