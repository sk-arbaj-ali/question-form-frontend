import { HttpClient } from '@angular/common/http';
import { Component, inject, input, output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import QuestionGroups from '../../DataTypes/questionGroupTypes';

@Component({
  selector: 'app-question-group-edit-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './question-group-edit-modal.html',
  styleUrl: './question-group-edit-modal.css',
})
export class QuestionGroupEditModal {
  showEditModal = output();
  id = input('');
  http = inject(HttpClient);
  emitShowEditModal(){
    this.showEditModal.emit();
  }
  form = new FormGroup({
    groupName: new FormControl(''),
    groupStatus: new FormControl('')
  })
  onSubmit(){
    this.http.post("http://localhost:3000/questionGroups", this.form.value)
    .subscribe(data=>alert(`${(data as QuestionGroups).groupName} added successfully.`))
  }
}
