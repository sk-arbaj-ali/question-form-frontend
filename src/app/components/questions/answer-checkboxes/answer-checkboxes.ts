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
    optA: new FormControl(''),
    optB: new FormControl(''),
    optC: new FormControl(''),
    optD: new FormControl(''),
    checkOptA: new FormControl(false),
    checkOptB: new FormControl(false),
    checkOptC: new FormControl(false),
    checkOptD: new FormControl(false),
  });
  trackChange(){
    this.form.set(this.formGroup);
  }
}
