import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
	users: User[];

	email: string;
	password: string;

	displySignup = false;
	displyLogin = false;
	loggedinUser = false;
	user = JSON.parse(localStorage.getItem('user'));



	constructor( private _usersService: UsersService ) { }

	ngOnInit() {
		if(localStorage.user) {
			this.loggedinUser = true;
		}
	}
	OnChanges() {
		this.displyLogin = localStorage.user?true:false;
		this.displyLogin = localStorage.user?true:false;
		console.log('change happed')
	}

	toggleSignUpForm() {
		this.displyLogin = false;
		this.displySignup = !this.displySignup;
	}

	toggleLoginForm() {
		this.displySignup = false;
		this.displyLogin = !this.displyLogin;
	}

	signup() {
		let newUser = {
			email: this.email,
			password: this.password
		}
		
		this._usersService.createUser(newUser)
			.subscribe((data) => {
				console.log(data);
				this.displySignup = false;

				this.login(newUser);
			})
	}

	login(user) {
		if(!user) {
			let user = {
				email: this.email,
				password: this.password
			}
		}
		console.log(this)

		this._usersService.login( user )
			.subscribe((data) => {
				this.loggedinUser = data;
				localStorage.setItem('user', JSON.stringify(data));
				this.user = JSON.parse(localStorage.getItem('user'));
				console.log(this.user);
				this.displyLogin = false;
			})
	}

	signout() {
		localStorage.removeItem('user');
		this.user = null;
		this.loggedinUser = false;
	}


}
