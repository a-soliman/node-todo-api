import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [ TodosService ]
})

export class TodosComponent implements OnInit {
	@Input() user;
	todos;

	addTodoForm: FormGroup;

	constructor( private _todosService: TodosService,
				 private fb: FormBuilder ) { 
		this.addTodoForm = fb.group({
			'todo_text': [null, Validators.compose([ Validators.required, Validators.minLength(6)])]
		});
	}

	ngOnInit() {
		this.getTodos()
	}

	getTodos() {
		this._todosService.getTodos(this.user)
			.subscribe((res) => {
				this.todos = res.todos;			})
	}

	addTodo( todoFormValue ) {
		let todoText = todoFormValue.todo_text;
		
		this._todosService.addTodo(todoText, this.user)
			.subscribe((res) => {
				console.log('Added')
			})
		this.getTodos();
	}



}
