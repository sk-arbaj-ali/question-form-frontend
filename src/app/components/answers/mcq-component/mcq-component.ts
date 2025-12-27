import { Component, input, model } from '@angular/core';
import Mcq from '../../../DataTypes/mcqType';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mcq-component',
  imports: [ReactiveFormsModule],
  templateUrl: './mcq-component.html',
  styleUrl: './mcq-component.css',
})
export class McqComponent {
  finalFormData = model();
 questionId = input('');
 title = input('');
 text = input('');
 hints = input('');
 marks = input('');
 answers = input<Mcq>();
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
