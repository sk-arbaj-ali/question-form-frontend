import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, signal } from '@angular/core';
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
  isLoggedIn = signal(false);

  constructor() {
    effect(() => {
      if (this.isLoggedIn()) {
        const userData = JSON.parse(localStorage.getItem('userData')!);
        if (userData) {
          location.href = 'https://question-form-frontend.onrender.com/'
          // location.href = 'http://localhost:4200'
        }
        else {
          this.router.navigateByUrl('');
        }
      }
    }
  )

}

onSubmit() {
  this.http.post('https://question-form-backend.onrender.com/api/v1/users/login', { ...(this.loginForm.value) })
    .subscribe((res: any) => {
      localStorage.setItem('userData', JSON.stringify(res?.data));
      alert(`Login Successful : ${res?.data?.user?.name}`);
      // location.reload();
      this.isLoggedIn.set(true);
    });
}
}
