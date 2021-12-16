import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user=''
  constructor() { }

  ngOnInit() {
  }

  logar(){
    localStorage.setItem('USER', this.user);
  }
  deslogar(){
  localStorage.removeItem('USER');
}
}
