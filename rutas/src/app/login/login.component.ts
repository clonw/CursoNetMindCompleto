import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pass;
  repeatPass;
  constructor() {
    this.pass = '';
    this.repeatPass = '';
  }

  ngOnInit() {
  }

}
