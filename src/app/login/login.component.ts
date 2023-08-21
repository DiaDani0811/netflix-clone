import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  constructor() {
    this.loginForm = new FormGroup({
    "login":new FormControl(''),
    "password":new FormControl('')}
    )
   }

  ngOnInit(): void {
  }
  showMask: boolean = true;
  passwordShow(){
    var pw = document.getElementsByClassName("input-password")[0];
    var il = document.getElementById("passwordShow");
    if(this.showMask === true ){
      this.showMask = false;
      pw.setAttribute("type","text");
      il?.setAttribute("class", "fa fa-eye-slash");
    }
    else{
      this.showMask = true;
      pw.setAttribute("type","password");
      il?.setAttribute("class", "fas fa-eye")
    }
  }
  signInForm(){
    
  }

}
