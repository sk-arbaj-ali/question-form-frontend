import { Component, inject, signal } from '@angular/core';
import { McqComponent } from "../answers/mcq-component/mcq-component";
import { MsqComponent } from "../answers/msq-component/msq-component";
import { ShortAnswerComponent } from "../answers/short-answer-component/short-answer-component";
import { TrueFalseComponent } from "../answers/true-false-component/true-false-component";
import { HttpClient } from '@angular/common/http';
import QuestionGroups from '../../DataTypes/questionGroupTypes';


@Component({
  selector: 'app-answer-form',
  imports: [McqComponent, MsqComponent, ShortAnswerComponent, TrueFalseComponent],
  templateUrl: './answer-form.html',
  styleUrl: './answer-form.css',
})
export class AnswerForm {
 http = inject(HttpClient);
 questions = signal<any[]>([]);
 activeQuestionGroup = signal<QuestionGroups>({id:'0',groupName:'N/A',groupStatus:'Pending'});
 constructor(){
  this.http.get("http://localhost:3000/questionGroups?groupStatus=active")
  .subscribe((data) => {
    this.activeQuestionGroup.set((data as QuestionGroups[])[0])
    this.http.get("http://localhost:3000/questions?groupId="+ this.activeQuestionGroup().groupName)
    .subscribe(data => {
    this.questions.set(data as any[]);
    });
  });
  
 }
}
