import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  http = inject(HttpClient);
  router = inject(Router);
  userData = JSON.parse(localStorage.getItem('userData')!);
  constructor(){
    if(this.userData){
      this.http.post('http://localhost:4000/api/v1/users/logout',{},{headers:{Authorization:`Bearer ${this.userData?.accessToken}`}})
      .subscribe(async (res:any)=>{
        if(res?.status === 200){
          localStorage.removeItem('userData');
          localStorage.removeItem('activeQuestionGroup');
          alert('Successfully logged-out');
          location.reload();
        }
      });
    }
    else{
      this.router.navigateByUrl('');
    }
  }
}
