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

module.exports = "#scroll{\r\n    overflow: auto;\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{head}}\n  </h1>\n</div>\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-4\">\n  <form (submit)=\"addCake()\">\n    <h3>Submit a cake to be rated</h3>\n    <hr class=\"my-4\">\n    <label>Baker Name:\n      <input type=\"text\" class=\"form-control\" name=\"createCake.title\" [(ngModel)]=\"createCake.title\" #name='ngModel'>\n    </label>\n    <br>\n    <br>\n    <label>Image URL:\n      <input type=\"url\" class=\"form-control\" name=\"createCake.description\" [(ngModel)]=\"createCake.description\">\n    </label>\n    <br>\n    <br>\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"Create Cake\" />\n    <hr class=\"my-4\">\n  </form>\n  </div>\n  <div class=\"col-8\" id=\"scroll\">\n    <div *ngFor='let x of newCakes'>\n      <h3>{{ x.title }}</h3>\n      <img src =\"{{ x.description }}\" (click)=\"getCake(x)\" alt=\"image\" width=\"20%\" height=\"20%\">\n      <button (click)=\"deleteCake(x._id)\">Delete</button>\n      <div class=\"btn-group dropright\">\n      <form (submit)=\"addComment(x._id)\">\n        <div class=\"form-group\">\n          <select class=\"form-control\" name=\"createComment.rate\" [(ngModel)]=\"createComment.rate\">\n            <option value=1>1 Star</option>\n            <option value=2>2 Stars</option>\n            <option value=3>3 Stars</option>\n            <option value=4>4 Stars</option>\n            <option value=5>5 Stars</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" name=\"createComment.comment\" [(ngModel)]=\"createComment.comment\" rows=\"3\"></textarea>\n        </div>\n          <div class=\"col-auto\">\n            <button type=\"submit\" class=\"btn btn-outline-dark mb-2\">Submit</button>\n          </div>\n      </form>\n  </div>\n  <hr>\n  </div>\n  </div>\n</div>\n  <div>\n    <app-cake *ngIf=\"showCake\" [getCake]=\"showCake\"></app-cake>\n  </div>\n  </div>\n\n\n"

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
/* harmony import */ var _cake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cake */ "./src/app/cake.ts");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./src/app/comment.ts");
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
        this.head = 'Rate My Cakes';
        this.createCake = new _cake__WEBPACK_IMPORTED_MODULE_2__["Cake"]();
        this.createComment = new _comment__WEBPACK_IMPORTED_MODULE_3__["Rate"]();
        this.sum = 0;
        this.avg = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getCakes().subscribe(function (newCakes) { return _this.newCakes = newCakes; });
        this._httpService.getCakes().subscribe(function (newComments) { return _this.newComments = newComments; });
    };
    AppComponent.prototype.addCake = function () {
        var _this = this;
        this._httpService.addCake(this.createCake).subscribe(function (newCake) { return _this.newCakes.push(newCake); });
    };
    AppComponent.prototype.getCake = function (cake) {
        console.log(cake);
        // this._httpService.showCake(cake).subscribe(cake => this.showCake = cake as Cake)
        this.showCake = cake;
        for (var _i = 0, _a = cake.comments; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i['rate']) {
                this.sum += i['rate'];
            }
        }
        this.avg = this.sum / cake.comments.length;
        console.log(this.avg);
    };
    AppComponent.prototype.clear = function () {
        this.showCake = undefined;
    };
    AppComponent.prototype.editCake = function (cake_id, cake) {
        var _this = this;
        // this.editCake = cake;
        this._httpService.editCake(cake_id, cake).subscribe(function (cake) { return _this.ngOnInit(); });
    };
    AppComponent.prototype.deleteCake = function (cake_id) {
        var _this = this;
        this._httpService.removeCake(cake_id).subscribe(function (cake) { return _this.ngOnInit(); });
    };
    AppComponent.prototype.addComment = function (cake_id) {
        var _this = this;
        console.log(cake_id);
        this._httpService.addComments(cake_id, this.createComment).subscribe(function (newComment) { return _this.newComments.push(newComment); });
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
/* harmony import */ var _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cake/cake.component */ "./src/app/cake/cake.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _cake_cake_component__WEBPACK_IMPORTED_MODULE_6__["CakeComponent"]
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

/***/ "./src/app/cake.ts":
/*!*************************!*\
  !*** ./src/app/cake.ts ***!
  \*************************/
/*! exports provided: Cake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cake", function() { return Cake; });
var Cake = /** @class */ (function () {
    function Cake() {
    }
    return Cake;
}());



/***/ }),

/***/ "./src/app/cake/cake.component.css":
/*!*****************************************!*\
  !*** ./src/app/cake/cake.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cake/cake.component.html":
/*!******************************************!*\
  !*** ./src/app/cake/cake.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div>\n        Average Rating: {{avg}}\n      <h2>{{getCake.title}}</h2>\n      <img src=\"{{getCake.description}}\" alt=\"image\" width=\"20%\" height=\"75%\">\n    </div>\n    \n    <div>        \n      <div *ngFor=\"let x of getCake.comments\"> \n      <h2></h2>     \n      <h2>{{x.comment}}</h2>\n    </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cake/cake.component.ts":
/*!****************************************!*\
  !*** ./src/app/cake/cake.component.ts ***!
  \****************************************/
/*! exports provided: CakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeComponent", function() { return CakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CakeComponent = /** @class */ (function () {
    function CakeComponent() {
        this.sum = 0;
        this.avg = 0;
    }
    CakeComponent.prototype.ngOnInit = function () {
        this.sum = 0;
        this.avg = 0;
        for (var _i = 0, _a = this.getCake.comments; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i['rate']) {
                this.sum += i['rate'];
            }
        }
        this.avg = this.sum / this.getCake.comments.length;
        console.log(this.avg);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CakeComponent.prototype, "getCake", void 0);
    CakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cake',
            template: __webpack_require__(/*! ./cake.component.html */ "./src/app/cake/cake.component.html"),
            styles: [__webpack_require__(/*! ./cake.component.css */ "./src/app/cake/cake.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CakeComponent);
    return CakeComponent;
}());



/***/ }),

/***/ "./src/app/comment.ts":
/*!****************************!*\
  !*** ./src/app/comment.ts ***!
  \****************************/
/*! exports provided: Rate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return Rate; });
var Rate = /** @class */ (function () {
    function Rate() {
    }
    return Rate;
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
    }
    HttpService.prototype.getCakes = function () {
        return this._http.get('/cakes');
    };
    //  showCake(cake_id: number){
    //    return this._http.get(`/cakes/${cake_id}`);
    //  }
    HttpService.prototype.addCake = function (newCake) {
        return this._http.post('/cakes', newCake);
    };
    HttpService.prototype.editCake = function (cake_id, newCake) {
        return this._http.put("/cakes/" + cake_id, newCake);
    };
    HttpService.prototype.removeCake = function (cake_id) {
        return this._http.delete("/cakes/" + cake_id);
    };
    HttpService.prototype.addComments = function (cake_id, newComment) {
        console.log(newComment);
        return this._http.post("/cakes/" + cake_id, newComment);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
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

module.exports = __webpack_require__(/*! C:\Users\Drew\MEAN_stack\Angular\RateMyCakes\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map