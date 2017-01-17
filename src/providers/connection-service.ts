import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectionService {

  constructor(public http: Http) { }
  //console.log('Hello ConnectionService Provider');

  getCep(): Promise<Response> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
  }


  getCep2(id): Promise<Response> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id).toPromise();
  }


  getFotos(): Promise<Response> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos').toPromise();
  }


}
