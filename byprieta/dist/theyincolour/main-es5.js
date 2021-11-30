(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbooking_stripe"] = self["webpackChunkbooking_stripe"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/welcome/welcome.component */
      53244);
      /* harmony import */


      var _components_readings_readings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/readings/readings.component */
      13526);
      /* harmony import */


      var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/checkout/checkout.component */
      58149);
      /* harmony import */


      var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/cart/cart.component */
      40088);
      /* harmony import */


      var _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/bookings/bookings.component */
      87347);
      /* harmony import */


      var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cart-details/cart-details.component */
      71201);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'spiritual-journey',
        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent
      }, {
        path: '',
        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent
      }, {
        path: 'readings',
        component: _components_readings_readings_component__WEBPACK_IMPORTED_MODULE_1__.ReadingsComponent
      },
      /* children: [
         { path: 'booking/:id', component: BookingsComponent}
       ]},*/
      {
        path: 'checkout',
        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutComponent
      }, {
        path: 'cart',
        component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.CartComponent
      }, {
        path: 'book/:id',
        component: _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_4__.BookingsComponent
      }, {
        path: 'view-cart',
        component: _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_5__.CartDetailsComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'theyincolour';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var ngx_stripe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-stripe */
      51809);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angular-bootstrap-datetimepicker */
      46809);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      33252);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/welcome/welcome.component */
      53244);
      /* harmony import */


      var _components_readings_readings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/readings/readings.component */
      13526);
      /* harmony import */


      var _services_submit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/submit.service */
      46386);
      /* harmony import */


      var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/checkout/checkout.component */
      58149);
      /* harmony import */


      var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/cart/cart.component */
      40088);
      /* harmony import */


      var _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/bookings/bookings.component */
      87347);
      /* harmony import */


      var _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/cart-details/cart-details.component */
      71201);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__.APP_BASE_HREF,
          useValue: '/'
        }, _services_submit_service__WEBPACK_IMPORTED_MODULE_5__.SubmitService, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_17__.DlDateTimeDateModule, angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_17__.DlDateTimePickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, ngx_stripe__WEBPACK_IMPORTED_MODULE_19__.NgxStripeModule.forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.stripeKey)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeComponent, _components_readings_readings_component__WEBPACK_IMPORTED_MODULE_4__.ReadingsComponent, _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutComponent, _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__.CartComponent, _components_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_8__.BookingsComponent, _components_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_9__.CartDetailsComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_17__.DlDateTimeDateModule, angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_17__.DlDateTimePickerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, ngx_stripe__WEBPACK_IMPORTED_MODULE_19__.NgxStripeModule]
        });
      })();
      /***/

    },

    /***/
    2181:
    /*!***********************************!*\
      !*** ./src/app/common/booking.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Booking": function Booking() {
          return (
            /* binding */
            _Booking
          );
        }
        /* harmony export */

      });

      var _Booking = function _Booking(product) {
        _classCallCheck(this, _Booking);

        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.image = product.imageUrl;
        this.date = new Date();
        this.query = '';
      };
      /***/

    },

    /***/
    53162:
    /*!*************************************!*\
      !*** ./src/app/common/cart-item.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartItem": function CartItem() {
          return (
            /* binding */
            _CartItem
          );
        }
        /* harmony export */

      });

      var _CartItem = function _CartItem(booking) {
        _classCallCheck(this, _CartItem);

        this.id = booking.id;
        this.name = booking.name;
        this.image = booking.image;
        this.bookingDate = booking.date;
        this.price = booking.price;
        this.quantity = 1;
      };
      /***/

    },

    /***/
    9805:
    /*!***********************************!*\
      !*** ./src/app/common/product.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Product": function Product() {
          return (
            /* binding */
            _Product
          );
        }
        /* harmony export */

      });

      var _Product = function _Product() {
        _classCallCheck(this, _Product);
      };
      /***/

    },

    /***/
    87347:
    /*!***********************************************************!*\
      !*** ./src/app/components/bookings/bookings.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookingsComponent": function BookingsComponent() {
          return (
            /* binding */
            _BookingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_common_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/common/product */
      9805);
      /* harmony import */


      var src_app_common_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/common/booking */
      2181);
      /* harmony import */


      var src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/common/cart-item */
      53162);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/product.service */
      66082);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/cart.service */
      90910);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      33252);
      /* harmony import */


      var angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-bootstrap-datetimepicker */
      46809);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* Sourced from https://stackblitz.com/github/dalelotts/angular-bootstrap-datetimepicker-demo?file=src%2Fapp%2Fexamples%2Fdate-picker-input%2Fdate-picker-input.component.html */


      var moment = moment__WEBPACK_IMPORTED_MODULE_3__;

      if ('default' in moment__WEBPACK_IMPORTED_MODULE_3__) {
        moment = moment__WEBPACK_IMPORTED_MODULE_3___default();
      }

      var _BookingsComponent = /*#__PURE__*/function () {
        function _BookingsComponent(route, productService, cartService) {
          _classCallCheck(this, _BookingsComponent);

          this.route = route;
          this.productService = productService;
          this.cartService = cartService; // Creating a new instance of Product

          this.product = new src_app_common_product__WEBPACK_IMPORTED_MODULE_0__.Product();
          this.readyToBook = false;
          /* Sourced from https://stackblitz.com/github/dalelotts/angular-bootstrap-datetimepicker-demo?file=src%2Fapp%2Fexamples%2Fdate-picker-input%2Fdate-picker-input.component.html */

          this.datePickerFilter = function (dateButton, viewName) {
            return dateButton.value >= moment().startOf(viewName).valueOf();
          };
        }

        _createClass(_BookingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.subscribe(function () {
              _this.handleProductDetails();
            });
          }
        }, {
          key: "handleProductDetails",
          value: function handleProductDetails() {
            this.productId = this.route.snapshot.paramMap.get("id"); //console.log("the response returned by service call is, ", this.productService.getProductById(this.productId));

            this.productService.getProductById(this.productId).subscribe(this.processResult());
          }
        }, {
          key: "processResult",
          value: function processResult() {
            var _this2 = this;

            return function (data) {
              console.log("processing result ", data);
              _this2.product = data;
              console.log("products are ", _this2.product);
            };
          }
        }, {
          key: "addToCart",
          value: function addToCart(theProduct) {
            var booking = new src_app_common_booking__WEBPACK_IMPORTED_MODULE_1__.Booking(theProduct);
            booking.date = this.selectedDate;
            booking.query = this.query;
            var theCartItem = new src_app_common_cart_item__WEBPACK_IMPORTED_MODULE_2__.CartItem(booking);
            console.log("This Booking is being added to cart as...", theCartItem);
            this.cartService.addToCart(theCartItem);
          }
        }]);

        return _BookingsComponent;
      }();

      _BookingsComponent.ɵfac = function BookingsComponent_Factory(t) {
        return new (t || _BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService));
      };

      _BookingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _BookingsComponent,
        selectors: [["app-bookings"]],
        decls: 24,
        vars: 13,
        consts: [[1, "main-content"], [1, "container-fluid", "row"], [1, "col-md-5"], ["alt", "Cover photo for product", "loading", "lazy", 1, "booking", 3, "src"], [1, "col-md-4"], ["for", "query"], ["type", "text", "id", "query", 1, "form-control", "bg-light", 3, "[ngModel]"], ["startView", "day", "maxView", "year", "minView", "minute", "minuteStep", "30", "hourStep", "2", 3, "ngModel", "selectFilter", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
        template: function BookingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "What's your question?");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("[ngModel]", function BookingsComponent_Template_input__ngModel__15_listener() {
              return ctx.query;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "dl-date-time-picker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function BookingsComponent_Template_dl_date_time_picker_ngModelChange_17_listener($event) {
              return ctx.selectedDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BookingsComponent_Template_button_click_22_listener() {
              return ctx.addToCart(ctx.product);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.product.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "/", ctx.product.imageUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.product.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 7, ctx.product.price / 100, "USD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedDate)("selectFilter", ctx.datePickerFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](21, 10, ctx.selectedDate, "long"));
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, angular_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_9__.DlDateTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    71201:
    /*!*******************************************************************!*\
      !*** ./src/app/components/cart-details/cart-details.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartDetailsComponent": function CartDetailsComponent() {
          return (
            /* binding */
            _CartDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/cart.service */
      90910);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      33252);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function CartDetailsComponent_div_3_tr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 4, item_r3.price / 100, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.quantity);
        }
      }

      function CartDetailsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CartDetailsComponent_div_3_tr_9_Template, 10, 7, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total Quantity: ", ctx_r0.totalQuantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 3, ctx_r0.totalPrice / 100, "USD"), "");
        }
      }

      function CartDetailsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cart is empty!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _CartDetailsComponent = /*#__PURE__*/function () {
        function _CartDetailsComponent(cartService) {
          _classCallCheck(this, _CartDetailsComponent);

          this.cartService = cartService;
          this.cartItems = [];
          this.totalQuantity = 0;
          this.totalPrice = 0;
        }

        _createClass(_CartDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadCart();
            this.cartService.computeCartTotals();
          }
        }, {
          key: "loadCart",
          value: function loadCart() {
            var _this3 = this;

            this.cartItems = this.cartService.cartItems;
            console.log("cart items: ", this.cartItems);
            this.cartService.totalPrice.subscribe(function (data) {
              return _this3.totalPrice = data;
            });
            this.cartService.totalQuantity.subscribe(function (data) {
              return _this3.totalQuantity = data;
            });
          }
        }]);

        return _CartDetailsComponent;
      }();

      _CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) {
        return new (t || _CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
      };

      _CartDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CartDetailsComponent,
        selectors: [["app-cart-details"]],
        decls: 5,
        vars: 2,
        consts: [[1, "main-content"], [1, "container-fluid", "col-5"], [4, "ngIf"], [1, "cart-details"], [4, "ngFor", "ngForOf"], ["routerLink", "/checkout", 1, "btn", "btn-primary"], ["alt", "product image", 1, "booking", 3, "src"]],
        template: function CartDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CartDetailsComponent_div_3_Template, 18, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CartDetailsComponent_div_4_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartItems.length == 0);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    40088:
    /*!***************************************************!*\
      !*** ./src/app/components/cart/cart.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartComponent": function CartComponent() {
          return (
            /* binding */
            _CartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/cart.service */
      90910);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _CartComponent = /*#__PURE__*/function () {
        function _CartComponent(cartService) {
          _classCallCheck(this, _CartComponent);

          this.cartService = cartService;
        }

        _createClass(_CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            //$(`[data-toggle="popover"]`).popover();
            this.cartService.totalQuantity.subscribe(function (data) {
              return _this4.totalQuantity = data;
            });
          }
        }]);

        return _CartComponent;
      }();

      _CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || _CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
      };

      _CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CartComponent,
        selectors: [["app-cart"]],
        decls: 4,
        vars: 1,
        consts: [["type", "button", "routerLink", "/view-cart", 1, "btn", "btn-primary"], ["type", "button", "routerLink", "/view-cart", "data-bs-container", "body", "data-bs-toggle", "popover", "data-bs-placement", "bottom", "data-bs-content", "Bottom popover", 1, "btn", "btn-dark"], [1, "fa", "fa-shopping-cart"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalQuantity);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    58149:
    /*!***********************************************************!*\
      !*** ./src/app/components/checkout/checkout.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutComponent": function CheckoutComponent() {
          return (
            /* binding */
            _CheckoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_stripe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-stripe */
      51809);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/checkout.service */
      38106);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/cart.service */
      90910);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      33252);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function CheckoutComponent_div_28_tr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 4, item_r2.price / 100, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.quantity);
        }
      }

      function CheckoutComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CheckoutComponent_div_28_tr_9_Template, 10, 7, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.cartItems);
        }
      }

      var _CheckoutComponent = /*#__PURE__*/function () {
        function _CheckoutComponent(fb, stripeService, checkoutService, cartService) {
          _classCallCheck(this, _CheckoutComponent);

          this.fb = fb;
          this.stripeService = stripeService;
          this.checkoutService = checkoutService;
          this.cartService = cartService;
          this.cardOptions = {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                fontWeight: '300',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          };
          this.elementsOptions = {
            locale: 'en'
          };
        }

        _createClass(_CheckoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.cartService.totalPrice.subscribe(function (data) {
              return _this5.totalPrice = data;
            });
            this.cartItems = this.cartService.cartItems;
            this.checkoutForm = this.fb.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
          } //method from Ngx-Stripe example

        }, {
          key: "pay",
          value: function pay() {
            var _this6 = this;

            this.checkoutService.createPaymentIntent(this.totalPrice, this.checkoutForm.get('email').value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (pi) {
              return _this6.stripeService.confirmCardPayment(pi.client_secret, {
                payment_method: {
                  card: _this6.card.element,
                  billing_details: {
                    name: _this6.checkoutForm.get('firstName').value + ' ' + _this6.checkoutForm.get('lastName').value,
                    email: _this6.checkoutForm.get('email').value
                  }
                }
              });
            })).subscribe(function (result) {
              if (result.error) {
                // Show error to your customer (e.g., insufficient funds)
                console.log(result.error.message);
              } else {
                // The payment has been processed!
                if (result.paymentIntent.status === 'succeeded') {// Show a success message to your customer
                }
              }
            });
          }
        }]);

        return _CheckoutComponent;
      }();

      _CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
        return new (t || _CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_6__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
      };

      _CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _CheckoutComponent,
        selectors: [["app-checkout"]],
        viewQuery: function CheckoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_stripe__WEBPACK_IMPORTED_MODULE_6__.StripeCardNumberComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
          }
        },
        decls: 29,
        vars: 8,
        consts: [[1, "main", "content"], [1, "row"], [1, "container-fluid", "col-md-5"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "firstName", "placeholder", "name", 1, "form-control", "bg-light"], ["type", "text", "formControlName", "lastName", "placeholder", "name", 1, "form-control", "bg-light"], ["type", "email", "formControlName", "email", "placeholder", "email", 1, "form-control", "bg-light"], [3, "elementsOptions", "options"], ["type", "submit", 3, "click"], [1, "container-fluid", "col-md-3"], [4, "ngIf"], [1, "cart-details"], [4, "ngFor", "ngForOf"], ["alt", "product image", 1, "view-cart", 3, "src"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Customer Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "First name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Last name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ngx-stripe-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_25_listener() {
              return ctx.pay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " PAY\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CheckoutComponent_div_28_Template, 10, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.checkoutForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](23, 5, ctx.totalPrice / 100, "USD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("elementsOptions", ctx.elementsOptions)("options", ctx.cardOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_stripe__WEBPACK_IMPORTED_MODULE_6__.StripeCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    33252:
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../cart/cart.component */
      40088);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent() {
          _classCallCheck(this, _NavbarComponent);
        }

        _createClass(_NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)();
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 22,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/readings", 1, "nav-link"], [1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "byprieta");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Readings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _cart_cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    13526:
    /*!***********************************************************!*\
      !*** ./src/app/components/readings/readings.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReadingsComponent": function ReadingsComponent() {
          return (
            /* binding */
            _ReadingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_submit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/submit.service */
      46386);
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/product.service */
      66082);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      33252);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ReadingsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tempProduct_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", tempProduct_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", tempProduct_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tempProduct_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tempProduct_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 6, tempProduct_r1.price / 100, "USD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/book/", tempProduct_r1.id, "");
        }
      }

      var _ReadingsComponent = /*#__PURE__*/function () {
        function _ReadingsComponent(submissionService, productService, route, router) {
          _classCallCheck(this, _ReadingsComponent);

          this.submissionService = submissionService;
          this.productService = productService;
          this.route = route;
          this.router = router;
        }

        _createClass(_ReadingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadProducts();
          } //trackBy function

        }, {
          key: "trackById",
          value: function trackById(index, item) {
            return item.name;
          } // Stripe functions 
          // loadProducts to load products from backend via Stripe api

        }, {
          key: "loadProducts",
          value: function loadProducts() {
            //console.log("are the products lading? ", this.productService.listProducts().subscribe(this.processResult()));
            this.productService.listProducts().subscribe(this.processResult());
          }
        }, {
          key: "processResult",
          value: function processResult() {
            var _this7 = this;

            return function (data) {
              console.log("processing result ", data);
              _this7.products = data;
              console.log("products are ", _this7.products);
            };
          }
        }]);

        return _ReadingsComponent;
      }();

      _ReadingsComponent.ɵfac = function ReadingsComponent_Factory(t) {
        return new (t || _ReadingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_submit_service__WEBPACK_IMPORTED_MODULE_0__.SubmitService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _ReadingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ReadingsComponent,
        selectors: [["app-readings"]],
        decls: 8,
        vars: 1,
        consts: [[1, "main-content"], [1, "section-content", "section-content-p30"], [1, "container-fluid"], [1, "row"], ["class", "col-md-3 products-view", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "col-md-3", "products-view"], ["routerLink", ""], [1, "img-responsive", 3, "src"], [3, "routerLink"], [1, "price"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]],
        template: function ReadingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ReadingsComponent_div_5_Template, 14, 9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\xA9 by prieta.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFkaW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    53244:
    /*!*********************************************************!*\
      !*** ./src/app/components/welcome/welcome.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomeComponent": function WelcomeComponent() {
          return (
            /* binding */
            _WelcomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      33252);

      var _WelcomeComponent = /*#__PURE__*/function () {
        function _WelcomeComponent() {
          _classCallCheck(this, _WelcomeComponent);

          this.title = "book-me-with-stripe";
        }

        _createClass(_WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _WelcomeComponent;
      }();

      _WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
        return new (t || _WelcomeComponent)();
      };

      _WelcomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _WelcomeComponent,
        selectors: [["app-welcome"]],
        decls: 14,
        vars: 2,
        consts: [[1, "main-content"], [1, "container-fluid", "bg-light"], ["href", "https://healingbyprieta.com/bookings"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This project is based on the Full Stack Ecommerce Application which leveraged a Springboot back-end.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "The idea behind this project was for my own need for my small spiritual business. I wanted to have a custom website, but also accept secure online payments. I, previously, created ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "my website");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " only using Stripe Checkout, but I wanted to take on the challenge of building a custom payment flow.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, "!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("This project, ", ctx.title, ", is developed with the MEAN stack and integrates with Stripes Products, Prices, and PaymentIntents APIs.");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    90910:
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartService": function CartService() {
          return (
            /* binding */
            _CartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CartService = /*#__PURE__*/function () {
        // storage: Storage = sessionStorage;
        function _CartService() {
          _classCallCheck(this, _CartService);

          // read data from storage
          //  let data = JSON.parse(this.storage.getItem('cartItems'));
          this.cartItems = [];
          this.totalPrice = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0); //Subject is  subclass of observable and can be used to publish events to all subscribers

          this.totalQuantity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
          /* if (data != null) {
             this.cartItems = data; */
          // compute totals based on the data that is read from storage 

          this.computeCartTotals();
        }

        _createClass(_CartService, [{
          key: "addToCart",
          value: function addToCart(theCartItem) {
            //check if we already have the item in our cart
            var alreadyExistsInCart = false;
            var existingCartItem = undefined;

            if (this.cartItems.length > 0) {
              //find the item in the cart based on id
              //check if we found it
              //find returns undefined 
              existingCartItem = this.cartItems.find(function (tempCartItem) {
                return tempCartItem.id === theCartItem.id;
              });
              alreadyExistsInCart = existingCartItem != undefined;
            }

            if (alreadyExistsInCart) {
              existingCartItem.quantity++;
            } else {
              //just add item to the array
              this.cartItems.push(theCartItem);
              console.log("added to cart, ".concat(theCartItem));
            }

            this.computeCartTotals();
          }
        }, {
          key: "computeCartTotals",
          value: function computeCartTotals() {
            var totalPriceValue = 0;
            var totalQuantityValue = 0;

            var _iterator = _createForOfIteratorHelper(this.cartItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var currentCartItem = _step.value;
                totalPriceValue += currentCartItem.quantity * currentCartItem.price;
                totalQuantityValue += currentCartItem.quantity;
              } //publish the new values...all subscribers will receive new data

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.totalPrice.next(totalPriceValue);
            this.totalQuantity.next(totalQuantityValue); //this.persistCartItems();
          }
        }]);

        return _CartService;
      }();

      _CartService.ɵfac = function CartService_Factory(t) {
        return new (t || _CartService)();
      };

      _CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CartService,
        factory: _CartService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    38106:
    /*!**********************************************!*\
      !*** ./src/app/services/checkout.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutService": function CheckoutService() {
          return (
            /* binding */
            _CheckoutService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _CheckoutService = /*#__PURE__*/function () {
        function _CheckoutService(httpClient) {
          _classCallCheck(this, _CheckoutService);

          this.httpClient = httpClient;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        }

        _createClass(_CheckoutService, [{
          key: "createPaymentIntent",
          value: function createPaymentIntent(amount, receiptEmail) {
            return this.httpClient.post("".concat(this.baseUrl, "create-payment-intent"), {
              amount: amount,
              receiptEmail: receiptEmail
            });
          }
        }]);

        return _CheckoutService;
      }();

      _CheckoutService.ɵfac = function CheckoutService_Factory(t) {
        return new (t || _CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _CheckoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CheckoutService,
        factory: _CheckoutService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    66082:
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductService": function ProductService() {
          return (
            /* binding */
            _ProductService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _ProductService = /*#__PURE__*/function () {
        function _ProductService(http) {
          _classCallCheck(this, _ProductService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        }

        _createClass(_ProductService, [{
          key: "listProducts",
          value: function listProducts() {
            return this.http.get(this.baseUrl + "productList").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (response) {
              return response.products;
            }));
          }
        }, {
          key: "getProductById",
          value: function getProductById(theProductId) {
            var productUrl = "".concat(this.baseUrl, "product-details/").concat(theProductId);
            return this.http.get(productUrl);
          }
        }]);

        return _ProductService;
      }();

      _ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || _ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProductService,
        factory: _ProductService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    46386:
    /*!********************************************!*\
      !*** ./src/app/services/submit.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubmitService": function SubmitService() {
          return (
            /* binding */
            _SubmitService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SubmitService = /*#__PURE__*/function () {
        function _SubmitService(http) {
          _classCallCheck(this, _SubmitService);

          this.http = http;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            })
          };
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        }

        _createClass(_SubmitService, [{
          key: "submitForm",
          value: function submitForm(submission) {
            console.log("Hitting submit.service...");
            console.log("data is " + submission);
            return this.http.post(this.baseUrl + 'post', submission);
          }
        }]);

        return _SubmitService;
      }();

      _SubmitService.ɵfac = function SubmitService_Factory(t) {
        return new (t || _SubmitService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _SubmitService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SubmitService,
        factory: _SubmitService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        apiUrl: "http://localhost:8000/",
        stripeKey: "pk_test_wm7H4hBJt46r6ZaCmDzUSZvK00vrnxJBdT"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      //import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js */
      47761);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 62275,
        "./af.js": 62275,
        "./ar": 90857,
        "./ar-dz": 11218,
        "./ar-dz.js": 11218,
        "./ar-kw": 14754,
        "./ar-kw.js": 14754,
        "./ar-ly": 66680,
        "./ar-ly.js": 66680,
        "./ar-ma": 92178,
        "./ar-ma.js": 92178,
        "./ar-sa": 56522,
        "./ar-sa.js": 56522,
        "./ar-tn": 95682,
        "./ar-tn.js": 95682,
        "./ar.js": 90857,
        "./az": 70164,
        "./az.js": 70164,
        "./be": 79774,
        "./be.js": 79774,
        "./bg": 60947,
        "./bg.js": 60947,
        "./bm": 21832,
        "./bm.js": 21832,
        "./bn": 89650,
        "./bn-bd": 74477,
        "./bn-bd.js": 74477,
        "./bn.js": 89650,
        "./bo": 66005,
        "./bo.js": 66005,
        "./br": 98492,
        "./br.js": 98492,
        "./bs": 70534,
        "./bs.js": 70534,
        "./ca": 52061,
        "./ca.js": 52061,
        "./cs": 84737,
        "./cs.js": 84737,
        "./cv": 61167,
        "./cv.js": 61167,
        "./cy": 77996,
        "./cy.js": 77996,
        "./da": 9528,
        "./da.js": 9528,
        "./de": 14540,
        "./de-at": 49430,
        "./de-at.js": 49430,
        "./de-ch": 67978,
        "./de-ch.js": 67978,
        "./de.js": 14540,
        "./dv": 83426,
        "./dv.js": 83426,
        "./el": 6616,
        "./el.js": 6616,
        "./en-au": 63816,
        "./en-au.js": 63816,
        "./en-ca": 32162,
        "./en-ca.js": 32162,
        "./en-gb": 83305,
        "./en-gb.js": 83305,
        "./en-ie": 61954,
        "./en-ie.js": 61954,
        "./en-il": 43060,
        "./en-il.js": 43060,
        "./en-in": 59923,
        "./en-in.js": 59923,
        "./en-nz": 13540,
        "./en-nz.js": 13540,
        "./en-sg": 16505,
        "./en-sg.js": 16505,
        "./eo": 41907,
        "./eo.js": 41907,
        "./es": 86640,
        "./es-do": 41246,
        "./es-do.js": 41246,
        "./es-mx": 56131,
        "./es-mx.js": 56131,
        "./es-us": 36430,
        "./es-us.js": 36430,
        "./es.js": 86640,
        "./et": 62551,
        "./et.js": 62551,
        "./eu": 32711,
        "./eu.js": 32711,
        "./fa": 54572,
        "./fa.js": 54572,
        "./fi": 33390,
        "./fi.js": 33390,
        "./fil": 87860,
        "./fil.js": 87860,
        "./fo": 48216,
        "./fo.js": 48216,
        "./fr": 99291,
        "./fr-ca": 98527,
        "./fr-ca.js": 98527,
        "./fr-ch": 58407,
        "./fr-ch.js": 58407,
        "./fr.js": 99291,
        "./fy": 47054,
        "./fy.js": 47054,
        "./ga": 49540,
        "./ga.js": 49540,
        "./gd": 73917,
        "./gd.js": 73917,
        "./gl": 51486,
        "./gl.js": 51486,
        "./gom-deva": 56245,
        "./gom-deva.js": 56245,
        "./gom-latn": 48868,
        "./gom-latn.js": 48868,
        "./gu": 59652,
        "./gu.js": 59652,
        "./he": 89019,
        "./he.js": 89019,
        "./hi": 42040,
        "./hi.js": 42040,
        "./hr": 63402,
        "./hr.js": 63402,
        "./hu": 79322,
        "./hu.js": 79322,
        "./hy-am": 27609,
        "./hy-am.js": 27609,
        "./id": 57942,
        "./id.js": 57942,
        "./is": 98275,
        "./is.js": 98275,
        "./it": 73053,
        "./it-ch": 4378,
        "./it-ch.js": 4378,
        "./it.js": 73053,
        "./ja": 46176,
        "./ja.js": 46176,
        "./jv": 679,
        "./jv.js": 679,
        "./ka": 92726,
        "./ka.js": 92726,
        "./kk": 72953,
        "./kk.js": 72953,
        "./km": 86957,
        "./km.js": 86957,
        "./kn": 59181,
        "./kn.js": 59181,
        "./ko": 47148,
        "./ko.js": 47148,
        "./ku": 27752,
        "./ku.js": 27752,
        "./ky": 65675,
        "./ky.js": 65675,
        "./lb": 41263,
        "./lb.js": 41263,
        "./lo": 65746,
        "./lo.js": 65746,
        "./lt": 11143,
        "./lt.js": 11143,
        "./lv": 38753,
        "./lv.js": 38753,
        "./me": 44054,
        "./me.js": 44054,
        "./mi": 31573,
        "./mi.js": 31573,
        "./mk": 30202,
        "./mk.js": 30202,
        "./ml": 68523,
        "./ml.js": 68523,
        "./mn": 79794,
        "./mn.js": 79794,
        "./mr": 56681,
        "./mr.js": 56681,
        "./ms": 56975,
        "./ms-my": 39859,
        "./ms-my.js": 39859,
        "./ms.js": 56975,
        "./mt": 3691,
        "./mt.js": 3691,
        "./my": 5152,
        "./my.js": 5152,
        "./nb": 7607,
        "./nb.js": 7607,
        "./ne": 21526,
        "./ne.js": 21526,
        "./nl": 86368,
        "./nl-be": 40076,
        "./nl-be.js": 40076,
        "./nl.js": 86368,
        "./nn": 68420,
        "./nn.js": 68420,
        "./oc-lnc": 51906,
        "./oc-lnc.js": 51906,
        "./pa-in": 94504,
        "./pa-in.js": 94504,
        "./pl": 54721,
        "./pl.js": 54721,
        "./pt": 74645,
        "./pt-br": 54548,
        "./pt-br.js": 54548,
        "./pt.js": 74645,
        "./ro": 71977,
        "./ro.js": 71977,
        "./ru": 26042,
        "./ru.js": 26042,
        "./sd": 78849,
        "./sd.js": 78849,
        "./se": 27739,
        "./se.js": 27739,
        "./si": 50084,
        "./si.js": 50084,
        "./sk": 92449,
        "./sk.js": 92449,
        "./sl": 23086,
        "./sl.js": 23086,
        "./sq": 33139,
        "./sq.js": 33139,
        "./sr": 30607,
        "./sr-cyrl": 30063,
        "./sr-cyrl.js": 30063,
        "./sr.js": 30607,
        "./ss": 40131,
        "./ss.js": 40131,
        "./sv": 21665,
        "./sv.js": 21665,
        "./sw": 5642,
        "./sw.js": 5642,
        "./ta": 33622,
        "./ta.js": 33622,
        "./te": 74825,
        "./te.js": 74825,
        "./tet": 48336,
        "./tet.js": 48336,
        "./tg": 39238,
        "./tg.js": 39238,
        "./th": 99463,
        "./th.js": 99463,
        "./tk": 39986,
        "./tk.js": 39986,
        "./tl-ph": 29672,
        "./tl-ph.js": 29672,
        "./tlh": 40043,
        "./tlh.js": 40043,
        "./tr": 51212,
        "./tr.js": 51212,
        "./tzl": 50110,
        "./tzl.js": 50110,
        "./tzm": 80482,
        "./tzm-latn": 38309,
        "./tzm-latn.js": 38309,
        "./tzm.js": 80482,
        "./ug-cn": 42495,
        "./ug-cn.js": 42495,
        "./uk": 54157,
        "./uk.js": 54157,
        "./ur": 80984,
        "./ur.js": 80984,
        "./uz": 64141,
        "./uz-latn": 43662,
        "./uz-latn.js": 43662,
        "./uz.js": 64141,
        "./vi": 12607,
        "./vi.js": 12607,
        "./x-pseudo": 66460,
        "./x-pseudo.js": 66460,
        "./yo": 92948,
        "./yo.js": 92948,
        "./zh-cn": 62658,
        "./zh-cn.js": 62658,
        "./zh-hk": 39352,
        "./zh-hk.js": 39352,
        "./zh-mo": 38274,
        "./zh-mo.js": 38274,
        "./zh-tw": 98451,
        "./zh-tw.js": 98451
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map