import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Custumers } from '../models/Custumers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustumersService {
  private custumersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private custumers = new Custumers();

  constructor(private http: Http) {}

  ////////////////////////////////////////////////
  GetAllCustumers() {
    return this.http
      .get(this.custumersUrl)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  ////////////////////////////////////////////////
  GetOneCustumers(id: number) {
    return this.http
      .get(this.custumersUrl + '/' + id, this.options)
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }
  ///////////////////////////////////////////////
  SaveCustumer(cus: Custumers) {
    return this.http.post(this.custumersUrl, JSON.stringify(cus), this.options);
  }
  //////////////////////////////////////////////
  DeleteCustumer(id: number) {
    return this.http
      .delete(this.custumersUrl + '/' + id, this.options)
      .map((res: Response) => res.json())
      .catch(this.errorHandler);
  }
  ///////////////////////////////////////////////
  UpdateCustumer(cus: Custumers) {
    return this.http.post(this.custumersUrl, JSON.stringify(cus), this.options);
  }
  ////////////////////////////////////////////////////////////
  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
  ///////////////////////////////////////////////
  setter(custumers: Custumers) {
    this.custumers = custumers;
  }
  getter() {
    return this.custumers;
  }
}
