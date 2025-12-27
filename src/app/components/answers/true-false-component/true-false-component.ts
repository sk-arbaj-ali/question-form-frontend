import { Component, input, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-true-false-component',
  imports: [ReactiveFormsModule],
  templateUrl: './true-false-component.html',
  styleUrl: './true-false-component.css',
})
export class TrueFalseComponent {
  finalFormData = model();
  questionId = input('');
  title = input('');
  text = input('');
  hints = input('');
  marks = input('');
  form = new FormGroup({
  questionId:new FormControl(''),
  providedAnswer:new FormControl('')
 });
 get qId(){
  return this.form.get('questionId');
 }
 onChange(){
  this.qId?.setValue(this.questionId());
  // console.log(this.form.value);
  this.finalFormData.set(this.form.value);
 }
}
