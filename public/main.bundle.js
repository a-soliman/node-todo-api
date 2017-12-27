webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container\">\n\t<app-users (user)=\"bindUser($event)\"></app-users>\n\n\t<div *ngIf=\"user\">\n\t\t<app-todos [user]=\"user\"></app-todos>\n\t</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    AppComponent.prototype.OnInit = function () { };
    AppComponent.prototype.bindUser = function (user) {
        this.user = user;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment_moment_module__ = __webpack_require__("../../../../angular2-moment/moment.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment_moment_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment_moment_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__ = __webpack_require__("../../../../../src/app/user-signup/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todos_todos_component__ = __webpack_require__("../../../../../src/app/todos/todos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__["a" /* UserSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__todos_todos_component__["a" /* TodosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment_moment_module__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatTooltipModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/todos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosService = /** @class */ (function () {
    function TodosService(_http) {
        this._http = _http;
        this.todosUrl = 'https://dry-wildwood-27229.herokuapp.com/todos';
    }
    TodosService.prototype.getTodos = function (userObject) {
        var url = this.todosUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('x-auth', userObject['x-auth']);
        return this._http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.addTodo = function (text, user) {
        var url = this.todosUrl;
        text = { text: text };
        console.log(text);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('x-auth', user['x-auth']);
        return this._http.post(url, JSON.stringify(text), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.markDoneTodo = function (id, user) {
        var url = this.todosUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('x-auth', user['x-auth']);
        return this._http.patch(url, { completed: true }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.unMarkDoneTodo = function (id, user) {
        var url = this.todosUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('x-auth', user['x-auth']);
        return this._http.patch(url, { completed: false }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.editTodo = function (todo, newText, user) {
        var url = this.todosUrl + "/" + todo._id;
        var text = newText.todo_text;
        console.log(text);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('x-auth', user['x-auth']);
        return this._http.patch(url, { text: text }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.removeTodo = function (id, user) {
        var url = this.todosUrl + "/" + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('x-auth', user['x-auth']);
        return this._http.delete(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "../../../../../src/app/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" \n*ngFor=\"let todo of (todos ? todos.slice(0,10): []); let i = index\" >\n  <mat-card-header>\n    <mat-card-title >\n\t\t<h3 >{{ todo.text}}</h3>\n    </mat-card-title>\n    <mat-card-subtitle *ngIf=\"todo.completed\"> {{ (todo.completedAt | amFromUnix) | amDateFormat:' MM-DD-YYYY hh:mmA' }}</mat-card-subtitle>\n  </mat-card-header>\n\n\n  \t<mat-card-actions>\n  \t\t<button\n\t\t\tmat-button\n\t\t\tcolor=\"accent\"\n\t\t\t*ngIf=\"!todo.completed\"\n\t\t\t(click)=\"setTodoToEdit( todo )\"\n\t\t\tdata-toggle=\"modal\" \n\t\t\tdata-target=\"#editTodoModal\"\n\t\t\tmatTooltip=\"edit\"\n    \t \tmatTooltipPosition=\"above\">\n\t\t\t\t<mat-icon>edit</mat-icon></button>\n\t    <button \n\t    \tmat-button \n\t    \tcolor=\"primary\" \n\t    \t*ngIf=\"!todo.completed\"\n\t    \t(click)=\"markDone(todo._id)\"\n\t    \tmatTooltip=\"mark done!\"\n    \t \tmatTooltipPosition=\"above\">\n\t    \t\t<mat-icon>done</mat-icon>\n\t    </button>\n\n\n\t    <button \n\t    \tmat-button \n\t    \tcolor=\"primary\" \n\t    \t*ngIf=\"todo.completed\"\n\t    \t(click)=\"unMarkDone(todo._id)\"\n    \t \tmatTooltip=\"mark undone!\"\n    \t \tmatTooltipPosition=\"above\">\n\t    \t\t<mat-icon>history</mat-icon>\n\t    </button>\n\n    \t<button \n    \t\tmat-button \n    \t\tcolor=\"warn\"\n    \t\t(click)=\"removeTodo(todo._id)\"\n    \t\tmatTooltip=\"Remove\"\n    \t \tmatTooltipPosition=\"above\">\n    \t\t\t<mat-icon>delete</mat-icon>\n    \t</button>\n  </mat-card-actions>\n</mat-card>\n\n\n\n<mat-card class=\"add-todo-card\" style=\"margin-top: 20px;\">\n\t<form class=\"example-form\" [formGroup]=\"addTodoForm\" (ngSubmit)=\"addTodo(addTodoForm.value)\">\n\t  \t<mat-form-field class=\"example-full-width\">\n\t    \t<textarea \n\t    \t\tmatInput \n\t    \t\tname=\"todo_text\" \n\t\t\t\tformControlName=\"todo_text\" \n\t    \t\tplaceholder=\"Add todo...\">\n\t    \t</textarea>\n\t  \t</mat-form-field>\n\t\t\n\t\t<mat-card-actions>\n\t\t  \t<button \n\t    \t\tmat-button \n\t    \t\tcolor=\"warn\"\n\t    \t\t[disabled]=\"!addTodoForm.valid\"\n\t    \t\tmatTooltip=\"Add todo\"\n\t    \t \tmatTooltipPosition=\"above\">\n\t    \t\t\t<mat-icon>add</mat-icon>\n\t    \t</button>\n\t  </mat-card-actions>\n\n\t</form>\n</mat-card>\n\n\n<!-- Modal -->\n<div \n\t*ngIf=\"todoToEdit\" class=\"modal fade\" id=\"editTodoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editTodoModal\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\" role=\"document\">\n  \t\t<form class=\"form\" [formGroup]=\"editTodoForm\" (ngSubmit)=\"editTodo(todoToEdit, editTodoForm.value)\">\n    \t\t<div class=\"modal-content\">\n      \t\t\t<div class=\"modal-header\">\n        \t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit ToDo</h5>\n       \t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          \t\t\t\t<span aria-hidden=\"true\">&times;</span>\n        \t\t\t</button>\n      \t\t\t</div>\n      \t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"form-grop\">\n\t\t\t\t\t\t<textarea \n\t\t\t\t\t\t\tname=\"todo_text\" \n\t\t\t\t\t\t\tformControlName=\"todo_text\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\tcols=\"5\" \n\t\t\t\t\t\t\trows=\"2\"\n\t\t\t\t\t\t\tvalue=\" {{todoToEdit.text}}\">\n\t\t\t\t\t\t</textarea>\n\t\t\t\t\t</div>\n      \t\t\t</div>\n     \t\t\t<div class=\"modal-footer\">\n        \t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        \t\t\t<button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editTodoForm.valid\">Save changes</button>\n      \t\t\t</div>\n    \t\t</div>\n    \t</form>\n  \t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos_service__ = __webpack_require__("../../../../../src/app/todos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as moment from 'moment/min/moment-with-locales.min.js';

var TodosComponent = /** @class */ (function () {
    function TodosComponent(_todosService, fb) {
        this._todosService = _todosService;
        this.fb = fb;
        this.showEditTodoForm = false;
        this.todoToEdit = null;
        this.addTodoForm = fb.group({
            'todo_text': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6)])]
        });
        this.editTodoForm = fb.group({
            'todo_text': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6)])]
        });
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodosComponent.prototype.getTodos = function () {
        var _this = this;
        this._todosService.getTodos(this.user)
            .subscribe(function (res) {
            _this.todos = res.todos;
        });
    };
    TodosComponent.prototype.addTodo = function (todoFormValue) {
        var _this = this;
        var todoText = todoFormValue.todo_text;
        this._todosService.addTodo(todoText, this.user)
            .subscribe(function (res) {
            _this.getTodos();
            _this.addTodoForm.reset();
        });
    };
    TodosComponent.prototype.markDone = function (id) {
        var _this = this;
        this._todosService.markDoneTodo(id, this.user)
            .subscribe(function (res) {
            _this.getTodos();
        });
    };
    TodosComponent.prototype.unMarkDone = function (id) {
        var _this = this;
        this._todosService.unMarkDoneTodo(id, this.user)
            .subscribe(function (res) {
            _this.getTodos();
        });
    };
    TodosComponent.prototype.editTodo = function (todo, newText) {
        var _this = this;
        this._todosService.editTodo(todo, newText, this.user)
            .subscribe(function (res) {
            _this.todoToEdit = null;
            _this.getTodos();
            _this.hideEditTodoModal();
        });
    };
    TodosComponent.prototype.setTodoToEdit = function (todo) {
        this.todoToEdit = todo;
    };
    TodosComponent.prototype.hideEditTodoModal = function () {
        var form = document.getElementById('editTodoModal');
        if (form.style.display !== 'none') {
            form.style.display = "none";
        }
        return;
    };
    TodosComponent.prototype.removeTodo = function (id) {
        var _this = this;
        if (this.confirmDeletion()) {
            this._todosService.removeTodo(id, this.user)
                .subscribe(function (res) {
                _this.getTodos();
            });
        }
        return;
    };
    TodosComponent.prototype.confirmDeletion = function () {
        var c = confirm('Are you sure, you want to remove this Todo?');
        return c === true ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TodosComponent.prototype, "user", void 0);
    TodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__("../../../../../src/app/todos/todos.component.html"),
            styles: ['./todos.component.css'],
            providers: [__WEBPACK_IMPORTED_MODULE_2__todos_service__["a" /* TodosService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__todos_service__["a" /* TodosService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2 class=\"page-header\">Login</h2>\n\t<form (submit) = \"login()\">\n\t\t\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"email\">Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name=\"email\" class=\"form-control\" required>\n\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"password\">Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name=\"password\" class=\"form-control\" required>\n\t\t</div>\n\n\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Login\">\n\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(_usersService, _http) {
        this._usersService = _usersService;
        this._http = _http;
        this.loggedinUser = null;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this._usersService.login(user)
            .subscribe(function (data) {
            _this.loggedinUser = data;
            localStorage.setItem('user', _this.loggedinUser);
            console.log(_this.loggedinUser);
        });
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__("../../../../../src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-login/user-login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-signup/user-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-signup/user-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2 class=\"page-header\">Sign Up</h2>\n\t<form (submit) = \"signUp()\">\n\t\t\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"email\">Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name=\"email\" class=\"form-control\" required>\n\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t<label for=\"password\">Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name=\"password\" class=\"form-control\" required>\n\t\t</div>\n\n\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Sign Up\">\n\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-signup/user-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSignupComponent = /** @class */ (function () {
    function UserSignupComponent(_usersService) {
        this._usersService = _usersService;
    }
    UserSignupComponent.prototype.ngOnInit = function () {
    };
    UserSignupComponent.prototype.signUp = function () {
        var newUser = {
            email: this.email,
            password: this.password
        };
        this._usersService.createUser(newUser)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    UserSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-signup',
            template: __webpack_require__("../../../../../src/app/user-signup/user-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-signup/user-signup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]])
    ], UserSignupComponent);
    return UserSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(_http) {
        this._http = _http;
        this.userUrl = 'https://dry-wildwood-27229.herokuapp.com/users';
    }
    UsersService.prototype.createUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = this.userUrl;
        return this._http.post(url, newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.login = function (user) {
        var url = this.userUrl + "/login";
        return this._http.post(url, user)
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-spacer {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 1 auto;\n\t        flex: 1 1 auto;\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>TODO APP</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"appMenu\" *ngIf=\"!loggedinUser\"><mat-icon>menu</mat-icon> Menu</button>\n  <button mat-button [matMenuTriggerFor]=\"appMenu\" *ngIf=\"loggedinUser\"><mat-icon>menu</mat-icon> {{ userObject.email }}</button>\n</mat-toolbar>\n\n<mat-menu #appMenu=\"matMenu\">\n  <button mat-menu-item (click)=\"toggleSignUpForm()\" \n\t*ngIf=\"!loggedinUser\"> Signup</button>\n  <button mat-menu-item (click)=\"toggleLoginForm()\"\n\t*ngIf=\"!loggedinUser\"> Login</button>\n  <button mat-menu-item (click)=\"signout()\" \n\t*ngIf=\"loggedinUser\"> Logout</button>\n</mat-menu>\n\n\n\n<div *ngIf=\"user\" >\n\t{{user.email}}\n</div>\n\n<div *ngIf=\"displySignup\">\n\t<h2 class=\"page-header\">Sign Up</h2>\n\n\t<form class=\"example-form\" [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\n\t\t<mat-form-field class=\"example-full-width\">\n\t    \t<input \n\t    \t\tmatInput \n\t    \t\tplaceholder=\"email\" \n\t    \t\ttype=\"email\" \n\t\t\t\tformControlName=\"email\" \n\t\t\t\tname=\"email\" >\n\t  \t</mat-form-field>\n\n\t  \t<mat-form-field class=\"example-full-width\">\n\t\t    <input \n\t\t    \tmatInput \n\t\t    \tplaceholder=\"password\" \n\t\t    \ttype=\"password\" \n\t\t\t\tformControlName=\"password\" \n\t\t\t\tname=\"password\" >\n\t \t </mat-form-field>\n\n\t  \t<button \n\t\t  \ttype=\"submit\"\n\t\t  \tmat-button \n\t\t  \tcolor=\"accent\" \n\t\t  \t[disabled]=\"!signupForm.valid\">\n\t\t  \t\tSignup\n\t\t</button>\n\t</form>\n</div>\n\n<div *ngIf=\"displyLogin\">\n\t<h2 class=\"page-header\">Login</h2>\n\n\t<form class=\"example-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n  \t\t<mat-form-field class=\"example-full-width\">\n    \t\t<input \n\t    \t\tmatInput \n\t    \t\tplaceholder=\"email\" \n\t    \t\ttype=\"email\" \n\t\t\t\tformControlName=\"email\" \n\t\t\t\tname=\"email\" >\n  \t\t</mat-form-field>\n\n  \t\t<mat-form-field class=\"example-full-width\">\n\t\t    <input \n\t\t    \tmatInput \n\t\t    \tplaceholder=\"password\" \n\t\t    \ttype=\"password\" \n\t\t\t\tformControlName=\"password\" \n\t\t\t\tname=\"password\" >\n\t \t </mat-form-field>\n\n\n   \t \t<button \n\t\t  \ttype=\"submit\"\n\t\t  \tmat-button \n\t\t  \tcolor=\"accent\" \n\t\t  \t[disabled]=\"!loginForm.valid\">\n\t\t  \t\tLogin\n\t\t</button>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(_usersService, fb) {
        this._usersService = _usersService;
        this.fb = fb;
        this.displySignup = false;
        this.displyLogin = false;
        this.loggedinUser = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loginForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(20)])]
        });
        this.signupForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].maxLength(20)])]
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        if (localStorage.user) {
            this.loggedinUser = true;
            this.user.emit(JSON.parse(localStorage.getItem('user')));
            this.userObject = JSON.parse(localStorage.getItem('user'));
        }
    };
    UsersComponent.prototype.OnChanges = function () {
        this.displyLogin = localStorage.user ? true : false;
        this.displyLogin = localStorage.user ? true : false;
    };
    UsersComponent.prototype.toggleSignUpForm = function () {
        this.displyLogin = false;
        this.displySignup = !this.displySignup;
    };
    UsersComponent.prototype.toggleLoginForm = function () {
        this.displySignup = false;
        this.displyLogin = !this.displyLogin;
    };
    UsersComponent.prototype.signup = function (user) {
        var _this = this;
        this._usersService.createUser(user)
            .subscribe(function (data) {
            _this.displySignup = false;
            _this.signupForm.reset();
            _this.login(user);
        });
    };
    UsersComponent.prototype.login = function (user) {
        var _this = this;
        this._usersService.login(user)
            .subscribe(function (data) {
            _this.loggedinUser = data;
            _this.user.emit(data);
            localStorage.setItem('user', JSON.stringify(data));
            //this.user.emit(JSON.parse(localStorage.getItem('user')))
            _this.displyLogin = false;
            _this.loginForm.reset();
            _this.userObject = JSON.parse(localStorage.getItem('user'));
        });
    };
    UsersComponent.prototype.signout = function () {
        localStorage.removeItem('user');
        this.user.emit(null);
        this.loggedinUser = false;
        this.userObject = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UsersComponent.prototype, "user", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map