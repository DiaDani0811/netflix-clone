import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headerData = [
    {link:"Home",router:"home"},
    {link:"Series",router:"series"},
    {link:"Movies",router:"movies"},
    {link:"Originals",router:"originals"},
    {link:"Recently Added",router:"recentlyAdded"},
    {link:"My List",router:"myList"}
  ]
}
