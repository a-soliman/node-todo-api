import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
	displySignup = false;
	displyLogin = false;


	constructor( private usersService: UsersService ) { }

	ngOnInit() {}

	toggleSignUpForm() {
		this.displyLogin = false;
		this.displySignup = !this.displySignup;
	}

	toggleLoginForm() {
		this.displySignup = false;
		this.displyLogin = !this.displyLogin;
	}

}
