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
  id = input<string|undefined>('');
  http = inject(HttpClient);
  constructor(){
    this.http.get('http://localhost:3000/questionGroups?id='+this.id())
    .subscribe(data => {
      let formData = (data as QuestionGroups[]);
      this.form.setValue({groupName:formData[0].groupName,groupStatus:formData[0].groupStatus});
    })
  }
  emitShowEditModal(){
    this.showEditModal.emit();
  }
  form = new FormGroup({
    groupName: new FormControl(''),
    groupStatus: new FormControl('')
  })
  onSubmit(){
    this.http.patch("http://localhost:3000/questionGroups/"+this.id(), this.form.value)
    .subscribe(data=>{
      alert(`${(data as QuestionGroups).groupName} patched successfully.`)
      this.emitShowEditModal();
    });
  }
}
