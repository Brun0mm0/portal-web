import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit():void {
    this.loginForm = this.fb.group({
      usuario:[""],
      pass:[""]
    })
  }
}
