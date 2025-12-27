import { Component, input, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-short-answer-component',
  imports: [ReactiveFormsModule],
  templateUrl: './short-answer-component.html',
  styleUrl: './short-answer-component.css',
})
export class ShortAnswerComponent {
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
