import { Component, inject, signal } from '@angular/core';
import { QuestionGroupAddModal } from "../question-group-add-modal/question-group-add-modal";
import { HttpClient } from '@angular/common/http';
import QuestionGroups from '../../DataTypes/questionGroupTypes';
import { QuestionGroupEditModal } from "../question-group-edit-modal/question-group-edit-modal";

@Component({
  selector: 'app-question-group',
  imports: [QuestionGroupAddModal, QuestionGroupEditModal],
  templateUrl: './question-group.html',
  styleUrl: './question-group.css',
})
export class QuestionGroup {
  isAddQuestionModalVisible = signal(false);
  isEditQuestionModalVisible = signal(false);
  idForQuestionEdit = signal<string|undefined>('');
  http = inject(HttpClient);
  qGroups = signal<QuestionGroups[]>([]);
  constructor(){
    this.fetchGroupsData();
  }
  toggleAddQuestionModal(visibility:boolean){
    this.isAddQuestionModalVisible.set(visibility);
    if(visibility==false) this.fetchGroupsData();
  }
  toggleEditQuestionModal(visibility:boolean, id?:string){
    if(visibility === true) this.idForQuestionEdit.set(id);
    this.isEditQuestionModalVisible.set(visibility);
    if(visibility==false) this.fetchGroupsData();
  }
  fetchGroupsData(){
    this.http.get("http://localhost:3000/questionGroups")
    .subscribe(data=>this.qGroups.set(data as QuestionGroups[]));
  }
  deleteGroup(id:string){
    this.http.delete("http://localhost:3000/questionGroups/"+id)
    .subscribe((data)=>{
      this.fetchGroupsData();
      alert(`${(data as QuestionGroups).groupName} deleted successfully.`);
    });
  }
}
