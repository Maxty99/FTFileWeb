(self["webpackChunkftfile_web"] = self["webpackChunkftfile_web"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-form/file-form.component */ 4823);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer/drawer.component */ 5220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class AppComponent {
    constructor() {
        this.title = 'FTFileWeb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "outerDiv"], [1, "file-form"], [1, "drawer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-file-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_file_form_file_form_component__WEBPACK_IMPORTED_MODULE_0__.FileFormComponent, _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".file-form[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background-color: rgba(211, 211, 211, 0.5);\r\n  margin: 0.5%;\r\n  width: 49%;\r\n  float: left;\r\n}\r\n.drawer[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background-color: rgba(211, 211, 211, 0.5);\r\n  margin: 0.5%;\r\n  width: 49%;\r\n  float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcclxuICBtYXJnaW46IDAuNSU7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uZHJhd2VyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XHJcbiAgbWFyZ2luOiAwLjUlO1xyXG4gIHdpZHRoOiA0OSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-form/file-form.component */ 4823);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawer/drawer.component */ 5220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _file_form_file_form_component__WEBPACK_IMPORTED_MODULE_2__.FileFormComponent, _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_3__.DrawerComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 5127:
/*!*********************************!*\
  !*** ./src/app/draw.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawService": () => (/* binding */ DrawService)
/* harmony export */ });
/* harmony import */ var ftfiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ftfiles */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class DrawService {
    constructor() {
        this.filebinaryString = '';
        this.canvas = undefined;
    }
    configure(file, canvas) {
        this.filebinaryString = file;
        this.canvas = canvas;
    }
    isConfigured() {
        return this.filebinaryString != '' && this.canvas != undefined;
    }
    draw(scale, points) {
        if (this.isConfigured()) {
            const buf = Buffer.from(this.filebinaryString, 'latin1');
            const ftBuf = new ftfiles__WEBPACK_IMPORTED_MODULE_0__.FTBuffer();
            ftBuf.readFromBuffer(buf);
            const ftDraw = new ftfiles__WEBPACK_IMPORTED_MODULE_0__.FTDrawer(ftBuf.getCoefficients());
            ftDraw.setCanvas(this.canvas);
            ftDraw.setScale(scale);
            ftDraw.draw(points);
        }
    }
}
DrawService.ɵfac = function DrawService_Factory(t) { return new (t || DrawService)(); };
DrawService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DrawService, factory: DrawService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5220:
/*!********************************************!*\
  !*** ./src/app/drawer/drawer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerComponent": () => (/* binding */ DrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _draw_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draw.service */ 5127);




class DrawerComponent {
    constructor(drawService) {
        this.drawService = drawService;
        this.nm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        this.scale = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(1);
        this.points = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(100);
        this.binaryFile = '';
        this.canvas = undefined;
    }
    setCanvas(canvas) {
        this.canvas = canvas;
    }
    onChangeForm(event) {
        try {
            const file = event.target.files[0];
            const fReader = new FileReader();
            fReader.readAsBinaryString(file);
            fReader.onloadend = (_event) => {
                this.binaryFile = _event.target.result;
                if (this.canvas == undefined || this.binaryFile == null) {
                    console.log('what');
                }
                else {
                    this.drawService.configure(this.binaryFile, this.canvas);
                    //console.log(atob(this.binaryFile.split(',')[1]));
                }
            };
        }
        catch (error) {
            console.log(error);
            this.reset();
        }
        this.reset();
    }
    draw() {
        if (this.drawService.isConfigured()) {
            this.drawService.draw(this.scale.value, this.points.value);
        }
        else {
            console.log('Something went wrong');
        }
    }
    reset() {
        this.binaryFile = null;
    }
    ngOnInit() {
        this.canvas = document.getElementById('drawCanvas');
    }
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_draw_service__WEBPACK_IMPORTED_MODULE_0__.DrawService)); };
DrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DrawerComponent, selectors: [["app-drawer"]], decls: 16, vars: 3, consts: [[1, "title"], ["type", "file", 1, "fileInput", 3, "formControl", "change"], ["fileForm", ""], ["type", "number", "min", "0", 1, "numberInputScale", 3, "formControl"], ["numberFormScale", ""], ["type", "number", "min", "1", 1, "numberInputPoints", 3, "formControl", "change"], ["numberFormPoints", ""], [1, "button", 3, "click"], ["uploadButton", ""], ["drawButton", ""], ["height", "1000", "width", "1000", "id", "drawCanvas", 1, "drawCanvas"], ["drawCanvas", ""]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Import FTF File to draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DrawerComponent_Template_input_change_2_listener($event) { return ctx.onChangeForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DrawerComponent_Template_input_change_6_listener() { return ctx.draw(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DrawerComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DrawerComponent_Template_button_click_11_listener() { return ctx.draw(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "canvas", 10, 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.nm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.scale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.points);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor], styles: ["@import url(https://fonts.googleapis.com/css2?family=Noto+Sans);\r\n@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono);\r\n.fileInput[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.numberInput[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  margin: 10px;\r\n  box-shadow: 0 6px 10px 0 #666;\r\n  border: 0px;\r\n}\r\n.output[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  overflow-wrap: break-word;\r\n  height: 400px;\r\n  width: 100%;\r\n  background-color: lightgray;\r\n  margin-top: 10px;\r\n  white-space: pre-wrap;\r\n}\r\n.label[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font: large;\r\n}\r\n.output[_ngcontent-%COMP%] {\r\n  font-family: \"Roboto Mono\";\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 50px;\r\n  background-color: rgb(0, 174, 255);\r\n  box-shadow: 0 6px 10px 0 #666;\r\n  transition: all 0.1s ease-in-out;\r\n  border: 0px;\r\n  color: white;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 6px 14px 0 #666;\r\n  transform: scale(1.05);\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-family: \"Noto Sans\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDtBQUMvRCxpRUFBaUU7QUFDakU7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJkcmF3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubyk7XHJcbi5maWxlSW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm51bWJlcklucHV0IHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCAjNjY2O1xyXG4gIGJvcmRlcjogMHB4O1xyXG59XHJcbi5vdXRwdXQge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4ubGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiBsYXJnZTtcclxufVxyXG4ub3V0cHV0IHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3NCwgMjU1KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDAgIzY2NjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICBib3JkZXI6IDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNHB4IDAgIzY2NjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5117:
/*!*****************************************!*\
  !*** ./src/app/file-convert.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileConvertService": () => (/* binding */ FileConvertService)
/* harmony export */ });
/* harmony import */ var ftfiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ftfiles */ 1258);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 9457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



class FileConvertService {
    constructor() {
        this.pathSvgString = '';
        this.processedFile = undefined;
        this.newFileName = '';
    }
    configure(fileBase64String, newFileName) {
        this.pathSvgString = atob(fileBase64String.split(',')[1]);
        this.newFileName = newFileName;
    }
    isConfigured() {
        return this.newFileName != '' && this.pathSvgString != '';
    }
    processFile(points) {
        const parser = new DOMParser();
        const document = parser.parseFromString(this.pathSvgString, 'image/svg+xml');
        const path = document.querySelector('path');
        if (path) {
            const ftProc = new ftfiles__WEBPACK_IMPORTED_MODULE_0__.FTProcessor(path);
            ftProc.processPoints(points);
            ftProc.dft();
            const ftBuf = new ftfiles__WEBPACK_IMPORTED_MODULE_0__.FTBuffer();
            ftBuf.setCoefficients(ftProc.getCoefficients());
            const fileBuffer = ftBuf.writeToBuffer();
            const blob = new Blob([fileBuffer], { type: 'application/octet-stream' });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, this.newFileName);
        }
    }
}
FileConvertService.ɵfac = function FileConvertService_Factory(t) { return new (t || FileConvertService)(); };
FileConvertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileConvertService, factory: FileConvertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4823:
/*!**************************************************!*\
  !*** ./src/app/file-form/file-form.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileFormComponent": () => (/* binding */ FileFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _file_convert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-convert.service */ 5117);




class FileFormComponent {
    constructor(fileConvert) {
        this.fileConvert = fileConvert;
        this.nm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.points = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(100);
        this.status = '';
        this.filename = '';
        this.base64File = '';
    }
    onChangeForm(event) {
        try {
            const file = event.target.files[0];
            const fReader = new FileReader();
            fReader.readAsDataURL(file);
            fReader.onloadend = (_event) => {
                var _a;
                this.filename = file.name.split('.')[0] + '.ftf';
                this.base64File = _event.target.result;
                if (!((_a = this.base64File) === null || _a === void 0 ? void 0 : _a.startsWith('data:image/svg+xml'))) {
                    this.status += 'Not svg file\n';
                }
                else {
                    this.fileConvert.configure(this.base64File, this.filename);
                    this.status +=
                        'Got (base64 encoded): ' + this.base64File.split(';')[0] + '\n';
                }
            };
        }
        catch (error) {
            this.status += 'no file was selected...';
            this.status += error;
            this.reset();
        }
        this.reset();
    }
    convert() {
        if (this.fileConvert.isConfigured()) {
            this.status += 'Converting with ' + this.points.value + ' points... \n';
            this.fileConvert.processFile(this.points.value);
            this.status += 'Returning file: ' + this.filename + '\n';
        }
        else {
            this.status += 'no file was selected... \n';
        }
    }
    reset() {
        this.filename = null;
        this.base64File = null;
        this.status = '';
    }
    ngOnInit() { }
}
FileFormComponent.ɵfac = function FileFormComponent_Factory(t) { return new (t || FileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_file_convert_service__WEBPACK_IMPORTED_MODULE_0__.FileConvertService)); };
FileFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FileFormComponent, selectors: [["app-file-form"]], decls: 15, vars: 3, consts: [[1, "title"], ["for", "numberForm"], ["type", "file", 1, "fileInput", 3, "formControl", "change"], ["fileForm", ""], ["type", "number", "min", "1", "id", "numberForm", 1, "numberInput", 3, "formControl"], [1, "button", 3, "click"], ["uploadButton", ""], ["id", "", 1, "output"]], template: function FileFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Import SVG (single path) File to convert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Amount of points to integrate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FileFormComponent_Template_input_change_4_listener($event) { return ctx.onChangeForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileFormComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileFormComponent_Template_button_click_10_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Convert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.nm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.points);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.status);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor], styles: ["@import url(https://fonts.googleapis.com/css2?family=Noto+Sans);\r\n@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono);\r\n.fileInput[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.numberInput[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  margin: 10px;\r\n  box-shadow: 0 6px 10px 0 #666;\r\n  border: 0px;\r\n}\r\n.output[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  overflow-wrap: break-word;\r\n  height: 400px;\r\n  width: 100%;\r\n  background-color: lightgray;\r\n  margin-top: 10px;\r\n  white-space: pre-wrap;\r\n}\r\n.label[_ngcontent-%COMP%] {\r\n  font-family: \"Noto Sans\";\r\n}\r\n.output[_ngcontent-%COMP%] {\r\n  font-family: \"Roboto Mono\";\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 50px;\r\n  background-color: rgb(0, 174, 255);\r\n  box-shadow: 0 6px 10px 0 #666;\r\n  transition: all 0.1s ease-in-out;\r\n  border: 0px;\r\n  color: white;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n.button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 6px 14px 0 #666;\r\n  transform: scale(1.05);\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-family: \"Noto Sans\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDtBQUMvRCxpRUFBaUU7QUFDakU7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImZpbGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMpO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vKTtcclxuLmZpbGVJbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubnVtYmVySW5wdXQge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwICM2NjY7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLm91dHB1dCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCI7XHJcbn1cclxuLm91dHB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIjtcclxufVxyXG4uYnV0dG9uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzQsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwICM2NjY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTRweCAwICM2NjY7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map