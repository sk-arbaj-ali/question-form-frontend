import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-answer-sheet-container',
  imports: [],
  templateUrl: './answer-sheet-container.html',
  styleUrl: './answer-sheet-container.css',
})
export class AnswerSheetContainer {
  http = inject(HttpClient);
  providedAnswers = signal<any[]>([]);
  allStudents = signal<any[]>([]);
  activeQuestionGroup = signal('');
  loadProvidedAnswers(studentId:string){
    this.http.get(`https://question-form-backend.onrender.com/api/v1/question-paper/get-provided-answer-by-student-id/${studentId}/${this.activeQuestionGroup()}`)
    .subscribe((res:any)=>{
      this.providedAnswers.set(res?.data);
      console.log(res?.data);
    })
  }
  constructor(){
    this.activeQuestionGroup.set(localStorage.getItem('activeQuestionGroup')!);
    this.http.get('https://question-form-backend.onrender.com/api/v1/users/get-all-students-data')
    .subscribe((res:any)=>{
      this.allStudents.set(res?.data);
    })
  }
}
