import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  // variables for checking for duplicates in database
  //message;
  // messageClass;
  //emailValid; //this was used in the other code commented out
  //emailMessage; //this was used in the other code commented out

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, //This is services component
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
    }); // added semicolon
  }

  onRegisterSubmit() {
    const user = {
      firstname: this.angForm.get('firstname').value,
      lastname: this.angForm.get('lastname').value,
      email: this.angForm.get('email').value,
      password: this.angForm.get('password').value
    };

    // this.authService.registerUser(user).subscribe(data => {
    //   if (!data.success) {
    //     this.messageClass = 'alert alert-danger';
    //     this.message = data.message;
    //   } else {
    //     this.messageClass = 'alert alert-success';
    //     this.message = data.message;
    //   }
    //   // console.log(data);
    // }); // added semicolon
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
    // Create a regular expression
    // tslint:disable-next-line:max-line-length
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
  // // Function to check if e-mail is taken
  // checkEmail() {
  //   // Function from authentication file to check if e-mail is taken
  //   this.authService.checkEmail(this.angForm.get('email').value).subscribe(data => {
  //     // Check if success true or false was returned from API
  //     if (!data.success) {
  //       this.emailValid = false; // Return email as invalid
  //       this.emailMessage = data.message; // Return error message
  //     } else {
  //       this.emailValid = true; // Return email as valid
  //       this.emailMessage = data.message; // Return success message
  //     }
  //   });
  // }

  ngOnInit() {
  }

}

// Everything below could work for validation
/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;
  firstnameValid;
  firstnameMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm(); // Create Angular 2 Form when component loads
  }

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // firstname Input
      firstname: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        this.validateName // Custom validation
      ])],
      // lastname Input
      lastname: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 3 characters
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
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
  }

  // Function to disable the registration form
  disableForm() {
    this.form.controls['firstname'].disable();
    this.form.controls['lastname'].disable();
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
    // this.form.controls['confirm'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['firstname'].enable();
    this.form.controls['lastname'].enable();
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
    // this.form.controls['confirm'].enable();
  }

  // Function to submit form
  onRegisterSubmit() {
    this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
    this.disableForm(); // Disable the form
    // Create user object form user's inputs
    const user = {
      firstname: this.form.get('firstname').value, // firstname input field
      lastname: this.form.get('lastname').value, // lastname input field
      email: this.form.get('email').value, // E-mail input field
      password: this.form.get('password').value // Password input field
    };

    // Function from authentication service to register user
    this.authService.registerUser(user).subscribe(data => {
      // Resposne from registration attempt
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; // Set an error message
        this.processing = false; // Re-enable submit button
        this.enableForm(); // Re-enable form
      } else {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        // After 2 second timeout, navigate to the login page
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login view
        }, 2000);
      }
    });

  }

  // Function to check if username is available
/*   checkUsername() {
    // Function from authentication file to check if username is taken
    this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
      // Check if success true or success false was returned from API
      if (!data.success) {
        this.usernameValid = false; // Return username as invalid
        this.usernameMessage = data.message; // Return error message
      } else {
        this.usernameValid = true; // Return username as valid
        this.usernameMessage = data.message; // Return success message
      }
    });
  } */

//   ngOnInit() {
//   }

// } */