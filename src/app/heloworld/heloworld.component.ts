import { Component, OnInit } from '@angular/core';
import { userService } from '../shared/services/user.service';

@Component({
  selector: 'app-heloworld',
  templateUrl: './heloworld.component.html',
  styleUrls: ['./heloworld.component.scss']
})
export class HeloworldComponent implements OnInit {

  constructor(private userService : userService) { }

  ngOnInit(): void {
    this.helloWorld();
  }
  helloWorldd:string = ''
  helloWorld(){
    this.userService.getHelloworld().subscribe(response =>console.log('response',JSON.stringify(response)))
  }

}
