import { HttpClient } from '@angular/common/http';
import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    this.http.post("https://question-form-backend.onrender.com/api/v1/question-groups/add-new-group", this.form.value)
    .subscribe((data:any)=>alert(`${(data)?.data?.groupName} added successfully.`));
    this.form.reset();
  }
}
