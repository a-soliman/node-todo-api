import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
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

	userObject: User

	@Output() user = new EventEmitter();


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
			this.user.emit(JSON.parse(localStorage.getItem('user')));
			this.userObject = JSON.parse(localStorage.getItem('user'))
		}
	}
	OnChanges() {
		this.displyLogin = localStorage.user?true:false;
		this.displyLogin = localStorage.user?true:false;
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
		this._usersService.createUser(user)
			.subscribe((data) => {
				this.displySignup = false;
				this.signupForm.reset();
				this.login(user);
			})
	}

	login( user ) {
		this._usersService.login( user )
			.subscribe((data) => {
				this.loggedinUser = data;
				this.user.emit(data);
				localStorage.setItem('user', JSON.stringify(data));
				//this.user.emit(JSON.parse(localStorage.getItem('user')))
				this.displyLogin = false;
				this.loginForm.reset();
				this.userObject = JSON.parse(localStorage.getItem('user'))
			})
	}

	signout() {
		localStorage.removeItem('user');
		this.user.emit(null)
		this.loggedinUser = false;
		this.userObject = null;
	}


}
