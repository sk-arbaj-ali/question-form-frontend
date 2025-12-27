import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isAdminLoggedIn = signal<boolean>(false);
  isStudentLoggedIn = signal<boolean>(false);
  constructor(){
    // console.log(localStorage.getItem('userData'));
    if(localStorage.getItem('userData')){
      let userData = JSON.parse(localStorage.getItem('userData')!);
      if(userData?.user?.role === 'ADMIN'){
        this.isAdminLoggedIn.set(true);
      }
      if(userData?.user?.role === 'STUDENT'){
        this.isStudentLoggedIn.set(true);
      }
    }
    // else{
    //   this.isAdminLoggedIn.set(false);
    // }
  }
}
