import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {

  constructor( private _http: Http ) { }

  getTodos( userObject ) {

	let url = 'http://localhost:3000/todos'

	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('x-auth', userObject['x-auth']);
	
	return this._http.get(url, {headers: headers} )
		.map(res=> res.json())

  }

  addTodo( text, user ) {
  	let url = 'http://localhost:3000/todos';
  	text = {text}
  	console.log(text)
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	headers.append('x-auth', user['x-auth']);

  	return this._http.post(url, JSON.stringify(text), {headers})
  		.map(res => res.json())
  }

  markDoneTodo (id, user) {
  	let url = `http://localhost:3000/todos/${id}`;

  	let headers = new Headers();
  	headers.append('x-auth', user['x-auth']);

  	return this._http.patch(url, {completed: true}, {headers})
  		.map(res => res.json());

  }

  unMarkDoneTodo ( id, user ) {
  	let url = `http://localhost:3000/todos/${id}`;

  	let headers = new Headers();
  	headers.append('x-auth', user['x-auth']);

  	return this._http.patch(url, {completed: false}, {headers})
  		.map(res => res.json());
  }

  editTodo ( todo, user ) {
  	let url = `http://localhost:3000/todos/${todo.id}`;
  	let text = todo.text;

  	let headers = new Headers();
  	headers.append('x-auth', user['x-auth']);

  	return this._http.patch(url, { text }, { headers})
  		.map(res => res.json());
  	
  } 

  removeTodo(id, user) {
  	let url = `http://localhost:3000/todos/${id}`;

  	let headers = new Headers();
  	headers.append('x-auth', user['x-auth']);

  	return this._http.delete(url, { headers })
  		.map(res => res.json());
  }

}
