import { Component, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-checkboxes',
  imports: [ReactiveFormsModule],
  templateUrl: './answer-checkboxes.html',
  styleUrl: './answer-checkboxes.css',
})
export class AnswerCheckboxes {
  form = model();
  formGroup = new FormGroup({
    optionA: new FormControl(''),
    optionB: new FormControl(''),
    optionC: new FormControl(''),
    optionD: new FormControl(''),
    checkOptionA: new FormControl(false),
    checkOptionB: new FormControl(false),
    checkOptionC: new FormControl(false),
    checkOptionD: new FormControl(false),
  });
  trackChange(){
    this.form.set(this.formGroup);
  }
}
