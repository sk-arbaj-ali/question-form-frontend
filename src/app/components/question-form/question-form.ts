import { Component, ElementRef, inject, signal } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AnswerOptions } from "../questions/answer-options/answer-options";
import { AnswerCheckboxes } from "../questions/answer-checkboxes/answer-checkboxes";
import { AnswerTrueFalse } from "../questions/answer-true-false/answer-true-false";
import { HttpClient } from '@angular/common/http';
import QuestionGroups from '../../DataTypes/questionGroupTypes';
import AnswerCheckboxesType from '../../DataTypes/AnswerCheckboxesType';
import AnswerOptionsType from '../../DataTypes/AnswerOptionsType';
import AnswerTrueFalseType from '../../DataTypes/AnswerTrueFalseType';

@Component({
  selector: 'app-question-form',
  imports: [ReactiveFormsModule, AnswerOptions, AnswerCheckboxes, AnswerTrueFalse],
  templateUrl: './question-form.html',
  styleUrl: './question-form.css',
})
export class QuestionForm {
  value: string | undefined;
  form = new FormGroup({
    questionGroupId: new FormControl(),
    title: new FormControl(),
    text: new FormControl(),
    hints: new FormControl(),
    qType: new FormControl(),
    marks: new FormControl(),
    // status: new FormControl()
  });
  questionSubForm = signal(new FormGroup({}));
  questionGroups = signal<QuestionGroups[]>([]);
  router = inject(Router);
  http = inject(HttpClient);
  constructor(){
    this.http.get("https://question-form-backend.onrender.com/api/v1/question-groups/get-all-groups")
    .subscribe((res:any) => this.questionGroups.set(res?.data as QuestionGroups[]));
  }
  onSubmit(){
    // console.log(this.form.value);
    // console.log(this.questionSubForm().value);
    
    let formValue = this.form.value;
    let subForm = this.questionSubForm().value;
    let formBody = {};
    if(formValue.qType === 'mcq'){
      const {optA,optB,optC,optD} = subForm as AnswerOptionsType;
      const {correctAnswer} = subForm as AnswerOptionsType;
      formBody = {...formValue,answers:{optA,optB,optC,optD},correctAnswer};
    }
    if(formValue.qType === 'multi'){
      const {optA,optB,optC,optD} = subForm as AnswerCheckboxesType;
      const {checkOptA,checkOptB,checkOptC,checkOptD} = subForm as AnswerCheckboxesType;
      formBody = {...formValue,answers:{optA,optB,optC,optD},correctAnswer:{checkOptA,checkOptB,checkOptC,checkOptD}};
    }
    if(formValue.qType === 'true-false'){
      const {correctAnswer} = subForm as AnswerTrueFalseType;
      formBody = {...formValue,correctAnswer};
    }
    if(formValue.qType === 'short-answer'){
      formBody = {...formValue};
    }
    
    this.http.post("https://question-form-backend.onrender.com/api/v1/questions/add-new-question", formBody)
    .subscribe((data)=>console.log(data));
    // console.log({...formValue,answers:{...subForm}});
  }
  trackQuestionTypeChange(event: Event){
    this.value = (event.target as HTMLSelectElement).value;
  }
  /**** Example to understand ElementRef(Direct access to DOM API) ****/
  // elementRef = inject(ElementRef);
  // clickDraft(){
  //   console.dir((this.elementRef.nativeElement as HTMLElement).querySelectorAll('div') );
  // }
}
