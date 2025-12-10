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
  showAddModal = signal('none');
  showEditModal = signal('none');
  idInputForEditModal = signal('');
  http = inject(HttpClient);
  qGroups = signal<QuestionGroups[]>([]);
  constructor(){
    this.fetchGroupsData();
  }
  changeAddModalMode(){
    this.showAddModal.update((style)=>{
      if(style === 'none'){
        this.fetchGroupsData();
        return 'block'
      }
      this.fetchGroupsData();
      return 'none';
    });
  }
  changeEditModalMode($id:string){
    this.idInputForEditModal.set($id);
    this.showEditModal.update((style)=>{
      if(style === 'none'){
        this.fetchGroupsData();
        return 'block'
      }
      this.fetchGroupsData();
      return 'none';
    });
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
