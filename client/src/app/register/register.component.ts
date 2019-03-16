import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { 
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: ['',Validators.required],
      password: ''
    });//added semicolon
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.form.get('firstname').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.authService.registerUser(user).subscribe(data=> {
      console.log(data);
    }); //added semicolon
  }

    //other code from a tutorial, unsure
  // addBusiness(person_name, business_name, business_gst_number) {
  //   this.bs.addBusiness(person_name, business_name, business_gst_number);
  // }

  ngOnInit() {
  }

}
