import { Component, inject, signal } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AnswerOptions } from "../questions/answer-options/answer-options";
import { AnswerCheckboxes } from "../questions/answer-checkboxes/answer-checkboxes";
import { AnswerTrueFalse } from "../questions/answer-true-false/answer-true-false";
import { HttpClient } from '@angular/common/http';
import QuestionGroups from '../../DataTypes/questionGroupTypes';

@Component({
  selector: 'app-question-form',
  imports: [ReactiveFormsModule, AnswerOptions, AnswerCheckboxes, AnswerTrueFalse],
  templateUrl: './question-form.html',
  styleUrl: './question-form.css',
})
export class QuestionForm {
  value: string | undefined;
  form = new FormGroup({
    groupId: new FormControl(),
    title: new FormControl(),
    text: new FormControl(),
    hints: new FormControl(),
    qType: new FormControl(),
    marks: new FormControl(),
    status: new FormControl()
  });
  questionSubForm = signal(new FormGroup({}));
  questionGroupIds = signal<QuestionGroups[]>([]);
  router = inject(Router);
  http = inject(HttpClient);
  constructor(){
    this.http.get("http://localhost:3000/questionGroups")
    .subscribe(data => this.questionGroupIds.set(data as QuestionGroups[]));
  }
  onSubmit(){
    // console.log(this.form.value);
    // console.log(this.questionSubForm().value);
    let formValue = this.form.value;
    let subForm = this.questionSubForm().value;
    this.http.post("http://localhost:3000/questions", {...formValue,answers:{...subForm}})
    .subscribe((data)=>console.log(data));
    // console.log({...formValue,answers:{...subForm}});
  }
  trackQuestionTypeChange(event: Event){
    this.value = (event.target as HTMLSelectElement).value;
  }
}
