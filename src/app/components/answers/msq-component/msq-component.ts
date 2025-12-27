import { Component, input, model } from '@angular/core';
import Mcq from '../../../DataTypes/mcqType';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-msq-component',
  imports: [ReactiveFormsModule],
  templateUrl: './msq-component.html',
  styleUrl: './msq-component.css',
})
export class MsqComponent {
  finalFormData = model();
  questionId = input('');
  title = input('');
 text = input('');
 hints = input('');
 marks = input('');
 answers = input<Mcq>();
 form = new FormGroup({
  questionId:new FormControl(''),
  providedAnswer:new FormArray([
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false)
  ])
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
