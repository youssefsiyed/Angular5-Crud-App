import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  constructor() {}

  /////handling the token
  handle(token) {
    this.set(token);
  }
  //////////  localstorage
  set(token) {
    localStorage.setItem('token', token);
    console.log(this.isValid(token));
  }
  //************************************************ */
  get() {
    return localStorage.getItem('token');
  }
  //************************************************ */
  remove() {
    return localStorage.removeItem('token');
  }
  //************************************************ */
  isValid(token) {
    if (token == this.get()) {
      const payload = token.split('.')[1];
      const decode = JSON.parse(atob(payload));
    }
  }
}
