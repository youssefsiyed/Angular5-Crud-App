import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthentificationService {
  public url: string = 'http://localhost/8000/api/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {}

  ////////////////////////////////////////
  GetUserAuth() {
    return this.http
      .get(this.url)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  ////////////////////////////////////////////////////////////
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
}
