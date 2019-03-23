import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit { //default

  angForm: FormGroup;

  //default method
  constructor(private formBuilder: FormBuilder ) {
      this.createForm();
   }

   createForm(){
     this.angForm = this.formBuilder.group({
       email: ['', Validators.compose([
         Validators.required,
         this.validateEmail
     ])],
       password: ['', Validators.compose([
          Validators.required,
          this.validatePassword
      ])],
   });
  }

  onLoginSubmit(){
    const user = {
      email: this.angForm.get('email').value,
      password: this.angForm.get('password').value
    };
  }

  validateEmail(){

  }

  validatePassword(){

  }






  ngOnInit() {//default
  }
}
