import { Component, inject, signal } from '@angular/core';
import { McqComponent } from "../answers/mcq-component/mcq-component";
import { MsqComponent } from "../answers/msq-component/msq-component";
import { ShortAnswerComponent } from "../answers/short-answer-component/short-answer-component";
import { TrueFalseComponent } from "../answers/true-false-component/true-false-component";
import { HttpClient } from '@angular/common/http';
import QuestionGroups from '../../DataTypes/questionGroupTypes';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Home } from "../home/home";


@Component({
  selector: 'app-answer-form',
  imports: [McqComponent, MsqComponent, ShortAnswerComponent, TrueFalseComponent, ReactiveFormsModule, Home],
  templateUrl: './answer-form.html',
  styleUrl: './answer-form.css',
})
export class AnswerForm {
  http = inject(HttpClient);
  router = inject(Router);
  questions = signal<any[]>([]);
  activeQuestionGroup = signal<QuestionGroups>({ _id: '0', groupName: 'N/A', groupStatus: 'inactive' });
  totalQuestionCount = 0;
  arrayOfSignals:any[] = [];
  arrayOfQuestions:any[] = [];
  isStudentLoggedIn = localStorage.getItem('userData')? true : false;
  constructor() {
    
    this.http.get("https://question-form-backend.onrender.com/api/v1/question-groups/get-active-question-group")
      .subscribe((res:any) => {
        this.activeQuestionGroup.set(res?.data);
        localStorage.setItem('activeQuestionGroup', String(res?.data.questionGroupId));
        this.http.get("https://question-form-backend.onrender.com/api/v1/questions/get-all-questions/" + res?.data.questionGroupId)
          .subscribe((res:any) => {
            this.questions.set(res?.data);
            this.totalQuestionCount = this.questions().length;
            for(let i=0; i<this.totalQuestionCount;i++){
              this.arrayOfSignals.push(signal<any>({}))
            }
          });
      });

  }
  onSubmit(){
    this.arrayOfSignals.forEach((item)=>{
      this.arrayOfQuestions.push(item());
    });
    let userData = JSON.parse(localStorage.getItem('userData')!);
    let activeQuestionGroup = localStorage.getItem('activeQuestionGroup');
    let formData = {studentId:userData?.user?._id,questionGroupId:activeQuestionGroup,answers:this.arrayOfQuestions };
    this.http.post('https://question-form-backend.onrender.com/api/v1/question-paper/add-question-paper', formData)
    .subscribe((res:any)=>{
      if(res?.status === 201){
        alert("Your Question Paper submitted successfully.");
        this.router.navigateByUrl('/logout');
      }
    });
    // console.log(JSON.stringify(formData));
  }
}
