import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToLoginPage() {
    this.router.navigateByUrl('login')
  }
  redirectToSignUpPage() {
    this.router.navigateByUrl('signup')
  }
  validateEmailId: string = '';

  validateEmail(enterdString: any) {
    console.log('enterdString', enterdString);
  }

}
