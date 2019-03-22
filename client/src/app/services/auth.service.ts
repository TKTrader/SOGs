import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'; // links to 3rd party software
// import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }
  // angular7Crud format
  addUser(firstname, lastname, email, password) {
    const obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    };
    this.http.post(`${this.domain}/authentication/register`, obj)
        .subscribe(res => console.log('Done'));
  }// add

  // registerUser(user) {
  //   return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  // }

/*   // Function to check if username is taken
  checkFirstname(username) {
    return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(res => res.json());
  } */
  // Function to check if e-mail is taken
  // checkEmail(email) {
  //   return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(res => res.json());
  // }
}
