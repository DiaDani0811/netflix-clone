import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { SignUpClass } from 'src/app/model/signup.model';
import { userService } from 'src/app/service/user.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  SignUpClass = new SignUpClass()

  signup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router,private userService:userService,private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }
visible:boolean=false;

signInModal() {
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

    if(!this.SignUpClass.email && !this.SignUpClass.password ){
      this.errorMsg="Enter any Details *"
      this.error_Msg=true
    }
else if(!this.SignUpClass.email){
      this.errorMsg="Enter Valid Email *"
      this.error_Msg=true
}
else if(!this.SignUpClass.password){
      this.errorMsg="Enter Valid Password *"
      this.error_Msg = true
}
else{
  this.signup.reset();
  let ref = document.getElementById('cancel')
  ref?.click();
  // this.toastService.success("Registered Successfully","Start")
  this.showSnackbar("Registered Successfiully ...", "Undo")
}}
})}

showSnackbar(content:any,action :any){
  this.snackBar.open(content,action,
    { duration: 2000});
}
}
