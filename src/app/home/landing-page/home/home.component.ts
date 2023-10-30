import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  section1 : boolean = true;
  section2 : boolean = true;
  section3 : boolean = true;
  section11 : boolean = true;
  section22 :boolean = true;
  section33 :boolean = true;
  section111 :boolean = true;
  section222 :boolean = true;
  section333 :boolean = false;
  sectionNext(section : any){
    if(section == 'section1'){
     this.section1 = true;
     this.section2 = false;
     this.section3 = false;
     this.section11 = true;
     this.section22 = false;
     this.section33 = false;
     this.section111 = true;
     this.section222 = false;
     this.section333 = false;
    }else if(section == 'section2'){
      this.section1 = false;
      this.section2 = true;
      this.section3 = false;
      this.section11 = false;
      this.section22 = true;
      this.section33 = false;
      this.section111 = false;
      this.section222 = true;
      this.section333 = false;
    }else if(section == 'section3'){
      this.section1 = false;
      this.section2 = false;
      this.section3 = true;
      this.section11 = false;
      this.section22 = false;
      this.section33 = true;
      this.section111 = false;
      this.section222 = false;
      this.section333 = true;
    }
     
  }
  sectionPrevious(section:any){
    if(section == 'section1'){
      this.section1 = true;
      this.section2 = false;
      this.section3 = false;
      this.section11 = true;
      this.section22 = false;
      this.section33 = false;
      this.section111 = true;
      this.section222 = false;
      this.section333 = false;
     }else if(section == 'section2'){
       this.section1 = false;
       this.section2 = true;
       this.section3 = false;
       this.section11 = false;
       this.section22 = true;
       this.section33 = false;
       this.section111 = false;
       this.section222 = true;
       this.section333 = false;
     }else if(section == 'section3'){
       this.section1 = false;
       this.section2 = false;
       this.section3 = true;
       this.section11 = false;
       this.section22 = false;
       this.section33 = true;
       this.section111 = false;
       this.section222 = false;
       this.section333 = true;
     }
  }

  openPopup:boolean = true;
}
