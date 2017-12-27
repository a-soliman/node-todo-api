import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
   userUrl: string = 'https://dry-wildwood-27229.herokuapp.com/users';

  constructor( private _http: Http ) { }

  createUser( newUser ) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json')
  	let url = this.userUrl;
  	return this._http.post(url, newUser, {headers: headers})
  		.map( res => res.json());
  }

  login ( user ) {
  	let url = `${this.userUrl}/login`;

    return this._http.post(url, user)
      .map( res => res.json());

  }

}
