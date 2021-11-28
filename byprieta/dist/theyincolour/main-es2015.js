(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-custom\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" routerLink=\"/\">byprieta</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/readings\">Readings</a>\n          </li>\n          <li class=\"nav-item\">\n           <a class=\"nav-link\" href=\"#\"><i class=\"fa-solid fa-cart-shopping\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/readings/readings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/readings/readings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-9\">\n  <div class=\"intro-text\">\n    <h4 class=\"heading\">Readings by Bee, La Prieta</h4>\n  <p>Thank you for your interest in booking a reading with me.</p>\n  <p>Currently, I am offering tarot, oracle and natal chart readings. I will not conduct any readings regarding health, death or yes/no. If you have any health concerns, please consult your doctor.</p>\n  <p>As a reader, my goal is to bring you closer to your truth about what is happening right now. I want to work with you to find an answer or a solution, not to predict your future. \n    I invite you to have an open-heart and an open-mind because these cards nor these stars lie. I specialize in matters relating to spirituality, love and relationships, and self-help/growth, but these are not my limitations. \n    If you are unsure about the type of reading to select, but you are sure you want to work with me, email me at bee@healingbyprieta.com</p>\n  <p>If you have never had a tarot reading before, the best questions are open-ended\n    beginning with 'how' and 'why.' Having a question or specific concern is not required. To learn more about each type of reading as well as how to book, please see below.</p>\n    <p class=\"refunds\"><strong>There will be NO refunds unless I deem absolutely neccessary.</strong></p>\n  </div>\n    <div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\n    <div class=\"accordion-item\">\n      <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingThree\">\n        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#panelsStayOpen-collapseThree\" aria-expanded=\"false\" aria-controls=\"panelsStayOpen-collapseThree\">\n          How to book a reading\n        </button>\n      </h2>\n      <div id=\"panelsStayOpen-collapseThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"panelsStayOpen-headingThree\">\n        <div class=\"accordion-body\">\n          <p>Before completing this form, I advise you to browse through my currently offered readings below.</p>\n          <ol>\n            <li>Fill and submit this form, <b>first</b></li>\n            <li>Complete your order by selecting the 'Purchase' button for the correct reading you are booking.</li>\n            <li>Wait for a confirmation email that I have received your order form <b>and</b> payment.\n              <p>PLEASE NOTE: If you do not receive a confirmation email from me, you will NOT receive a reading. If you completed the form and made your purchase, please email bee@healingbyprieta.com.</p></li>\n          </ol>\n          <form [formGroup]=\"submitForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label>First Name</label>\n              <input type=\"text\" formControlName=\"firstName\"  class=\"form-control bg-light\" placeholder=\"Jane\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors}\"/>\n              <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">First name is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Last Name</label>\n              <input type=\"text\" formControlName=\"lastName\" class=\"form-control bg-light\" placeholder=\"Doe\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors}\"/>\n              <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Last name is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Email address</label>\n              <input type=\"email\" formControlName=\"email\" class=\"form-control bg-light\" placeholder=\"janedoe@gmail.com\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors}\"/>\n              <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">An email address is required</div>\n                <div *ngIf=\"f.email.errors.email\">Not a valid email.</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Reading Type</label>\n              <select formControlName=\"readingType\" class=\"form-control bg-light\" placeholder=\"Type\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors}\">\n               <option value=\"\" disabled selected>Please select your reading type:</option>\n               <div *ngIf=\"submitted && f.readingType.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.readingType.errors.required\">Please select</div>\n                </div>\n                <option>Santa Muerte Tarot</option>\n                <option>White Light Tarot</option>\n                <option>Liber T</option>\n                <option>Dealers Choice</option>\n                <option>Black Angel Oracle</option>\n                <option>Santa Muerte Oracle</option>\n                <option>Solar Return</option>\n                <option>Foundational Reading - 30mins</option>\n                <option>Foundational Reading - 60mins</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Question or Concern</label>\n              <input type=\"text\" formControlName=\"question\" class=\"form-control bg-light\" placeholder=\"How will moving affect my relationship?\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors}\"/>\n              <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.question.errors.required\">Please enter a question or concern.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Date of Birth</label>\n              <input type=\"text\" formControlName=\"dob\" class=\"form-control bg-light\" placeholder=\"YYYY-MM-DD\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors}\"/>\n              <div *ngIf=\"submitted && enabled && f.dob.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.dob.errors.required\">Please enter a date of birth</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Time of Birth</label>\n              <input type=\"text\" formControlName=\"tob\" class=\"form-control bg-light\" placeholder=\"12:00 PM\" [ngClass]=\"{ 'is-invalid': submitted && f.tob.errors}\"/>\n              <div *ngIf=\"submitted && enabled && f.tob.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.tob.errors.required\">Please enter a time of birth</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Place of Birth</label>\n              <input type=\"text\" formControlName=\"pob\" class=\"form-control bg-light\" placeholder=\"Houston, Texas\" [ngClass]=\"{ 'is-invalid': submitted && f.pob.errors}\"/>\n              <div *ngIf=\"submitted && enabled && f.pob.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.pob.errors.required\">Please enter a place of birth</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <br>\n            <button class=\"btn\">Submit</button>\n            </div>\n          </form>\n          <br>\n          <div *ngIf=\"showMsg\">\n            <p class=\"alert alert-success\">{{ msg }}</p>\n            </div>\n          </div>\n        </div>\n    </div>\n    <div class=\"accordion-item\">\n      <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingOne\">\n        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#panelsStayOpen-collapseOne\" aria-expanded=\"false\" aria-controls=\"panelsStayOpen-collapseOne\">\n          Tarot Readings\n        </button>\n      </h2>\n      <div id=\"panelsStayOpen-collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"panelsStayOpen-headingOne\">\n        <div class=\"accordion-body\">\n          <p>All tarot readings are $33 and will be 3-card spreads with an additional 4th card as the \"root.\" You do have the choice of selecting which deck you would like me to use for your particular reading.\n            If you are unsure, please select the \"Dealers Choice\" option.</p>\n          <p>These readings will be written and emailed directly to you, unless otherwise stated. Turn around time is, at most, one (1) week.</p>\n          <div class=\"container card-container\">\n            <div class=\"row row-cols-1 row-cols-md-2\">\n              <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Santa Muerte Tarot</h5>\n              <img class=\"card-img\" src=\"/assets/images/SantaMuerte.jpg\" alt=\"Card image cap\">\n              <p class=\"card-text\">The Santa Muerte deck is a beautiful deck that offers advice of the dead. When you want a straight answer, this is the deck to call. If you have any specific concerns surrounding money, career, love or indecision, I highly recommend this deck.</p>\n              <h5>$33</h5>\n              <a class=\"btn\" href=\"https://buy.stripe.com/9AQeXQ3m9btC3ny8wx\" role=\"button\">Purchase</a>\n            </div>\n          </div>\n              </div>\n              <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">White Light Tarot: Light from Within</h5>\n              <img class=\"card-img\" src=\"/assets/images/WhiteLight.jpg\" alt=\"Card image cap\">\n              <p class=\"card-text\">The White Light Tarot deck is a reiki infused deck with keywords and chakra center references. The idea behind this deck is to provide the reader with insight into the problem, a focus area for the solution, and healing.\n                This is an emotionally invoking deck and, in my opinion, is best suited for matters concerning spirituality, self-love, growth, healing, and the like.</p>\n                <h5>$33</h5>\n                <a class=\"btn\" href=\"https://buy.stripe.com/28o3f82i57dmgakfZ0\" role=\"button\">Purchase</a>\n            </div>\n          </div>\n              </div>\n            </div>\n          </div>\n            <div class=\"container card-container\">\n              <div class=\"row row-cols-1 row-cols-md-2\">\n                <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Liber T: Tarot of Stars Eternal</h5>\n                <img class=\"card-img\" src=\"/assets/images/LiberT.jpg\" alt=\"Card image cap\">\n                <p class=\"card-text\">The Liber T deck is Thoth lite, but Thoth nonetheless. If you definitely want to incorporate the magic of the astrology and esoteric knowledge\n                into the spirit of your reading, then this is for you.</p>\n                <h5>$33</h5>\n                <a class=\"btn\" href=\"https://buy.stripe.com/dR6g1U4qddBKbU4fZ1\" role=\"button\">Purchase</a>\n              </div>\n            </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Dealers Choice</h5>\n                  <img class=\"card-img\" src=\"/assets/images/LiberT.jpg\" alt=\"Card image cap\">\n                  <p class=\"card-text\">If you want a reading, but are unsure (or don't care) of which deck, please select this option, and I will make the choice based on your inquiry.</p>\n                  <h5>$33</h5>\n                  <a class=\"btn\" href=\"https://buy.stripe.com/fZe6rk4qd2X69LWbIT\" role=\"button\">Purchase</a>\n                </div>\n              </div>\n            </div>\n              </div>\n          </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"accordion-item\">\n      <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingTwo\">\n        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#panelsStayOpen-collapseTwo\" aria-expanded=\"false\" aria-controls=\"panelsStayOpen-collapseTwo\">\n          Oracle Readings\n        </button>\n      </h2>\n      <div id=\"panelsStayOpen-collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"panelsStayOpen-headingTwo\">\n        <div class=\"accordion-body\">\n          <p>Oracle readings differ from tarot readings because there is no standard deck with suits or court cards.\n          Oracle readings offer guided messages to provide you with greater insight into your situation. If you are feeling stuck or unsure,\n          consider an oracle reading for a different perspective. </p>\n          <div class=\"container card-container\">\n            <div class=\"row row-cols-1 row-cols-md-2\">\n              <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Santa Muerte Oracle</h5>\n                <img class=\"card-img\" src=\"/assets/images/SantaMuerteOracle.jpg\" alt=\"Card image cap\">\n                <p class=\"card-text\">The Santa Muerte Oracle is a beautiful companion to the Santa Muerte Tarot, but stands powerfully on its own. This deck honors The Day of the Dead,\n                  Santa Muerte and the Aztec Gods and Goddesses.</p>\n                <h5>$33</h5>\n                  <a class=\"btn\" href=\"https://buy.stripe.com/5kA7vocWJ0OY5vG005\" role=\"button\">Purchase</a>\n              </div>\n            </div>\n              </div>\n              <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Black Angel Card Oracle</h5>\n                <img class=\"card-img\" src=\"/assets/images/BlackAngel.jpg\" alt=\"Card image cap\">\n                <p class=\"card-text\">The Black Angel Cards are meant to offer an invitation to the reader to reflect into their life and understand their true nature.\n                  A session with these cards will require you to dive deep and inform you of your waking and sleeping paths.\n                </p>\n                <h5>$55</h5>\n                <a class=\"btn\" href=\"https://buy.stripe.com/bIYbLE4qdbtC4rC5ko\" role=\"button\">Purchase</a>\n              </div>\n            </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"accordion-item\">\n      <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingFour\">\n        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#panelsStayOpen-collapseFour\" aria-expanded=\"false\" aria-controls=\"panelsStayOpen-collapseFour\">\n          Astrology Readings\n        </button>\n      </h2>\n      <div id=\"panelsStayOpen-collapseFour\" class=\"accordion-collapse collapse\" aria-labelledby=\"panelsStayOpen-headingTwo\">\n        <div class=\"accordion-body\">\n          <p>PLEASE NOTE: I will be using traditional astrology (i.e. use of the 7 traditional planets and the lunar nodes) with the sidereal zodiac to conduct these readings. <b>Please do not purchase a reading expecting a Vedic astrology reading or tropical zodiac interpretations.</b>\n            <p>Once you have submitted the form and completed your purchase, I will send you a confirmation email, and we will begin scheduling your reading 2 to 4 weeks from that date. Sessions will be conducted over Zoom.</p>\n          <div class=\"container card-container\">\n            <div class=\"row row-cols-1 row-cols-md-2\">\n              <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Solar Return</h5>\n                <img class=\"card-img\" src=\"/assets/images/SolarReturn.jpg\" alt=\"Card image cap\">\n                <p class=\"card-text\">In this 60-minute session, we will look into your upcoming Solar return. Here you can take a peek at the year ahead and how you can best prepare for and navigate it. </p>\n                <h5>$99 - 60 minutes</h5>\n                <a class=\"btn\" href=\"https://buy.stripe.com/00g4jce0NeFO1fq14e\" role=\"button\">Purchase</a>\n              </div>\n            </div>\n            </div>\n            <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Foundational Reading</h5>\n                <img class=\"card-img\" src=\"/assets/images/Foundation.jpg\" alt=\"Card image cap\">\n                <p class=\"card-text\">In this session, we will cover the foundations of your chart i.e Sun, Moon, Ascendant and the Ascendant Lord. This is a very basic reading that will serve as an introduction to your natal chart. If you are new to astrology, have never had a natal chart reading, or just want to understand your natal chart at a very basic level, this is a\n                  great option for you.\n                </p>\n                <h5>$55 - 30 minutes</h5>\n                <a class=\"btn\" href=\"https://buy.stripe.com/aEUbLE1e10OYbU4eV3\" role=\"button\">Purchase</a>\n                <p></p>\n                <h5>$77 - 60 minutes</h5>\n                <a class=\"btn\" href=\"https://buy.stripe.com/fZe02WbSFgNW5vG3ck\" role=\"button\">Purchase</a>\n              </div>\n            </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"text-center\">&copy; by prieta.</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-3 welcome\">\n    <ul>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" aria-current=\"page\" routerLink=\"/\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/bookings\">Readings</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled\" href=\"#\" aria-disabled=\"true\">Blog</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Shop</a>\n    </li>\n  </ul>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _readings_readings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readings/readings.component */ "./src/app/readings/readings.component.ts");





const routes = [
    { path: 'spiritual-journey', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'bookings', component: _readings_readings_component__WEBPACK_IMPORTED_MODULE_4__["ReadingsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'theyincolour';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _readings_readings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readings/readings.component */ "./src/app/readings/readings.component.ts");
/* harmony import */ var _submit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submit.service */ "./src/app/submit.service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
            _readings_readings_component__WEBPACK_IMPORTED_MODULE_11__["ReadingsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' },
            _submit_service__WEBPACK_IMPORTED_MODULE_12__["SubmitService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/readings/readings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/readings/readings.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWRpbmdzL3JlYWRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/readings/readings.component.ts":
/*!************************************************!*\
  !*** ./src/app/readings/readings.component.ts ***!
  \************************************************/
/*! exports provided: ReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsComponent", function() { return ReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _submit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../submit.service */ "./src/app/submit.service.ts");
/* harmony import */ var _assets_Submit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/Submit */ "./src/assets/Submit.ts");






let ReadingsComponent = class ReadingsComponent {
    constructor(formBuilder, http, submissionService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.submissionService = submissionService;
        this.submitted = false;
        this.enabled = false;
        this.msg = null;
        this.showMsg = false;
        this.submission = new _assets_Submit__WEBPACK_IMPORTED_MODULE_5__["Submit"]();
    }
    get firstName() {
        return this.submitForm.get('firstName');
    }
    get lastName() {
        return this.submitForm.get('lastName');
    }
    get email() {
        return this.submitForm.get('email');
    }
    get readingType() {
        return this.submitForm.get('readingType');
    }
    get question() {
        return this.submitForm.get('question');
    }
    get dob() {
        return this.submitForm.get('dob');
    }
    get tob() {
        return this.submitForm.get('tob');
    }
    get pob() {
        return this.submitForm.get('pob');
    }
    ngOnInit() {
        this.submitForm =
            this.formBuilder.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                readingType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                question: [''],
                dob: [''],
                tob: [''],
                pob: ['']
            });
        this.submitForm.get('question').disable();
        this.submitForm.get('dob').disable();
        this.submitForm.get('tob').disable();
        this.submitForm.get('pob').disable();
        this.onChanges();
    }
    get f() {
        return this.submitForm.controls;
    }
    onChanges() {
        this.submitForm.get('readingType').valueChanges
            .subscribe(selectedReading => {
            if (this.submitted === true) {
                this.enabled = true;
            }
            if (selectedReading === "Solar Return" || selectedReading === 'Foundational Reading') {
                this.submitForm.get('question').disable();
                this.submitForm.get('question').clearValidators();
                this.submitForm.get('dob').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.submitForm.get('pob').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.submitForm.get('tob').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.submitForm.get('dob').enable();
                this.submitForm.get('pob').enable();
                this.submitForm.get('tob').enable();
            }
        });
        this.submitForm.get('readingType').valueChanges.subscribe(selectedReading => {
            if (selectedReading === "White Light Tarot" || selectedReading === "Santa Muerte Tarot" || selectedReading === "Black Angel Oracle" || selectedReading === "Liber T Tarot" || selectedReading === "Santa Muerte Oracle" || selectedReading === "Dealers Choice") {
                this.submitForm.get('question').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.submitForm.get('question').enable();
                this.submitForm.get('dob').clearValidators();
                this.submitForm.get('pob').clearValidators();
                this.submitForm.get('tob').clearValidators();
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        console.log("in the controller component...");
        if (this.submitForm.invalid) {
            return;
        }
        this.showMsg = true;
        this.msg = 'Your form was submitted successfully!';
        this.submission.firstName = this.firstName.value;
        this.submission.lastName = this.lastName.value;
        this.submission.email = this.email.value;
        this.submission.readingType = this.readingType.value;
        this.submission.question = this.question.value;
        this.submission.dob = this.dob.value;
        this.submission.tob = this.tob.value;
        this.submission.pob = this.pob.value;
        console.log('In this session we have ' + this.submission.firstName + ' ' + this.submission.lastName + ' ' + this.submission.email);
        this.submissionService.submitForm(this.submission).subscribe(data => {
            console.log('------->' + data);
            console.log(data);
            this.submission = data;
            console.log(this.submission);
        }, error => {
            console.log('ERROR' + error);
        });
    }
};
ReadingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _submit_service__WEBPACK_IMPORTED_MODULE_4__["SubmitService"] }
];
ReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-readings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./readings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/readings/readings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./readings.component.scss */ "./src/app/readings/readings.component.scss")).default]
    })
], ReadingsComponent);

/*** let Params = new HttpParams();

Params = Params.append('firstParameter', this.submitForm.value.firstName);
Params = Params.append('secondParameter', this.submitForm.value.lastName);
Params = Params.append('thirdParameter', this.submitForm.value.email);
Params = Params.append('fourthParameter', this.submitForm.value.readingType);
Params = Params.append('fifthParameter', this.submitForm.value.question);
Params = Params.append('sixthParameter', this.submitForm.value.dob);
Params = Params.append('seventhParameter', this.submitForm.value.tob);
Params = Params.append('eighthParmeter', this.submitForm.value.pob); **/


/***/ }),

/***/ "./src/app/submit.service.ts":
/*!***********************************!*\
  !*** ./src/app/submit.service.ts ***!
  \***********************************/
/*! exports provided: SubmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitService", function() { return SubmitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SubmitService = class SubmitService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
        };
        this.baseUrl = 'http://ec2-3-135-64-49.us-east-2.compute.amazonaws.com:3000/';
    }
    submitForm(submission) {
        console.log("Hitting submit.service...");
        console.log("data is " + submission);
        return this.http.post(this.baseUrl + 'post', submission);
    }
};
SubmitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubmitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubmitService);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/assets/Submit.ts":
/*!******************************!*\
  !*** ./src/assets/Submit.ts ***!
  \******************************/
/*! exports provided: Submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Submit {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_1__);
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
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brianamayes/Desktop/theyincolour/byprieta/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map