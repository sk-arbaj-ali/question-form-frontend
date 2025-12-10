import { HttpClient } from '@angular/common/http';
import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import QuestionGroups from '../../DataTypes/questionGroupTypes';

@Component({
  selector: 'app-question-group-add-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './question-group-add-modal.html',
  styleUrl: './question-group-add-modal.css',
})
export class QuestionGroupAddModal {
  showModal = output();
  http = inject(HttpClient);
  emitShowModal(){
    this.showModal.emit();
  }
  form = new FormGroup({
    groupName: new FormControl(''),
    groupStatus: new FormControl('')
  })
  onSubmit(){
    this.http.post("http://localhost:3000/questionGroups", this.form.value)
    .subscribe(data=>alert(`${(data as QuestionGroups).groupName} added successfully.`))
    this.form.reset();
  }
}
