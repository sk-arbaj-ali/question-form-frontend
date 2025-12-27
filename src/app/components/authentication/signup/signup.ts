import { HttpClient } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  role = input<string>('');
  http = inject(HttpClient);
  router = inject(Router);
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit(){
    this.http.post('http://localhost:4000/api/v1/users/register',{...(this.signupForm.value),role:this.role().toUpperCase()})
    .subscribe((res:any)=>{
      alert(`User created : ${res?.data?.name}`);
      this.router.navigateByUrl(`login-to-platform/${this.role().toLowerCase()}`);
    });
  }
}
