import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpClass } from 'src/app/model/signup.model';
import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  SignUpClass = new SignUpClass()

  signup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router,private userService:userService) { 
  
  }

  ngOnInit(): void {
  }
visible:boolean=false;

signupModal() {
    this.visible = true;
  }
  validateEmailId: string = '';

  validateEmail(enterdString: any) {
    console.log('enterdString', enterdString);
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
  
errorMsg:string="";
error_Msg:boolean=false;
signupFormModal:boolean = false;
signupForm(){
this.SignUpClass.email = this.signup.value.email;
this.SignUpClass.password = this.signup.value.password;
this.userService.postSignup(this.SignUpClass).subscribe(res=>{
  if(res){
    if(!this.SignUpClass){
      this.errorMsg="Enter any Details"
      this.error_Msg=true
    }
    else if(!this.SignUpClass.email){
      this.errorMsg="Enter Valid Email"
      this.error_Msg=true
}
else if(!this.SignUpClass.password){
      this.errorMsg="Enter Valid Password"
      this.error_Msg = true
}
else{
  this.signup.reset();
  let ref = document.getElementById('cancel')
  ref?.click();   
}
  }
    
  

})}
}
