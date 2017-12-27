import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import * as moment from 'moment/min/moment-with-locales.min.js';

import { TodosService } from '../todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: ['./todos.component.css'],
  providers: [ TodosService ]
})

export class TodosComponent implements OnInit {
	@Input() user;
	todos;

	addTodoForm: FormGroup;
	editTodoForm: FormGroup;

	showEditTodoForm: boolean = false;
	todoToEdit = null;

	constructor( private _todosService: TodosService,
				 private fb: FormBuilder ) { 
		this.addTodoForm = fb.group({
			'todo_text': [null, Validators.compose([ Validators.required, Validators.minLength(6)])]
		});

		this.editTodoForm = fb.group({
			'todo_text': [ null, Validators.compose([ Validators.required, Validators.minLength(6)])]
		});
	}

	ngOnInit() {
		this.getTodos()
		
	}

	getTodos(): void {
		this._todosService.getTodos(this.user)
			.subscribe((res) => {
				this.todos = res.todos;		
			})
	}

	addTodo( todoFormValue ) {
		let todoText = todoFormValue.todo_text;
		
		this._todosService.addTodo(todoText, this.user)
			.subscribe((res) => {
				this.getTodos();
				this.addTodoForm.reset();
			})
		
	}

	markDone( id ) {
		this._todosService.markDoneTodo(id, this.user)
			.subscribe((res ) => {
				this.getTodos();
			})
	}

	unMarkDone ( id ) {
		this._todosService.unMarkDoneTodo(id, this.user)
			.subscribe((res ) => {
				this.getTodos();
			})
	}

	editTodo( todo, newText ) {
		this._todosService.editTodo( todo, newText, this.user)
			.subscribe((res) => {
				this.todoToEdit = null;
				this.getTodos();
				this.hideEditTodoModal();
			})
	}

	setTodoToEdit ( todo ) {
		this.todoToEdit = todo;
	}

	hideEditTodoModal() {
		let form = document.getElementById('editTodoModal');

		if( form.style.display !== 'none') {
			form.style.display = "none";
		}
		return;
	}

	removeTodo( id ) {

		if( this.confirmDeletion() ) {
			this._todosService.removeTodo(id, this.user)
				.subscribe((res) => {
					this.getTodos()
				});
		}
		return;
	}

	confirmDeletion () {
		let c = confirm('Are you sure, you want to remove this Todo?');

		return c === true ? true : false;
	}
}
