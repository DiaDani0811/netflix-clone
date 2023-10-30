import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor( private us : userService, private router :Router) { }

  ngOnInit(): void {
  }

  validateEmailId: string = '';
  validateEmail(enterdString: any) {
    var payload = {
      "newUser" : this.validateEmailId
    }
    this.us.newUserLogin(payload).subscribe(data => {
      console.log('adat',data);
      this.router.navigateByUrl('auth/step2')
    })
  }
}
