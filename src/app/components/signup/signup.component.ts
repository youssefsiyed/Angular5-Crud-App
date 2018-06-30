import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public formsign = {
    email: null,
    name: null,
    password: null,
    password_confirm: null
  };
  error: string = null;
  constructor(private http: Http, private route: Router) {}

  ngOnInit() {}

  ////////////////////////
  onSubmit() {
    return this.http.get('http://localhost:8080/api/signup').subscribe(data => {
      console.log(data), error => this.handleError(error);
      this.route.navigateByUrl('/login');
    });
  }

  ///////////////////////
  handleError(error) {
    this.error = error.error.error;
  }
}
