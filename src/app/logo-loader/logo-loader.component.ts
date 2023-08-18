import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-loader',
  templateUrl: './logo-loader.component.html',
  styleUrls: ['./logo-loader.component.scss']
})
export class LogoLoaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['home'])
    },4000)
  }

}
