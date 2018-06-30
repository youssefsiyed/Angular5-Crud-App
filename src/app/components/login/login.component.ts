import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    email: null,
    password: null
  };
  error: string = null;
  constructor(private token: TokenService, private route: Router) {}

  ngOnInit() {}
  //////////////////////////////////////
  onSubmit() {
    console.log(this.form);
    this.route.navigate(['/custumers']);
  }
  handleResponce(data) {
    this.token.handle(data.access_token);
  }
  /////////////////////////////////////
  handleError(error) {
    this.error = error.error;
  }
}
