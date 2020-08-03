(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bartender/bartender.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bartender/bartender.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBartenderBartenderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  bartender works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div *ngIf=\"auth.isLoggedIn()\"><h1>Welcome, {{auth.userInfo().name}}.</h1></div>\r\n<div *ngIf=\"!auth.isLoggedIn()\"><h1>Welcome.</h1></div>\r\n\r\n<button class=\"btn-info btn\" routerLink=\"/menu\">Order!</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventoryInventoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  inventory works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #f=\"ngForm\" (ngSubmit)=\"login(f.value)\">\r\n    <div class='form-group'>\r\n      <label for=username>\r\n        Username\r\n      </label>\r\n      <input required class=\"form-control\" type=\"text\" id=\"username\" ngModel name=\"username\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.touched && !name.valid\">\r\n        <div *ngIf=\"name.errors.required\">Name is required</div>\r\n      </div>\r\n    </div>\r\n    <div class='form-group'>\r\n      <label for=password>\r\n        Password\r\n      </label>\r\n      <input required class=\"form-control\" type=\"text\" id=\"password\" ngModel name=\"password\" #pass=\"ngModel\">\r\n      <div *ngIf=\"pass.touched && !pass.valid\">\r\n        <div *ngIf=\"pass.errors.required\">Password is required</div>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn-info btn\" type=\"submit\" [disabled]=\"!f.valid\">Log in!</button>\r\n  </form>\r\n  <div *ngIf=\"invalidLogin\">Invalid username and/or password</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"wrapper mt-4\">\r\n  <div class=\"leftPanel\" droppable (onDrop)=\"ItemDropBack($event)\">\r\n    <div draggable [dragData]=\"prod\" *ngFor=\"let prod of prods$ | async\" class=\"d-inline-block card cardLeft text-white bg-info mb-3\">\r\n      <img class=\"card-img-top\" [src]=\"prod.thumb\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{prod.prod}}</h5>\r\n        <p class=\"card-text\">{{prod.dept}}</p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <small class=\"text-muted\">{{prod.price}}</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"sticky card border-info mb-3\">\r\n    <div class=\"card-header text-info text-center\">\r\n      <div *ngIf=\"auth.isLoggedIn() && !auth.userInfo().admin\">\r\n        Add to this cart by dragging and dropping an item\r\n      </div>\r\n      <div *ngIf=\"!auth.isLoggedIn()\">\r\n        <button class=\"btn-info btn\" routerLink=\"/login\">Log in</button> to make an order.\r\n      </div>\r\n    </div>\r\n    <div droppable (onDrop)=\"ItemDropInBox($event)\" class=\"card-body text-info\">\r\n       <div draggable [dragData]=\"item\" *ngFor=\"let item of droppedItems$ | async\" class=\"d-inline-block card cardRight text-white bg-info mb-3\" >\r\n          <img class=\"card-img-top\" [src]=\"item.thumb\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{item.prod}}</h5>\r\n            <p class=\"card-text\">{{item.dept}}</p>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <small class=\"text-muted\">{{item.price}}</small>\r\n          </div>\r\n          <div hidden>\r\n            {{suma(item.price)}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div class=\"text-center\">\r\n        <!-- Total: {{sum()}} -->\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button type=\"button\" role=\"button\" class=\"bt btn btn-outline-info\" (click)=\"undo()\">Undo</button>\r\n        <button *ngIf=\"auth.isLoggedIn() && !auth.userInfo().admin\"  type=\"button\" role=\"button\" class=\"bt btn btn-outline-info\">Complete Order</button>\r\n        <button type=\"button\" role=\"button\" class=\"bt btn btn-outline-info\" (click)=\"redo()\">Redo</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"text-info  float-right copyright  \">\r\n  Created by Ina\r\n</div>\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"\">\r\n  \t\t<ul class=\"navbar-nav\">\r\n  \t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a  class=\"nav-link\" routerLink=\"/home\">Home</a></li>\r\n  \t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a  class=\"nav-link\" [routerLink]=\"['menu']\">Catalog</a></li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a  class=\"nav-link\" [routerLink]=\"['about']\">About</a></li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a  class=\"nav-link\" [routerLink]=\"['events']\">Events</a></li>\r\n        <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a  class=\"nav-link\" [routerLink]=\"['login']\">Log in</a></li>\r\n\r\n        <div *ngIf=\"auth.isLoggedIn() && auth.userInfo().admin\">\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n              <a  class=\"nav-link\" routerLink=\"inventory\">Inventory</a></li>\r\n          <li class=\"nav-item\" routerLinkActive=\"active\">\r\n              <a  class=\"nav-link\" routerLink=\"bartender\">Bartender</a></li>\r\n        </div>\r\n\r\n        <div *ngIf=\"auth.isLoggedIn() && !auth.userInfo().admin\">\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" routerLink=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n             {{auth.userInfo().name}}\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\"  routerLink=\"#\">Saldo</a>\r\n              <a class=\"dropdown-item\" routerLink=\"#\">Purchase history</a>\r\n              <a  class=\"dropdown-item\" [routerLink]=\"['home']\" (click)=\"auth.logout()\">Logout</a>\r\n            </div>\r\n          </li>\r\n        </div>\r\n\r\n  \t\t</ul>\r\n  </div>\r\n\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bartender/bartender.component */
    "./src/app/bartender/bartender.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");

    const routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'menu',
      component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'inventory',
      component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__["InventoryComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    }, {
      path: 'bartender',
      component: _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_7__["BartenderComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    }
    /*,
    {path:'about', component:},
    {path:'events', component:}
    {path:'**', component: NotFoundComponent}*/
    ];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'store';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-drag-drop */
    "./node_modules/ng-drag-drop/index.js");
    /* harmony import */


    var ng_drag_drop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu/menu.module */
    "./src/app/menu/menu.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./bartender/bartender.component */
    "./src/app/bartender/bartender.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"], _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_14__["BartenderComponent"]],
      imports: [_menu_menu_module__WEBPACK_IMPORTED_MODULE_7__["MenuModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_drag_drop__WEBPACK_IMPORTED_MODULE_6__["NgDragDropModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_16__["reducers"]
      /*, {
      metaReducers,
      runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true
      }
      }*/
      ), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AuthGuardService = class AuthGuardService {
      constructor(auth, route) {
        this.auth = auth;
        this.route = route;
      }

      canActivate() {
        if (this.auth.isLoggedIn() && this.auth.userInfo().admin) return true;
        this.route.navigate(["login"]);
        return false;
      }

    };

    AuthGuardService.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");

    let AuthenticationService = class AuthenticationService {
      constructor(http) {
        this.http = http;
        this.tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvbiIsImFkbWluIjp0cnVlfQ.6ly-kq_Q4KcWxojxofeazrFshElkcUWJqJG4_0doF7U";
        this.tokenCli = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOmZhbHNlfQ.qWKELmsR8hLrEZE8I8-SYzrajQO82ZSliS-7d1xyNfk";
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
      }

      loginAuth(username, password) {
        /*if (username === 'a' && password === 'a'){
          //store the Json web token locally in the browser, dummy jwt created in jwt.io
           localStorage.setItem("token", this.tokenCli);
          return true;
        }else{
         return false;
        }*/
        localStorage.setItem("token", this.tokenCli);
        return true;
      }

      logout() {
        localStorage.removeItem("token");
      }

      isLoggedIn() {
        //const isExpired = this.helper.isTokenExpired(this.token);
        //return this.helper.isTokenExpired(this.token); // gets from the local storage
        //console.log(this.helper.isTokenExpired(this.token));
        if (localStorage.getItem("token")) return true;else return false;
      }

      userInfo() {
        let t = localStorage.getItem("token");
        if (t) return this.helper.decodeToken(t);
        return false;
      }

      getProds() {
        return this.http.get("http://5cd1447bd4a78300147be735.mockapi.io/prods");
      }

      getUsers() {}

    };

    AuthenticationService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/bartender/bartender.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/bartender/bartender.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBartenderBartenderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci9iYXJ0ZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/bartender/bartender.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/bartender/bartender.component.ts ***!
    \**************************************************/

  /*! exports provided: BartenderComponent */

  /***/
  function srcAppBartenderBartenderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BartenderComponent", function () {
      return BartenderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BartenderComponent = class BartenderComponent {
      constructor() {}

      ngOnInit() {}

    };
    BartenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bartender',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bartender.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bartender/bartender.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bartender.component.scss */
      "./src/app/bartender/bartender.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BartenderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    let HomeComponent = class HomeComponent {
      constructor(auth) {
        this.auth = auth;
      }

      ngOnInit() {}

    };

    HomeComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }];

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/inventory/inventory.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/inventory/inventory.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInventoryInventoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/inventory/inventory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/inventory/inventory.component.ts ***!
    \**************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let InventoryComponent = class InventoryComponent {
      constructor() {}

      ngOnInit() {}

    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inventory.component.scss */
      "./src/app/inventory/inventory.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InventoryComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  text-align: center;\n  margin: 0 30%;\n}\n\n.form-control.ng-touched.ng-invalid {\n  border: 2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxtaXN0ZXJpb3NhXFxhbmd1bGFyN1Jlc3RhdXJhbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMzAlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlke1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG59XHJcbiIsImZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAzMCU7XG59XG5cbi5mb3JtLWNvbnRyb2wubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LoginComponent = class LoginComponent {
      constructor(auth, route) {
        this.auth = auth;
        this.route = route;
        this.invalidLogin = false;
      }

      ngOnInit() {}

      login(e) {
        //e.preventDefault();
        if (this.auth.loginAuth(e.username, e.password)) {
          //TODO: SET LINK ACTIVE FOR HOME
          this.route.navigate([""]);
        } else {
          this.invalidLogin = true;
        }
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.scss":
  /*!******************************************!*\
    !*** ./src/app/menu/menu.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.leftPanel {\n  width: 60%;\n  margin-left: 2%;\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  width: 35%;\n  height: 100vh;\n}\n\n.cardLeft {\n  width: 9rem;\n  margin-left: 1.5rem;\n}\n\n.cardRight {\n  width: 7rem;\n  margin: 0.3rem;\n}\n\n.cardRight .card-title {\n  font-size: 11px;\n}\n\n.cardRight .card-text {\n  font-size: 9px;\n}\n\n.cardRight .card-body {\n  height: 3rem;\n}\n\n.card-body {\n  padding: 2px;\n  overflow: auto;\n  height: 4rem;\n  text-align: center;\n}\n\n.card-title {\n  font-size: 13px;\n}\n\n.card-text {\n  font-size: 11px;\n}\n\n.card-footer {\n  font-size: 13px;\n  text-align: center;\n  padding: 0;\n}\n\n.card-footer .bt {\n  margin: 0.4em;\n  width: 6rem;\n  height: 4rem;\n}\n\n.card .text-muted {\n  text-shadow: 1px 1px 2px white, -1px -1px 2px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXG1pc3Rlcmlvc2FcXGFuZ3VsYXI3UmVzdGF1cmFudC9zcmNcXGFwcFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0YseUJBQUE7VUFBQSw4QkFBQTtBQ0FGOztBREVBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDQTs7QURDQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREk7RUFDSSxlQUFBO0FDR1I7O0FEREk7RUFDSSxjQUFBO0FDR1I7O0FEREk7RUFDSSxZQUFBO0FDR1I7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0tKOztBREpJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTVI7O0FERkk7RUFDSSxtREFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmxlZnRQYW5lbHtcclxud2lkdGg6IDYwJTtcclxubWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbi5zdGlja3l7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOjA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiBcclxufVxyXG4uY2FyZExlZnR7XHJcbiAgICB3aWR0aDogOXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbn1cclxuLmNhcmRSaWdodHtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgbWFyZ2luOiAwLjNyZW07XHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jYXJkLXRleHR7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLmNhcmQtZm9vdGVye1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5idHtcclxuICAgICAgICBtYXJnaW46IDAuNGVtO1xyXG4gICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgIH1cclxufVxyXG4uY2FyZHtcclxuICAgIC50ZXh0LW11dGVke1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZSxcclxuICAgICAgICAtMXB4IC0xcHggMnB4IHdoaXRlOyBcclxuICAgIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxlZnRQYW5lbCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmRMZWZ0IHtcbiAgd2lkdGg6IDlyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG5cbi5jYXJkUmlnaHQge1xuICB3aWR0aDogN3JlbTtcbiAgbWFyZ2luOiAwLjNyZW07XG59XG4uY2FyZFJpZ2h0IC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNhcmRSaWdodCAuY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4uY2FyZFJpZ2h0IC5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDNyZW07XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAycHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtZm9vdGVyIC5idCB7XG4gIG1hcmdpbjogMC40ZW07XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5jYXJkIC50ZXh0LW11dGVkIHtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAtMXB4IC0xcHggMnB4IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_product_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/product.actions */
    "./src/app/menu/store/product.actions.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store */
    "./src/app/menu/store/index.ts");

    let MenuComponent = class MenuComponent {
      constructor(auth, store) {
        this.auth = auth;
        this.store = store;
        this.total = 0;
      }

      ngOnInit() {
        //this.store.dispatch(fromActions.loadProducts());// not being used so far
        this.droppedItems = [];
        /*this.auth.getProds().subscribe(response => {
          this.prods = response;
        });*/
        //hardcoded data for github pageXOffset, remove later

        this.prods = [{
          "id": "1",
          "dept": "Garden",
          "prod": "Incredible Frozen Fish",
          "pic": "http://lorempixel.com/640/480/fashion",
          "price": "287.00",
          "thumb": "https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg"
        }, {
          "id": "2",
          "dept": "Home",
          "prod": "Small Metal Computer",
          "pic": "http://lorempixel.com/640/480/abstract",
          "price": "646.00",
          "thumb": "https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg"
        }, {
          "id": "3",
          "dept": "Garden",
          "prod": "Rustic Granite Ball",
          "pic": "http://lorempixel.com/640/480/people",
          "price": "648.00",
          "thumb": "https://s3.amazonaws.com/uifaces/faces/twitter/shanehudson/128.jpg"
        }, {
          "id": "4",
          "dept": "Garden",
          "prod": "Unbranded Concrete Shirt",
          "pic": "http://lorempixel.com/640/480/transport",
          "price": "187.00",
          "thumb": "https://s3.amazonaws.com/uifaces/faces/twitter/jehnglynn/128.jpg"
        }];
        this.store.dispatch(_store_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductsSuccess"]({
          products: this.prods
        }));
        this.prods$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_5__["selectProds"]));
        this.droppedItems$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_5__["selectDropped"]));
        /*this.prods=[{"id":"1","createdAt":"2019-05-10T13:51:40.352Z","dept":"Garden","prod":"Incredible Frozen Fish","pic":"http://lorempixel.com/640/480/fashion","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"287.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg"},{"id":"2","createdAt":"2019-05-10T13:44:33.266Z","dept":"Home","prod":"Small Metal Computer","pic":"http://lorempixel.com/640/480/abstract","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"646.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg"},{"id":"3","createdAt":"2019-05-09T18:10:01.591Z","dept":"Garden","prod":"Rustic Granite Ball","pic":"http://lorempixel.com/640/480/people","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"648.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/shanehudson/128.jpg"},{"id":"4","createdAt":"2019-05-09T19:57:15.427Z","dept":"Garden","prod":"Unbranded Concrete Shirt","pic":"http://lorempixel.com/640/480/transport","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"187.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/jehnglynn/128.jpg"},{"id":"5","createdAt":"2019-05-10T05:33:48.212Z","dept":"Beauty","prod":"Handmade Cotton Computer","pic":"http://lorempixel.com/640/480/cats","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"602.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/runningskull/128.jpg"},{"id":"6","createdAt":"2019-05-10T08:55:10.680Z","dept":"Electronics","prod":"Awesome Concrete Sausages","pic":"http://lorempixel.com/640/480/food","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"209.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg"},{"id":"7","createdAt":"2019-05-09T21:37:22.046Z","dept":"Industrial","prod":"Unbranded Fresh Ball","pic":"http://lorempixel.com/640/480/people","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"72.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/vonachoo/128.jpg"},{"id":"8","createdAt":"2019-05-09T21:59:22.461Z","dept":"Toys","prod":"Generic Metal Sausages","pic":"http://lorempixel.com/640/480/people","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"900.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/sethlouey/128.jpg"},{"id":"9","createdAt":"2019-05-09T23:07:29.413Z","dept":"Sports","prod":"Rustic Rubber Bacon","pic":"http://lorempixel.com/640/480/nightlife","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"62.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/katiemdaly/128.jpg"},{"id":"10","createdAt":"2019-05-10T09:41:11.218Z","dept":"Tools","prod":"Practical Soft Pants","pic":"http://lorempixel.com/640/480/transport","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"577.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg"},{"id":"11","createdAt":"2019-05-09T18:10:08.706Z","dept":"Grocery","prod":"Intelligent Cotton Chair","pic":"http://lorempixel.com/640/480/sports","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"791.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg"},{"id":"12","createdAt":"2019-05-09T18:44:48.914Z","dept":"Movies","prod":"Practical Plastic Sausages","pic":"http://lorempixel.com/640/480/sports","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"83.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/mahmoudmetwally/128.jpg"},{"id":"13","createdAt":"2019-05-09T18:04:48.046Z","dept":"Garden","prod":"Incredible Wooden Pizza","pic":"http://lorempixel.com/640/480/nature","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"114.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/arashmanteghi/128.jpg"},{"id":"14","createdAt":"2019-05-09T23:41:20.616Z","dept":"Computers","prod":"Incredible Cotton Pizza","pic":"http://lorempixel.com/640/480/food","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"63.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/edhenderson/128.jpg"},{"id":"15","createdAt":"2019-05-09T15:36:58.197Z","dept":"Tools","prod":"Handcrafted Cotton Chips","pic":"http://lorempixel.com/640/480/cats","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"391.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/nandini_m/128.jpg"},{"id":"16","createdAt":"2019-05-10T07:57:37.795Z","dept":"Tools","prod":"Gorgeous Metal Chicken","pic":"http://lorempixel.com/640/480/nightlife","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"51.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/silvanmuhlemann/128.jpg"},{"id":"17","createdAt":"2019-05-09T16:36:22.493Z","dept":"Shoes","prod":"Ergonomic Cotton Gloves","pic":"http://lorempixel.com/640/480/people","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"7.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/zackeeler/128.jpg"},{"id":"18","createdAt":"2019-05-10T10:05:00.180Z","dept":"Games","prod":"Fantastic Rubber Tuna","pic":"http://lorempixel.com/640/480/city","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"340.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/S0ufi4n3/128.jpg"},{"id":"19","createdAt":"2019-05-09T14:29:15.310Z","dept":"Shoes","prod":"Incredible Frozen Fish","pic":"http://lorempixel.com/640/480/abstract","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"973.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/stushona/128.jpg"},{"id":"20","createdAt":"2019-05-10T02:53:54.317Z","dept":"Sports","prod":"Small Cotton Shoes","pic":"http://lorempixel.com/640/480/technics","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"367.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/miguelkooreman/128.jpg"},{"id":"21","createdAt":"2019-05-10T08:32:24.804Z","dept":"Music","prod":"Handcrafted Frozen Pants","pic":"http://lorempixel.com/640/480/animals","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"591.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/lingeswaran/128.jpg"},{"id":"22","createdAt":"2019-05-10T12:03:38.710Z","dept":"Grocery","prod":"Small Plastic Bacon","pic":"http://lorempixel.com/640/480/nature","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"920.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg"},{"id":"23","createdAt":"2019-05-09T19:50:49.617Z","dept":"Jewelery","prod":"Handcrafted Granite Pizza","pic":"http://lorempixel.com/640/480/food","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"245.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg"},{"id":"24","createdAt":"2019-05-10T08:12:24.752Z","dept":"Baby","prod":"Tasty Cotton Sausages","pic":"http://lorempixel.com/640/480/people","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"246.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg"},{"id":"25","createdAt":"2019-05-10T08:15:24.449Z","dept":"Grocery","prod":"Generic Fresh Hat","pic":"http://lorempixel.com/640/480/city","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"205.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg"},{"id":"26","createdAt":"2019-05-10T08:27:33.261Z","dept":"Kids","prod":"Awesome Metal Chicken","pic":"http://lorempixel.com/640/480/food","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"295.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg"},{"id":"27","createdAt":"2019-05-10T06:39:02.297Z","dept":"Shoes","prod":"Generic Concrete Gloves","pic":"http://lorempixel.com/640/480/city","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"609.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/dparrelli/128.jpg"},{"id":"28","createdAt":"2019-05-10T11:21:22.180Z","dept":"Music","prod":"Small Rubber Car","pic":"http://lorempixel.com/640/480/city","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"148.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/marclgonzales/128.jpg"},{"id":"29","createdAt":"2019-05-10T07:09:02.428Z","dept":"Clothing","prod":"Sleek Soft Bacon","pic":"http://lorempixel.com/640/480/technics","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"300.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/her_ruu/128.jpg"},{"id":"30","createdAt":"2019-05-10T08:29:42.318Z","dept":"Baby","prod":"Small Cotton Towels","pic":"http://lorempixel.com/640/480/technics","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"556.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/anasnakawa/128.jpg"},{"id":"31","createdAt":"2019-05-10T11:02:33.367Z","dept":"Automotive","prod":"Fantastic Cotton Keyboard","pic":"http://lorempixel.com/640/480/sports","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"400.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/agustincruiz/128.jpg"},{"id":"32","createdAt":"2019-05-09T19:35:46.339Z","dept":"Computers","prod":"Tasty Soft Bike","pic":"http://lorempixel.com/640/480/city","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"451.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg"},{"id":"33","createdAt":"2019-05-09T18:42:30.108Z","dept":"Sports","prod":"Handmade Metal Cheese","pic":"http://lorempixel.com/640/480/nature","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"415.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/alek_djuric/128.jpg"},{"id":"34","createdAt":"2019-05-10T07:11:49.034Z","dept":"Books","prod":"Small Cotton Salad","pic":"http://lorempixel.com/640/480/fashion","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"497.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/johannesneu/128.jpg"},{"id":"35","createdAt":"2019-05-10T06:13:32.629Z","dept":"Sports","prod":"Refined Metal Soap","pic":"http://lorempixel.com/640/480/nightlife","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"330.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg"},{"id":"36","createdAt":"2019-05-09T16:17:43.844Z","dept":"Computers","prod":"Unbranded Wooden Fish","pic":"http://lorempixel.com/640/480/transport","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"336.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/zforrester/128.jpg"},{"id":"37","createdAt":"2019-05-09T16:44:17.465Z","dept":"Grocery","prod":"Licensed Plastic Bike","pic":"http://lorempixel.com/640/480/people","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"792.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/cggaurav/128.jpg"},{"id":"38","createdAt":"2019-05-10T05:52:22.506Z","dept":"Shoes","prod":"Gorgeous Steel Bacon","pic":"http://lorempixel.com/640/480/food","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"67.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/hfalucas/128.jpg"},{"id":"39","createdAt":"2019-05-10T05:45:35.059Z","dept":"Jewelery","prod":"Handmade Granite Pizza","pic":"http://lorempixel.com/640/480/fashion","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"621.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/rez___a/128.jpg"},{"id":"40","createdAt":"2019-05-09T16:07:19.068Z","dept":"Beauty","prod":"Refined Fresh Tuna","pic":"http://lorempixel.com/640/480/fashion","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"727.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/elliotlewis/128.jpg"},{"id":"41","createdAt":"2019-05-09T16:09:37.699Z","dept":"Beauty","prod":"Rustic Granite Shirt","pic":"http://lorempixel.com/640/480/nature","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"733.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/el_fuertisimo/128.jpg"},{"id":"42","createdAt":"2019-05-09T15:50:14.848Z","dept":"Electronics","prod":"Fantastic Granite Chicken","pic":"http://lorempixel.com/640/480/sports","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"255.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/demersdesigns/128.jpg"},{"id":"43","createdAt":"2019-05-09T21:39:45.973Z","dept":"Games","prod":"Intelligent Rubber Hat","pic":"http://lorempixel.com/640/480/technics","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"578.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/mattlat/128.jpg"},{"id":"44","createdAt":"2019-05-10T05:34:00.030Z","dept":"Clothing","prod":"Handcrafted Frozen Computer","pic":"http://lorempixel.com/640/480/nightlife","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"733.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/craighenneberry/128.jpg"},{"id":"45","createdAt":"2019-05-09T16:25:31.137Z","dept":"Clothing","prod":"Tasty Soft Chips","pic":"http://lorempixel.com/640/480/animals","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"795.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg"},{"id":"46","createdAt":"2019-05-09T20:51:42.683Z","dept":"Home","prod":"Sleek Wooden Pants","pic":"http://lorempixel.com/640/480/technics","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"741.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/_kkga/128.jpg"},{"id":"47","createdAt":"2019-05-10T05:57:19.879Z","dept":"Movies","prod":"Handcrafted Granite Chair","pic":"http://lorempixel.com/640/480/nature","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"666.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":"48","createdAt":"2019-05-09T18:28:32.264Z","dept":"Home","prod":"Fantastic Cotton Chicken","pic":"http://lorempixel.com/640/480/technics","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"755.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/Talbi_ConSept/128.jpg"},{"id":"49","createdAt":"2019-05-09T14:02:09.798Z","dept":"Industrial","prod":"Licensed Plastic Chips","pic":"http://lorempixel.com/640/480/nature","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"604.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg"},{"id":"50","createdAt":"2019-05-09T21:06:36.854Z","dept":"Music","prod":"Fantastic Soft Bike","pic":"http://lorempixel.com/640/480/city","dataURI":"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%20%20%3Ctext%20x%3D%220%22%20y%3D%2220%22%20font-size%3D%2220%22%20text-anchor%3D%22start%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%20%3C%2Fsvg%3E","price":"223.00","thumb":"https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg"}];*/
      }

      ItemDropInBox(e) {
        // Get the dropped data here
        //this.droppedItems.push(e.dragData);
        //this.removeItem(e.dragData, this.prods);
        //console.log('e.dragData '+JSON.stringify(e.dragData));
        //p:Product={e.dragData;};
        //console.log('p '+ p);
        this.store.dispatch(_store_product_actions__WEBPACK_IMPORTED_MODULE_4__["dropInBox"]({
          item: e.dragData
        })); //this.prods$=this.store.pipe(select(selectProds));
        //  this.droppedItems$=this.store.pipe(select(selectDropped));
        //console.log(this.droppedItems$);
        //this.getTotalSelectedItems();
      }

      ItemDropBack(e) {
        // Get the dropped data here
        //this.prods.push(e.dragData);
        //this.removeItem(e.dragData, this.droppedItems)
        this.store.dispatch(_store_product_actions__WEBPACK_IMPORTED_MODULE_4__["dropBack"]({
          item: e.dragData
        })); //  this.prods$=this.store.pipe(select(selectProds));
        //  this.droppedItems$=this.store.pipe(select(selectDropped));
      } //-----------ngrx-undo-redo--------------
      //https://www.npmjs.com/package/ngrx-undo-redo


      undo() {
        this.store.dispatch({
          type: 'UNDO_STATE'
        });
      }

      redo() {
        this.store.dispatch({
          type: 'REDO_STATE'
        });
      } //-----------ngrx-undo-redo--------------

      /*public getTotalSelectedItems() {
        return this.droppedItems$.map(tag => tag.price).reduce((a, b) => a + b, 0);
      }*/


      suma(valor) {
        this.total += valor; //return  this.total_suma;
      }

      sum() {
        return this.total;
      }

    };

    MenuComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/menu/menu.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuModule", function () {
      return MenuModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store */
    "./src/app/menu/store/index.ts");

    let MenuModule = class MenuModule {};
    MenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store__WEBPACK_IMPORTED_MODULE_4__["productStateFeatureKey"], _store__WEBPACK_IMPORTED_MODULE_4__["reducer"], {
        metaReducers: _store__WEBPACK_IMPORTED_MODULE_4__["metaReducers"]
      })]
    })], MenuModule);
    /***/
  },

  /***/
  "./src/app/menu/store/index.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/store/index.ts ***!
    \*************************************/

  /*! exports provided: productStateFeatureKey, initialState, reducers, reducer, selectProdsFeature, selectProds, selectDropped, metaReducers, mtaReducers */

  /***/
  function srcAppMenuStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productStateFeatureKey", function () {
      return productStateFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectProdsFeature", function () {
      return selectProdsFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectProds", function () {
      return selectProds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDropped", function () {
      return selectDropped;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mtaReducers", function () {
      return mtaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngrx_undo_redo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngrx-undo-redo */
    "./node_modules/ngrx-undo-redo/index.js");
    /* harmony import */


    var ngrx_undo_redo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_undo_redo__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _product_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product.actions */
    "./src/app/menu/store/product.actions.ts");

    const productStateFeatureKey = 'productState';
    const initialState = {
      droppedItems: undefined,
      prods: undefined,
      error: undefined
    };
    const reducers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductsSuccess"], (state, action) => {
      return {
        prods: action.products,
        droppedItems: []
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProducts"], (state, action) => {
      return {
        prods: state.prods,
        droppedItems: state.droppedItems
      };
    }),
    /*
    on(fromActions.loadProductsFailure, (state, action) => {
    return {
    prods: state.prods,
    error: action.error
    }
    })*/
    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_product_actions__WEBPACK_IMPORTED_MODULE_4__["dropInBox"], (state, action) => {
      //console.log('action.item '+ JSON.stringify(action.item)); //console.log( action.item.id);  //console.log(state.prods.filter(({ id }) => id !== action.item.id));
      var pd = state.prods.filter(({
        id
      }) => id !== action.item.id);
      const di = Object.assign([], state.droppedItems);
      di.push(action.item);
      return {
        prods: pd,
        droppedItems: di
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_product_actions__WEBPACK_IMPORTED_MODULE_4__["dropBack"], (state, action) => {
      var l = state.droppedItems.filter(({
        id
      }) => id !== action.item.id); //this.removeItem(e.dragData, this.droppedItems)

      const d = Object.assign([], state.prods); //this.prods.push(e.dragData);

      d.push(action.item);
      return {
        prods: d,
        droppedItems: l
      };
    }));

    function reducer(state, action) {
      return reducers(state, action);
    }

    const selectProdsFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])(productStateFeatureKey);
    const selectProds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectProdsFeature, state => state.prods);
    const selectDropped = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectProdsFeature, state => state.droppedItems);
    const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? [Object(ngrx_undo_redo__WEBPACK_IMPORTED_MODULE_1__["undoRedo"])({
      maxBufferSize: 15,
      allowedActions: [_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductsSuccess"], _product_actions__WEBPACK_IMPORTED_MODULE_4__["dropInBox"], _product_actions__WEBPACK_IMPORTED_MODULE_4__["dropBack"]]
    })] : [Object(ngrx_undo_redo__WEBPACK_IMPORTED_MODULE_1__["undoRedo"])({
      maxBufferSize: 15,
      allowedActions: [_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductsSuccess"], _product_actions__WEBPACK_IMPORTED_MODULE_4__["dropInBox"], _product_actions__WEBPACK_IMPORTED_MODULE_4__["dropBack"]]
    })];

    function mtaReducers(state, action) {
      return reducers(state, action);
    }
    /***/

  },

  /***/
  "./src/app/menu/store/product.actions.ts":
  /*!***********************************************!*\
    !*** ./src/app/menu/store/product.actions.ts ***!
    \***********************************************/

  /*! exports provided: loadProducts, loadProductsSuccess, loadProductsFailure, dropInBox, dropBack */

  /***/
  function srcAppMenuStoreProductActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadProducts", function () {
      return loadProducts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadProductsSuccess", function () {
      return loadProductsSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadProductsFailure", function () {
      return loadProductsFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dropInBox", function () {
      return dropInBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dropBack", function () {
      return dropBack;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    const loadProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MenuComponent] Load Products');
    const loadProductsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MenuComponent] Load Products Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    const loadProductsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MenuComponent] Load Products Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    const dropInBox = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MenuComponent] Drop product in box', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    const dropBack = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MenuComponent] Drop product back', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".copyright {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcbWlzdGVyaW9zYVxcYW5ndWxhcjdSZXN0YXVyYW50L3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29weXJpZ2h0e1xyXG4gIHotaW5kZXg6IDJcclxufVxyXG4iLCIuY29weXJpZ2h0IHtcbiAgei1pbmRleDogMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    let NavbarComponent = class NavbarComponent {
      constructor(auth) {
        this.auth = auth;
      }

      ngOnInit() {}

    };

    NavbarComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }];

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: reducers, metaReducers */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    const reducers = {};
    const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\misteriosa\angular7Restaurant\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map