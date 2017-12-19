import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor( private _http: Http ) { }

  createUser( newUser ) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json')
  	let url = 'http://localhost:3000/users';
  	return this._http.post(url, newUser, {headers: headers})
  		.map( res => res.json());
  }

  login ( user ) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	let url = 'http://localhost:3000/users/login';

  	return this._http.post(url, user, {headers: headers})
  		.map( res => res.json());
  }

  // updateUser

  // delete User

}
