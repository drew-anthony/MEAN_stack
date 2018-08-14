(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Restful Tasks CRUD\n  </h1>\n</div>\n<h2>All the Tasks: </h2>\n<button (click)=\"tasksOnClick()\">Click to get all tasks</button>\n<div *ngFor=\"let x of tasks\" >\n  <p *ngIf=\"x.title\">\n    {{x.title}} - {{x.description}}\n  </p>\n  <form (submit) = \"onDelete(x._id)\" class=\"postForm\">\n      <input type=\"submit\" value=\"DELETE\" />\n  </form>\n  <form (submit) = \"editOnClick(x)\" class=\"postForm\">\n      <input type=\"submit\" value=\"EDIT\" />\n  </form>\n  <div *ngIf=\"x.showEditForm\">\n    <form (submit) = \"onEdit(x)\" class=\"postForm\">\n      {{x.title}}\n      <label>Title:\n        <input type=\"text\" name=\"editTask.title\" [(ngModel)] = \"x.title\" />\n      </label>\n      <label>Description:\n        <input type=\"text\" name=\"editTask.description\" [(ngModel)] = \"x.description\" />\n      </label>\n      <input type=\"submit\" value=\"EDIT\" />\n    </form>\n  </div>\n</div>\n<h2>The Task: </h2>\n<input (keyup)=\"taskOnClick($event)\">\n<div *ngFor=\"let x of task\" >\n    <p *ngIf=\"x\">{{x}}</p>\n</div>\n<form (submit) = \"onSubmit()\" class=\"postForm\">\n  <p>{{newTask | json}}</p>\n  <label>Task title:\n    <input type=\"text\" name=\"newTask.title\" [(ngModel)] = \"newTask.title\" />\n  </label>\n  <label>Task description:\n    <input type=\"text\" name=\"newTask.description\" [(ngModel)] = \"newTask.description\" />\n  </label>\n  <input type=\"submit\" value=\"Create Task\" />\n</form>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'app';
        this.task = [];
        this.id = '';
        this.editTask = [];
        this.showEditForm = false;
        this.self = this;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newTask = { title: "", description: "" };
    };
    AppComponent.prototype.tasksOnClick = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (data) {
            console.log("Got our data!", data);
            _this.tasks = data;
            console.log("Got our tasks!", _this.tasks);
        });
    };
    AppComponent.prototype.taskOnClick = function (event) {
        var _this = this;
        this.task = [];
        this.id = event.target.value;
        var observable = this._httpService.getTask(this.id);
        observable.subscribe(function (data) {
            console.log("Clicked the button!", _this.id);
            _this.task = data['task'];
            console.log("Got our task!", _this.task);
        });
    };
    // editOnClick(task_id){
    //   console.log("Task we need to edit", task_id);
    //
    //   this.editTask = [];
    //   let observable = this._httpService.getTask(task_id)
    //   observable.subscribe(data => {
    //     this.editTask = data['task'];
    //     console.log("Task to edit", this.editTask, "Task title", this.editTask[0].title);
    //     this.showEditForm = true;
    //   })
    // }
    AppComponent.prototype.editOnClick = function (task) {
        console.log("Task we need to edit", task._id);
        console.log("Task to edit", task, "Task title", task.title);
        task.showEditForm = true;
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this._httpService.addTask(this.newTask);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
            _this.newTask = { title: "", description: "" };
            _this.tasksOnClick();
        });
    };
    AppComponent.prototype.onDelete = function (task_id) {
        var _this = this;
        var observable = this._httpService.deleteTask(task_id);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
            _this.tasksOnClick();
        });
    };
    AppComponent.prototype.onEdit = function (editTask) {
        editTask.showEditForm = false;
        console.log("Edit the task", editTask._id);
        var observable = this._httpService.editTask(editTask);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        console.log("1");
        //this.getTasks();
        //this.getTask();
    }
    HttpService.prototype.getTasks = function () {
        //console.log('hi');
        // our http response is an Observabele, store in in a variable
        //let tempObservable = this._http.get('/tasks');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
        //tempObservable.subscribe(data => console.log("Got our tasks!", data));
        return this._http.get('/tasks');
    };
    HttpService.prototype.getTask = function (task_id) {
        console.log('ID is', task_id);
        // let tempObservable = this._http.get('/tasks/5a84f4c3d7dee2b8012d96ae');
        // tempObservable.subscribe(data => console.log("Got the task!", data));
        return this._http.get('/tasks/' + task_id);
    };
    HttpService.prototype.addTask = function (newtask) {
        return this._http.post('/tasks', newtask);
    };
    HttpService.prototype.deleteTask = function (task_id) {
        console.log('request to delete');
        return this._http.delete('/tasks/' + task_id);
    };
    HttpService.prototype.editTask = function (editTask) {
        console.log('request to edit', editTask._id);
        return this._http.put('/tasks/' + editTask._id, editTask);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Drew\MEAN_stack\Angular\RestfulTasksCRUD\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map