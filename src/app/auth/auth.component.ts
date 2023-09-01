import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { SignUpClass } from 'src/app/model/signup.model';
import { userService } from 'src/app/service/user.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { getMaxListeners } from 'process';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  SignUpClass = new SignUpClass()

  signup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern(this.emailregex)]),
    password: new FormControl('', Validators.required)
  })
  
  constructor(private router: Router,private userService:userService,private snackBar: MatSnackBar,private fb : FormBuilder) {
   
  }
  emailValidate :FormGroup = this.fb.group(
    { newEmail: ["",[Validators.required,Validators.pattern(this.emailregex)],this.checkInUseEmail]
    }
    );
  controls = {
    email: this.emailValidate.get("newEmail"),
  };
  checkInUseEmail(control:any){
    let db = ["vignesh@gmail.com"];
    return new Observable(observer=>{
      setTimeout(()=>{
         let result = db.indexOf(control.value) !== -1 ? {alreadyInUse:true} : null
         observer.next(result);
         observer.complete();
      },2000)
    });
  }
  ngOnInit(): void {
  }

  
visible:boolean=false;

signInModal() {
    this.visible = true;
  }
  signupEmailId: string = '';

  validateEmail() {
    this.router.navigate([''])
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

messageContentForEmail(){
 return {
   email:{ 
     required: "Please Provide a email",
     pattern: "Not a valid email address",
     alreadyUsed: "This emailaddress is already in use"}
    }
  }
getEmailValidationMessage(){
}
showError(controlName: String){
  return this.hasVisibleError(this.emailValidate.controls['newEmail']);
}
private hasVisibleError(control: AbstractControl): boolean {
  return control.invalid && (control.dirty || control.touched);
}
getErrotEmail() {
  let emailControl = this.controls.email;
//   return emailControl.hasError("required")
//     ? this.messageContentForEmail().email.required
//     : emailControl.hasError("pattern")
//     ? this.messageContentForEmail().email.pattern
//     : emailControl.hasError("alreadyInUse")
//     ? this.messageContentForEmail().email.alreadyUsed
//     : "";
// }
}}
