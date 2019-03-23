import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit { //default

  angForm: FormGroup;

  //default method
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, ) {
      this.createForm();
   }

   createForm(){
     this.angForm = this.formBuilder.group({
       email: ['', Validators.compose([
         Validators.required
     ])],
       password: ['', Validators.compose([
          Validators.required
      ])],
   });
  }

//cosmically working (running dynamically in bg is my guess)
  onLoginSubmit(){
    const user = {
      email: this.angForm.get('email').value,
      password: this.angForm.get('password').value
    };
  }

loginUser(email, password){
  this.authService.loginUser(email, password);
}

  // here as an example
  addUser(firstname, lastname, email, password) {
    this.authService.addUser(firstname, lastname, email, password);
  }





  ngOnInit() {//default
  }
}
