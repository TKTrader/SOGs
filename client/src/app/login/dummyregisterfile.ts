import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

//ctrl + k + 0 --Collapse all

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

/*Oninit: A callback method that is invoked immediately after the default change
 * detector has checked the directive's data-bound properties for the first time, and
 * before any of the view or content children have been checked. It is invoked only
 * once when the directive is instantiated.
 */
export class RegisterComponent implements OnInit {

  angForm: FormGroup;
  emailValid;
  emailMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      firstname: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 2 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        this.validateName // Custom validation
      ])],
      // lastname Input
      lastname: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 2 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        this.validateName // Custom validation
      ])],
       // Email Input
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validateEmail // Custom validation
      ])],
            // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
        this.validatePassword // Custom validation
      ])],
    }); 
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.angForm.get('firstname').value,
      lastname: this.angForm.get('lastname').value,
      email: this.angForm.get('email').value,
      password: this.angForm.get('password').value
    };
  }

  // Angular7Crud Tutorial template
  addUser(firstname, lastname, email, password) {
    this.authService.addUser(firstname, lastname, email, password);
  }

  // Function to validate Name in proper format
  validateName(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z]+$/);
    // Test Name against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid name
    } else {
      return { 'validateName': true }; // Return as invalid name
    }
  }

  // Function to validate e-mail in proper format
  validateEmail(controls) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true }; // Return as invalid email
    }
  }

  // Function to validate password
  validatePassword(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    // Test password against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid password
    } else {
      return { 'validatePassword': true }; // Return as invalid password
    }
  }

  // Function to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true }; // Return as error: do not match
      }
    };
  }

  /*
   *A lifecycle hook that is called after Angular has initialized 
   *all data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.
   */
  ngOnInit() {
  }

}
