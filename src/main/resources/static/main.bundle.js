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

/***/ "../../../../../src/app/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeInAnimation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideRightAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('fadeInAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 1 }))
    ]),
]);
var slideRightAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('slideInRight', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
        }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(100%)'
        })), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
            opacity: 1,
            transform: 'translateX(0%)'
        })), { optional: true }),
    ])
]);


/***/ }),

/***/ "../../../../../src/app/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatStepperModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tag_list_tag_list_component__ = __webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_quiz_results_quiz_results_component__ = __webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_question_list_profile_question_list_component__ = __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quiz_container_quiz_container_component__ = __webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_quiz_results_guard__ = __webpack_require__("../../../../../src/app/guards/quiz-results.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_add_qform_add_qform_component__ = __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_performance_performance_component__ = __webpack_require__("../../../../../src/app/components/performance/performance.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_tag_list_tag_list_component__["a" /* TagListComponent */],
        data: { page: 'one' }
    },
    {
        path: 'profile',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */],
        data: { page: 'two' },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_11__components_performance_performance_component__["a" /* PerformanceComponent */]
            },
            {
                path: 'performance',
                component: __WEBPACK_IMPORTED_MODULE_11__components_performance_performance_component__["a" /* PerformanceComponent */]
            },
            {
                path: 'questions',
                component: __WEBPACK_IMPORTED_MODULE_5__components_profile_question_list_profile_question_list_component__["a" /* ProfileQuestionListComponent */]
            },
            {
                path: 'settings',
                component: __WEBPACK_IMPORTED_MODULE_6__components_change_password_change_password_component__["a" /* ChangePasswordComponent */]
            }
        ]
    },
    {
        path: 'quiz/:tagName',
        component: __WEBPACK_IMPORTED_MODULE_8__components_quiz_container_quiz_container_component__["a" /* QuizContainerComponent */],
        data: { page: 'three' }
    },
    {
        path: 'results',
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_quiz_results_guard__["a" /* QuizResultsGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_results_quiz_results_component__["a" /* QuizResultsComponent */],
        data: { page: 'four' }
    },
    {
        path: 'addQuestion',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_10__components_add_qform_add_qform_component__["a" /* AddQformComponent */],
        data: { page: 'five' }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".static{\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    z-index: 5;\r\n}\r\n\r\n.place-holder{\r\n    width: 100%;\r\n    height: 4.3em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"static\"></app-navbar>\r\n<div class=\"place-holder\">.</div>\r\n<div [@slideInRight]=\"getRouteAnimation(route)\">\r\n        <router-outlet #route=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__("../../../../../src/app/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData['page'] || 'one';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animation__["a" /* slideRightAnimation */]]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_material_module__ = __webpack_require__("../../../../../src/app/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quiz_container_quiz_container_component__ = __webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_quiz_card_quiz_card_component__ = __webpack_require__("../../../../../src/app/components/quiz-card/quiz-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_question_list_question_list_component__ = __webpack_require__("../../../../../src/app/components/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_quiz_results_quiz_results_component__ = __webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tag_list_tag_list_component__ = __webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tag_item_tag_item_component__ = __webpack_require__("../../../../../src/app/components/tag-item/tag-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_profile_question_list_profile_question_list_component__ = __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_add_qform_add_qform_component__ = __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_quiz_results_guard__ = __webpack_require__("../../../../../src/app/guards/quiz-results.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_performance_performance_component__ = __webpack_require__("../../../../../src/app/components/performance/performance.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_quiz_container_quiz_container_component__["a" /* QuizContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_quiz_card_quiz_card_component__["a" /* QuizCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_question_list_question_list_component__["a" /* QuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_quiz_results_quiz_results_component__["a" /* QuizResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tag_list_tag_list_component__["a" /* TagListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_tag_item_tag_item_component__["a" /* TagItemComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_profile_question_list_profile_question_list_component__["a" /* ProfileQuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_qform_add_qform_component__["a" /* AddQformComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_performance_performance_component__["a" /* PerformanceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_15__components_signup_signup_component__["a" /* SignupComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_9__services_quiz_form_service__["a" /* QuizFormService */], __WEBPACK_IMPORTED_MODULE_19__services_tag_service__["a" /* TagService */], __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_26__guards_quiz_results_guard__["a" /* QuizResultsGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".AddQFormContainer{\r\n    margin-top: 1em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.AddQFormContainer > *{\r\n    width:75%;\r\n}\r\n.AddForm{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.AddForm *{\r\n    margin-bottom: .5em;\r\n}\r\n.AnswerFields{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.Ans{\r\n    -webkit-box-flex:9;\r\n        -ms-flex:9 1 auto;\r\n            flex:9 1 auto;\r\n}\r\n.ArrayErr{\r\n    text-align: right;\r\n}\r\n.SideControl{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1 1 auto;\r\n            flex:1 1 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.BottomControl{\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"AddQFormContainer\">\r\n  <form class=\"AddForm\" [formGroup]=\"QForm\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <textarea matInput formControlName=\"question\" placeholder=\"Question\"></textarea>\r\n      <mat-error *ngIf=\"QForm.get('question').invalid\">*Field Required</mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n        <mat-slide-toggle formControlName=\"useExisting\" (change)=\"clearTag()\">Use Existing Tag</mat-slide-toggle>\r\n    </div>\r\n    <mat-form-field *ngIf=\"tagList\">\r\n      <mat-select *ngIf=\"QForm.get('useExisting').value\" placeholder=\"Tag\" formControlName=\"tag\">\r\n        <mat-option *ngFor=\"let t of tagList\" [value]=\"t.tagName\">\r\n          {{t.tagName}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <input *ngIf=\"QForm.get('useExisting').value===false\" matInput placeholder=\"Tag\" formControlName=\"tag\"/>\r\n      <mat-error *ngIf=\"QForm.get('tag').invalid\">*Field Required</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"AFcontainer\" formArrayName=\"answers\">\r\n      <mat-error class=\"ArrayErr\" *ngIf=\"answers.invalid && (answers.touched||submitAttempted)\">{{getAnswersArrayErrorMessage()}}</mat-error>\r\n      <div class=\"AnswerFields\" *ngFor=\"let a of answers.controls; let i=index\" [formGroupName]=\"i\">\r\n        <mat-form-field class=\"Ans\">\r\n          <textarea matInput formControlName=\"text\" placeholder=\"Answer {{i+1}}\"></textarea>\r\n          <mat-error *ngIf=\"a.get('text').invalid && (a.get('text').touched||submitAttempted)\">*Field Required</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"SideControl\">\r\n          <mat-slide-toggle formControlName=\"correct\">Correct Answer</mat-slide-toggle>\r\n        </div>\r\n        <div *ngIf=\"answers.length>2\" class=\"SideControl\">\r\n          <button mat-icon-button color=\"primary\" (click)=\"deleteAnswer(i)\">\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <span *ngIf=\"answers.length<7\">\r\n        <button (click)=\"addAnswers($event)\" mat-mini-fab color=\"primary\">+</button>\r\n        Add Answer\r\n      </span>\r\n      <span *ngIf=\"answers.length>=7\">Maximum Allowed Choices Reached!</span>\r\n    </div>\r\n    <div class=\"BottomControl\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customValidator__ = __webpack_require__("../../../../../src/app/customValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddQformComponent = (function () {
    function AddQformComponent(fb, ts, qs, User, router) {
        this.fb = fb;
        this.ts = ts;
        this.qs = qs;
        this.User = User;
        this.router = router;
        this.submitAttempted = false;
    }
    AddQformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getTags().subscribe(function (res) {
            _this.tagList = res.sort(function (a, b) {
                return a.tagName > b.tagName ? 1 : -1;
            });
        });
        this.QForm = this.fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            useExisting: [false],
            tag: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            answers: this.fb.array([], __WEBPACK_IMPORTED_MODULE_6__customValidator__["a" /* CustomValidator */].onlyOneCorrectAnswer)
        });
        this.addAnswers();
        this.addAnswers();
    };
    Object.defineProperty(AddQformComponent.prototype, "answers", {
        // ngAfterViewChecked() {
        //   console.log(this.QForm);
        // }
        get: function () {
            return this.QForm.get('answers');
        },
        enumerable: true,
        configurable: true
    });
    AddQformComponent.prototype.addAnswers = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.answers.push(this.fb.group({
            text: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            correct: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required]
        }));
    };
    AddQformComponent.prototype.deleteAnswer = function (i) {
        this.answers.removeAt(i);
    };
    AddQformComponent.prototype.clearTag = function () {
        this.QForm.get('tag').reset();
    };
    AddQformComponent.prototype.getAnswersArrayErrorMessage = function () {
        if (this.QForm.get('answers').hasError('moreThanOne')) {
            return 'Only One Correct Answer Allowed';
        }
        else if (this.QForm.get('answers').hasError('noCorrect')) {
            return 'No Correct Answer Selected';
        }
        return null;
    };
    AddQformComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitAttempted = true;
        if (this.QForm.valid) {
            this.User.isLoggedIn().subscribe(function (res) {
                _this.Question2Submit = {
                    q_id: 0,
                    tag: { tagId: null, tagName: _this.QForm.get('tag').value },
                    user: res,
                    question: _this.QForm.get('question').value,
                    answers: _this.QForm.get('answers').value
                };
                _this.qs.postQuestion(_this.Question2Submit).subscribe();
                _this.router.navigate(['']);
            });
        }
    };
    AddQformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-qform',
            template: __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_tag_service__["a" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_4__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], AddQformComponent);
    return AddQformComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "* {\r\n  font-family: 'Roboto', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Change your password</h3>\r\n<form>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"password\" type=\"password\" id=\"currentPassword\" name=\"currentPassword\" placeholder=\"Current Password\" />\r\n  </mat-form-field><br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"newPassword\" type=\"password\" id=\"newPassword\" name=\"newPassword\" placeholder=\"New Password\" />\r\n  </mat-form-field><br />\r\n  <mat-form-field>\r\n      <input matInput [(ngModel)]=\"confirmNewPassword\" type=\"password\" id=\"confirmNewPassword\" name=\"confirmNewPassword\" placeholder=\"Confirm Password\" />\r\n  </mat-form-field><br />\r\n  <button mat-raised-button (click)=\"updatePassword()\" color =\"primary\">Submit</button>\r\n</form>\r\n<span *ngIf=\"updatePasswordMessage\">{{ updatePasswordMessage }}</span>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (user) {
            if (user !== null) {
                _this.username = user.username;
            }
        });
    };
    ChangePasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        if (this.newPassword.length < 8) {
            this.updatePasswordMessage = "Password must be at least 8 characters.";
        }
        else if (this.newPassword === this.confirmNewPassword) {
            var oldUser = { "username": this.username, "password": this.password.trim() };
            var newUser = { "username": this.username, "password": this.newPassword.trim() };
            this.updatePasswordMessage = "";
            this.authService.changeUserPassword(this.username, oldUser, newUser).subscribe(function (response) {
                _this.authService.updateUser(response);
                _this.authService.isLoggedIn().subscribe(function (user) {
                    if (user !== null)
                        _this.username = user.username;
                });
                _this.password = '';
                _this.newPassword = '';
                _this.confirmNewPassword = '';
                _this.updatePasswordMessage = "Password updated.";
            }, function (error) {
                _this.updatePasswordMessage = error.error;
            });
        }
        else {
            this.updatePasswordMessage = "Passwords don't match.";
        }
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-content\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <h1>Log In</h1>\r\n      <mat-form-field class=\"full-width-input\">\r\n        <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width-input\">\r\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" type=\"submit\">Log In</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"close()\">Cancel</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(dialogRef, fb, authService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        });
        this.isLoggedIn$ = this.authService.isLoggedIn();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.authService.login(this.form.value);
        }
        this.isLoggedIn$.subscribe(function (res) {
            if (res) {
                _this.dialogRef.close();
            }
        });
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\nmat-toolbar {\r\n    height: 75px;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16), 0 3px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nmat-toolbar span{\r\n    margin-left: 1em;\r\n    height: 65px;\r\n}\r\n\r\nmat-toolbar :nth-child(1){\r\n    margin-bottom: .2em;\r\n}\r\n\r\nmat-toolbar :nth-child(1) img{\r\n    background-color: white;\r\n    border-radius: 25%;\r\n    border-left: 3px solid rgba(39, 38, 38, 0.87);\r\n    border-top: 2px solid rgba(39, 38, 38, 0.87);\r\n}\r\n\r\nmat-toolbar :nth-child(2){\r\n    padding-top:2em;\r\n    font-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>\r\n    <img src=\"/assets/honeybadger_logo.svg\" width=\"85px\">\r\n  </span>\r\n  <span>\r\n    QuizItUp\r\n  </span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button mat-button routerLink=\"/\">Home</button>\r\n  <button mat-button *ngIf=\"isLoggedIn$ | async\" routerLink=\"/profile\">Profile</button>\r\n  <button mat-button *ngIf=\"isLoggedIn$ | async\" routerLink=\"/addQuestion\">Add Question</button>\r\n  <button mat-button *ngIf=\"isLoggedIn$ | async; else login\" (click)=\"onLogout()\">Log out</button>\r\n  <ng-template #login>\r\n    <button mat-button (click)=\"onLogin()\">Log in</button>\r\n    <button mat-button (click)=\"signUp()\">Sign Up</button>\r\n  </ng-template>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(dialog, authService, router) {
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn();
    };
    NavbarComponent.prototype.onLogin = function () {
        var loginDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], {
            width: '250px'
        });
    };
    NavbarComponent.prototype.signUp = function () {
        var loginDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */], {
            width: '250px'
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.router.navigate(['']);
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/performance/performance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "* {\r\n  font-family: 'Roboto', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/performance/performance.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Your Answered Questions</h1>\r\n<mat-expansion-panel *ngFor=\"let tq of tagQuestionsKeys\">\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>\r\n      <h2>{{ tq }}</h2>\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <h3>Performance</h3>\r\n  <mat-progress-bar mode=\"determinate\" value=\"{{ (tagCorrect.get(tq) / (tagCorrect.get(tq) + tagIncorrect.get(tq))) * 100 }}\"></mat-progress-bar>\r\n  <h3>Questions Answered for {{ tq }}</h3>\r\n  <mat-card *ngFor=\"let aq of tagQuestions.get(tq)\" [ngStyle]=\"{ 'background-color': aq.success ? '#A5D6A7' : '#EF9A9A' }\">\r\n    <mat-card-content>\r\n      <p>{{ aq.qid.question }}</p>\r\n      <p>{{ aq.success ? 'Correct' : 'Incorrect' }}</p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/components/performance/performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerformanceComponent = (function () {
    function PerformanceComponent(router, questionService, authService, tagService) {
        this.router = router;
        this.questionService = questionService;
        this.authService = authService;
        this.tagService = tagService;
    }
    PerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (response) {
            if (response !== null) {
                var username = response['username'];
                _this.questionService.getAnsweredQuestionsByUsername(username).subscribe(function (response) {
                    var answeredQuestions = response;
                    _this.tagQuestions = new Map();
                    _this.tagCorrect = new Map();
                    _this.tagIncorrect = new Map();
                    _this.tagQuestionsKeys = new Array();
                    answeredQuestions.forEach(function (aq) {
                        var aqTag = aq.qid.tag.tagName;
                        if (aq.success) {
                            if (_this.tagCorrect.has(aqTag)) {
                                _this.tagCorrect.set(aqTag, _this.tagCorrect.get(aqTag) + 1);
                            }
                            else {
                                _this.tagCorrect.set(aqTag, 1);
                            }
                        }
                        else {
                            if (_this.tagIncorrect.has(aqTag)) {
                                _this.tagIncorrect.set(aqTag, _this.tagIncorrect.get(aqTag) + 1);
                            }
                            else {
                                _this.tagIncorrect.set(aqTag, 1);
                            }
                        }
                        if (_this.tagQuestions.has(aqTag)) {
                            _this.tagQuestions.get(aqTag).push(aq);
                        }
                        else {
                            _this.tagQuestions.set(aqTag, [aq]);
                        }
                    });
                    _this.tagQuestionsKeys = Array.from(_this.tagQuestions.keys());
                });
            }
        });
    };
    PerformanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-performance',
            template: __webpack_require__("../../../../../src/app/components/performance/performance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/performance/performance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_tag_service__["a" /* TagService */]])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>My Questions</h1>\r\n<mat-expansion-panel *ngFor=\"let tq of tagQuestionsKeys\">\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>{{ tq }}</mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <mat-card *ngFor=\"let q of tagQuestions.get(tq)\">\r\n    <mat-card-content>\r\n      <h3>Question</h3>\r\n      <p>{{ q.question }}</p>\r\n      <h3>Choices</h3>\r\n      <mat-list>\r\n        <mat-list-item *ngFor=\"let a of q.answers\" [ngStyle]=\"{ 'background-color': a.correct ? '#A5D6A7' : '#EF9A9A' }\">{{ a.text }}</mat-list-item>\r\n      </mat-list>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</mat-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileQuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileQuestionListComponent = (function () {
    function ProfileQuestionListComponent(authService, questionService) {
        this.authService = authService;
        this.questionService = questionService;
    }
    ProfileQuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (user) {
            if (user !== null) {
                _this.username = user.username;
                _this.questionService.getQuestionsByUsername(_this.username).subscribe(function (response) {
                    var questions = response;
                    _this.tagQuestions = new Map();
                    questions.forEach(function (question) {
                        var tagName = question.tag.tagName;
                        if (_this.tagQuestions.has(tagName)) {
                            _this.tagQuestions.get(tagName).push(question);
                        }
                        else {
                            _this.tagQuestions.set(tagName, [question]);
                        }
                    });
                    _this.tagQuestionsKeys = Array.from(_this.tagQuestions.keys());
                });
            }
        });
    };
    ProfileQuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-question-list',
            template: __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */]])
    ], ProfileQuestionListComponent);
    return ProfileQuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "* {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nmat-sidenav-container {\r\n  height: 100vh;\r\n}\r\n\r\n.side{\r\n  width:200px;\r\n  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.16);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nmat-sidenav-content{\r\n  padding-left: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav class=\"side\" #sidenav [(opened)]=\"opened\" mode=\"side\">\r\n    <button mat-button [routerLink]=\"['performance']\">Performance</button><br />\r\n    <button mat-button [routerLink]=\"['questions']\">My Questions</button><br />\r\n    <button mat-button [routerLink]=\"['settings']\">Settings</button><br />\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.opened = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list{\r\n    overflow-y: auto;\r\n}\r\n.list::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.list::-webkit-scrollbar\r\n{\r\n\twidth: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.list::-webkit-scrollbar-thumb\r\n{\r\n\tbackground-color: #673AB7;\r\n\tborder: 2px solid #555555;\r\n}\r\n\r\n.item{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n    border-bottom: 1px solid #F2F2F2;\r\n    border-left: 1px solid #F2F2F2;\r\n}\r\n\r\n.item .idx{\r\n\twidth:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<span>Questions</span>\n<mat-list class=\"list\">\n  <div class=\"item\" \n  *ngFor=\"let a of answers; let i = index;\" \n  [ngStyle]=\"{'background-color': i==currentQ?'#FFD740':''}\"\n  (click)=\"onClick(i)\">\n    <mat-list-item >\n      <div>Question {{i+1}}</div>\n    </mat-list-item>\n    <div class=\"idx\" [ngStyle]=\"{'background-color': a.answer==0||a.answer?'#673AB7':'#D1C4E9'}\">\n      \n    </div>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
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

var QuestionListComponent = (function () {
    function QuestionListComponent() {
        this.currentQChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    QuestionListComponent.prototype.ngOnInit = function () {
    };
    QuestionListComponent.prototype.onClick = function (index) {
        this.currentQ = index;
        this.currentQChange.emit(this.currentQ);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], QuestionListComponent.prototype, "answers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], QuestionListComponent.prototype, "currentQ", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], QuestionListComponent.prototype, "currentQChange", void 0);
    QuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-list',
            template: __webpack_require__("../../../../../src/app/components/question-list/question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/question-list/question-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-card/quiz-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  background-color: #ECEFF1;\r\n  height: 100%;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.form-container {\r\n  height: 100%;\r\n}\r\n\r\n.form {\r\n  min-height: 360px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: 2fr 1fr 1fr 1fr 1fr;\r\n      grid-template-rows: 2fr 1fr 1fr 1fr 1fr;\r\n  grid-row-gap: 10px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.question {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-color: #673AB7;\r\n  color: #ECEFF1;\r\n  height: calc(100% - 50px);\r\n  font-size: 1.5rem;\r\n  padding-top: 25px;\r\n  padding-bottom: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.form .answer {\r\n  text-align: left;\r\n  padding-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\n\r\n[type=\"radio\"]:checked + label,\r\n[type=\"radio\"]:not(:checked) + label\r\n{\r\n    position: relative;\r\n    padding-left: 28px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n}\r\n[type=\"radio\"]:checked + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n    border: 2px solid #FFD740;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n    border: 2px solid #7D7D7D;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n[type=\"radio\"]:checked + label:after{\r\n    content: '';\r\n    width: 16px;\r\n    height: 16px;\r\n    background: #FFD740;\r\n    position: absolute;\r\n    top: 4.5px;\r\n    left: 4.5px;\r\n    border-radius: 100%;\r\n    transition: all 0.2s ease;\r\n}\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n[type=\"radio\"]:checked + label:after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-card/quiz-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [formGroup]=\"parent\">\n  <div class=\"form-container\" formArrayName=\"answers\">\n    <div class=\"form\" [formGroupName]=\"index\">\n      <div class=\"question\">\n        {{question.question}}\n      </div>\n      <div class=\"answer\" *ngFor=\"let a of question.answers; let i = index\">\n        <input formControlName=\"answer\" type=\"radio\" [value]=\"i\" id=\"{{i}}\"> \n        <label for=\"{{i}}\">{{a.text}}</label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/quiz-card/quiz-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizCardComponent = (function () {
    function QuizCardComponent() {
    }
    QuizCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], QuizCardComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], QuizCardComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], QuizCardComponent.prototype, "parent", void 0);
    QuizCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-card',
            template: __webpack_require__("../../../../../src/app/components/quiz-card/quiz-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-card/quiz-card.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], QuizCardComponent);
    return QuizCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".quiz-container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: 3fr 2fr;\r\n      grid-template-rows: 3fr 2fr;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #212121;\r\n  margin-top: 1em;\r\n  text-align: center;\r\n  height: 100vh;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-column-gap: .5em;\r\n  grid-row: 1/2;\r\n  /* autoprefixer: off */\r\n}\r\n.bottombar {\r\n  grid-row: 2/3;\r\n  grid-column-gap: .5em;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  align-items: baseline;\r\n  margin-top: 1em;\r\n  /* autoprefixer: off */\r\n}\r\n.bottombar-right{\r\n    grid-column: 2/3;\r\n    -ms-grid-columns: (1fr)[3];\r\n        grid-template-columns: repeat(3, 1fr);\r\n    display: -ms-grid;\r\n    display: grid;\r\n    background-color:#ECEFF1;\r\n    padding-top:1em;\r\n    padding-bottom:1em;\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.card-container {\r\n  grid-column: 2/3;\r\n  display: block;\r\n}\r\n.button{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.list-container {\r\n  grid-column:1/2;\r\n  display: block;\r\n  max-height: 480;\r\n  overflow-y: auto;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.loading{\r\n  position: absolute;\r\n  top:65px;\r\n  left: 0;\r\n  width:100%;\r\n  background-color: #FDEC8E;\r\n  height: 100vh;\r\n  z-index: 2;\r\n}\r\n.loading img{\r\n  margin-left: 40%;\r\n  margin-top:15%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"!loading\">\r\n    <h2>Loading...</h2>\r\n    <img src=\"assets/badgerLoad.gif\">\r\n</div>\r\n<div class=\"quiz-container\">\r\n  <div class=\"content\">\r\n    <div class=\"list-container\">\r\n      <app-question-list *ngIf=\"questions.length>0\" [answers]=\"quizForm.get('answers').value\" [(currentQ)]=\"currentQ\"></app-question-list>\r\n    </div>\r\n    <div class=\"card-container\" *ngIf=\"questions.length>0\">\r\n      <app-quiz-card [parent]=\"quizForm\" [question]=\"questions[currentQ]\" [index]=\"currentQ\">\r\n      </app-quiz-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"bottombar\">\r\n    <div class=\"bottombar-right\">\r\n      <div class=\"button\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!(questions && currentQ > 0)\" (click)=\"prevQ($event)\">Previous</button>\r\n      </div>\r\n      <div class=\"button\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\r\n      </div>\r\n      <div class=\"button\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\" questions && currentQ == questions.length-1\" (click)=\"nextQ($event)\">\r\n            Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizContainerComponent = (function () {
    function QuizContainerComponent(route, qs, qfs, fb, router) {
        this.route = route;
        this.qs = qs;
        this.qfs = qfs;
        this.fb = fb;
        this.router = router;
        this.currentQ = 0;
        this.loading = false;
    }
    QuizContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagName = this.route.snapshot.params['tagName'];
        this.qs.getQuestions(this.tagName);
        this.quizForm = this.fb.group({
            answers: this.fb.array([])
        });
        this.subscription = this.qs.questionArray.subscribe(function (response) {
            _this.questions = response;
            _this.quizForm.removeControl('answers');
            _this.quizForm.addControl('answers', _this.fb.array([]));
            for (var i = 0; i < _this.questions.length; i++) {
                _this.addAnswers();
            }
            setTimeout(function () { _this.loading = true; }, 2500);
        });
    };
    Object.defineProperty(QuizContainerComponent.prototype, "answers", {
        get: function () {
            return this.quizForm.get('answers');
        },
        enumerable: true,
        configurable: true
    });
    QuizContainerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    QuizContainerComponent.prototype.addAnswers = function () {
        this.answers.push(this.fb.group({
            answer: null
        }));
    };
    QuizContainerComponent.prototype.nextQ = function (event) {
        event.stopPropagation();
        this.currentQ++;
    };
    QuizContainerComponent.prototype.prevQ = function (event) {
        console.log(this.loading);
        event.stopPropagation();
        this.currentQ--;
    };
    QuizContainerComponent.prototype.onSubmit = function () {
        var _this = this;
        var userAns = this.quizForm.get('answers').value;
        var Ans = this.questions.map(function (q, index) {
            return {
                q_id: q.q_id,
                answer: userAns[index].answer,
                tagName: _this.tagName
            };
        });
        this.qfs.upadte(Ans);
        this.router.navigate(['results']);
    };
    QuizContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-container',
            template: __webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__["a" /* QuizFormService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], QuizContainerComponent);
    return QuizContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);", ""]);

// module
exports.push([module.i, ".scorecard-container{\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.scorecard{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1 1 auto;\r\n            flex:1 1 auto;\r\n    text-align: center;\r\n}\r\n\r\n.scorecard div{\r\n    font-family: 'Noto Sans', sans-serif;\r\n    font-size: 5em;\r\n    font-weight: 800;\r\n    font-stretch: extra-expanded;\r\n}\r\n.right{\r\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);\r\n    border-radius: 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    color: #FFD740;\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/wrong.jpg")) + ");\r\n    background-size: contain;\r\n    height:150px;\r\n    width:150px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    margin-bottom:30px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.wrong{\r\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    border-radius: 20px;\r\n    color: #FFD740;\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/correct.jpg")) + ");\r\n    background-size: contain;\r\n    height:150px;\r\n    width:150px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    margin-bottom:30px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nmat-expansion-panel-header{\r\n    font-weight: 600;\r\n}\r\n\r\nmat-expansion-panel{\r\n    background-color: #ECEFF1;\r\n}\r\n\r\nmat-expansion-panel-content {\r\n    text-align: center\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"totalCount\">\r\n  <div class=\"scorecard-container\">\r\n    <div class=\"scorecard\">\r\n      <h1>Correct Answers</h1>\r\n      <div class=\"wrong\">{{ correctCount }}</div>\r\n    </div>\r\n    <div class=\"scorecard\">\r\n      <h1>Wrong Answers</h1>\r\n      <div class=\"right\">{{ totalCount - correctCount }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<mat-accordion class=\"results-container\">\r\n  <mat-expansion-panel *ngFor=\"let q of questions; let i = index;\" >\r\n    <mat-expansion-panel-header [ngStyle]=\"{'background-color': correctAnswerCheck(i) ? 'lightgreen' : 'lightcoral'}\">\r\n      <mat-panel-title>\r\n        Question {{i + 1}}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        {{ q.question }}\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div *ngIf = \"userAnswerExist(i); else cheater\">\r\n      <p *ngIf=\"correctAnswerCheck(i); else wrong\">Your Answer: {{ correctAnswers[i].text }}</p>\r\n      <ng-template #wrong>\r\n        <p>Your Answer: {{questions[i].answers[userAnswers[i].answer].text}}</p>\r\n        <p>Correct Answer: {{ correctAnswers[i].text }}</p>\r\n      </ng-template>\r\n    </div>\r\n    <ng-template #cheater>\r\n      <p>You didn't answer this question, why you trying to cheat bruv?</p>\r\n    </ng-template>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"

/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizResultsComponent = (function () {
    function QuizResultsComponent(qs, qfs, http, auth) {
        this.qs = qs;
        this.qfs = qfs;
        this.http = http;
        this.auth = auth;
        this.totalCount = 0;
        this.correctCount = 0;
        this.results = [];
    }
    QuizResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results = [];
        this.qs.questionArray.subscribe(function (res) {
            _this.questions = res;
            _this.userAnswers = _this.qfs.get();
            _this.correctAnswers = _this.findCorrect();
        });
    };
    QuizResultsComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.qfs.getQuizTaken()) {
            this.auth.isLoggedIn().subscribe(function (user) {
                if (user && _this.qfs.getQuizTaken()) {
                    _this.getResults();
                    _this.http.post("http://52.14.182.231:8181/user/" + user.username + "/answeredQuestions", _this.results).subscribe();
                }
            });
        }
        this.qfs.setQuizTaken(false);
    };
    QuizResultsComponent.prototype.findCorrect = function () {
        var answers = [];
        this.totalCount = this.questions.length;
        for (var i = 0; i < this.questions.length; i++) {
            for (var j = 0; j < this.questions[i].answers.length; j++) {
                var answer = this.questions[i].answers[j];
                if (answer.correct) {
                    answers.push(answer); //push onto answer array
                    var userCorrect = (this.userAnswers[i].answer == j);
                    if (userCorrect)
                        this.correctCount++; //increment correct Count
                    break;
                }
            }
        }
        return answers;
    };
    QuizResultsComponent.prototype.getResults = function () {
        var _this = this;
        this.results = this.questions.map(function (question, index) {
            var succeed = false;
            var userAnswer = _this.userAnswers[index].answer;
            if (userAnswer != null) {
                succeed = _this.questions[index].answers[userAnswer].correct;
            }
            return { qid: question, success: succeed };
        });
    };
    QuizResultsComponent.prototype.correctAnswerCheck = function (index) {
        if (this.userAnswerExist(index)) {
            if (this.questions[index].answers[this.userAnswers[index].answer].correct)
                return true;
            else
                return false;
        }
        return false;
    };
    QuizResultsComponent.prototype.userAnswerExist = function (index) {
        return this.userAnswers[index].answer != null;
    };
    QuizResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-results',
            template: __webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1__services_quiz_form_service__["a" /* QuizFormService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], QuizResultsComponent);
    return QuizResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-content\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Sign Up</h1>\r\n    <mat-error class=\"pass-error\" *ngIf=\"passwordMatched('password', 'confirm')\">Passwords don't match</mat-error>\r\n    <mat-error *ngIf=\"submitFailed\">That username already exists</mat-error>\r\n    <mat-form-field class=\"full-width-input\">\r\n      <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width-input\">\r\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width-inpout\">\r\n      <input matInput type=\"password\" placeholder=\"Confirm\" formControlName=\"confirm\" required> \r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Sign Up</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"close()\">Cancel</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(dialogRef, fb, authService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            confirm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        }, { validator: this.passwordMatchValidator });
        this.isLoggedIn$ = this.authService.isLoggedIn();
    };
    SignupComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirm').value
            ? null : { 'mismatch': true };
    };
    SignupComponent.prototype.isFieldValid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    SignupComponent.prototype.passwordMatched = function (field1, field2) {
        return (this.form.get(field1).value !== this.form.get(field2).value) &&
            (this.form.get(field1).valid && this.form.get(field1).touched) &&
            (this.form.get(field2).valid && this.form.get(field2).touched);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitFailed = false;
        if (this.form.valid && (this.form.get('password').value === this.form.get('confirm').value)) {
            this.authService.signup(this.form.value);
        }
        this.isLoggedIn$.subscribe(function (user) {
            if (user) {
                _this.dialogRef.close();
            }
            else {
                _this.submitFailed = true;
            }
        });
    };
    SignupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SignupComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tag-item/tag-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card{\r\n    background-color: #673AB7;\r\n    text-align: center;\r\n}\r\nmat-card:hover{\r\n    margin-bottom: 2em;\r\n}\r\n\r\na{\r\n    color: white;\r\n    text-decoration: none;\r\n    font-size: 1.6em;\r\n}\r\na:hover{\r\n    color: #FFD740;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tag-item/tag-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <img mat-card-image src=\"/assets/Hb-{{random}}.png\" />\r\n<mat-card-header>\r\n  <mat-card-title>\r\n    <a [routerLink]=\"[ '/quiz', tag.tagName ]\">{{ tag.tagName }}</a>\r\n  </mat-card-title>\r\n</mat-card-header>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/tag-item/tag-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagItemComponent; });
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


var TagItemComponent = (function () {
    function TagItemComponent() {
    }
    TagItemComponent.prototype.ngOnInit = function () {
        this.random = this.getRandom();
    };
    TagItemComponent.prototype.getRandom = function () {
        return Math.floor(Math.random() * (6 - 1) + 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TagItemComponent.prototype, "tag", void 0);
    TagItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tag-item',
            template: __webpack_require__("../../../../../src/app/components/tag-item/tag-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tag-item/tag-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagItemComponent);
    return TagItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tag-list/tag-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tag-list/tag-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\" gutterSize=\"1em\">\r\n  <mat-grid-tile></mat-grid-tile>\r\n  <mat-grid-tile colspan=\"2\">\r\n    <form>\r\n      <mat-form-field>\r\n        <input matInput [(ngModel)]=\"tagFilter\" placeholder=\"Filter Quizzes\" type=\"text\" id=\"tag-filter\" name=\"tag-filter\" (keyup)=\"updateTagList($event)\" />\r\n      </mat-form-field>\r\n    </form>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile></mat-grid-tile>\r\n  <mat-grid-tile class=\"\" *ngFor=\"let tag of filteredTags\" rowspan=\"3\">\r\n    <app-tag-item [tag]=\"tag\"></app-tag-item>\r\n  </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/components/tag-list/tag-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagListComponent = (function () {
    function TagListComponent(tagService) {
        this.tagService = tagService;
    }
    TagListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagService.getTags().subscribe(function (response) {
            _this.tags = response.sort(function (a, b) {
                if (a.tagName.toLowerCase() < b.tagName.toLowerCase())
                    return -1;
                else if (a.tagName.toLowerCase() > b.tagName.toLowerCase())
                    return 1;
                else
                    return 0;
            });
            _this.filteredTags = [];
            _this.tags.forEach(function (tag) {
                _this.filteredTags.push(tag);
            });
        });
        this.tagFilter = '';
    };
    TagListComponent.prototype.updateTagList = function (event) {
        var _this = this;
        if (this.filteredTags !== undefined) {
            if (this.tagFilter.length === 0) {
                this.filteredTags.splice(0);
                this.tags.forEach(function (tag) {
                    _this.filteredTags.push(tag);
                });
            }
            else {
                var filterTerms_1 = this.tagFilter.trim().split(" ");
                this.filteredTags.splice(0);
                this.tags.forEach(function (tag) {
                    filterTerms_1.forEach(function (term) {
                        if (tag.tagName === term) {
                            _this.filteredTags.push(tag);
                        }
                    });
                });
            }
        }
    };
    TagListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tag-list',
            template: __webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tag_service__["a" /* TagService */]])
    ], TagListComponent);
    return TagListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidator; });
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.onlyOneCorrectAnswer = function (fa) {
        var count = 0;
        fa.controls.forEach(function (el) {
            count += el.get('correct').value ? 1 : 0;
        });
        if (count > 1) {
            return { moreThanOne: true };
        }
        else if (count === 0) {
            return { noCorrect: true };
        }
        return null;
    };
    return CustomValidator;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser;
        this.authService.isLoggedIn().subscribe(function (res) { return currentUser = res; });
        if (!currentUser) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/quiz-results.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultsGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizResultsGuard = (function () {
    function QuizResultsGuard(router, qfs) {
        this.router = router;
        this.qfs = qfs;
    }
    QuizResultsGuard.prototype.canActivate = function (next, state) {
        if (this.qfs.getQuizTaken()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    QuizResultsGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__["a" /* QuizFormService */]])
    ], QuizResultsGuard);
    return QuizResultsGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.rootURL = 'http://52.14.182.231:8181';
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn.asObservable();
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        this.http.post(this.rootURL + '/login', user).subscribe(function (res) { return _this.loggedIn.next(res); }, function (error) { return _this.loggedIn.next(null); });
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        this.http.post(this.rootURL + '/user', user).subscribe(function (res) { return _this.loggedIn.next(res); }, function (error) { return _this.loggedIn.next(null); });
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(null);
    };
    AuthService.prototype.updateUser = function (newUser) {
        this.loggedIn.next(newUser);
    };
    AuthService.prototype.changeUserPassword = function (username, oldUser, newUser) {
        return this.http.put(this.rootURL + '/user/' + username, [
            oldUser,
            newUser
        ]);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.url = 'http://52.14.182.231:8181';
        this.questions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(QuestionService.prototype, "questionArray", {
        get: function () {
            return this.questions.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    QuestionService.prototype.getQuestions = function (tagname) {
        var _this = this;
        if (tagname === void 0) { tagname = 'newTag'; }
        this.http.get(this.url + '/quiz/' + tagname).subscribe(function (res) {
            _this.questions.next(res);
        });
    };
    QuestionService.prototype.postQuestion = function (Q) {
        return this.http.post(this.url + '/question', Q);
    };
    QuestionService.prototype.getQuestionsByUsername = function (username) {
        return this.http.get(this.url + '/user/' + username + '/questions');
    };
    QuestionService.prototype.getAnsweredQuestionsByUsername = function (username) {
        return this.http.get(this.url + '/user/' + username + '/answeredQuestions');
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/quiz-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizFormService; });
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

var QuizFormService = (function () {
    function QuizFormService() {
        this.quizTaken = false;
        this.userAnswer = [];
    }
    QuizFormService.prototype.upadte = function (userAnswer) {
        this.userAnswer = userAnswer;
        this.setQuizTaken(true);
    };
    QuizFormService.prototype.get = function () {
        return this.userAnswer;
    };
    QuizFormService.prototype.getQuizTaken = function () {
        return this.quizTaken;
    };
    QuizFormService.prototype.setQuizTaken = function (quizTaken) {
        this.quizTaken = quizTaken;
    };
    QuizFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuizFormService);
    return QuizFormService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagService = (function () {
    function TagService(http) {
        this.http = http;
        this.url = 'http://52.14.182.231:8181';
    }
    TagService.prototype.getTags = function () {
        this.tags = this.http.get(this.url + '/tag');
        return this.tags;
    };
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "../../../../../src/assets/correct.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "correct.c35dc68b80a403887819.jpg";

/***/ }),

/***/ "../../../../../src/assets/wrong.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wrong.4321406ced6563cd1e9f.jpg";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map