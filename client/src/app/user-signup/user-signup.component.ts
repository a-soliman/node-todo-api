import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  providers: [ UsersService ]
})
export class UserSignupComponent implements OnInit {
	users: User[];
	user: User;
	email: string;
	password: string;

  constructor( private _usersService: UsersService ) { }

  ngOnInit() {
  }

  signUp() {
		let newUser = {
			email: this.email,
			password: this.password
		}
		
		this._usersService.createUser(newUser)
			.subscribe((data) => {
				console.log(data);
			})
	}

}
