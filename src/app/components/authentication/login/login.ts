import { HttpClient } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  role = input<string>('');
  http = inject(HttpClient);
  router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(){
    if(localStorage.getItem('userData')){
      this.router.navigateByUrl('');
    }
  }

  onSubmit(){
    this.http.post('http://localhost:4000/api/v1/users/login',{...(this.loginForm.value)})
    .subscribe((res:any)=>{
      localStorage.setItem('userData',JSON.stringify(res?.data));
      alert(`Login Successful : ${res?.data?.user?.name}`);
      location.reload();
      
    });
  }
}
