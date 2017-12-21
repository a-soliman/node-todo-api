import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { UsersComponent } from './users/users.component'
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
	user;

	constructor() {
		
	}

	bindUser(user) {
		this.user = user;
		console.log(this.user)
	}
}
