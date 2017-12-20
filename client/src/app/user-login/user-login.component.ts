import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, Response, ResponseOptions} from '@angular/http';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [ UsersService ]
})
export class UserLoginComponent implements OnInit {
	users: User[];
	user: User;
	email: string;
	password: string;

	public loggedinUser = null;

	constructor( private _usersService: UsersService, private _http: Http ) { }

	ngOnInit() {
	}

	login() {
		let user = {
			email: this.email,
			password: this.password
		};

		this._usersService.login( user )
			.subscribe((data) => {
				this.loggedinUser = data;
				localStorage.setItem('user', this.loggedinUser);
				console.log(this.loggedinUser);
			})
	}
}
