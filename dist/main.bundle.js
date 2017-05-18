webpackJsonp([1],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 111;

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments__ = __webpack_require__(123);




if (__WEBPACK_IMPORTED_MODULE_3_environments__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_temp_temp_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'temp',
        component: __WEBPACK_IMPORTED_MODULE_1__components_temp_temp_component__["a" /* TempComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(electronService) {
        this.electronService = electronService;
        if (electronService.isElectron()) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        }
        else {
            console.log('Mode web');
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(191),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_electron_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_modal_plugins_bootstrap__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_custom_modal_sample__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_temp_temp_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_custom_modal_sample__["a" /* CustomModal */],
            __WEBPACK_IMPORTED_MODULE_13__components_temp_temp_component__["a" /* TempComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__providers_electron_service__["a" /* ElectronService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__components_home_custom_modal_sample__["a" /* CustomModal */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
// This file contains development variables. (When you work in DEV MODE)
var environment = {
    production: false
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<h1>ok</h1>";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(29);
/* unused harmony export CustomModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* BSModalContext */]));

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var CustomModal = (function () {
    function CustomModal(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
        this.wrongAnswer = true;
        dialog.setCloseGuard(this);
    }
    CustomModal.prototype.onKeyUp = function (value) {
        this.wrongAnswer = value != 5;
        this.dialog.close();
    };
    CustomModal.prototype.beforeDismiss = function () {
        return true;
    };
    CustomModal.prototype.beforeClose = function () {
        return this.wrongAnswer;
    };
    return CustomModal;
}());
CustomModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'modal-content',
        styles: ["\n        .custom-modal-container {\n            padding: 15px;\n        }\n\n        .custom-modal-header {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    "],
        //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
        // Remove when solved.
        /* tslint:disable */ template: "\n        <div class=\"container-fluid custom-modal-container\">\n            <div class=\"row custom-modal-header\">\n                <div class=\"col-sm-12\">\n                    <h1>A Custom modal design</h1>\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-12\">\n                    <div class=\"jumbotron\">\n                        <h1>Do the math to quit:</h1>\n                        <p class=\"lead\">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong></p>\n                        <span>What is the sum?</span>\n                         <input class=\"form-control\" type=\"text\" #answer (keyup)=\"onKeyUp(answer.value)\" autofocus>\n                    </div>\n                </div>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["d" /* DialogRef */]) === "function" && _a || Object])
], CustomModal);

var _a;
//# sourceMappingURL=custom-modal-sample.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_modal_sample__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(modal) {
        this.modal = modal;
        this.title = "App works !";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onClick = function () {
        this.modal.alert()
            .size('lg')
            .showClose(false)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    HomeComponent.prototype.openCustom = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal_sample__["a" /* CustomModal */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* BSModalContext */]));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        // templateUrl: './home.component.html',
        template: "\n  <span defaultOverlayTarget></span>\n  <h1>angular2-modal</h1>\n  <h2>Basic Modal sample</h2>\n  <button (click)=\"onClick()\">Alert</button>\n    <br>\n  <h2>Custom Modal example:</h2>\n  <button (click)=\"openCustom()\">Custom Modal</button>\n  <p>\n  <b>IMPORTANT:</b>\n  Since 'AdditionCalculateWindow' is never explicitly used (in a template)\n  we must tell angular about it by adding it to the <strong>entryComponents</strong> property in the module meta.\n  </p>\n  \n  <h2>See systemjs.config.js implementation for UMD vs module loading</h2>\n   <a routerLink=\"/temp\">Dashboard</a>\n  ",
        styles: [__webpack_require__(190)],
        providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */], __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["g" /* Overlay */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TempComponent = (function () {
    function TempComponent(modal) {
        this.modal = modal;
        this.title = "App works !";
    }
    TempComponent.prototype.ngOnInit = function () {
    };
    TempComponent.prototype.onClick = function () {
        this.modal.alert()
            .size('lg')
            .showClose(false)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    return TempComponent;
}());
TempComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-temp',
        template: __webpack_require__(192),
        providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */], __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["g" /* Overlay */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* Modal */]) === "function" && _a || Object])
], TempComponent);

var _a;
//# sourceMappingURL=temp.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronService = (function () {
    function ElectronService() {
        this.isElectron = function () {
            return window && window.process && window.process.type;
        };
        //Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }
    return ElectronService;
}());
ElectronService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ElectronService);

//# sourceMappingURL=electron.service.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map