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
    this.http.get("https://question-form-backend.onrender.com/api/v1/question-groups/get-all-groups")
    .subscribe((res:any) => {
      if(res.status === 200){
        this.qGroups.set(res?.data as QuestionGroups[])
      }
    });
  }
  deleteGroup(id:string){
    this.http.post("https://question-form-backend.onrender.com/api/v1/question-groups/delete-one-question-group-by-id",{_id:id})
    .subscribe((res:any)=>{
      this.fetchGroupsData();
      alert(`${res?.data?.groupName} deleted successfully.`);
    });
  }
}
