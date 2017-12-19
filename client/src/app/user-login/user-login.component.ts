import { Component, OnInit } from '@angular/core';
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

	constructor( private _usersService: UsersService ) { }

	ngOnInit() {
	}

	login() {
		let user = {
			email: this.email,
			password: this.password
		};

		this._usersService.login( user )
			.subscribe((data) => {
				console.log(data)
			})


	}
}
