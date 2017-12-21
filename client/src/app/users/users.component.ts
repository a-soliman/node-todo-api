import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})


export class UsersComponent implements OnInit {
	loginForm: FormGroup;
	signupForm: FormGroup;

	users: User[];

	email: string;
	password: string;

	displySignup = false;
	displyLogin = false;
	loggedinUser = false;
	user = JSON.parse(localStorage.getItem('user'));



	constructor( private _usersService: UsersService, 
				 private fb: FormBuilder ) { 
		this.loginForm = fb.group({
			'email': [null, Validators.compose([ Validators.required, Validators.email ])],
			'password': [null, Validators.compose([ Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
		});

		this.signupForm = fb.group({
			'email': [null, Validators.compose([ Validators.required, Validators.email ])],
			'password': [null, Validators.compose([ Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
		})
	}

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

	signup( user ) {
		console.log('signup: ', user)
		// let newUser = {
		// 	email: this.email,
		// 	password: this.password
		// }
		
		// this._usersService.createUser(newUser)
		// 	.subscribe((data) => {
		// 		console.log(data);
		// 		this.displySignup = false;

		// 		this.login(data);
		// 	})
	}

	login( user ) {
		console.log('LOGIN: ', user)
		// if(!user) {
		// 	user = {
		// 		email: this.email,
		// 		password: this.password
		// 	}
		// }
		// console.log(user)

		// this._usersService.login( user )
		// 	.subscribe((data) => {
		// 		this.loggedinUser = data;
		// 		localStorage.setItem('user', JSON.stringify(data));
		// 		this.user = JSON.parse(localStorage.getItem('user'));
		// 		console.log(this.user);
		// 		this.displyLogin = false;
		// 	})
	}

	signout() {
		localStorage.removeItem('user');
		this.user = null;
		this.loggedinUser = false;
	}


}
