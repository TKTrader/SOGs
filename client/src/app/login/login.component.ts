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
     this.angForm = this.formBuilder.group({ firstname: ['', Validators.compose([ Validators.required,  this.validateName ])], });
  }

  onLoginSubmit(){
    const user = {
      firstname: this.angForm.get('firstname').value,
      lastname: this.angForm.get('lastname').value,
      email: this.angForm.get('email').value,
      password: this.angForm.get('password').value
};
  }










  ngOnInit() {//default
  }
}
