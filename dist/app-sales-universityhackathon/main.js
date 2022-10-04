"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _features_hackathon_sign_up_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/hackathon-sign-up/home/home.component */ 5023);
/* harmony import */ var _features_hackathon_sign_up_resources_resources_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/hackathon-sign-up/resources/resources.component */ 7333);
/* harmony import */ var _features_judge_judging_judging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/judge/judging/judging.component */ 4846);
/* harmony import */ var _features_judge_standings_standings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/judge/standings/standings.component */ 7448);
/* harmony import */ var _features_hackathon_sign_up_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/hackathon-sign-up/not-found/not-found.component */ 2680);
/* harmony import */ var _features_hackathon_sign_up_previous_hackathons_previous_hackathons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/hackathon-sign-up/previous-hackathons/previous-hackathons.component */ 1943);
/* harmony import */ var _features_hackathon_sign_up_competition_competition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/hackathon-sign-up/competition/competition.component */ 3812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    { path: 'not-found', component: _features_hackathon_sign_up_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _features_hackathon_sign_up_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'competition', component: _features_hackathon_sign_up_competition_competition_component__WEBPACK_IMPORTED_MODULE_6__.CompetitionComponent },
    { path: 'resources', component: _features_hackathon_sign_up_resources_resources_component__WEBPACK_IMPORTED_MODULE_1__.ResourcesComponent },
    { path: 'previous-hackathons', component: _features_hackathon_sign_up_previous_hackathons_previous_hackathons_component__WEBPACK_IMPORTED_MODULE_5__.PreviousHackathonsComponent },
    { path: 'JGdrGCSnGnLyuXYfIRfEdUDA', component: _features_judge_judging_judging_component__WEBPACK_IMPORTED_MODULE_2__.JudgingComponent },
    { path: 'XJlWkNAZoYgmQtsYhItrnfBV', component: _features_judge_standings_standings_component__WEBPACK_IMPORTED_MODULE_3__.StandingsComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _features_common_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/common-components/header/header.component */ 2471);
/* harmony import */ var _features_common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/common-components/footer/footer.component */ 1193);







class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.notFound = false;
        this.home = false;
        this.pathname = '';
        this.title = 'Hackathon';
        this.getScreenSize();
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
    ngOnInit() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            if (location.protocol === 'http:') {
                window.location.href = location.href.replace('http', 'https');
            }
        }
    }
    getScreenSize() {
        this.screenWidth = window.innerWidth;
        this.isBigScreen = this.screenWidth > 900;
    }
    resetSignUp() {
        this.signUpComponent.reset();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 0, consts: [["rel", "stylesheet", "href", "https://use.typekit.net/ivo1aee.css"], [1, "header-container"], [1, "content"], [1, "footer-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "title")(2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _features_common_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _features_common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon[_ngcontent-%COMP%] {\n  margin-right: 1vw;\n  float: right;\n}\na[_ngcontent-%COMP%] {\n  color: #000000;\n  text-decoration: none;\n}\n.blurred[_ngcontent-%COMP%] {\n  filter: blur(4px);\n}\n.header-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n  i.navigation-menu-pinned-icon.icon-Pushpin_Pinned:hover {\n  color: #c9c9c9;\n  opacity: 1;\n}\n  i.navigation-menu-pinned-icon.icon-Pushpin_UnPinned:hover {\n  color: #c9c9c9;\n  opacity: 1;\n}\n@media screen and (max-width: 900px) {\n  .column2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    margin-right: 21%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyIsIi4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vc3R5bGVzLnNjc3MiLCIuLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsYUFBQTtBQStNRjtBQTVNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQStNRjtBQTVNQTtFQUNFLGNHUFk7RUhRWixxQkFBQTtBQStNRjtBQTVNQTtFQUNFLGlCQUFBO0FBK01GO0FBNU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBK01GO0FBNU1BO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUErTUY7QUE1TUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQStNRjtBQTVNQTtFQUVFO0lBQ0UsV0FBQTtFQThNRjs7RUEzTUE7SUFDRSxpQkFBQTtFQThNRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXZvMWFlZS5jc3NcIik7XG5cbioge1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDQsIGg1LCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIHAsIGJ1dHRvbiwgbGFiZWwsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSIsIi8vYnV0dG9uIHN0eWxlc1xuLmJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyODhDQztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzUwYzVmZiAsIzBkOGZkMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgIGJvcmRlcjogI0IxRDVFODtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gIH1cbn1cblxuLmJ0bi15ZWxsb3cge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNmZmFlMDA7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjZmZhZTAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLWdyZXkge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNjZWNlY2U7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjY2VjZWNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAjQ0MyRDI0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDMkQyNDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOWQ5NiwgI2NlM2IzMyk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICAjQ0MyRDI0KTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMuc2Nzc1wiO1xuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hIHtcbiAgY29sb3I6ICR0aGVtZS1ibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmx1cnJlZCB7XG4gIGZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBpLm5hdmlnYXRpb24tbWVudS1waW5uZWQtaWNvbi5pY29uLVB1c2hwaW5fUGlubmVkOmhvdmVyIHtcbiAgY29sb3I6ICNjOWM5Yzk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCBpLm5hdmlnYXRpb24tbWVudS1waW5uZWQtaWNvbi5pY29uLVB1c2hwaW5fVW5QaW5uZWQ6aG92ZXIge1xuICBjb2xvcjogI2M5YzljOTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAuY29sdW1uMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMSU7XG4gIH1cbn0iLCIuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMzM7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBzY3JvbGwtbWFyZ2luLXRvcDogNTBweDtcbn0iLCJAaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9idXR0b24tc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MnO1xuXG4vLyBjb2xvciBkZWNsYXJhdGlvbnNcbjpyb290e1xuICAtLWNsci1mb3JlZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1mb290ZXItYmc6ICMwMDA7XG4gIC0tY2xyLWZvb3Rlci10ZXh0OiAjZmZmO1xuICAtLWNsci1oZWFkZXItYmc6ICNmZmY7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG59XG5cblxuLy9BdHRyaWJ1dGUgdmFyaWFibGVzXG4kY29ybmVyUmFkaW91czogMTBweDtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cbi8vVGhpcyBjbGFzcyBzcGVjaWZpZXMgdGhlIHN0eWxlIG9mIGNvbnRhaW5lcnM6XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJGNvcm5lclJhZGlvdXM7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMCwwLDAsIDAuMTApO1xufVxuXG4uaGlkZS1zY3JvbGxiYXIge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi8vY2hhbmdpbmcgY29sb3JzIHRvIG9uIGV2ZXJ5dGhpbmdcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uc2Vjb25kYXJ5LWxpbmssIHNwYW4uZGF0YSwgc3Bhbi5hY2NvcmRpb24tdGFiLCBzZWxlY3QsIG9wdGlvbntcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuXG4ubGluay1ncm91cCwgLmxpbmstaW1nLCAuZHJvcGRvd24gPiB1bHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIGJvcmRlcjogMTVweCBoaWRkZW4gIWltcG9ydGFudDtcbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG50ZXh0YXJlYXtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zdmd7XG4gIGZpbGw6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuXG5ib2R5LmRhcmstbW9kZXtcblxuICAtLWNsci1mb3JlZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1oZWFkZXItYmc6ICMyMDIwMjA7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG5cblxuICAucGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIHRhYmxlLCB0aCwgdGQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmh0bWwsIGJvZHkgeyBcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuIiwiLy8gVGhlbWUgY29sb3JzLlxuJHRoZW1lLWJsdWU6ICMwMjg4Q0M7XG4kdGhlbWUtZ3JleTogICM3MDcwNzA7XG4kdGhlbWUtd2hpdGU6ICNmZmZmZmY7XG4kdGhlbWUteWVsbG93OiAjRkZERDAwO1xuJHRoZW1lLWJsYWNrOiAjMDAwMDAwO1xuJHRoZW1lLXJlZDogI0NDMkQyNDtcblxuLy8gTWlzY2VsbGFuZW91cyBjb2xvcnMuXG4kYm9yZGVyQ29sb3I6ICMwMDdEQkE7XG4kbGlua0NvbG9yOiAjMDA3ZGJhO1xuJHByaW1hcnlCdG5DbHI6ICMwMjg4Q0M7Il19 */", "body[_ngcontent-%COMP%] {\n      display: none !important;\n    }"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_1__.routerTransition] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/profile.service */ 6893);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _features_judge_judge_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/judge/judge.module */ 2367);
/* harmony import */ var _features_hackathon_sign_up_hackathon_sign_up_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/hackathon-sign-up/hackathon-sign-up.module */ 3926);
/* harmony import */ var _features_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/common-components/common-components.module */ 1861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _features_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__.CommonComponentsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _features_judge_judge_module__WEBPACK_IMPORTED_MODULE_3__.JudgeModule,
        _features_hackathon_sign_up_hackathon_sign_up_module__WEBPACK_IMPORTED_MODULE_4__.HackathonSignUpModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
            }
        }),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-CSRF-TOKEN'
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _features_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__.CommonComponentsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _features_judge_judge_module__WEBPACK_IMPORTED_MODULE_3__.JudgeModule,
        _features_hackathon_sign_up_hackathon_sign_up_module__WEBPACK_IMPORTED_MODULE_4__.HackathonSignUpModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientXsrfModule] }); })();


/***/ }),

/***/ 3047:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/common-components/code-verification/code-verification.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeVerificationComponent": () => (/* binding */ CodeVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class CodeVerificationComponent {
    constructor() {
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    inputKeyDown(e, id) {
        let boxesFilled = 0;
        if (isFinite(e.key)) {
            e.target.value = e.key;
            if (id < 6) {
                let next = document.getElementById(`input-${id + 1}`);
                next.focus();
            }
        }
        else if (e.key === "Backspace") {
            e.target.value = '';
        }
        // Arrow key movement through cells.
        else if (e.key === "ArrowLeft") {
            if (id === 1)
                document.getElementById(`input-6`).focus();
            document.getElementById(`input-${id - 1}`).focus();
        }
        else if (e.key === "ArrowRight") {
            if (id === 6)
                document.getElementById(`input-1`).focus();
            document.getElementById(`input-${id + 1}`).focus();
        }
        for (let i = 1; i <= 6; i++) {
            if ((document.getElementById(`input-${i}`).value.length)) {
                boxesFilled++;
            }
        }
        if (boxesFilled == 6) {
            var code = '';
            for (let i = 1; i <= 6; i++) {
                code += document.getElementById(`input-${i}`).value;
            }
            this.submitForm.emit(code);
        }
    }
}
CodeVerificationComponent.ɵfac = function CodeVerificationComponent_Factory(t) { return new (t || CodeVerificationComponent)(); };
CodeVerificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeVerificationComponent, selectors: [["app-code-verification"]], outputs: { submitForm: "submitForm" }, decls: 8, vars: 0, consts: [[1, "special-group"], [1, "input-container"], ["id", "input-1", "readonly", "", "type", "text", 1, "code-input", 3, "keydown"], ["id", "input-2", "readonly", "", "type", "text", 1, "code-input", 3, "keydown"], ["id", "input-3", "readonly", "", "type", "text", 1, "code-input", 3, "keydown"], ["id", "input-4", "readonly", "", "type", "text", 1, "code-input", 3, "keydown"], ["id", "input-5", "readonly", "", "type", "text", 1, "code-input", 3, "keydown"], ["id", "input-6", "readonly", "", "type", "text", 1, "code-input", 3, "keydown"]], template: function CodeVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CodeVerificationComponent_Template_input_keydown_2_listener($event) { return ctx.inputKeyDown($event, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CodeVerificationComponent_Template_input_keydown_3_listener($event) { return ctx.inputKeyDown($event, 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CodeVerificationComponent_Template_input_keydown_4_listener($event) { return ctx.inputKeyDown($event, 3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CodeVerificationComponent_Template_input_keydown_5_listener($event) { return ctx.inputKeyDown($event, 4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CodeVerificationComponent_Template_input_keydown_6_listener($event) { return ctx.inputKeyDown($event, 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CodeVerificationComponent_Template_input_keydown_7_listener($event) { return ctx.inputKeyDown($event, 6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".special-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.special-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  box-sizing: border-box;\n  border: 1px solid #b3b3b3;\n  border-radius: 7px;\n  margin-top: 10px;\n  margin-left: 12px;\n  margin-right: 4px;\n  text-align: center;\n  font-size: 24px;\n  caret-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ1IiLCJmaWxlIjoiY29kZS12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlY2lhbC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGlucHV0IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjYXJldC1jb2xvcjogIHRyYW5zcGFyZW50O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 1861:
/*!************************************************************************!*\
  !*** ./src/app/features/common-components/common-components.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonComponentsModule": () => (/* binding */ CommonComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 2471);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 1193);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration/registration.component */ 9242);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _registration_team_icon_color_selector_team_icon_color_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration/team-icon-color-selector/team-icon-color-selector.component */ 3674);
/* harmony import */ var _code_verification_code_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-verification/code-verification.component */ 3047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);










class CommonComponentsModule {
}
CommonComponentsModule.ɵfac = function CommonComponentsModule_Factory(t) { return new (t || CommonComponentsModule)(); };
CommonComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CommonComponentsModule });
CommonComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService,
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CommonComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent,
        _registration_team_icon_color_selector_team_icon_color_selector_component__WEBPACK_IMPORTED_MODULE_3__.TeamIconColorSelectorComponent,
        _code_verification_code_verification_component__WEBPACK_IMPORTED_MODULE_4__.CodeVerificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent] }); })();


/***/ }),

/***/ 1193:
/*!***********************************************************************!*\
  !*** ./src/app/features/common-components/footer/footer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    routeTo(target) {
        this.router.navigateByUrl(target);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "master-container"], [1, "footer-container"], [1, "brand-container", 3, "click"], ["src", "../../../../assets/svg/JBH_logo.svg", "alt", "J.B. Hunt Logo", 1, "logo"], [1, "brand-title"], [1, "link-container"], ["routerLink", "/competition", 1, "link"], ["routerLink", "/resources", 1, "link"], ["src", "../../../../assets/svg/footer-wave-banner.svg", "alt", "Banner", 1, "banner"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_2_listener() { return ctx.routeTo("/home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Competition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.master-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20vh;\n  padding-bottom: 40px;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  width: 80vw;\n  min-width: 220px;\n  background-color: #40BFFD;\n  border: none;\n  border-radius: 7px;\n  justify-self: center;\n  padding: 20px 20px;\n  box-sizing: border-box;\n  display: grid;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.master-container[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.master-container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n}\n@media screen and (min-width: 769px) {\n  .footer-container[_ngcontent-%COMP%] {\n    grid-template-columns: 300px auto;\n  }\n  .footer-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    min-width: 250px;\n    width: 50%;\n    justify-content: space-evenly;\n  }\n}\n@media screen and (max-width: 768px) {\n  .footer-container[_ngcontent-%COMP%] {\n    gap: 10px;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto;\n  }\n  .footer-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%] {\n    justify-self: center;\n  }\n  .footer-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n    width: 100%;\n    grid-row: 2;\n    justify-content: space-evenly;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUErTUo7QUE1TUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBK01KO0FBN01JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBK01SO0FBN01RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBK01aO0FBN01ZO0VBQ0ksWUFBQTtBQStNaEI7QUE1TVk7RUFDSSxjR25DRjtBSGlQZDtBQTNNWTtFQUNJLGVBQUE7QUE2TWhCO0FBek1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEyTVo7QUF6TVk7RUFDSSxjR2pERjtBSDRQZDtBQXpNZ0I7RUFDSSwwQkFBQTtBQTJNcEI7QUFyTUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUF1TVI7QUFuTUE7RUFFSTtJQUNJLGlDQUFBO0VBcU1OO0VBbk1NO0lBQ0ksc0JBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtFQXFNVjtBQUNGO0FBak1BO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsNkJBQUE7SUFDQSwyQkFBQTtFQW1NTjtFQWpNTTtJQUNJLG9CQUFBO0VBbU1WO0VBaE1NO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSw2QkFBQTtFQWtNVjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXZvMWFlZS5jc3NcIik7XG5cbioge1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDQsIGg1LCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIHAsIGJ1dHRvbiwgbGFiZWwsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSIsIi8vYnV0dG9uIHN0eWxlc1xuLmJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyODhDQztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzUwYzVmZiAsIzBkOGZkMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgIGJvcmRlcjogI0IxRDVFODtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gIH1cbn1cblxuLmJ0bi15ZWxsb3cge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNmZmFlMDA7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjZmZhZTAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLWdyZXkge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNjZWNlY2U7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjY2VjZWNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAjQ0MyRDI0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDMkQyNDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOWQ5NiwgI2NlM2IzMyk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICAjQ0MyRDI0KTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1hc3Rlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgbWluLXdpZHRoOiAyMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwQkZGRDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICAgICAgLmJyYW5kLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnJhbmQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcblxuICAgIC5mb290ZXItY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xuXG4gICAgICAgIC5saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcblxuICAgICAgICAuYnJhbmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMzM7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBzY3JvbGwtbWFyZ2luLXRvcDogNTBweDtcbn0iLCJAaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9idXR0b24tc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MnO1xuXG4vLyBjb2xvciBkZWNsYXJhdGlvbnNcbjpyb290e1xuICAtLWNsci1mb3JlZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1mb290ZXItYmc6ICMwMDA7XG4gIC0tY2xyLWZvb3Rlci10ZXh0OiAjZmZmO1xuICAtLWNsci1oZWFkZXItYmc6ICNmZmY7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG59XG5cblxuLy9BdHRyaWJ1dGUgdmFyaWFibGVzXG4kY29ybmVyUmFkaW91czogMTBweDtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cbi8vVGhpcyBjbGFzcyBzcGVjaWZpZXMgdGhlIHN0eWxlIG9mIGNvbnRhaW5lcnM6XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJGNvcm5lclJhZGlvdXM7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMCwwLDAsIDAuMTApO1xufVxuXG4uaGlkZS1zY3JvbGxiYXIge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi8vY2hhbmdpbmcgY29sb3JzIHRvIG9uIGV2ZXJ5dGhpbmdcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uc2Vjb25kYXJ5LWxpbmssIHNwYW4uZGF0YSwgc3Bhbi5hY2NvcmRpb24tdGFiLCBzZWxlY3QsIG9wdGlvbntcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuXG4ubGluay1ncm91cCwgLmxpbmstaW1nLCAuZHJvcGRvd24gPiB1bHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIGJvcmRlcjogMTVweCBoaWRkZW4gIWltcG9ydGFudDtcbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG50ZXh0YXJlYXtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zdmd7XG4gIGZpbGw6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuXG5ib2R5LmRhcmstbW9kZXtcblxuICAtLWNsci1mb3JlZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1oZWFkZXItYmc6ICMyMDIwMjA7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG5cblxuICAucGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIHRhYmxlLCB0aCwgdGQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmh0bWwsIGJvZHkgeyBcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuIiwiLy8gVGhlbWUgY29sb3JzLlxuJHRoZW1lLWJsdWU6ICMwMjg4Q0M7XG4kdGhlbWUtZ3JleTogICM3MDcwNzA7XG4kdGhlbWUtd2hpdGU6ICNmZmZmZmY7XG4kdGhlbWUteWVsbG93OiAjRkZERDAwO1xuJHRoZW1lLWJsYWNrOiAjMDAwMDAwO1xuJHRoZW1lLXJlZDogI0NDMkQyNDtcblxuLy8gTWlzY2VsbGFuZW91cyBjb2xvcnMuXG4kYm9yZGVyQ29sb3I6ICMwMDdEQkE7XG4kbGlua0NvbG9yOiAjMDA3ZGJhO1xuJHByaW1hcnlCdG5DbHI6ICMwMjg4Q0M7Il19 */"] });


/***/ }),

/***/ 2471:
/*!***********************************************************************!*\
  !*** ./src/app/features/common-components/header/header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sign-up.service */ 1366);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 11);
} }
class HeaderComponent {
    constructor(router, signUpService, authService) {
        this.router = router;
        this.signUpService = signUpService;
        this.authService = authService;
        this.signUpEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.displayBanner = false;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                if (event.url === '/home' || event.url === '/')
                    this.displayBanner = false;
                else {
                    this.displayBanner = true;
                }
            }
        });
    }
    routeTo(target) {
        this.router.navigateByUrl(target);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_0__.SignUpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { signUpEvent: "signUpEvent" }, decls: 15, vars: 3, consts: [[1, "master-container"], [1, "button-container"], [1, "btn", "btn-small", "btn-yellow", 3, "click"], [1, "header-container"], [1, "brand-container", 3, "click"], ["src", "../../../../assets/svg/JBH_logo.svg", "alt", "J.B. Hunt Logo", 1, "logo"], [1, "brand-title"], [1, "link-container"], ["routerLink", "/competition", 1, "link"], ["routerLink", "/resources", 1, "link"], ["class", "blue-banner", 4, "ngIf"], [1, "blue-banner"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.routeTo("/JGdrGCSnGnLyuXYfIRfEdUDA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Judge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_5_listener() { return ctx.routeTo("/home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Competition");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("position", ctx.displayBanner ? "relative" : "absolute");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayBanner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.master-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto auto;\n  box-sizing: border-box;\n  justify-content: center;\n  padding-bottom: 40px;\n  width: 100%;\n  z-index: 1;\n}\n.master-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  grid-row: 1;\n  min-width: 220px;\n  width: 80vw;\n  display: flex;\n  justify-content: flex-end;\n  padding: 5px 0;\n  box-sizing: border-box;\n}\n.master-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 7px;\n  background-color: #FFDD00;\n  color: #000000;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  grid-row: 2;\n  width: 80vw;\n  min-width: 220px;\n  background-color: #40BFFD;\n  border: none;\n  border-radius: 7px;\n  justify-self: center;\n  padding: 20px 20px;\n  box-sizing: border-box;\n  display: grid;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.master-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.master-container[_ngcontent-%COMP%]   .blue-banner[_ngcontent-%COMP%] {\n  top: -90px;\n  left: -50px;\n  position: absolute;\n  height: 150%;\n  width: 150%;\n  background: transparent linear-gradient(64deg, #40BFFD 0%, #0288CC 100%) 0% 0% no-repeat padding-box;\n  transform: rotate(-2deg);\n  z-index: -1;\n}\n@media screen and (min-width: 769px) {\n  .header-container[_ngcontent-%COMP%] {\n    grid-template-columns: 300px auto;\n  }\n  .header-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n    min-width: 250px;\n    width: 50%;\n    justify-content: space-evenly;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header-container[_ngcontent-%COMP%] {\n    gap: 10px;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto;\n  }\n  .header-container[_ngcontent-%COMP%]   .brand-container[_ngcontent-%COMP%] {\n    justify-self: center;\n  }\n  .header-container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n    width: 100%;\n    grid-row: 2;\n    justify-content: space-evenly;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUErTUo7QUE1TUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQStNSjtBQTdNSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUErTVI7QUE3TVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Qkd4Qkc7RUh5QkgsY0d4QkU7QUh1T2Q7QUEzTUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBNk1SO0FBM01RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBNk1aO0FBM01ZO0VBQ0ksWUFBQTtBQTZNaEI7QUExTVk7RUFDSSxjR3JERjtBSGlRZDtBQXpNWTtFQUNJLGVBQUE7QUEyTWhCO0FBdk1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF5TVo7QUF2TVk7RUFDSSxjR25FRjtBSDRRZDtBQXZNZ0I7RUFDSSwwQkFBQTtBQXlNcEI7QUFuTUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvR0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQXFNUjtBQWpNQTtFQUVJO0lBQ0ksaUNBQUE7RUFtTU47RUFqTU07SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO0VBbU1WO0FBQ0Y7QUEvTEE7RUFDSTtJQUNJLFNBQUE7SUFDQSw2QkFBQTtJQUNBLDJCQUFBO0VBaU1OO0VBL0xNO0lBQ0ksb0JBQUE7RUFpTVY7RUE5TE07SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLDZCQUFBO0VBZ01WO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9pdm8xYWVlLmNzc1wiKTtcblxuKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCwgaDUsIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgcCwgYnV0dG9uLCBsYWJlbCwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59IiwiLy9idXR0b24gc3R5bGVzXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI4OENDO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTBjNWZmICwjMGQ4ZmQwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgYm9yZGVyOiAjQjFENUU4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgfVxufVxuXG4uYnRuLXllbGxvdyB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkREMDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2ZmYWUwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNmZmFlMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tZ3JleSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2NlY2VjZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNjZWNlY2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICNDQzJEMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MyRDI0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDk2LCAjY2UzYjMzKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgICNDQzJEMjQpO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubWFzdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtcm93OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIFxuICAgICAgICAuYnRuLXllbGxvdyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUteWVsbG93O1xuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1ibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBCRkZEO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcblxuICAgICAgICAuYnJhbmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5icmFuZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJsdWUtYmFubmVyIHtcbiAgICAgICAgdG9wOiAtOTBweDtcbiAgICAgICAgbGVmdDogLTUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxNTAlO1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDY0ZGVnLCAjNDBCRkZEIDAlLCAjMDI4OENDIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG5cbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0bztcblxuICAgICAgICAubGluay1jb250YWluZXIge1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG5cbiAgICAgICAgLmJyYW5kLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 9242:
/*!***********************************************************************************!*\
  !*** ./src/app/features/common-components/registration/registration.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _assets_jsonFiles_teamIcons_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/jsonFiles/teamIcons.json */ 6125);
/* harmony import */ var _assets_jsonFiles_colors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/jsonFiles/colors.json */ 581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/sign-up.service */ 1366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _team_icon_color_selector_team_icon_color_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-icon-color-selector/team-icon-color-selector.component */ 3674);
/* harmony import */ var _code_verification_code_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code-verification/code-verification.component */ 3047);









function RegistrationComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter your first name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter your last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter a valid school email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "hr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.signUpForm.get("teamName").value, " ");
} }
function RegistrationComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Team has too many members, please talk to the team leader or enter a new team code. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Enter a team name (6-25 chars)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r6.changeBackground());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r6.changeIconColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.signUpForm.get("teamName").value, " ");
} }
function RegistrationComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Accommodations");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.signUpForm.get("accommodations").value, " ");
} }
function RegistrationComponent_div_99_h3_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r9.createdTeamCode, " ");
} }
function RegistrationComponent_div_99_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Copy this team code and send it out to your team. They will need this when they sign up.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "div", 17)(2, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "You're signed up for the 2022 Hackathon. See you there!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RegistrationComponent_div_99_h3_5_Template, 2, 1, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RegistrationComponent_div_99_p_6_Template, 2, 0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14)(8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_div_99_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.closeSignUp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.createdTeamCode !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.createdTeamCode !== null);
} }
class RegistrationComponent {
    constructor(fb, signUpService) {
        this.fb = fb;
        this.signUpService = signUpService;
        this.icons = _assets_jsonFiles_teamIcons_json__WEBPACK_IMPORTED_MODULE_0__;
        this.colors = _assets_jsonFiles_colors_json__WEBPACK_IMPORTED_MODULE_1__;
        this.gradCheckBox = false;
        this.isLookingForTeam = false;
        this.displayTeamHeader = false;
        this.success = false;
        this.invalidTeamCode = false;
        this.createdTeam = false;
    }
    ngOnInit() {
        this.gradCheckBox = false;
        this.isLookingForTeam = false;
        this.signUpForm = this.fb.group({
            'teamName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), hasValue])),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(37), hasValue])),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(37), hasValue])),
            'schoolEmailAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), schoolEmail])),
            'accommodations': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(1000)),
            'isGradStudent': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.gradCheckBox),
            'teamIconCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', hasValue),
            'teamColorCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', hasValue),
            'teamCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
        });
    }
    next(start, end) {
        document.getElementById(start).classList.toggle('hidden');
        document.getElementById(end).classList.toggle('hidden');
    }
    back(start, end) {
        document.getElementById(start).classList.toggle('hidden');
        document.getElementById(end).classList.toggle('hidden');
    }
    reset() {
        document.getElementById('module1').classList.remove('hidden');
        document.getElementById('module2').classList.add('hidden');
        document.getElementById('module3-1').classList.add('hidden');
        document.getElementById('module3-2').classList.add('hidden');
        document.getElementById('module4').classList.add('hidden');
    }
    closeSignUp() {
        this.reset();
        this.signUpForm.reset();
        this.createdTeam = false;
        this.createdTeamCode = null;
        this.success = false;
    }
    checkTeamCode(teamCode) {
        this.invalidTeamCode = false;
        this.signUpService.getTeam(teamCode).subscribe(response => {
            if (response !== null) {
                this.checkTeamSize(response);
            }
            else {
                this.invalidTeamCode = true;
            }
        });
    }
    assignTeam(team) {
        this.signUpForm.get('teamName').setValue(team['teamName']);
        this.signUpForm.get('teamIconCode').setValue(team['teamIconCode']);
        this.signUpForm.get('teamColorCode').setValue(team['teamColorCode']);
    }
    checkTeamSize(team) {
        this.signUpService.getNumberOfTeamMembers(team['teamID']).subscribe(data => {
            if (data < 6) {
                this.checkNumGrads(team);
            }
            else {
                this.invalidTeamCode = true;
            }
        });
    }
    checkNumGrads(team) {
        this.assignTeam(team);
        // this.signUpService.getNumberOfGradStudentsOnTeam(team['teamID']).subscribe(data => {
        //   if (data < 2) {
        //     this.assignTeam(team);
        //   } else {
        //     console.warn(data + 'too many grads');
        //     this.invalidTeamCode = true;
        //   }
        // });
    }
    submit() {
        this.signUpService.postNewParticipant(this.signUpForm.value).subscribe(data => {
            this.afterSubmission(data);
        });
    }
    afterSubmission(participantData) {
        if (this.createdTeam) {
            this.displayTeamCode(JSON.parse(participantData.body).teamID);
        }
        document.getElementById('module4').classList.add('hidden');
        this.success = true;
    }
    displayTeamCode(teamID) {
        this.signUpService.getTeamByTeamID(teamID).subscribe(data => {
            this.createdTeamCode = data.teamCode;
        });
    }
    changeGradVal() {
        this.gradCheckBox = !this.gradCheckBox;
        this.signUpForm.get('isGradStudent').setValue(this.gradCheckBox);
    }
    displayLoadingSvg() {
        this.isLookingForTeam = true;
    }
    saveIcon(icon) {
        this.signUpForm.get('teamIconCode').setValue(icon);
    }
    saveColor(color) {
        this.signUpForm.get('teamColorCode').setValue(color);
    }
    changeBackground() {
        return { 'background-color': this.signUpForm.get('teamColorCode').value };
    }
    changeIconColor() {
        let whiteIcon = false;
        for (let color of this.colors) {
            if (this.signUpForm.get('teamColorCode').value === color.background) {
                whiteIcon = color.darkColor;
                break;
            }
        }
        return {
            'background-color': whiteIcon ? 'white' : 'black',
            '-webkit-mask-image': 'url( "../../../../' + this.signUpForm.get('teamIconCode').value + '")',
        };
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__.SignUpService)); };
RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 100, vars: 17, consts: [[1, "master-container"], [1, "head"], [1, "title"], [1, "form", 3, "formGroup", "keydown.enter"], ["id", "module1", 1, "module", "first"], [1, "content"], [1, "single-field"], ["class", "error", 4, "ngIf"], ["formControlName", "firstName", "type", "text", 1, "form-control"], ["formControlName", "lastName", "type", "text", 1, "form-control"], ["formControlName", "schoolEmailAddress", "type", "text", 1, "form-control"], ["formControlName", "accommodations", "cols", "30", "rows", "10", 1, "text-area"], [1, "checkbox-single-field"], ["type", "checkbox", 1, "checkbox", 3, "click"], [1, "buttons"], [1, "next", "btn", "btn-yellow", 3, "disabled", "click"], ["id", "module2", 1, "module", "hidden", "two"], [1, "group"], [1, "btn", "btn-grey", "icon-btn", 3, "click"], [1, "btn", "btn-grey", 3, "click"], ["id", "module3-1", 1, "module", "hidden", "three-1"], [1, "content", 2, "flex-direction", "column"], [1, "team-code-text"], [3, "submitForm"], ["style", "margin-top: 30px;", "class", "group", 4, "ngIf"], ["style", "margin-top: 30px; position: relative; text-align: center; margin-left: 0;", "class", "error", 4, "ngIf"], [1, "btn", "btn-yellow", 3, "disabled", "click"], ["id", "module3-2", 1, "module", "hidden", "three-2"], [1, "iconColorComponent", 3, "sendIcon", "sendColor"], ["formControlName", "teamName", "type", "text", 1, "team-name", "form-control"], ["id", "module4", 1, "module", "hidden", "four"], [1, "group", "team-overview", 2, "justify-content", "flex-start"], ["class", "team-header", 4, "ngIf"], [1, "info-group"], [1, "category"], [1, "data"], ["class", "info-group", 4, "ngIf"], [1, "btn", "btn-yellow", 3, "click"], ["id", "module5", "class", "module seven", 4, "ngIf"], [1, "error"], [1, "group", 2, "margin-top", "30px"], [1, "separator"], [1, "error", 2, "margin-top", "30px", "position", "relative", "text-align", "center", "margin-left", "0"], [1, "team-header"], [1, "color-icon-container", 3, "ngStyle"], [1, "selected-icon", 3, "ngStyle"], [1, "data", "team-name"], ["id", "module5", 1, "module", "seven"], [2, "text-align", "center"], [1, "message"], [4, "ngIf"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function RegistrationComponent_Template_form_keydown_enter_4_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "First Name* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RegistrationComponent_label_10_Template, 2, 0, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Last Name* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RegistrationComponent_label_15_Template, 2, 0, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 6)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "School Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, RegistrationComponent_label_20_Template, 2, 0, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 6)(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Accommodations");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 12)(27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_input_click_27_listener() { return ctx.changeGradVal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Graduate Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 14)(31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_31_listener() { return ctx.next("module1", "module2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16)(34, "div", 5)(35, "div", 17)(36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_36_listener() { return ctx.next("module2", "module3-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " I have a team code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_39_listener() { ctx.next("module2", "module4"); return ctx.teamModule = "module2"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Pair me with a random team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_42_listener() { ctx.next("module2", "module3-2"); return ctx.createdTeam = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " I want to create a team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 14)(46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_46_listener() { ctx.back("module2", "module1"); return ctx.signUpForm.get("teamName").setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 20)(49, "div", 21)(50, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Enter Team Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 17)(53, "app-code-verification", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitForm", function RegistrationComponent_Template_app_code_verification_submitForm_53_listener($event) { return ctx.checkTeamCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, RegistrationComponent_div_54_Template, 3, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, RegistrationComponent_div_55_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 14)(57, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_57_listener() { ctx.back("module3-1", "module2"); return ctx.signUpForm.get("teamName").setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_59_listener() { ctx.next("module3-1", "module4"); return ctx.teamModule = "module3-1"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 27)(62, "div", 5)(63, "app-team-icon-color-selector", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sendIcon", function RegistrationComponent_Template_app_team_icon_color_selector_sendIcon_63_listener($event) { return ctx.saveIcon($event); })("sendColor", function RegistrationComponent_Template_app_team_icon_color_selector_sendColor_63_listener($event) { return ctx.saveColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 6)(65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Team Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, RegistrationComponent_label_67_Template, 2, 0, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 14)(70, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_70_listener() { ctx.back("module3-2", "module2"); return ctx.signUpForm.get("teamName").setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_72_listener() { ctx.next("module3-2", "module4"); return ctx.teamModule = "module3-2"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 30)(75, "div", 5)(76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, RegistrationComponent_div_77_Template, 5, 3, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 33)(79, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 33)(84, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, RegistrationComponent_div_88_Template, 5, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 33)(90, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Graduate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 14)(95, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_95_listener() { return ctx.back("module4", ctx.teamModule); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_97_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, RegistrationComponent_div_99_Template, 10, 2, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("firstName").invalid && ctx.signUpForm.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("lastName").invalid && ctx.signUpForm.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("schoolEmailAddress").invalid && ctx.signUpForm.get("schoolEmailAddress").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.signUpForm.get("firstName").invalid || ctx.signUpForm.get("lastName").invalid || ctx.signUpForm.get("schoolEmailAddress").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("teamName").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.invalidTeamCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.signUpForm.get("teamName").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("teamName").invalid && ctx.signUpForm.get("teamName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.signUpForm.get("teamName").invalid || ctx.signUpForm.get("teamIconCode").invalid || ctx.signUpForm.get("teamColorCode").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("teamName").valid && ctx.signUpForm.get("teamIconCode").valid && ctx.signUpForm.get("teamColorCode").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.signUpForm.get("firstName").value, " ", ctx.signUpForm.get("lastName").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.signUpForm.get("schoolEmailAddress").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("accommodations").value !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.signUpForm.get("isGradStudent").value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.success === true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _team_icon_color_selector_team_icon_color_selector_component__WEBPACK_IMPORTED_MODULE_3__.TeamIconColorSelectorComponent, _code_verification_code_verification_component__WEBPACK_IMPORTED_MODULE_4__.CodeVerificationComponent], styles: [".hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.master-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n  height: 100%;\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 5% 90% 5%;\n  color: white;\n}\n\n.master-container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-row: 1;\n  grid-column: 2;\n  height: 75px;\n  width: 100%;\n  text-align: center;\n}\n\n.master-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-bottom: 0.1em solid #ffffff;\n  padding: 0.25em 2.5em;\n}\n\n.master-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  grid-row: 2;\n  grid-column: 2;\n  height: 100%;\n  width: 100%;\n}\n\n.master-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto auto;\n  width: 100%;\n}\n\n.master-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  justify-self: center;\n  grid-row: 1;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.master-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  height: 75px;\n  width: 100%;\n  grid-row: 2;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.master-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n}\n\n.master-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.group.team-overview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.team-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-items: center;\n  border: 0.15em solid #ffffff;\n  border-radius: 0.5em;\n  width: 80%;\n  height: 100%;\n  padding: 1em;\n  box-sizing: border-box;\n  margin: 1em 0;\n}\n\n.team-header[_ngcontent-%COMP%]   .color-icon-container[_ngcontent-%COMP%] {\n  width: 5em;\n  height: 5em;\n  border-radius: 0.5rem;\n  border: 2px solid #000;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.team-header[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%] {\n  -webkit-mask-position: center;\n          mask-position: center;\n  height: 5em;\n  width: 5em;\n  -webkit-mask-size: 4em;\n          mask-size: 4em;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n.team-header[_ngcontent-%COMP%]   .team-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 1rem;\n}\n\n.checkbox-single-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.checkbox-single-field[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  margin: 0;\n  height: 1.5em;\n  width: 1.5em;\n  border: 0.15em solid #fff;\n  border-radius: 0.15em;\n  display: grid;\n  place-content: center;\n}\n\n.checkbox-single-field[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.15em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  background-color: #fff;\n}\n\n.checkbox-single-field[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]:checked::before {\n  transform: scale(1);\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 5rem;\n}\n\n.icon-btn[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n  width: 30%;\n}\n\n.icon-btn[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n\n.single-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0.5em;\n  box-sizing: border-box;\n  border-radius: 0.5em;\n}\n\n.single-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .single-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .single-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-top: 0.15em;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n  border: 0.15em solid #ffffff;\n  border-radius: 0.5em;\n  color: #ffffff;\n  background-color: transparent;\n}\n\n.single-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .single-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .single-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6588235294);\n  outline: none;\n}\n\n.single-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n\n.single-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 6rem;\n}\n\n.team-code-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  letter-spacing: 0px;\n  color: white;\n  opacity: 1;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1em 0 0 0;\n}\n\n.loading-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  -webkit-animation-name: spin;\n          animation-name: spin;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  white-space: nowrap;\n}\n\n.error[_ngcontent-%COMP%] {\n  white-space: inherit;\n  color: #e30b00;\n  background-color: #ffbcb9;\n  border-radius: 0.5em;\n  padding: 0 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border: 0.15em solid #000000;\n  border-radius: 0.5em;\n}\n\n.separator[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0.15em solid black;\n  margin-top: 10px;\n  height: 0px;\n  flex-basis: 100%;\n}\n\n.info-group[_ngcontent-%COMP%] {\n  border-left: 2px solid #ffffff;\n  padding-left: 0.5rem;\n  width: 100%;\n  margin: 0.5rem 0;\n}\n\n.info-group[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n\n.iconColorComponent[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n\n@media screen and (max-width: 1300px) {\n  .icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFFSTtFQUNJLGtDQUFBO0VBQ0EscUJBQUE7QUFBUjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRFI7O0FBR1E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBRFo7O0FBR1k7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRGhCOztBQUlZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFGaEI7O0FBT0k7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMUjs7QUFPUTtFQUNJLGdCQUFBO0FBTFo7O0FBV0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBUko7O0FBV0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFZSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO1VBQUEsY0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFWUjs7QUFhSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVhSOztBQWVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBWko7O0FBY0k7RUFDSSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFaUjs7QUFjUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBWlo7O0FBZVE7RUFDSSxtQkFBQTtBQWJaOztBQWtCQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFmSjs7QUFpQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQWZSOztBQWlCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBZlo7O0FBcUJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFsQko7O0FBb0JJOzs7RUFHSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBbEJSOztBQW9CUTs7O0VBQ0ksMENBQUE7RUFDQSwwREFBQTtFQUNBLGFBQUE7QUFoQlo7O0FBb0JJO0VBQ0ksWUFBQTtBQWxCUjs7QUFxQkk7RUFDSSxZQUFBO0FBbkJSOztBQXVCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFwQko7O0FBd0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBckJKOztBQXdCQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FBckJKOztBQXdCQTtFQUNJO0lBQ0ksdUJBQUE7RUFyQk47RUF3QkU7SUFDSSx5QkFBQTtFQXRCTjtBQUNGOztBQWVBO0VBQ0k7SUFDSSx1QkFBQTtFQXJCTjtFQXdCRTtJQUNJLHlCQUFBO0VBdEJOO0FBQ0Y7O0FBeUJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksNEJBQUE7RUFDQSxvQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBdkJKOztBQXlCSTtFQUNJLGdCQUFBO0FBdkJSOztBQTJCQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMEJJO0VBQ0ksZ0JBQUE7QUF4QlI7O0FBNEJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUF6Qko7O0FBNEJBO0VBQ0k7SUFDSSxhQUFBO0VBekJOO0FBQ0YiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1hc3Rlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSA5MCUgNSU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgLmhlYWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xMGVtIHNvbGlkICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAyLjVlbTtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAubW9kdWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmdyb3VwLnRlYW0tb3ZlcnZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVhbS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDFlbSAwO1xuXG5cbiAgICAuY29sb3ItaWNvbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNWVtO1xuICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC1pY29uIHtcbiAgICAgICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgbWFzay1zaXplOiA0ZW07XG4gICAgICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLnRlYW0tbmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICB9XG59XG5cbi5jaGVja2JveC1zaW5nbGUtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5jaGVja2JveCB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogMC43NWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjc1ZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZDo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pY29uLWJ0biB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVyZW07XG5cbiAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAzMCU7XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLnNpbmdsZS1maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcblxuICAgIGlucHV0LFxuICAgIHNlbGVjdCxcbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMTVlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzMztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjRkZGRkZGQTg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgfVxufVxuXG4udGVhbS1jb2RlLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xufVxuXG4ubG9hZGluZy1pY29uIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbmxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmVycm9yIHtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgY29sb3I6ICNlMzBiMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmNiOTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuXG4uaW5mby1ncm91cCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG5cbiAgICAuY2F0ZWdvcnkge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLm1lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMyB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxufVxuXG4uaWNvbkNvbG9yQ29tcG9uZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIC5pY29uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */"] });
function hasValue(control) {
    const value = control.value;
    if (value === '' || value == null) {
        return { 'emptyString': true };
    }
    else if (value.includes('  ')) {
        return { 'emptyString': true };
    }
    return null;
}
function schoolEmail(control) {
    const value = control.value;
    if (value == null) {
        return null;
    }
    else if (!value.includes('.edu')) {
        return { 'notSchoolEmail': true };
    }
    return null;
}


/***/ }),

/***/ 3674:
/*!************************************************************************************************************************!*\
  !*** ./src/app/features/common-components/registration/team-icon-color-selector/team-icon-color-selector.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamIconColorSelectorComponent": () => (/* binding */ TeamIconColorSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _assets_jsonFiles_colors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../assets/jsonFiles/colors.json */ 581);
/* harmony import */ var _assets_jsonFiles_teamIcons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/jsonFiles/teamIcons.json */ 6125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function TeamIconColorSelectorComponent_div_9_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamIconColorSelectorComponent_div_9_img_1_Template_img_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.saveIcon(i_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", icon_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", icon_r3.name);
} }
function TeamIconColorSelectorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TeamIconColorSelectorComponent_div_9_img_1_Template, 1, 2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.teamIcons);
} }
function TeamIconColorSelectorComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamIconColorSelectorComponent_div_10_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const i_r9 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.saveColor(i_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const color_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", color_r8.background);
} }
function TeamIconColorSelectorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TeamIconColorSelectorComponent_div_10_div_2_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.colors);
} }
class TeamIconColorSelectorComponent {
    constructor() {
        this.sendIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.sendColor = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.colors = _assets_jsonFiles_colors_json__WEBPACK_IMPORTED_MODULE_0__;
        this.teamIcons = _assets_jsonFiles_teamIcons_json__WEBPACK_IMPORTED_MODULE_1__;
        this.onIconMenu = false;
        this.onColorPicker = true;
        this.selectedIcon = this.teamIcons[0].icon;
        this.selectedColor = this.colors[0].background;
        this.whiteIcon = this.colors[0].darkColor;
    }
    changeIconColor() {
        return {
            'background-color': this.whiteIcon ? 'white' : 'black',
            '-webkit-mask-image': 'url(' + this.selectedIcon + ')'
        };
    }
    showIcons() {
        this.onIconMenu = true;
        this.onColorPicker = false;
    }
    showColors() {
        this.onColorPicker = true;
        this.onIconMenu = false;
    }
    saveIcon(index) {
        this.selectedIcon = this.teamIcons[index].icon;
        this.sendIcon.emit(this.selectedIcon);
    }
    saveColor(index) {
        this.selectedColor = this.colors[index].background;
        this.whiteIcon = this.colors[index].darkColor;
        this.sendColor.emit(this.selectedColor);
    }
    changeBackground() {
        return { 'background-color': this.selectedColor };
    }
    randomSelector() {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.selectedColor = randomColor.background;
        this.whiteIcon = randomColor.darkColor;
        this.sendColor.emit(this.selectedColor);
        const randomIcon = this.teamIcons[Math.floor(Math.random() * this.teamIcons.length)];
        this.selectedIcon = randomIcon.icon;
        this.sendIcon.emit(this.selectedIcon);
    }
    ngOnInit() {
        this.onIconMenu = true;
        this.onColorPicker = false;
        this.sendIcon.emit(this.selectedIcon);
        this.sendColor.emit(this.selectedColor);
    }
}
TeamIconColorSelectorComponent.ɵfac = function TeamIconColorSelectorComponent_Factory(t) { return new (t || TeamIconColorSelectorComponent)(); };
TeamIconColorSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TeamIconColorSelectorComponent, selectors: [["app-team-icon-color-selector"]], outputs: { sendIcon: "sendIcon", sendColor: "sendColor" }, decls: 16, vars: 6, consts: [[1, "content-container"], [1, "headings-container"], [3, "ngClass", "click"], [1, "grid-container"], ["class", "group selector all-icons", 4, "ngIf"], ["class", "group selector", 4, "ngIf"], [1, "group", "selected-icon-container"], [1, "selected-icon-background", 3, "ngStyle"], [1, "selected-icon", 3, "ngStyle"], [1, "btn", "btn-yellow", 3, "click"], [1, "group", "selector", "all-icons"], ["class", "icon", 3, "src", "alt", "click", 4, "ngFor", "ngForOf"], [1, "icon", 3, "src", "alt", "click"], [1, "group", "selector"], [1, "color-grid"], [4, "ngFor", "ngForOf"], [1, "color-container", 3, "click"]], template: function TeamIconColorSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamIconColorSelectorComponent_Template_div_click_2_listener() { return ctx.showIcons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamIconColorSelectorComponent_Template_div_click_5_listener() { return ctx.showColors(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TeamIconColorSelectorComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TeamIconColorSelectorComponent_div_10_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TeamIconColorSelectorComponent_Template_button_click_14_listener() { return ctx.randomSelector(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Surpise Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.onIconMenu ? "selected-heading left-heading" : "left-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.onColorPicker ? "selected-heading right-heading" : "right-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onIconMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.onColorPicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.changeBackground());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.changeIconColor());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: [".group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  border-radius: 5pt;\n  box-shadow: 0px 0px 10px rgba(112, 112, 112, 0.3098039216);\n  background-color: #ffffff;\n  color: black;\n}\n\n.content-container[_ngcontent-%COMP%]   .headings-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: 5pt 5pt 0pt 0pt;\n  overflow-y: hidden;\n  height: 3em;\n  border-bottom: 1pt solid rgba(0, 0, 0, 0.2);\n}\n\n.content-container[_ngcontent-%COMP%]   .headings-container[_ngcontent-%COMP%]   .left-heading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.content-container[_ngcontent-%COMP%]   .headings-container[_ngcontent-%COMP%]   .right-heading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.content-container[_ngcontent-%COMP%]   .headings-container[_ngcontent-%COMP%]   .selected-heading[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(112, 112, 112, 0.3098039216);\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 60% 40%;\n  padding: 2rem;\n  height: 100%;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .color-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .color-grid[_ngcontent-%COMP%]   .color-container[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .color-grid[_ngcontent-%COMP%]   .color-container[_ngcontent-%COMP%]:hover {\n  width: 10px;\n  height: 10px;\n  z-index: 2;\n  border-width: 3px;\n  border: black solid;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .all-icons[_ngcontent-%COMP%] {\n  align-self: center;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  height: 100%;\n  min-height: 5rem;\n  max-height: 10rem;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .all-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  border-radius: 0.15rem;\n}\n\n.content-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .all-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  background-color: rgb(235, 235, 235);\n}\n\n.content-container[_ngcontent-%COMP%]   .selected-icon-background[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-radius: 0.5rem;\n  border: 2px solid #000;\n  align-items: center;\n  background-color: blue;\n  margin: 1em;\n}\n\n.content-container[_ngcontent-%COMP%]   .selected-icon-background[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%] {\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n@media screen and (min-width: 768px) {\n  .grid-container[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n\n  .selected-icon-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .selected-icon-container[_ngcontent-%COMP%]   .selected-icon-background[_ngcontent-%COMP%] {\n    height: 5rem;\n    width: 5rem;\n  }\n  .selected-icon-container[_ngcontent-%COMP%]   .selected-icon-background[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%] {\n    height: 5em;\n    width: 5em;\n    -webkit-mask-size: 4rem;\n            mask-size: 4rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-rows: auto auto;\n  }\n  .grid-container[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%] {\n    grid-row: 1;\n    grid-column: 1/span 2;\n  }\n\n  .selected-icon-container[_ngcontent-%COMP%] {\n    grid-row: 2;\n    grid-column: 1/span 2;\n    flex-direction: row;\n    align-self: center;\n    justify-self: center;\n    flex-wrap: wrap;\n  }\n  .selected-icon-container[_ngcontent-%COMP%]   .selected-icon-background[_ngcontent-%COMP%] {\n    height: 3rem;\n    width: 3rem;\n  }\n  .selected-icon-container[_ngcontent-%COMP%]   .selected-icon-background[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%] {\n    height: 3em;\n    width: 3em;\n    -webkit-mask-size: 2rem;\n            mask-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0taWNvbi1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSwwREFBQTtFQUNBLHFDQUFBO0FBRE47O0FBS0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUhKOztBQUtJO0VBQ0UsV0FBQTtBQUhOOztBQU1JO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUZBQUE7QUFKTjs7QUFPTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTFI7O0FBT1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFY7O0FBVUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSTjs7QUFVTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFSUjs7QUFVUTtFQUNFLG9DQUFBO0FBUlY7O0FBY0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVpKOztBQWNJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFaTjs7QUFpQkE7RUFHSTtJQUNFLGNBQUE7RUFoQko7O0VBb0JBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBakJGO0VBbUJFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFqQko7RUFtQkk7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQWpCTjtBQUNGOztBQXNCQTtFQUNFO0lBQ0UsNkJBQUE7RUFwQkY7RUFzQkU7SUFDRSxXQUFBO0lBQ0EscUJBQUE7RUFwQko7O0VBd0JBO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtFQXJCRjtFQXVCRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBckJKO0VBdUJJO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSx1QkFBQTtZQUFBLGVBQUE7RUFyQk47QUFDRiIsImZpbGUiOiJ0ZWFtLWljb24tY29sb3Itc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDVwdDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM3MDcwNzA0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6IGJsYWNrO1xuXG4gIC5oZWFkaW5ncy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHQgNXB0IDBwdCAwcHQ7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgICAubGVmdC1oZWFkaW5nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAucmlnaHQtaGVhZGluZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkLWhlYWRpbmcge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM3MDcwNzA0ZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgfVxuICB9XG5cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnNlbGVjdG9yIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb2xvci1ncmlkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcblxuXG4gICAgICAuY29sb3ItY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgICBib3JkZXI6IGJsYWNrIHNvbGlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFsbC1pY29ucyB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiA1cmVtO1xuICAgICAgbWF4LWhlaWdodDogMTByZW07XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3RlZC1pY29uLWJhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luOiAxZW07XG5cbiAgICAuc2VsZWN0ZWQtaWNvbiB7XG4gICAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZ3JpZC1jb250YWluZXIge1xuXG4gICAgLnNlbGVjdG9yIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3RlZC1pY29uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnNlbGVjdGVkLWljb24tYmFja2dyb3VuZCB7XG4gICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICB3aWR0aDogNXJlbTtcblxuICAgICAgLnNlbGVjdGVkLWljb24ge1xuICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgbWFzay1zaXplOiA0cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZ3JpZC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuXG4gICAgLnNlbGVjdG9yIHtcbiAgICAgIGdyaWQtcm93OiAxO1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gICAgfVxuICB9XG5cbiAgLnNlbGVjdGVkLWljb24tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuc2VsZWN0ZWQtaWNvbi1iYWNrZ3JvdW5kIHtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuXG4gICAgICAuc2VsZWN0ZWQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB3aWR0aDogM2VtO1xuICAgICAgICBtYXNrLXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });


/***/ }),

/***/ 3812:
/*!*********************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/competition/competition.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetitionComponent": () => (/* binding */ CompetitionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _common_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-components/registration/registration.component */ 9242);
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countdown-timer/countdown-timer.component */ 181);
/* harmony import */ var _current_teams_current_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../current-teams/current-teams.component */ 5345);





function CompetitionComponent_app_countdown_timer_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-countdown-timer", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("date", ctx_r0.signUpDeadline)("message", "Sign Up Deadline");
} }
function CompetitionComponent_app_countdown_timer_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-countdown-timer", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("date", ctx_r1.hackathonStart)("message", "Time Until Hackathon");
} }
function CompetitionComponent_app_countdown_timer_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-countdown-timer", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("date", ctx_r2.hackathonEnd)("message", "Time Until End of Hackathon");
} }
class CompetitionComponent {
    constructor() {
        this.hackathonStart = new Date('Mar 11 2023 18:00:00');
        this.signUpDeadline = new Date('Mar 4 2023 23:59:00');
        this.hackathonEnd = new Date('Mar 13 2023 16:00:00');
        this.dateNow = new Date();
        this.showSignUpCountdown = false;
        this.showHackathonStartCountdown = false;
        this.showHackathonEndCountdown = false;
    }
    ngOnInit() {
        if (this.dateNow < this.signUpDeadline) {
            this.showSignUpCountdown = true;
        }
        else if (this.dateNow < this.hackathonStart && this.showSignUpCountdown === false) {
            this.showHackathonStartCountdown = true;
        }
        else if (this.dateNow < this.hackathonEnd && this.showSignUpCountdown === false && this.showHackathonStartCountdown === false) {
            this.showHackathonEndCountdown = true;
        }
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
CompetitionComponent.ɵfac = function CompetitionComponent_Factory(t) { return new (t || CompetitionComponent)(); };
CompetitionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CompetitionComponent, selectors: [["app-competition"]], decls: 19, vars: 3, consts: [[1, "content-container"], [1, "title-container"], [1, "text-container"], [1, "section-title"], [1, "subheader"], [1, "signup-container"], [1, "blue-banner"], [1, "grid-container"], ["src", "../../../../assets/svg/competition-people.svg", "alt", "competition graphic", 1, "competition-image"], [1, "right-container"], [1, "timer-container"], [3, "date", "message", 4, "ngIf"], [1, "teams-container"], [3, "date", "message"]], template: function CompetitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Competition");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "The latest on all things Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CompetitionComponent_app_countdown_timer_13_Template, 1, 2, "app-countdown-timer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CompetitionComponent_app_countdown_timer_14_Template, 1, 2, "app-countdown-timer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CompetitionComponent_app_countdown_timer_15_Template, 1, 2, "app-countdown-timer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-current-teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSignUpCountdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showHackathonStartCountdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showHackathonEndCountdown);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _common_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationComponent, _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_1__.CountdownTimerComponent, _current_teams_current_teams_component__WEBPACK_IMPORTED_MODULE_2__.CurrentTeamsComponent], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.subheader[_ngcontent-%COMP%] {\n  color: #707070;\n}\n.content-container[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  min-height: 100%;\n}\n.content-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  padding: 15% 0em;\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  align-items: flex-start;\n}\n.content-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  margin: 0 0 0 18%;\n}\n.content-container[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 10vh 0;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.content-container[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .blue-banner[_ngcontent-%COMP%] {\n  width: 200vw;\n  height: 80%;\n  left: -5vw;\n  position: absolute;\n  background: transparent linear-gradient(64deg, #40BFFD 0%, var(--unnamed-color-0288cc) 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(64deg, #40BFFD 0%, #0288CC 100%) 0% 0% no-repeat padding-box;\n  transform: rotate(-2deg);\n  z-index: -1;\n}\n.content-container[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 40% 60%;\n}\n.content-container[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .competition-image[_ngcontent-%COMP%] {\n  grid-column: 1;\n  align-self: center;\n  justify-self: center;\n}\n.content-container[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%] {\n  margin: 10vh 0;\n  padding: 0 10%;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 800px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  justify-self: center;\n}\n.content-container[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n}\n.competition-image[_ngcontent-%COMP%] {\n  width: 500px;\n}\n.teams-container[_ngcontent-%COMP%] {\n  margin: 10% 0 20% 0;\n  width: 100%;\n  height: 100%;\n  display: grid;\n}\n@media screen and (min-width: 1301px) {\n  .right-container[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .competition-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .right-container[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImNvbXBldGl0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrREFBQTtBQ0NSO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBREdBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUU7RUFDRSw2Q0FBQTtBQ0FKO0FER0U7RUFDRSw2Q0FBQTtBQ0RKO0FESUU7RUFDSSw2Q0FBQTtFQUNBLGVBQUE7QUNGTjtBREdNO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRFY7QURNQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSEY7QURLRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNKSjtBRFFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNMRjtBRE9FO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0xKO0FEUUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ05KO0FEVUE7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FDUEY7QURTRTtFQUNFLDZDQUFBO0FDUEo7QURVRTtFQUNFLDZDQUFBO0FDUko7QUZ2RUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLG1CQUFBO0FFMEVGO0FDN0dBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FEZ0hKO0FDN0dBO0VBQ0ksdUJBQUE7QURnSEo7QUVqSEE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUZvSEY7QUU3R0E7RUFDRSx1QkFBQTtBRmdIRjtBRTdHQTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtFQUFBLHVDQUFBO0VBQ0EsY0FBQTtFQUFBLDRCQUFBO0FGZ0hGO0FFNUdBO0VBQ0UsbUJBZGM7RUFlZCwwQ0FBQTtBRitHRjtBRTNHRTs7RUFFRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGOEdKO0FFNUdFO0VBQ0UsYUFBQTtBRjhHSjtBRXZHQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLDRCQUFBO0FGMEdGO0FFeEdFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FGMEdKO0FFdEdBO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtBRnlHRjtBRXRHQTtFQUNFLHNCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxjQ2xFWTtFRG1FWiw4QkFBQTtBRnlHRjtBRXZHRTtFQUNFLGVBQUE7QUZ5R0o7QUVyR0E7RUFDRSxZQUFBO0FGd0dGO0FFckdBO0VBQ0UsYUFBQTtFQUFBLDJCQUFBO0FGd0dGO0FFcEdBO0VBRUUsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUZzR0Y7QUVuR0U7RUFDRSxXQUFBO0VBQUEsNEJBQUE7QUZxR0o7QUVsR0U7RUFDRSx5QkFBQTtFQUFBLHVDQUFBO0VBQ0Esb0NBQUE7RUFBQSxrREFBQTtFQUNBLGlDQUFBO0VBQUEsa0RBQUE7QUZvR0o7QUVqR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUZvR0Y7QUE1TUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQStNRjtBQTVNQTtFQUNFLGNBQUE7QUErTUY7QUE1TUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBK01GO0FBN01FO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBK01KO0FBN01JO0VBQ0UsaUJBQUE7QUErTU47QUEzTUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBNk1KO0FBM01JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3SEFBQTtFQUNBLG9HQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBNk1OO0FBMU1JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQTRNTjtBQTFNTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBNE1SO0FBek1NO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBMk1SO0FBek1RO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBMk1WO0FBbk1BO0VBQ0UsWUFBQTtBQXNNRjtBQW5NQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBc01GO0FBbk1BO0VBQ0U7SUFDRSxjQUFBO0VBc01GO0FBQ0Y7QUFuTUE7RUFDRTtJQUNFLGFBQUE7RUFxTUY7O0VBbE1BO0lBQ0UscUJBQUE7RUFxTUY7QUFDRiIsImZpbGUiOiJjb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXZvMWFlZS5jc3NcIik7XG5cbioge1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDQsIGg1LCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIHAsIGJ1dHRvbiwgbGFiZWwsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSIsIi8vYnV0dG9uIHN0eWxlc1xuLmJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyODhDQztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzUwYzVmZiAsIzBkOGZkMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgIGJvcmRlcjogI0IxRDVFODtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gIH1cbn1cblxuLmJ0bi15ZWxsb3cge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNmZmFlMDA7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjZmZhZTAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLWdyZXkge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNjZWNlY2U7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjY2VjZWNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAjQ0MyRDI0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDMkQyNDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOWQ5NiwgI2NlM2IzMyk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICAjQ0MyRDI0KTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTUlIDBlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAwIDAgMCAxOCU7XG4gICAgfVxuICB9XG5cbiAgLnNpZ251cC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDEwdmggMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmJsdWUtYmFubmVyIHtcbiAgICAgIHdpZHRoOiAyMDB2dztcbiAgICAgIGhlaWdodDogODAlO1xuICAgICAgbGVmdDogLTV2dztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg2NGRlZywgIzQwQkZGRCAwJSwgdmFyKC0tdW5uYW1lZC1jb2xvci0wMjg4Y2MpIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg2NGRlZywgIzQwQkZGRCAwJSwgIzAyODhDQyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xuXG4gICAgICAuY29tcGV0aXRpb24taW1hZ2Uge1xuICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMTB2aCAwO1xuICAgICAgICBwYWRkaW5nOiAwIDEwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuXG4gICAgICAgIC50aW1lci1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4uY29tcGV0aXRpb24taW1hZ2Uge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi50ZWFtcy1jb250YWluZXIge1xuICBtYXJnaW46IDEwJSAwIDIwJSAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAxcHgpIHtcbiAgLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5jb21wZXRpdGlvbi1pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5yaWdodC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 181:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/countdown-timer/countdown-timer.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownTimerComponent": () => (/* binding */ CountdownTimerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CountdownTimerComponent {
    constructor() {
        this.dateNow = new Date();
        this.milliSecondsInASecond = 1000;
        this.hoursInADay = 24;
        this.minutesInAnHour = 60;
        this.SecondsInAMinute = 60;
    }
    ngOnInit() {
        this.dDay = new Date(this.date);
        this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000)
            .subscribe(x => { this.getTimeDifference(); });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getTimeDifference() {
        this.timeDifference = this.dDay.getTime() - new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }
    allocateTimeUnits(timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute)
            % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) /
            (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    }
}
CountdownTimerComponent.ɵfac = function CountdownTimerComponent_Factory(t) { return new (t || CountdownTimerComponent)(); };
CountdownTimerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CountdownTimerComponent, selectors: [["app-countdown-timer"]], inputs: { date: "date", message: "message" }, decls: 8, vars: 5, consts: [[1, "timer-container"], [1, "timer", "card"], [1, "title"], [1, "timer-row"], [1, "timer-element"]], template: function CountdownTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", ctx.daysToDday, "d ", ctx.hoursToDday, "h ", ctx.minutesToDday, "m ", ctx.secondsToDday, "s");
    } }, styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.timer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.timer-container[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  background: #FFDD00 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1019607843);\n  border-radius: 7px;\n  opacity: 1;\n  color: rgb(0, 0, 0);\n  width: 100%;\n  padding: 10px 0;\n  box-sizing: border-box;\n  text-align: center;\n}\n.timer-container[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: proxima-nova, sans-serif;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n.timer-container[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .timer-element[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImNvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0ksU0FBQTtBQStNSjtBQTVNQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQStNSjtBQTdNSTtFQUNJLCtDQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQThNUjtBQTVNUTtFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQThNWjtBQTFNWTtFQUNJLGdCQUFBO0FBNE1oQiIsImZpbGUiOiJjb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGltZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLnRpbWVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGREQwMCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjMDAwMDAwMUE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIG1pbi13aWR0aDogMjIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZXItZWxlbWVudCB7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 5345:
/*!*************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/current-teams/current-teams.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentTeamsComponent": () => (/* binding */ CurrentTeamsComponent)
/* harmony export */ });
/* harmony import */ var _assets_jsonFiles_colors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/jsonFiles/colors.json */ 581);
/* harmony import */ var _assets_jsonFiles_teamIcons_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/jsonFiles/teamIcons.json */ 6125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sign-up.service */ 1366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);








function CurrentTeamsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No teams have signed up yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "It wouldn't hurt to be first, would it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function CurrentTeamsComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "box-shadow": a0 }; };
const _c1 = function (a0, a1) { return { "background-color": a0, "box-shadow": a1 }; };
const _c2 = function (a0, a1, a2) { return { "-webkit-mask-image": a0, "mask-image": a1, "background-color": a2 }; };
function CurrentTeamsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10)(5, "div", 11)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "object", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const team_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, "0px 0px 10px " + team_r3.teamColor + "4D"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c1, team_r3.teamColorCode, "0px 0px 10px " + team_r3.teamColorCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](10, _c2, "url(" + team_r3.teamIconCode + ")", "url(" + team_r3.teamIconCode + ")", team_r3.teamIconColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", team_r3.teamName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.teamMemberAmount[i_r4]);
} }
class CurrentTeamsComponent {
    constructor(signUpService, fb, router, authService) {
        this.signUpService = signUpService;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.teams = [];
        this.icons = _assets_jsonFiles_teamIcons_json__WEBPACK_IMPORTED_MODULE_1__;
        this.colors = _assets_jsonFiles_colors_json__WEBPACK_IMPORTED_MODULE_0__;
        this.teamMemberAmount = [];
        this.userOnWinningTeam = false;
        this.teamInfoFilled = false;
        this.teamNames = [];
    }
    ngOnInit() {
        this.getTeams();
    }
    getTeams() {
        this.signUpService.getAllTeams().subscribe(data => {
            data.forEach(item => {
                item.teamIconCode = this.getIconSource(item.teamIconCode);
                item.teamIconColor = this.getIconColor(item.teamColorCode);
                this.teams.push(item);
                this.getAmountOfTeamMembers(item['teamID']);
                this.teamNames.push({ label: item.teamName, value: item.teamName });
            });
        });
    }
    getAmountOfTeamMembers(teamID) {
        this.signUpService.getNumberOfTeamMembers(teamID).subscribe(data => {
            this.teamMemberAmount.push(data);
        });
    }
    getIconSource(iconName) {
        let iconSource = '';
        this.icons.forEach((icon) => {
            if (icon.icon === iconName) {
                iconSource = ('../../../../' + icon.icon);
            }
        });
        return iconSource;
    }
    getIconColor(color) {
        let iconColor = 'black';
        this.colors.forEach((c) => {
            if (c.background === color) {
                iconColor = c.darkColor ? 'white' : 'black';
            }
        });
        return iconColor;
    }
}
CurrentTeamsComponent.ɵfac = function CurrentTeamsComponent_Factory(t) { return new (t || CurrentTeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__.SignUpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
CurrentTeamsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CurrentTeamsComponent, selectors: [["app-current-teams"]], decls: 4, vars: 3, consts: [[1, "teams"], ["class", "noteams-card", 4, "ngIf"], ["class", "teams-title", 4, "ngIf"], ["class", "team-card", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "noteams-card"], [1, "teams-title"], [1, "team-card", 3, "ngStyle"], [1, "left-container"], [1, "img", 3, "ngStyle"], [1, "team-icon", 3, "ngStyle"], [1, "right-container"], [1, "team-content"], [1, "member-count"], ["data", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtrustConstantResourceUrl"] `../../../../assets/svg/teams.svg`, "type", "image/svg+xml", 1, "icon"]], template: function CurrentTeamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CurrentTeamsComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CurrentTeamsComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CurrentTeamsComponent_div_3_Template, 12, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.teams.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.teams.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.teams);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.teams[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: start;\n}\n.teams[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  margin: 1em 0;\n  background-color: #E6F7FF;\n  height: 4.5em;\n  width: 60%;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  border-radius: 7px;\n}\n.teams-title[_ngcontent-%COMP%] {\n  margin: 0 0 1em -1em;\n  font-size: 1.5em;\n  font-weight: bold;\n  width: 60%;\n}\n.img[_ngcontent-%COMP%] {\n  height: 5em;\n  width: 5em;\n  margin: 0 0 0 -2.5em;\n  color: white;\n  background-color: black;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img[_ngcontent-%COMP%]   .team-icon[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 55%;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-size: cover;\n          mask-size: cover;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n.right-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.team-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0 5em;\n}\n.team-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.member-count[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 2.5em 0 0;\n}\n.member-count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: 0 10px;\n}\n.noteams-card[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  display: flex;\n  flex-wrap: wrap;\n  justify-self: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 200px;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-align: center;\n  padding: 20px 10px;\n}\n.noteams-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0288CC;\n  margin-bottom: 5px;\n}\n@media screen and (max-width: 769px) {\n  .noteams-card[_ngcontent-%COMP%] {\n    padding: 30% 10px;\n  }\n\n  .teams[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .teams[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n    height: 4.5em;\n    display: flex;\n    flex-direction: row;\n    width: 70%;\n  }\n\n  .left-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .right-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .team-content[_ngcontent-%COMP%] {\n    margin: 0 0 0 1em;\n    width: 100%;\n  }\n\n  .img[_ngcontent-%COMP%] {\n    margin: 0 0 0 -2em;\n  }\n\n  .member-count[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImN1cnJlbnQtdGVhbXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtEQUFBO0FDQ1I7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FER0E7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FDQUY7QURFRTtFQUNFLDZDQUFBO0FDQUo7QURHRTtFQUNFLDZDQUFBO0FDREo7QURJRTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FER007RUFDSSw2Q0FBQTtFQUNBLGVBQUE7QUNEVjtBRE1BO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEUUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xGO0FET0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDTEo7QURRRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDTko7QURVQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFNFO0VBQ0UsNkNBQUE7QUNQSjtBRFVFO0VBQ0UsNkNBQUE7QUNSSjtBRnZFQTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsbUJBQUE7QUUwRUY7QUM3R0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QURnSEo7QUM3R0E7RUFDSSx1QkFBQTtBRGdISjtBRWpIQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBRm9IRjtBRTdHQTtFQUNFLHVCQUFBO0FGZ0hGO0FFN0dBO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0VBQUEsdUNBQUE7RUFDQSxjQUFBO0VBQUEsNEJBQUE7QUZnSEY7QUU1R0E7RUFDRSxtQkFkYztFQWVkLDBDQUFBO0FGK0dGO0FFM0dFOztFQUVFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUY4R0o7QUU1R0U7RUFDRSxhQUFBO0FGOEdKO0FFdkdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQUEsNEJBQUE7QUYwR0Y7QUV4R0U7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUYwR0o7QUV0R0E7RUFDRSx5QkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0Usc0JBQUE7RUFBQSx1Q0FBQTtBRnlHRjtBRXRHQTtFQUNFLGNDbEVZO0VEbUVaLDhCQUFBO0FGeUdGO0FFdkdFO0VBQ0UsZUFBQTtBRnlHSjtBRXJHQTtFQUNFLFlBQUE7QUZ3R0Y7QUVyR0E7RUFDRSxhQUFBO0VBQUEsMkJBQUE7QUZ3R0Y7QUVwR0E7RUFFRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBRnNHRjtBRW5HRTtFQUNFLFdBQUE7RUFBQSw0QkFBQTtBRnFHSjtBRWxHRTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7RUFDQSxvQ0FBQTtFQUFBLGtEQUFBO0VBQ0EsaUNBQUE7RUFBQSxrREFBQTtBRm9HSjtBRWpHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRm9HRjtBQTVNQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBK01KO0FBNU1BO0VBQ0ksYUFBQTtBQStNSjtBQTVNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUE4TUo7QUE1TUk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQThNUjtBQXpNQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUE0TUo7QUF6TUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTRNSjtBQTFNSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBNE1SO0FBeE1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUEyTUo7QUF4TUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUEyTUo7QUF6TUk7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0FBMk1SO0FBdE1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXlNSjtBQXZNSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBeU1SO0FBck1BO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXVNSjtBQXJNSTtFQUNJLGNHOUdLO0VIK0dMLGtCQUFBO0FBdU1SO0FBbk1BO0VBRUk7SUFDSSxpQkFBQTtFQXFNTjs7RUFqTUU7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQW9NTjtFQWxNTTtJQUNJLGFBQUE7SUFFQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBbU1WOztFQS9MRTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBa01OOztFQS9MRTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBa01OOztFQS9MRTtJQUNJLGlCQUFBO0lBQ0EsV0FBQTtFQWtNTjs7RUEvTEU7SUFDSSxrQkFBQTtFQWtNTjs7RUE5TEU7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFQWlNTjtBQUNGIiwiZmlsZSI6ImN1cnJlbnQtdGVhbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZWFtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG5cbiAgICAudGVhbS1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjdGRjtcbiAgICAgICAgaGVpZ2h0OiA0LjVlbTtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgfVxufVxuXG4udGVhbXMtdGl0bGUge1xuICAgIG1hcmdpbjogMCAwIDFlbSAtMWVtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuLmltZyB7XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgd2lkdGg6IDVlbTtcbiAgICBtYXJnaW46IDAgMCAwIC0yLjVlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC50ZWFtLWljb24ge1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICBoZWlnaHQ6IDU1JTtcbiAgICAgICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBtYXNrLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbn1cblxuLnJpZ2h0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVhbS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMCAwIDVlbTtcblxuICAgIGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG59XG5cbi5tZW1iZXItY291bnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMi41ZW0gMCAwO1xuXG4gICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbn1cblxuLm5vdGVhbXMtY2FyZCB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcblxuICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1ibHVlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuXG4gICAgLm5vdGVhbXMtY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDMwJSAxMHB4O1xuXG4gICAgfVxuXG4gICAgLnRlYW1zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnRlYW0tY2FyZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQuNWVtO1xuXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGVmdC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGVhbS1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5pbWcge1xuICAgICAgICBtYXJnaW46IDAgMCAwIC0yZW07XG5cbiAgICB9XG5cbiAgICAubWVtYmVyLWNvdW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 5221:
/*!*****************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/faq/faq.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function FaqComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_div_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleAccordion(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const accordion_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](accordion_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, accordion_r1.info), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class FaqComponent {
    constructor(router) {
        this.router = router;
        this.state = 'in';
        this.accordionConfig = [
            {
                header: 'Do I need to know how to code to participate?',
                info: 'faq.general.code',
            },
            {
                header: 'Does it cost anything?',
                info: 'faq.general.cost',
                click: 'sign-up',
                link: 'faq.general.cost-link'
            },
            {
                header: 'Where can I park?',
                info: 'faq.general.parking'
            },
            {
                header: 'How many members can a team have?',
                info: 'faq.teams.size',
            },
            {
                header: 'Does every team member need to sign up?',
                info: 'faq.teams.all-sign-up'
            },
            {
                header: 'What if a team member forgot to sign up or, what if we get a team member last minute?',
                info: 'faq.teams.forgot-sign-up'
            },
            {
                header: 'What if I can\'t find a team?',
                info: 'faq.teams.no-team'
            },
            {
                header: 'Can I have team members that are not college undergraduates?',
                info: 'faq.teams.not-undergraduates'
            },
            {
                header: 'Will food be provided?',
                info: 'faq.during.food',
            },
            {
                header: 'Do I need to bring anything?',
                info: 'faq.during.bring'
            },
            {
                header: 'Can I use code that I\'ve written before the Hackathon?',
                info: 'faq.during.code'
            },
            {
                header: 'Can I use code from outside sources?',
                info: 'faq.during.outside'
            },
            {
                header: 'Do I have to stay for everyone\'s presentations?',
                info: 'faq.after.presentations'
            },
            {
                header: 'What if one or more members of my team leave before the Hackathon ends?',
                info: 'faq.after.leave'
            }
        ];
        this.accordion = {
            multiple: false,
            style: null,
            styleClass: null,
            activeIndex: null,
            expandIcon: 'fa fa-caret-down',
            collapseIcon: 'fa fa-caret-up',
        };
    }
    ngOnInit() {
        this.state = (this.state === 'in' ? 'out' : 'in');
    }
    goToItems(routerLocation) {
        this.router.navigate([routerLocation]);
    }
    toggleAccordion(i) {
        document.getElementById(i).classList.toggle('expand');
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], inputs: { accordion: "accordion" }, decls: 2, vars: 1, consts: [[1, "container"], ["class", "card", 3, "id", 4, "ngFor", "ngForOf"], [1, "card", 3, "id"], [1, "card-header", 3, "click"], [1, "card-title"], ["src", "../../../../assets/svg/carrot.svg", "alt", "carrot", 1, "carrot"], [1, "content-text", 3, "innerHTML"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FaqComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accordionConfig);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.card[_ngcontent-%COMP%] {\n  transition: all 1s ease-in-out;\n}\na[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-left: solid 2px #0288CC;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 8px 0;\n  overflow: hidden;\n  display: grid;\n  align-items: center;\n  padding: 0 10px;\n  width: 100%;\n  height: auto;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #0288CC;\n  max-width: 80%;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  display: none;\n  color: #707070;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .carrot[_ngcontent-%COMP%] {\n  transition: all 0.35s ease-in-out;\n  width: 20px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  grid-row: 1;\n}\n.container[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.container[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   .carrot[_ngcontent-%COMP%] {\n  transform: rotateX(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImZhcS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUErTUY7QUE1TUE7RUFDRSw4QkFBQTtBQStNRjtBQTVNQTtFQUNFLGNHUFk7QUhzTmQ7QUE1TUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBK01GO0FBN01FO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBK01KO0FBN01JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUErTU47QUE3TU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjR3ZDSztFSHdDTCxjQUFBO0FBK01SO0FBNU1NO0VBQ0UsZUFBQTtBQThNUjtBQTdNUTtFQUNFLDBCQUFBO0FBK01WO0FBMU1JO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxjR3JEUTtBSGlRZDtBQXpNSTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtBQTJNTjtBQXhNSTtFQUNFLFdBQUE7QUEwTU47QUF0TUU7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUF3TUo7QUF0TUk7RUFDRSxjQUFBO0FBd01OO0FBck1JO0VBSUUsMEJBQUE7QUF1TU4iLCJmaWxlIjoiZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9pdm8xYWVlLmNzc1wiKTtcblxuKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCwgaDUsIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgcCwgYnV0dG9uLCBsYWJlbCwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59IiwiLy9idXR0b24gc3R5bGVzXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI4OENDO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTBjNWZmICwjMGQ4ZmQwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgYm9yZGVyOiAjQjFENUU4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgfVxufVxuXG4uYnRuLXllbGxvdyB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkREMDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2ZmYWUwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNmZmFlMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tZ3JleSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2NlY2VjZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNjZWNlY2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICNDQzJEMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MyRDI0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDk2LCAjY2UzYjMzKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgICNDQzJEMjQpO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xufVxuXG5hIHtcbiAgY29sb3I6ICR0aGVtZS1ibGFjaztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggJHRoZW1lLWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1ibHVlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtdGV4dCB7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGNvbG9yOiAkdGhlbWUtZ3JleTtcbiAgICB9XG5cbiAgICAuY2Fycm90IHtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuICBcbiAgICAuYnRuIHtcbiAgICAgIGdyaWQtcm93OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5leHBhbmQge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICAuY29udGVudC10ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5jYXJyb3Qge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICAgIH1cbiAgfVxufSIsIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzMztcbn1cblxuLnNlY3Rpb24ge1xuICAgIHNjcm9sbC1tYXJnaW4tdG9wOiA1MHB4O1xufSIsIkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi8vIGNvbG9yIGRlY2xhcmF0aW9uc1xuOnJvb3R7XG4gIC0tY2xyLWZvcmVncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWZvb3Rlci1iZzogIzAwMDtcbiAgLS1jbHItZm9vdGVyLXRleHQ6ICNmZmY7XG4gIC0tY2xyLWhlYWRlci1iZzogI2ZmZjtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcbn1cblxuXG4vL0F0dHJpYnV0ZSB2YXJpYWJsZXNcbiRjb3JuZXJSYWRpb3VzOiAxMHB4O1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuLy9UaGlzIGNsYXNzIHNwZWNpZmllcyB0aGUgc3R5bGUgb2YgY29udGFpbmVyczpcbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAkY29ybmVyUmFkaW91cztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgwLDAsMCwgMC4xMCk7XG59XG5cbi5oaWRlLXNjcm9sbGJhciB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy9jaGFuZ2luZyBjb2xvcnMgdG8gb24gZXZlcnl0aGluZ1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5zZWNvbmRhcnktbGluaywgc3Bhbi5kYXRhLCBzcGFuLmFjY29yZGlvbi10YWIsIHNlbGVjdCwgb3B0aW9ue1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLWdyb3VwLCAubGluay1pbWcsIC5kcm9wZG93biA+IHVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG59XG5cbnRkIHtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgYm9yZGVyOiAxNXB4IGhpZGRlbiAhaW1wb3J0YW50O1xuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG59XG5cbnN2Z3tcbiAgZmlsbDogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG5cbmJvZHkuZGFyay1tb2Rle1xuXG4gIC0tY2xyLWZvcmVncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWhlYWRlci1iZzogIzIwMjAyMDtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcblxuXG4gIC5wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICB9XG5cbiAgdGFibGUsIHRoLCB0ZCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBpbnB1dFt0eXBlPXRleHRde1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgfVxufVxuaHRtbCwgYm9keSB7IFxuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4iLCIvLyBUaGVtZSBjb2xvcnMuXG4kdGhlbWUtYmx1ZTogIzAyODhDQztcbiR0aGVtZS1ncmV5OiAgIzcwNzA3MDtcbiR0aGVtZS13aGl0ZTogI2ZmZmZmZjtcbiR0aGVtZS15ZWxsb3c6ICNGRkREMDA7XG4kdGhlbWUtYmxhY2s6ICMwMDAwMDA7XG4kdGhlbWUtcmVkOiAjQ0MyRDI0O1xuXG4vLyBNaXNjZWxsYW5lb3VzIGNvbG9ycy5cbiRib3JkZXJDb2xvcjogIzAwN0RCQTtcbiRsaW5rQ29sb3I6ICMwMDdkYmE7XG4kcHJpbWFyeUJ0bkNscjogIzAyODhDQzsiXX0= */"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_0__.routerTransition] } });


/***/ }),

/***/ 3926:
/*!************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/hackathon-sign-up.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HackathonSignUpModule": () => (/* binding */ HackathonSignUpModule)
/* harmony export */ });
/* harmony import */ var _previous_hackathons_winner_stories_winner_stories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previous-hackathons/winner-stories/winner-stories.component */ 4162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rubric/rubric.component */ 353);
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/resources.component */ 7333);
/* harmony import */ var _previous_hackathons_past_winners_past_winners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previous-hackathons/past-winners/past-winners.component */ 5541);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ 2680);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5023);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq/faq.component */ 5221);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 9680);
/* harmony import */ var _current_teams_current_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./current-teams/current-teams.component */ 5345);
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countdown-timer/countdown-timer.component */ 181);
/* harmony import */ var _previous_hackathons_previous_hackathons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./previous-hackathons/previous-hackathons.component */ 1943);
/* harmony import */ var _competition_competition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./competition/competition.component */ 3812);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common-components/common-components.module */ 1861);
/* harmony import */ var _home_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home-hero/home-hero.component */ 8253);
/* harmony import */ var _home_home_schedule_home_schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home-schedule/home-schedule.component */ 2042);
/* harmony import */ var _home_home_experience_home_experience_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home-experience/home-experience.component */ 2432);
/* harmony import */ var _home_home_info_home_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home-info/home-info.component */ 889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);





















class HackathonSignUpModule {
}
HackathonSignUpModule.ɵfac = function HackathonSignUpModule_Factory(t) { return new (t || HackathonSignUpModule)(); };
HackathonSignUpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: HackathonSignUpModule });
HackathonSignUpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_20__.RxReactiveFormsModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_11__.CommonComponentsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](HackathonSignUpModule, { declarations: [_previous_hackathons_winner_stories_winner_stories_component__WEBPACK_IMPORTED_MODULE_0__.WinnerStoriesComponent,
        _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_1__.RubricComponent,
        _resources_resources_component__WEBPACK_IMPORTED_MODULE_2__.ResourcesComponent,
        _previous_hackathons_past_winners_past_winners_component__WEBPACK_IMPORTED_MODULE_3__.PastWinnersComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent,
        _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__.CountdownTimerComponent,
        _current_teams_current_teams_component__WEBPACK_IMPORTED_MODULE_7__.CurrentTeamsComponent,
        _previous_hackathons_previous_hackathons_component__WEBPACK_IMPORTED_MODULE_9__.PreviousHackathonsComponent,
        _competition_competition_component__WEBPACK_IMPORTED_MODULE_10__.CompetitionComponent,
        _home_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_12__.HomeHeroComponent,
        _home_home_schedule_home_schedule_component__WEBPACK_IMPORTED_MODULE_13__.HomeScheduleComponent,
        _home_home_experience_home_experience_component__WEBPACK_IMPORTED_MODULE_14__.HomeExperienceComponent,
        _home_home_info_home_info_component__WEBPACK_IMPORTED_MODULE_15__.HomeInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_20__.RxReactiveFormsModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_11__.CommonComponentsModule], exports: [_previous_hackathons_winner_stories_winner_stories_component__WEBPACK_IMPORTED_MODULE_0__.WinnerStoriesComponent,
        _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_1__.RubricComponent,
        _resources_resources_component__WEBPACK_IMPORTED_MODULE_2__.ResourcesComponent,
        _previous_hackathons_past_winners_past_winners_component__WEBPACK_IMPORTED_MODULE_3__.PastWinnersComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent,
        _current_teams_current_teams_component__WEBPACK_IMPORTED_MODULE_7__.CurrentTeamsComponent,
        _previous_hackathons_previous_hackathons_component__WEBPACK_IMPORTED_MODULE_9__.PreviousHackathonsComponent,
        _competition_competition_component__WEBPACK_IMPORTED_MODULE_10__.CompetitionComponent] }); })();


/***/ }),

/***/ 2432:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/home/home-experience/home-experience.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeExperienceComponent": () => (/* binding */ HomeExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeExperienceComponent.ɵfac = function HomeExperienceComponent_Factory(t) { return new (t || HomeExperienceComponent)(); };
HomeExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeExperienceComponent, selectors: [["app-home-experience"]], decls: 14, vars: 0, consts: [[1, "experience-section"], [1, "group"], [1, "section-title"], [1, "split"], [1, "text-box"], [1, "highlight"]], template: function HomeExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Experience and exposure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "During the Hackathon, participants gain experience brainstorming and programming with a team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Collaboration is crucial to innovation and productivity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Showcase your ideas and abilities to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " a panel of J.B. Hunt representatives.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Program to impress and have a resume handy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n.upperheader[_ngcontent-%COMP%] {\n  color: #0288CC;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: #0288CC;\n  font-weight: 600;\n}\n.subheader[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\np[_ngcontent-%COMP%] {\n  width: 35%;\n  min-width: 150px;\n  color: #707070;\n}\n.text-box[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-width: 150px;\n  margin-bottom: 10px;\n  letter-spacing: 0.32px;\n  color: #707070;\n}\n.split[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.split[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  max-width: 40%;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2vw;\n  width: 100%;\n  left: 10vw;\n}\n.link-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.link-container[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImhvbWUtZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsY0dGVztBSGlOYjtBQTVNQTtFQUNFLGNHTlc7RUhPWCxnQkFBQTtBQStNRjtBQTVNQTtFQUNFLGNHVFk7QUh3TmQ7QUE1TUE7Ozs7O0VBS0Usa0JBQUE7QUErTUY7QUE1TUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjR3hCWTtBSHVPZDtBQTVNQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNHaENZO0FIK09kO0FBNU1BO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUErTUY7QUE3TUU7RUFDRSxjQUFBO0FBK01KO0FBM01BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBOE1GO0FBM01BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBOE1GO0FBNU1FO0VBQ0UsaUJBQUE7QUE4TUoiLCJmaWxlIjoiaG9tZS1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9pdm8xYWVlLmNzc1wiKTtcblxuKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCwgaDUsIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgcCwgYnV0dG9uLCBsYWJlbCwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59IiwiLy9idXR0b24gc3R5bGVzXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI4OENDO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTBjNWZmICwjMGQ4ZmQwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgYm9yZGVyOiAjQjFENUU4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgfVxufVxuXG4uYnRuLXllbGxvdyB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkREMDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2ZmYWUwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNmZmFlMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tZ3JleSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2NlY2VjZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNjZWNlY2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICNDQzJEMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MyRDI0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDk2LCAjY2UzYjMzKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgICNDQzJEMjQpO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi51cHBlcmhlYWRlciB7XG4gIGNvbG9yOiAkdGhlbWUtYmx1ZTtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiAkdGhlbWUtYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnN1YmhlYWRlciB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbnAge1xuICB3aWR0aDogMzUlO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBjb2xvcjogJHRoZW1lLWdyZXk7XG59XG5cbi50ZXh0LWJveCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XG4gIGNvbG9yOiAkdGhlbWUtZ3JleTtcbn1cblxuLnNwbGl0IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnRleHQtYm94IHtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgfVxufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAydnc7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHZ3O1xufVxuXG4ubGluay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5oaWdobGlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 8253:
/*!**********************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/home/home-hero/home-hero.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeHeroComponent": () => (/* binding */ HomeHeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeHeroComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigate() {
        this.router.navigate(['/competition']);
    }
    moveDuck(element) {
        element.classList.add('move-duck');
    }
}
HomeHeroComponent.ɵfac = function HomeHeroComponent_Factory(t) { return new (t || HomeHeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
HomeHeroComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeHeroComponent, selectors: [["app-home-hero"]], decls: 14, vars: 0, consts: [[1, "hero"], [1, "group"], [1, "upperheader", 2, "color", "white"], [1, "section-title"], [1, "wrapper"], [1, "subheader", "text-box", 2, "color", "#ffffff"], [1, "btn", "btn-yellow", 2, "color", "black", 3, "click"], ["src", "../../../../assets/svg/HomePage_Assets/homepage-illustration.svg", "alt", "homepage illustration", 1, "homepage-illustration"], [1, "blue-banner"], ["src", "../../../../assets/svg/HomePage_Assets/duck.png", "alt", "duck", 1, "rubber-duck", 3, "click"]], template: function HomeHeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "April 1st, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "J.B. Hunt Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create or join a team and showcase what you can create together in just 24 hours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeHeroComponent_Template_button_click_9_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeHeroComponent_Template_img_click_13_listener($event) { return ctx.moveDuck($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.upperheader[_ngcontent-%COMP%] {\n  color: #0288CC;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: #0288CC;\n  font-weight: 600;\n}\n.subheader[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.text-box[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-width: 200px;\n  margin-bottom: 10px;\n  letter-spacing: 0.32px;\n  color: #707070;\n  gap: 10px;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 60% 40%;\n  grid-gap: 50px;\n  gap: 50px;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 705px;\n}\n.hero[_ngcontent-%COMP%]   .homepage-illustration[_ngcontent-%COMP%] {\n  margin-left: 0vw;\n  width: 500px;\n  pointer-events: none;\n}\n.blue-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 705px;\n  left: -20vw;\n  background: transparent linear-gradient(110deg, var(--unnamed-color-0288cc) 0%, #40BFFD 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(110deg, #0288CC 0%, #40BFFD 100%) 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 200px 0px;\n  opacity: 1;\n  z-index: -1;\n}\n.group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.group[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  text-align: left;\n}\n@media screen and (max-width: 520px) {\n  .blue-banner[_ngcontent-%COMP%] {\n    border-radius: 0px 0px 0px 0px;\n  }\n\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 70% 0%;\n    display: flex;\n  }\n  .hero[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n\n  .text-box[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    min-width: 200px;\n    margin-bottom: 10px;\n    letter-spacing: 0.32px;\n    color: #707070;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .homepage-illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .hero[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n\n  .upperheader[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.rubber-duck[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 70px;\n  top: 656px;\n  margin-left: 1000px;\n}\n.move-duck[_ngcontent-%COMP%] {\n  transform: translateX(-1900px);\n  transition: 4s ease-in;\n}\n@media screen and (max-width: 1600px) {\n  .rubber-duck[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImhvbWUtaGVyby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUErTUY7QUE1TUE7RUFDRSxjR1ZXO0FIeU5iO0FBNU1BO0VBQ0UsY0dkVztFSGVYLGdCQUFBO0FBK01GO0FBNU1BO0VBQ0UsY0dqQlk7QUhnT2Q7QUE1TUE7RUFDRSxrQkFBQTtBQStNRjtBQTVNQTtFQUNFLGNHekJZO0FId09kO0FBNU1BO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUErTUo7QUE1TUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBK01KO0FBN01NO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUErTVI7QUEzTUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlIQUFBO0VBQ0EscUdBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBOE1KO0FBM01FO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBOE1KO0FBNU1JO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQThNTjtBQTFNRTtFQUNJO0lBQ0ksOEJBQUE7RUE2TVI7O0VBMU1JO0lBQ0UsNkJBQUE7SUFDQSxhQUFBO0VBNk1OO0VBM01NO0lBQ0UscUJBQUE7RUE2TVI7O0VBek1JO0lBQ0UsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtFQTRNTjtBQUNGO0FBdk1BO0VBQ0k7SUFDSSxhQUFBO0VBeU1OOztFQXBNSTtJQUNFLHFCQUFBO0VBdU1OOztFQW5NRTtJQUNJLGVBQUE7RUFzTU47QUFDRjtBQW5NQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQXFNRjtBQWxNQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUFxTUY7QUFsTUE7RUFDRTtJQUNFLGFBQUE7RUFxTUY7QUFDRiIsImZpbGUiOiJob21lLWhlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICBcbn1cblxuLnVwcGVyaGVhZGVyIHtcbiAgY29sb3I6ICR0aGVtZS1ibHVlO1xufVxuXG4uaGlnaGxpZ2h0e1xuICBjb2xvcjogJHRoZW1lLWJsdWU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdWJoZWFkZXIge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbn1cblxuLnRleHQtYm94IHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4uaGVybyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgIGdhcDogNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MDVweDtcblxuICAgICAgLmhvbWVwYWdlLWlsbHVzdHJhdGlvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwdnc7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gIH1cblxuICAuYmx1ZS1iYW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA3MDVweDtcbiAgICBsZWZ0OiAtMjB2dztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCB2YXIoLS11bm5hbWVkLWNvbG9yLTAyODhjYykgMCUsICM0MEJGRkQgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICMwMjg4Q0MgMCUsICM0MEJGRkQgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjAwcHggMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAuZ3JvdXAge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAud3JhcHBlciB7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuICAgICAgLmJsdWUtYmFubmVyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7XG4gICAgICB9XG4gIFxuICAgICAgLmhlcm8ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAuZ3JvdXAge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgfVxuXG5cbiAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgICAuaG9tZXBhZ2UtaWxsdXN0cmF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmhlcm8ge1xuICAgICAgLmdyb3VwIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVwcGVyaGVhZGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnJ1YmJlci1kdWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDo3MHB4O1xuICB0b3A6IDY1NnB4O1xuICBtYXJnaW4tbGVmdDogMTAwMHB4O1xufVxuXG4ubW92ZS1kdWNrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xOTAwcHgpO1xuICB0cmFuc2l0aW9uOiA0cyBlYXNlLWluO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLnJ1YmJlci1kdWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 889:
/*!**********************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/home/home-info/home-info.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeInfoComponent": () => (/* binding */ HomeInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeInfoComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    routeTo(target) {
        this.router.navigateByUrl(target);
    }
}
HomeInfoComponent.ɵfac = function HomeInfoComponent_Factory(t) { return new (t || HomeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
HomeInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeInfoComponent, selectors: [["app-home-info"]], decls: 33, vars: 0, consts: [[1, "section"], [1, "group"], [1, "section-title"], [1, "text-box"], [1, "highlight"], [1, "resources"], [1, "flex-container"], ["id", "frontend", 1, "link-container", 3, "click"], ["src", "../../../../assets/svg/HomePage_Assets/Resource_assets/frontend.svg", "alt", "frontend", 1, "frontend"], ["id", "backend", 1, "link-container", 3, "click"], ["src", "../../../../assets/svg/HomePage_Assets/Resource_assets/backend.svg", "alt", "backend", 1, "backend"], ["id", "programming", 1, "link-container", 3, "click"], ["src", "../../../../assets/svg/HomePage_Assets/Resource_assets/programming.svg", "alt", "programming", 1, "programming"], ["id", "faq", 1, "link-container", 3, "click"], ["src", "../../../../assets/svg/HomePage_Assets/Resource_assets/faq.svg", "alt", "faq", 1, "faq"], ["id", "rubric", 1, "link-container", 3, "click"], ["src", "../../../../assets/svg/HomePage_Assets/Resource_assets/rubric.svg", "alt", "rubric", 1, "rubric"]], template: function HomeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Important Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The J.B. Hunt Hackathon is a competition that is hosted in conjunction with the Association of Computing Machinery (ACM) at the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "University of Arkansas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " twice each year. The competition consists of teams competing against each other to develop a working prototype that is presented in front of a panel of J.B. Hunt judges. Participants are not required to have a computer science background - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "all majors are welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeInfoComponent_Template_div_click_13_listener() { return ctx.routeTo("/resources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeInfoComponent_Template_div_click_17_listener() { return ctx.routeTo("/resources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeInfoComponent_Template_div_click_21_listener() { return ctx.routeTo("/resources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeInfoComponent_Template_div_click_25_listener() { return ctx.routeTo("/resources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeInfoComponent_Template_div_click_29_listener() { return ctx.routeTo("/resources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Rubric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n.text-box[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-width: 200px;\n  margin-bottom: 10px;\n  letter-spacing: 0.32px;\n  color: #707070;\n}\n.experience-section[_ngcontent-%COMP%] {\n  margin-top: 9vh;\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  gap: 10px 8px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 2vw;\n}\n.link-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 150px;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  margin: 10px;\n}\n.link-container[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: 600;\n  color: #0288CC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImhvbWUtaW5mby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0dMWTtBSG9OZDtBQTVNQTtFQUNFLGVBQUE7QUErTUY7QUE1TUE7RUFDRSxpQkFBQTtBQStNRjtBQTVNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBK01GO0FBNU1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQStNRjtBQTdNRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjR3ZDUztBSHNQYiIsImZpbGUiOiJob21lLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi50ZXh0LWJveCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XG4gIGNvbG9yOiAkdGhlbWUtZ3JleTtcbn1cblxuLmV4cGVyaWVuY2Utc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDl2aDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMTBweCA4cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJ2dztcbn1cblxuLmxpbmstY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMTBweDtcblxuICAuaGlnaGxpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAkdGhlbWUtYmx1ZTtcbiAgfVxufSIsIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzMztcbn1cblxuLnNlY3Rpb24ge1xuICAgIHNjcm9sbC1tYXJnaW4tdG9wOiA1MHB4O1xufSIsIkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi8vIGNvbG9yIGRlY2xhcmF0aW9uc1xuOnJvb3R7XG4gIC0tY2xyLWZvcmVncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWZvb3Rlci1iZzogIzAwMDtcbiAgLS1jbHItZm9vdGVyLXRleHQ6ICNmZmY7XG4gIC0tY2xyLWhlYWRlci1iZzogI2ZmZjtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcbn1cblxuXG4vL0F0dHJpYnV0ZSB2YXJpYWJsZXNcbiRjb3JuZXJSYWRpb3VzOiAxMHB4O1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuLy9UaGlzIGNsYXNzIHNwZWNpZmllcyB0aGUgc3R5bGUgb2YgY29udGFpbmVyczpcbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAkY29ybmVyUmFkaW91cztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgwLDAsMCwgMC4xMCk7XG59XG5cbi5oaWRlLXNjcm9sbGJhciB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy9jaGFuZ2luZyBjb2xvcnMgdG8gb24gZXZlcnl0aGluZ1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5zZWNvbmRhcnktbGluaywgc3Bhbi5kYXRhLCBzcGFuLmFjY29yZGlvbi10YWIsIHNlbGVjdCwgb3B0aW9ue1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLWdyb3VwLCAubGluay1pbWcsIC5kcm9wZG93biA+IHVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG59XG5cbnRkIHtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgYm9yZGVyOiAxNXB4IGhpZGRlbiAhaW1wb3J0YW50O1xuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG59XG5cbnN2Z3tcbiAgZmlsbDogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG5cbmJvZHkuZGFyay1tb2Rle1xuXG4gIC0tY2xyLWZvcmVncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWhlYWRlci1iZzogIzIwMjAyMDtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcblxuXG4gIC5wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICB9XG5cbiAgdGFibGUsIHRoLCB0ZCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBpbnB1dFt0eXBlPXRleHRde1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgfVxufVxuaHRtbCwgYm9keSB7IFxuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4iLCIvLyBUaGVtZSBjb2xvcnMuXG4kdGhlbWUtYmx1ZTogIzAyODhDQztcbiR0aGVtZS1ncmV5OiAgIzcwNzA3MDtcbiR0aGVtZS13aGl0ZTogI2ZmZmZmZjtcbiR0aGVtZS15ZWxsb3c6ICNGRkREMDA7XG4kdGhlbWUtYmxhY2s6ICMwMDAwMDA7XG4kdGhlbWUtcmVkOiAjQ0MyRDI0O1xuXG4vLyBNaXNjZWxsYW5lb3VzIGNvbG9ycy5cbiRib3JkZXJDb2xvcjogIzAwN0RCQTtcbiRsaW5rQ29sb3I6ICMwMDdkYmE7XG4kcHJpbWFyeUJ0bkNscjogIzAyODhDQzsiXX0= */"] });


/***/ }),

/***/ 2042:
/*!******************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/home/home-schedule/home-schedule.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeScheduleComponent": () => (/* binding */ HomeScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeScheduleComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeScheduleComponent.ɵfac = function HomeScheduleComponent_Factory(t) { return new (t || HomeScheduleComponent)(); };
HomeScheduleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeScheduleComponent, selectors: [["app-home-schedule"]], decls: 43, vars: 0, consts: [[1, "schedule"], ["src", "../../../../assets/svg/HomePage_Assets/top-yellow-bar.svg", "alt", "top yellow bar", 1, "top-yellow-bar"], ["src", "../../../../assets/svg/HomePage_Assets/bottom-yellow-bar.svg", "alt", "bottom yellow bar", 1, "bottom-yellow-bar"], [1, "schedule-card"], [1, "schedule-title"], [1, "schedule-section"], [1, "upperheader"], [1, "vl"], [1, "schedule-banner"]], template: function HomeScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "6PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "9PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cutoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5)(25, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Presentations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "and judging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5)(34, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "TBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Prize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "pickup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n.schedule-banner[_ngcontent-%COMP%] {\n  \n  position: absolute;\n  top: -89px;\n  left: -543.578125px;\n  width: 1396px;\n  height: 487px;\n  padding: 0 21vw;\n  z-index: -2;\n  transform: matrix(-0.99, 0.1, -0.1, 0.99, 0, 0);\n  \n  background: transparent linear-gradient(70deg, #40BFFD 0%, var(--unnamed-color-0288cc) 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(70deg, #40BFFD 0%, #0288CC 100%) 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n.schedule[_ngcontent-%COMP%] {\n  margin-top: 300px;\n  position: relative;\n  height: 550px;\n}\n.schedule-card[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: 300px;\n  border-radius: 24px;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-items: center;\n  color: #ffffff;\n}\n.schedule-card[_ngcontent-%COMP%]   .upperheader[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.schedule-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upperheader[_ngcontent-%COMP%] {\n  color: #ffffff;\n  letter-spacing: 0px;\n  font-size: 24px;\n  height: 25px;\n  margin-top: 4vh;\n}\n.ng-tns-c3-1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 0.32px;\n  opacity: 1;\n  color: #ffffff;\n}\n.schedule-title[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  position: relative;\n  min-width: 300px;\n  color: #ffffff;\n}\n.top-yellow-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -191px;\n  left: 900px;\n  transform: rotate(0.3deg);\n  overflow-x: hidden;\n}\n.bottom-yellow-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 402.5px;\n  left: -530px;\n  transform: rotate(0.3deg);\n  overflow-x: hidden;\n}\nhr[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  margin-top: 2.5vh;\n  width: 120px;\n}\n@media screen and (max-width: 1100px) {\n  hr[_ngcontent-%COMP%] {\n    border: 0px;\n  }\n\n  .vl[_ngcontent-%COMP%] {\n    border-left: 2px solid white;\n    height: 50px;\n    position: absolute;\n    margin-left: 100px;\n    margin-top: 2.5vh;\n  }\n\n  .upperheader[_ngcontent-%COMP%] {\n    margin-left: 0vw;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin-top: 2.5vh;\n  }\n\n  .schedule-section[_ngcontent-%COMP%] {\n    display: flex;\n    width: 220px;\n    justify-self: center;\n  }\n}\n@media screen and (max-width: 733px) {\n  .schedule-banner[_ngcontent-%COMP%] {\n    height: 680px;\n  }\n\n  .schedule[_ngcontent-%COMP%] {\n    height: 690px;\n  }\n\n  .schedule-section[_ngcontent-%COMP%] {\n    display: flex;\n    justify-self: center;\n  }\n}\n@media screen and (max-width: 1682px) {\n  .bottom-yellow-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 400px) {\n  .schedule-section[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImhvbWUtc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtEQUFBO0FDQ1I7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FER0E7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FDQUY7QURFRTtFQUNFLDZDQUFBO0FDQUo7QURHRTtFQUNFLDZDQUFBO0FDREo7QURJRTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FER007RUFDSSw2Q0FBQTtFQUNBLGVBQUE7QUNEVjtBRE1BO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEUUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xGO0FET0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDTEo7QURRRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDTko7QURVQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFNFO0VBQ0UsNkNBQUE7QUNQSjtBRFVFO0VBQ0UsNkNBQUE7QUNSSjtBRnZFQTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsbUJBQUE7QUUwRUY7QUM3R0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QURnSEo7QUM3R0E7RUFDSSx1QkFBQTtBRGdISjtBRWpIQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBRm9IRjtBRTdHQTtFQUNFLHVCQUFBO0FGZ0hGO0FFN0dBO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0VBQUEsdUNBQUE7RUFDQSxjQUFBO0VBQUEsNEJBQUE7QUZnSEY7QUU1R0E7RUFDRSxtQkFkYztFQWVkLDBDQUFBO0FGK0dGO0FFM0dFOztFQUVFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUY4R0o7QUU1R0U7RUFDRSxhQUFBO0FGOEdKO0FFdkdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQUEsNEJBQUE7QUYwR0Y7QUV4R0U7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUYwR0o7QUV0R0E7RUFDRSx5QkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0Usc0JBQUE7RUFBQSx1Q0FBQTtBRnlHRjtBRXRHQTtFQUNFLGNDbEVZO0VEbUVaLDhCQUFBO0FGeUdGO0FFdkdFO0VBQ0UsZUFBQTtBRnlHSjtBRXJHQTtFQUNFLFlBQUE7QUZ3R0Y7QUVyR0E7RUFDRSxhQUFBO0VBQUEsMkJBQUE7QUZ3R0Y7QUVwR0E7RUFFRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBRnNHRjtBRW5HRTtFQUNFLFdBQUE7RUFBQSw0QkFBQTtBRnFHSjtBRWxHRTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7RUFDQSxvQ0FBQTtFQUFBLGtEQUFBO0VBQ0EsaUNBQUE7RUFBQSxrREFBQTtBRm9HSjtBRWpHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRm9HRjtBQTVNQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFFQSxrQkFBQTtFQUVBLHdIQUFBO0VBQ0Esb0dBQUE7RUFDQSxVQUFBO0FBNk1GO0FBMU1BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUE2TUY7QUExTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0cvQlk7QUg0T2Q7QUEzTUU7RUFDRSxZQUFBO0FBNk1KO0FBek1BO0VBQ0Usa0JBQUE7QUE0TUY7QUF4TUE7RUFDRSxjRzVDWTtFSDZDWixtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTJNRjtBQXhNQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNHeERZO0FIbVFkO0FBeE1BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0doRVk7QUgwUWQ7QUF2TUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUEwTUY7QUF0TUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXlNRjtBQXRNQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBeU1GO0FBdE1BO0VBQ0U7SUFDRSxXQUFBO0VBeU1GOztFQXRNQTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQXlNRjs7RUF0TUE7SUFDRSxnQkFBQTtFQXlNRjs7RUF0TUE7SUFDRSxpQkFBQTtFQXlNRjs7RUF0TUE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VBeU1GO0FBQ0Y7QUF0TUE7RUFDRTtJQUNFLGFBQUE7RUF3TUY7O0VBck1BO0lBQ0UsYUFBQTtFQXdNRjs7RUFyTUE7SUFDRSxhQUFBO0lBQ0Esb0JBQUE7RUF3TUY7QUFDRjtBQXJNQTtFQUNFO0lBQ0UsYUFBQTtFQXVNRjtBQUNGO0FBcE1BO0VBQ0U7SUFDRSxZQUFBO0VBc01GO0FBQ0YiLCJmaWxlIjoiaG9tZS1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXZvMWFlZS5jc3NcIik7XG5cbioge1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDQsIGg1LCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIHAsIGJ1dHRvbiwgbGFiZWwsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSIsIi8vYnV0dG9uIHN0eWxlc1xuLmJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyODhDQztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzUwYzVmZiAsIzBkOGZkMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgIGJvcmRlcjogI0IxRDVFODtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gIH1cbn1cblxuLmJ0bi15ZWxsb3cge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNmZmFlMDA7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjZmZhZTAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLWdyZXkge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNjZWNlY2U7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjY2VjZWNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAjQ0MyRDI0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDMkQyNDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOWQ5NiwgI2NlM2IzMyk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICAjQ0MyRDI0KTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLnNjaGVkdWxlLWJhbm5lciB7XG4gIC8qIExheW91dCBQcm9wZXJ0aWVzICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtODlweDtcbiAgbGVmdDogLTU0My41NzgxMjVweDtcbiAgd2lkdGg6IDEzOTZweDtcbiAgaGVpZ2h0OiA0ODdweDtcbiAgcGFkZGluZzogMCAyMXZ3O1xuICB6LWluZGV4OiAtMjtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoLTAuOTksIDAuMSwgLTAuMSwgMC45OSwgMCwgMCk7XG5cbiAgLyogVUkgUHJvcGVydGllcyAqL1xuXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg3MGRlZywgIzQwQkZGRCAwJSwgdmFyKC0tdW5uYW1lZC1jb2xvci0wMjg4Y2MpIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjNDBCRkZEIDAlLCAjMDI4OENDIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNjaGVkdWxlIHtcbiAgbWFyZ2luLXRvcDogMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLnNjaGVkdWxlLWNhcmQge1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcblxuICAudXBwZXJoZWFkZXIge1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxufVxuXG4uc2NoZWR1bGUtc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4udXBwZXJoZWFkZXIge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogNHZoO1xufVxuXG4ubmctdG5zLWMzLTEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzJweDtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbn1cblxuLnNjaGVkdWxlLXRpdGxlIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB0b3A6IDE2MHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xufVxuXG4udG9wLXllbGxvdy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xOTFweDtcbiAgbGVmdDogOTAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDAuM2RlZyk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxufVxuXG4uYm90dG9tLXllbGxvdy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAyLjVweDtcbiAgbGVmdDogLTUzMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjNkZWcpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICB3aWR0aDogMTIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICBociB7XG4gICAgYm9yZGVyOiAwcHg7XG4gIH1cblxuICAudmwge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMi41dmg7XG4gIH1cblxuICAudXBwZXJoZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwdnc7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tdG9wOiAyLjV2aDtcbiAgfVxuXG4gIC5zY2hlZHVsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzNweCkge1xuICAuc2NoZWR1bGUtYmFubmVyIHtcbiAgICBoZWlnaHQ6IDY4MHB4O1xuICB9XG5cbiAgLnNjaGVkdWxlIHtcbiAgICBoZWlnaHQ6IDY5MHB4O1xuICB9XG5cbiAgLnNjaGVkdWxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MnB4KSB7XG4gIC5ib3R0b20teWVsbG93LWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuc2NoZWR1bGUtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDE5MHB4O1xuICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"] });


/***/ }),

/***/ 5023:
/*!*******************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/home/home.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-hero/home-hero.component */ 8253);
/* harmony import */ var _home_schedule_home_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-schedule/home-schedule.component */ 2042);
/* harmony import */ var _home_experience_home_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-experience/home-experience.component */ 2432);
/* harmony import */ var _home_info_home_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-info/home-info.component */ 889);







class HomeComponent {
    constructor(router) {
        this.router = router;
        this.state = 'in';
        this.scrollSpeed = 10;
        this.scrolling = true;
    }
    ngOnInit() {
        this.state = (this.state === 'in' ? 'out' : 'in');
    }
    navigate() {
        this.router.navigate(['/competition']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "content-container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "head")(1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "J.B. Hunt Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "meta", 0)(4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-home-hero")(7, "app-home-info")(8, "app-home-schedule")(9, "app-home-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, dependencies: [_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_1__.HomeHeroComponent, _home_schedule_home_schedule_component__WEBPACK_IMPORTED_MODULE_2__.HomeScheduleComponent, _home_experience_home_experience_component__WEBPACK_IMPORTED_MODULE_3__.HomeExperienceComponent, _home_info_home_info_component__WEBPACK_IMPORTED_MODULE_4__.HomeInfoComponent], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Proxima+Nova\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n.content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  z-index: -1;\n  padding: 0 20vw;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiaG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9idXR0b24tc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtEQUFBO0FDQ0Esb0VBQUE7QUNBUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBREVGO0FDQUU7RUFDRSxlQUFBO0FERUo7QUNFQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QURDRjtBQ0NFO0VBQ0UsNkNBQUE7QURDSjtBQ0VFO0VBQ0UsNkNBQUE7QURBSjtBQ0dFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FERE47QUNFTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBREFWO0FDS0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBREZGO0FDSUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FERko7QUNLRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FESEo7QUNPQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FESkY7QUNNRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QURKSjtBQ09FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QURMSjtBQ1NBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBRE5GO0FDUUU7RUFDRSw2Q0FBQTtBRE5KO0FDU0U7RUFDRSw2Q0FBQTtBRFBKO0FEeEVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUMyRUY7QUR4RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMyRUY7QUR4RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMyRUY7QUR4RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMyRUY7QUR4RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMyRUY7QUR4RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMyRUY7QUR4RUE7RUFDRSxtQkFBQTtBQzJFRjtBRTlHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRmlISjtBRTlHQTtFQUNJLHVCQUFBO0FGaUhKO0FHbEhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FIcUhGO0FHOUdBO0VBQ0UsdUJBQUE7QUhpSEY7QUc5R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBSGlIRjtBRzdHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUhnSEY7QUc1R0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBSCtHSjtBRzdHRTtFQUNFLGFBQUE7QUgrR0o7QUd4R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBSDJHRjtBR3pHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBSDJHSjtBR3ZHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUgwR0Y7QUd2R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FIMEdGO0FHdkdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUgwR0Y7QUd4R0U7RUFDRSxlQUFBO0FIMEdKO0FHdEdBO0VBQ0UsWUFBQTtBSHlHRjtBR3RHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBSHlHRjtBR3JHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FIdUdGO0FHcEdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FIc0dKO0FHbkdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FIcUdKO0FHbEdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FIcUdGO0FBNU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQStNRjtBQTdNRTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQStNSjtBQTdNSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUErTU4iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXZvMWFlZS5jc3NcIik7XG5cbioge1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDQsIGg1LCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIHAsIGJ1dHRvbiwgbGFiZWwsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJveGltYStOb3ZhJyk7XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IC0xO1xuICBwYWRkaW5nOiAwIDIwdnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gIC5ncm91cCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53cmFwcGVyIHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxufSIsIi8vYnV0dG9uIHN0eWxlc1xuLmJ0biB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyODhDQztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzUwYzVmZiAsIzBkOGZkMCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgIGJvcmRlcjogI0IxRDVFODtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjQzdFREZGLCAjQjFENUU4KTtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gIH1cbn1cblxuLmJ0bi15ZWxsb3cge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNmZmFlMDA7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjZmZhZTAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLWdyZXkge1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAwICNjZWNlY2U7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcblxuICAmOmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAjY2VjZWNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAjQ0MyRDI0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDMkQyNDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOWQ5NiwgI2NlM2IzMyk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICAjQ0MyRDI0KTtcbiAgfVxufSIsIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzMztcbn1cblxuLnNlY3Rpb24ge1xuICAgIHNjcm9sbC1tYXJnaW4tdG9wOiA1MHB4O1xufSIsIkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi8vIGNvbG9yIGRlY2xhcmF0aW9uc1xuOnJvb3R7XG4gIC0tY2xyLWZvcmVncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWZvb3Rlci1iZzogIzAwMDtcbiAgLS1jbHItZm9vdGVyLXRleHQ6ICNmZmY7XG4gIC0tY2xyLWhlYWRlci1iZzogI2ZmZjtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcbn1cblxuXG4vL0F0dHJpYnV0ZSB2YXJpYWJsZXNcbiRjb3JuZXJSYWRpb3VzOiAxMHB4O1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuLy9UaGlzIGNsYXNzIHNwZWNpZmllcyB0aGUgc3R5bGUgb2YgY29udGFpbmVyczpcbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAkY29ybmVyUmFkaW91cztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgwLDAsMCwgMC4xMCk7XG59XG5cbi5oaWRlLXNjcm9sbGJhciB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy9jaGFuZ2luZyBjb2xvcnMgdG8gb24gZXZlcnl0aGluZ1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5zZWNvbmRhcnktbGluaywgc3Bhbi5kYXRhLCBzcGFuLmFjY29yZGlvbi10YWIsIHNlbGVjdCwgb3B0aW9ue1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLWdyb3VwLCAubGluay1pbWcsIC5kcm9wZG93biA+IHVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG59XG5cbnRkIHtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgYm9yZGVyOiAxNXB4IGhpZGRlbiAhaW1wb3J0YW50O1xuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG59XG5cbnN2Z3tcbiAgZmlsbDogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG5cbmJvZHkuZGFyay1tb2Rle1xuXG4gIC0tY2xyLWZvcmVncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWhlYWRlci1iZzogIzIwMjAyMDtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcblxuXG4gIC5wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICB9XG5cbiAgdGFibGUsIHRoLCB0ZCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBpbnB1dFt0eXBlPXRleHRde1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgfVxufVxuaHRtbCwgYm9keSB7IFxuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4iLCIvLyBUaGVtZSBjb2xvcnMuXG4kdGhlbWUtYmx1ZTogIzAyODhDQztcbiR0aGVtZS1ncmV5OiAgIzcwNzA3MDtcbiR0aGVtZS13aGl0ZTogI2ZmZmZmZjtcbiR0aGVtZS15ZWxsb3c6ICNGRkREMDA7XG4kdGhlbWUtYmxhY2s6ICMwMDAwMDA7XG4kdGhlbWUtcmVkOiAjQ0MyRDI0O1xuXG4vLyBNaXNjZWxsYW5lb3VzIGNvbG9ycy5cbiRib3JkZXJDb2xvcjogIzAwN0RCQTtcbiRsaW5rQ29sb3I6ICMwMDdkYmE7XG4kcHJpbWFyeUJ0bkNscjogIzAyODhDQzsiXX0= */", "body[_ngcontent-%COMP%]{display:none !important;}"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_0__.routerTransition] } });


/***/ }),

/***/ 2680:
/*!*****************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/not-found/not-found.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class NotFoundComponent {
    constructor() {
        this.html = document.getElementById('html');
        this.body = document.getElementById('body');
    }
    ngOnInit() {
        if (this.html && this.body) {
            this.html.classList.add('hide-scrollbar');
            this.body.classList.add('hide-scrollbar');
        }
    }
    ngOnDestroy() {
        if (this.html && this.body) {
            this.html.classList.remove('hide-scrollbar');
            this.body.classList.remove('hide-scrollbar');
        }
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 11, vars: 6, consts: [[1, "background"], ["autoplay", "", "muted", "", "loop", "", "id", "myVideo"], ["src", "assets/image/background-road.mp4", "type", "video/mp4"], [1, "content"], [3, "innerHTML"], ["alt", "not found truck", "src", "assets/image/truck1.png"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0)(3, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "404.title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "404.main"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\nvideo[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100vw;\n  position: fixed;\n  z-index: 0;\n  -o-object-fit: fill;\n     object-fit: fill;\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  \n  -moz-transform: scaleX(-1);\n  \n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n.button[_ngcontent-%COMP%] {\n  background: #fedb00;\n  border-radius: 10px;\n  margin: 2vh;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 300%;\n  padding-top: 3vh;\n}\np[_ngcontent-%COMP%] {\n  font-size: 200%;\n  text-align: center;\n  margin: 0 0 0 0;\n  padding-top: 5vh;\n}\n@-webkit-keyframes animatedBackground {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes animatedBackground {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\nimg[_ngcontent-%COMP%] {\n  align-content: center;\n  margin-left: 3.1vw;\n  max-height: 80vw;\n  margin-top: 45vh;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBM01BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQStCLHNCQUFBO0VBQy9CLDBCQUFBO0VBQTRCLFlBQUE7QUFnTjlCO0FBN01BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWdORjtBQTdNQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBZ05GO0FBN01BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBZ05GO0FBN01BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZ05GO0FBN01BO0VBQ0U7SUFDRSwyQkFBQTtFQWdORjtFQTlNQTtJQUNFLHdCQUFBO0VBZ05GO0FBQ0Y7QUF0TkE7RUFDRTtJQUNFLDJCQUFBO0VBZ05GO0VBOU1BO0lBQ0Usd0JBQUE7RUFnTkY7QUFDRjtBQTlNQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFnTkYiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9pdm8xYWVlLmNzc1wiKTtcblxuKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCwgaDUsIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgcCwgYnV0dG9uLCBsYWJlbCwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59IiwiLy9idXR0b24gc3R5bGVzXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI4OENDO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTBjNWZmICwjMGQ4ZmQwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgYm9yZGVyOiAjQjFENUU4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgfVxufVxuXG4uYnRuLXllbGxvdyB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkREMDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2ZmYWUwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNmZmFlMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tZ3JleSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2NlY2VjZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNjZWNlY2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICNDQzJEMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MyRDI0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDk2LCAjY2UzYjMzKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgICNDQzJEMjQpO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cblxudmlkZW8ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAwO1xuICBvYmplY3QtZml0OiBmaWxsO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKTsgLyogRmlyZWZveCAqL1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZlZGIwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAydmg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMDAlO1xuICBwYWRkaW5nLXRvcDogM3ZoO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAyMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgcGFkZGluZy10b3A6IDV2aDtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlZEJhY2tncm91bmQge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxufVxuaW1nIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMy4xdnc7XG4gIG1heC1oZWlnaHQ6IDgwdnc7XG4gIG1hcmdpbi10b3A6IDQ1dmg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4iLCIuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMzM7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBzY3JvbGwtbWFyZ2luLXRvcDogNTBweDtcbn0iLCJAaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9idXR0b24tc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MnO1xuXG4vLyBjb2xvciBkZWNsYXJhdGlvbnNcbjpyb290e1xuICAtLWNsci1mb3JlZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1mb290ZXItYmc6ICMwMDA7XG4gIC0tY2xyLWZvb3Rlci10ZXh0OiAjZmZmO1xuICAtLWNsci1oZWFkZXItYmc6ICNmZmY7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG59XG5cblxuLy9BdHRyaWJ1dGUgdmFyaWFibGVzXG4kY29ybmVyUmFkaW91czogMTBweDtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cbi8vVGhpcyBjbGFzcyBzcGVjaWZpZXMgdGhlIHN0eWxlIG9mIGNvbnRhaW5lcnM6XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJGNvcm5lclJhZGlvdXM7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMCwwLDAsIDAuMTApO1xufVxuXG4uaGlkZS1zY3JvbGxiYXIge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi8vY2hhbmdpbmcgY29sb3JzIHRvIG9uIGV2ZXJ5dGhpbmdcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uc2Vjb25kYXJ5LWxpbmssIHNwYW4uZGF0YSwgc3Bhbi5hY2NvcmRpb24tdGFiLCBzZWxlY3QsIG9wdGlvbntcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuXG4ubGluay1ncm91cCwgLmxpbmstaW1nLCAuZHJvcGRvd24gPiB1bHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIGJvcmRlcjogMTVweCBoaWRkZW4gIWltcG9ydGFudDtcbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG50ZXh0YXJlYXtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zdmd7XG4gIGZpbGw6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuXG5ib2R5LmRhcmstbW9kZXtcblxuICAtLWNsci1mb3JlZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1oZWFkZXItYmc6ICMyMDIwMjA7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG5cblxuICAucGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIHRhYmxlLCB0aCwgdGQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmh0bWwsIGJvZHkgeyBcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuIiwiLy8gVGhlbWUgY29sb3JzLlxuJHRoZW1lLWJsdWU6ICMwMjg4Q0M7XG4kdGhlbWUtZ3JleTogICM3MDcwNzA7XG4kdGhlbWUtd2hpdGU6ICNmZmZmZmY7XG4kdGhlbWUteWVsbG93OiAjRkZERDAwO1xuJHRoZW1lLWJsYWNrOiAjMDAwMDAwO1xuJHRoZW1lLXJlZDogI0NDMkQyNDtcblxuLy8gTWlzY2VsbGFuZW91cyBjb2xvcnMuXG4kYm9yZGVyQ29sb3I6ICMwMDdEQkE7XG4kbGlua0NvbG9yOiAjMDA3ZGJhO1xuJHByaW1hcnlCdG5DbHI6ICMwMjg4Q0M7Il19 */", "body[_ngcontent-%COMP%] {\n      display: none !important;\n    }"] });


/***/ }),

/***/ 5541:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/previous-hackathons/past-winners/past-winners.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastWinnersComponent": () => (/* binding */ PastWinnersComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* eslint-disable */




function PastWinnersComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "div", 12)(4, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Hackathon Topic:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Technologies Used:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16)(21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PastWinnersComponent_ng_container_0_div_14_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r4.scroll(i_r2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.toggleExpand(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Show Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", element_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, element_r1.topic), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, element_r1.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 8, element_r1.technologiesUsed));
} }
function PastWinnersComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PastWinnersComponent_ng_container_0_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r2 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.toggleExpand(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PastWinnersComponent_ng_container_0_Template_img_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r2 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toggleExpand(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PastWinnersComponent_ng_container_0_div_14_Template, 23, 10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, element_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, element_r1.pastMembers));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r1.expand);
} }
class PastWinnersComponent {
    constructor() {
        this.state = 'in';
        this.expandButton = 'expand-btn';
        this.showMoreBtn = true;
        this.pastWinners = [
            {
                image: '../../../../assets/image/Project2.jpg',
                title: 'past.section-two.title',
                topic: 'past.section-two.topic',
                description: 'past.section-two.body',
                technologiesUsed: 'past.section-two.technologies',
                pastMembers: 'past.section-two.members',
                expand: false
            },
            {
                image: '../../../../assets/image/SpiritAnimal.png',
                title: 'past.section-one.title',
                topic: 'past.section-one.topic',
                description: 'past.section-one.body',
                pastMembers: 'past.section-one.members',
                technologiesUsed: 'past.section-one.technologies',
                expand: false
            },
            {
                image: '../../../../assets/image/project4.jpg',
                title: 'past.section-four.title',
                topic: 'past.section-four.topic',
                description: 'past.section-four.body',
                technologiesUsed: 'past.section-four.technologies',
                pastMembers: 'past.section-four.members',
                expand: false
            },
            {
                image: '../../../../assets/image/project3.jpg',
                description: 'past.section-three.body',
                title: 'past.section-three.title',
                topic: 'past.section-three.topic',
                technologiesUsed: 'past.section-three.technologies',
                pastMembers: 'past.section-three.members',
                expand: false
            },
            {
                expand: false,
                image: '../../../../assets/image/mucky_bottle.jpg',
                title: 'past.section-five.title',
                topic: 'past.section-five.topic',
                description: 'past.section-five.body',
                technologiesUsed: 'past.section-five.technologies',
                pastMembers: 'past.section-five.members',
            },
            {
                image: '../../../../assets/image/Hackermen.JPG',
                title: 'past.section-six.title',
                topic: 'past.section-six.topic',
                description: 'past.section-six.body',
                technologiesUsed: 'past.section-six.technologies',
                pastMembers: 'past.section-six.members',
                expand: false
            }
        ];
    }
    toggleExpand(index) {
        this.pastWinners[index].expand = !this.pastWinners[index].expand;
        document.getElementsByClassName("btn-blue")[index].classList.toggle("hidden");
        document.getElementsByClassName("close-btn")[index].classList.toggle("hidden");
    }
    scroll(id) {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
    ngOnInit() {
        this.state = (this.state === 'in' ? 'out' : 'in');
    }
}
PastWinnersComponent.ɵfac = function PastWinnersComponent_Factory(t) { return new (t || PastWinnersComponent)(); };
PastWinnersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PastWinnersComponent, selectors: [["app-past-winners"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "content-container", "card", 3, "id"], [1, "group", "column-group"], [1, "group", "title-group"], [1, "group-title"], [1, "subheader"], [1, "group", "btn-group"], [1, "btn", "btn-blue", 3, "click"], ["src", "../../../../../assets/svg/Close-X-Icon.svg", "alt", "Close icon", 1, "close-btn", "hidden", 3, "click"], ["class", "group column-group", 4, "ngIf"], ["alt", "project screenshot", 1, "card", "project-image", 3, "src"], [1, "group"], [1, "group", "info-group"], [1, "expanded-title"], [1, "expanded-body-txt", 3, "innerHTML"], [1, "expanded-body-txt"], [1, "btn-group"]], template: function PastWinnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PastWinnersComponent_ng_container_0_Template, 15, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pastWinners);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.upperheader[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%] {\n  color: #0288CC;\n  font-weight: 400;\n}\n.subheader[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #707070;\n}\n.group-title[_ngcontent-%COMP%], .expanded-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.content-container[_ngcontent-%COMP%] {\n  scroll-margin-top: 30px;\n  width: 100%;\n  height: auto;\n  padding: 20px 40px;\n  margin: 30px 0px;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.content-container[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.content-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.content-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-right: 60px;\n}\n.content-container[_ngcontent-%COMP%]   .column-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  padding: 10px 0;\n}\n.content-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10vh;\n}\n.content-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0288CC;\n  text-decoration: none;\n}\n.content-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.content-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n}\n@media screen and (min-width: 901px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(500px, 50vw) minmax(300px, 20vw);\n  }\n  .hero[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%] {\n    margin-top: 15vh;\n  }\n}\n@media screen and (max-width: 900px) {\n  .project-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content-container[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 20px;\n    box-sizing: border-box;\n  }\n  .content-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .content-container[_ngcontent-%COMP%]   .column-group[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n  .content-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n    justify-content: center;\n  }\n  .content-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsInBhc3Qtd2lubmVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUErTUY7QUE1TUE7RUFDRSxjR1BXO0VIUVgsZ0JBQUE7QUErTUY7QUE1TUE7RUFDRSxlQUFBO0VBQ0EsY0daWTtBSDJOZDtBQTVNQTtFQUNFLGdCQUFBO0FBK01GO0FBNU1BO0VBQ0UsYUFBQTtBQStNRjtBQTVNQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBK01GO0FBN01FO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBK01KO0FBN01JO0VBQ0UsZ0JBQUE7QUErTU47QUEzTUU7RUFDRSxjQUFBO0FBNk1KO0FBMU1FO0VBQ0UseUJBQUE7QUE0TUo7QUExTUk7RUFDRSxrQkFBQTtBQTRNTjtBQXhNRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUEwTUo7QUF2TUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUF5TUo7QUF0TUU7RUFDRSxjR25FUztFSG9FVCxxQkFBQTtBQXdNSjtBQXRNSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXdNTjtBQXBNRTtFQUNFLFVBQUE7QUFzTUo7QUFsTUE7RUFDRSxXQUFBO0FBcU1GO0FBbE1BO0VBQ0U7SUFDRSw4REFBQTtFQXFNRjtFQW5NRTtJQUNFLGdCQUFBO0VBcU1KO0FBQ0Y7QUFqTUE7RUFFRTtJQUNFLGFBQUE7RUFrTUY7O0VBL0xBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQWtNRjtFQWhNRTtJQUNFLGtCQUFBO0VBa01KO0VBOUxJO0lBQ0UscUJBQUE7RUFnTU47RUE1TEU7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQThMSjtFQTVMSTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VBOExOO0FBQ0YiLCJmaWxlIjoicGFzdC13aW5uZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9pdm8xYWVlLmNzc1wiKTtcblxuKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCwgaDUsIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgcCwgYnV0dG9uLCBsYWJlbCwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59IiwiLy9idXR0b24gc3R5bGVzXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI4OENDO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTBjNWZmICwjMGQ4ZmQwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgYm9yZGVyOiAjQjFENUU4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgfVxufVxuXG4uYnRuLXllbGxvdyB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkREMDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2ZmYWUwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNmZmFlMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tZ3JleSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2NlY2VjZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNjZWNlY2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICNDQzJEMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MyRDI0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDk2LCAjY2UzYjMzKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgICNDQzJEMjQpO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udXBwZXJoZWFkZXIsIC5oaWdobGlnaHR7XG4gIGNvbG9yOiAkdGhlbWUtYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN1YmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICR0aGVtZS1ncmV5O1xufVxuXG4uZ3JvdXAtdGl0bGUsIC5leHBhbmRlZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBtYXJnaW46IDMwcHggMHB4O1xuXG4gIC5ncm91cCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53cmFwcGVyIHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmluZm8tZ3JvdXAge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgLmJ0bi1ncm91cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb2x1bW4tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICB9XG5cbiAgLmxpbmsge1xuICAgIGNvbG9yOiAkdGhlbWUtYmx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cblxuICAucHJvamVjdC1pbWFnZSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuXG4uY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMXB4KSB7XG4gIC5oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MDBweCwgNTB2dykgbWlubWF4KDMwMHB4LCAyMHZ3KTtcblxuICAgIC5saW5rLWdyb3VwIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1dmg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgLnByb2plY3QtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICoge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb2x1bW4tZ3JvdXAge1xuICAgICAgLmdyb3VwIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1ncm91cCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzMztcbn1cblxuLnNlY3Rpb24ge1xuICAgIHNjcm9sbC1tYXJnaW4tdG9wOiA1MHB4O1xufSIsIkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi8vIGNvbG9yIGRlY2xhcmF0aW9uc1xuOnJvb3R7XG4gIC0tY2xyLWZvcmVncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWZvb3Rlci1iZzogIzAwMDtcbiAgLS1jbHItZm9vdGVyLXRleHQ6ICNmZmY7XG4gIC0tY2xyLWhlYWRlci1iZzogI2ZmZjtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcbn1cblxuXG4vL0F0dHJpYnV0ZSB2YXJpYWJsZXNcbiRjb3JuZXJSYWRpb3VzOiAxMHB4O1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuLy9UaGlzIGNsYXNzIHNwZWNpZmllcyB0aGUgc3R5bGUgb2YgY29udGFpbmVyczpcbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAkY29ybmVyUmFkaW91cztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgwLDAsMCwgMC4xMCk7XG59XG5cbi5oaWRlLXNjcm9sbGJhciB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy9jaGFuZ2luZyBjb2xvcnMgdG8gb24gZXZlcnl0aGluZ1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5zZWNvbmRhcnktbGluaywgc3Bhbi5kYXRhLCBzcGFuLmFjY29yZGlvbi10YWIsIHNlbGVjdCwgb3B0aW9ue1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLWdyb3VwLCAubGluay1pbWcsIC5kcm9wZG93biA+IHVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG59XG5cbnRkIHtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgYm9yZGVyOiAxNXB4IGhpZGRlbiAhaW1wb3J0YW50O1xuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG59XG5cbnN2Z3tcbiAgZmlsbDogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG5cbmJvZHkuZGFyay1tb2Rle1xuXG4gIC0tY2xyLWZvcmVncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWhlYWRlci1iZzogIzIwMjAyMDtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcblxuXG4gIC5wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICB9XG5cbiAgdGFibGUsIHRoLCB0ZCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBpbnB1dFt0eXBlPXRleHRde1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgfVxufVxuaHRtbCwgYm9keSB7IFxuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4iLCIvLyBUaGVtZSBjb2xvcnMuXG4kdGhlbWUtYmx1ZTogIzAyODhDQztcbiR0aGVtZS1ncmV5OiAgIzcwNzA3MDtcbiR0aGVtZS13aGl0ZTogI2ZmZmZmZjtcbiR0aGVtZS15ZWxsb3c6ICNGRkREMDA7XG4kdGhlbWUtYmxhY2s6ICMwMDAwMDA7XG4kdGhlbWUtcmVkOiAjQ0MyRDI0O1xuXG4vLyBNaXNjZWxsYW5lb3VzIGNvbG9ycy5cbiRib3JkZXJDb2xvcjogIzAwN0RCQTtcbiRsaW5rQ29sb3I6ICMwMDdkYmE7XG4kcHJpbWFyeUJ0bkNscjogIzAyODhDQzsiXX0= */"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_0__.routerTransition] } });


/***/ }),

/***/ 1943:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/previous-hackathons/previous-hackathons.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviousHackathonsComponent": () => (/* binding */ PreviousHackathonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _winner_stories_winner_stories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winner-stories/winner-stories.component */ 4162);
/* harmony import */ var _past_winners_past_winners_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./past-winners/past-winners.component */ 5541);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class PreviousHackathonsComponent {
    constructor() { }
    ngOnInit() {
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
PreviousHackathonsComponent.ɵfac = function PreviousHackathonsComponent_Factory(t) { return new (t || PreviousHackathonsComponent)(); };
PreviousHackathonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreviousHackathonsComponent, selectors: [["app-previous-hackathons"]], decls: 28, vars: 18, consts: [[1, "content-container"], [1, "hero"], [1, "group"], [3, "innerHTML"], [1, "subheader", "text-box", 3, "innerHTML"], [1, "link-group"], [1, "link", 3, "innerHTML", "click"], [1, "section"], ["past_winners", ""], [1, "group", "title"], [1, "upperheader"], ["winner_stories", ""]], template: function PreviousHackathonsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreviousHackathonsComponent_Template_h4_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreviousHackathonsComponent_Template_h4_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scroll(_r1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7, 8)(14, "div", 9)(15, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Successful projects from the past");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-past-winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7, 11)(22, "div", 9)(23, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Stories from previous winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "app-winner-stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, "past.name"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, "past.Info"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "past.title"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, "success-stories.title"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 14, "past.title"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 16, "success-stories.title"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, dependencies: [_winner_stories_winner_stories_component__WEBPACK_IMPORTED_MODULE_0__.WinnerStoriesComponent, _past_winners_past_winners_component__WEBPACK_IMPORTED_MODULE_1__.PastWinnersComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.upperheader[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%] {\n  color: #0288CC;\n  font-weight: 400;\n}\n.subheader[_ngcontent-%COMP%] {\n  color: #707070;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  display: grid;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  margin-top: 15vh;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-left: 15px;\n  font-size: 16px;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-width: 200px;\n  max-width: 60%;\n  margin-bottom: 10px;\n}\n.content-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  text-align: left;\n}\n.content-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10vh;\n}\n.content-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0288CC;\n  text-decoration: none;\n}\n.content-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n@media screen and (min-width: 901px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(500px, 50vw) minmax(300px, 20vw);\n  }\n  .hero[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%] {\n    margin-top: 15vh;\n  }\n}\n@media screen and (max-width: 900px) {\n  .hero[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n  .hero[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .hero[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsInByZXZpb3VzLWhhY2thdGhvbnMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtEQUFBO0FDQ1I7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FER0E7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FDQUY7QURFRTtFQUNFLDZDQUFBO0FDQUo7QURHRTtFQUNFLDZDQUFBO0FDREo7QURJRTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FER007RUFDSSw2Q0FBQTtFQUNBLGVBQUE7QUNEVjtBRE1BO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEUUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xGO0FET0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDTEo7QURRRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDTko7QURVQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFNFO0VBQ0UsNkNBQUE7QUNQSjtBRFVFO0VBQ0UsNkNBQUE7QUNSSjtBRnZFQTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsbUJBQUE7QUUwRUY7QUM3R0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QURnSEo7QUM3R0E7RUFDSSx1QkFBQTtBRGdISjtBRWpIQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBRm9IRjtBRTdHQTtFQUNFLHVCQUFBO0FGZ0hGO0FFN0dBO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0VBQUEsdUNBQUE7RUFDQSxjQUFBO0VBQUEsNEJBQUE7QUZnSEY7QUU1R0E7RUFDRSxtQkFkYztFQWVkLDBDQUFBO0FGK0dGO0FFM0dFOztFQUVFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUY4R0o7QUU1R0U7RUFDRSxhQUFBO0FGOEdKO0FFdkdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQUEsNEJBQUE7QUYwR0Y7QUV4R0U7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUYwR0o7QUV0R0E7RUFDRSx5QkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0Usc0JBQUE7RUFBQSx1Q0FBQTtBRnlHRjtBRXRHQTtFQUNFLGNDbEVZO0VEbUVaLDhCQUFBO0FGeUdGO0FFdkdFO0VBQ0UsZUFBQTtBRnlHSjtBRXJHQTtFQUNFLFlBQUE7QUZ3R0Y7QUVyR0E7RUFDRSxhQUFBO0VBQUEsMkJBQUE7QUZ3R0Y7QUVwR0E7RUFFRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBRnNHRjtBRW5HRTtFQUNFLFdBQUE7RUFBQSw0QkFBQTtBRnFHSjtBRWxHRTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7RUFDQSxvQ0FBQTtFQUFBLGtEQUFBO0VBQ0EsaUNBQUE7RUFBQSxrREFBQTtBRm9HSjtBRWpHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRm9HRjtBQTVNQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBK01GO0FBNU1BO0VBQ0UsY0dQVztFSFFYLGdCQUFBO0FBK01GO0FBNU1BO0VBQ0UsY0dYWTtBSDBOZDtBQTVNQTtFQUNFLGtCQUFBO0FBK01GO0FBNU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUErTUY7QUE3TUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUErTUo7QUE1TUk7RUFDRSxnQkFBQTtBQThNTjtBQTNNSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBNk1OO0FBMU1JO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUE0TU47QUF4TUU7RUFDRSxtQkFBQTtBQTBNSjtBQXZNRTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXlNSjtBQXZNSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUF5TU47QUFyTUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUF1TUo7QUFwTUU7RUFDRSxjR3RFUztFSHVFVCxxQkFBQTtBQXNNSjtBQXBNSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXNNTjtBQWpNQTtFQUNFO0lBQ0UsOERBQUE7RUFvTUY7RUFsTUU7SUFDRSxnQkFBQTtFQW9NSjtBQUNGO0FBaE1BO0VBRUk7SUFDRSxxQkFBQTtFQWlNSjtFQS9MSTtJQUNFLGdCQUFBO0VBaU1OO0VBN0xFO0lBQ0UsYUFBQTtFQStMSjtBQUNGIiwiZmlsZSI6InByZXZpb3VzLWhhY2thdGhvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi51cHBlcmhlYWRlciwgLmhpZ2hsaWdodHtcbiAgY29sb3I6ICR0aGVtZS1ibHVlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgY29sb3I6ICR0aGVtZS1ncmV5O1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgLmhlcm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBcblxuICAgIC5ncm91cCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICAgIH1cblxuICAgIC5saW5rIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAudGV4dC1ib3gge1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmdyb3VwIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLndyYXBwZXIge1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLnNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gIH1cblxuICAubGluayB7XG4gICAgY29sb3I6ICR0aGVtZS1ibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDFweCkge1xuICAuaGVybyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTAwcHgsIDUwdncpIG1pbm1heCgzMDBweCwgMjB2dyk7XG5cbiAgICAubGluay1ncm91cCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuaGVybyB7XG4gICAgLmdyb3VwIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuXG4gICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubGluay1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufSIsIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDAzMztcbn1cblxuLnNlY3Rpb24ge1xuICAgIHNjcm9sbC1tYXJnaW4tdG9wOiA1MHB4O1xufSIsIkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi8vIGNvbG9yIGRlY2xhcmF0aW9uc1xuOnJvb3R7XG4gIC0tY2xyLWZvcmVncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWZvb3Rlci1iZzogIzAwMDtcbiAgLS1jbHItZm9vdGVyLXRleHQ6ICNmZmY7XG4gIC0tY2xyLWhlYWRlci1iZzogI2ZmZjtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcbn1cblxuXG4vL0F0dHJpYnV0ZSB2YXJpYWJsZXNcbiRjb3JuZXJSYWRpb3VzOiAxMHB4O1xuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuLy9UaGlzIGNsYXNzIHNwZWNpZmllcyB0aGUgc3R5bGUgb2YgY29udGFpbmVyczpcbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAkY29ybmVyUmFkaW91cztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgwLDAsMCwgMC4xMCk7XG59XG5cbi5oaWRlLXNjcm9sbGJhciB7XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy9jaGFuZ2luZyBjb2xvcnMgdG8gb24gZXZlcnl0aGluZ1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5zZWNvbmRhcnktbGluaywgc3Bhbi5kYXRhLCBzcGFuLmFjY29yZGlvbi10YWIsIHNlbGVjdCwgb3B0aW9ue1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLWdyb3VwLCAubGluay1pbWcsIC5kcm9wZG93biA+IHVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG59XG5cbnRkIHtcbiAgY29sb3I6ICR0aGVtZS13aGl0ZTtcbiAgYm9yZGVyOiAxNXB4IGhpZGRlbiAhaW1wb3J0YW50O1xuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbnRleHRhcmVhe1xuICByZXNpemU6IG5vbmU7XG59XG5cbnN2Z3tcbiAgZmlsbDogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG5cbmJvZHkuZGFyay1tb2Rle1xuXG4gIC0tY2xyLWZvcmVncm91bmQ6ICNmZmY7XG4gIC0tY2xyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC0tY2xyLWhlYWRlci1iZzogIzIwMjAyMDtcbiAgLS1jbHItZm9yZWdyb3VuZC1saWdodDogI2UyZTJlMjtcblxuXG4gIC5wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICB9XG5cbiAgdGFibGUsIHRoLCB0ZCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBpbnB1dFt0eXBlPXRleHRde1xuICAgIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgfVxufVxuaHRtbCwgYm9keSB7IFxuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4iLCIvLyBUaGVtZSBjb2xvcnMuXG4kdGhlbWUtYmx1ZTogIzAyODhDQztcbiR0aGVtZS1ncmV5OiAgIzcwNzA3MDtcbiR0aGVtZS13aGl0ZTogI2ZmZmZmZjtcbiR0aGVtZS15ZWxsb3c6ICNGRkREMDA7XG4kdGhlbWUtYmxhY2s6ICMwMDAwMDA7XG4kdGhlbWUtcmVkOiAjQ0MyRDI0O1xuXG4vLyBNaXNjZWxsYW5lb3VzIGNvbG9ycy5cbiRib3JkZXJDb2xvcjogIzAwN0RCQTtcbiRsaW5rQ29sb3I6ICMwMDdkYmE7XG4kcHJpbWFyeUJ0bkNscjogIzAyODhDQzsiXX0= */"] });


/***/ }),

/***/ 4162:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/previous-hackathons/winner-stories/winner-stories.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerStoriesComponent": () => (/* binding */ WinnerStoriesComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function WinnerStoriesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WinnerStoriesComponent_div_3_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.revealInformation(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const story_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("info-card ", story_r2.expand ? "selected" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", story_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, story_r2.name));
} }
function WinnerStoriesComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const story_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 10, "success-stories.question-one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, story_r6.answerOne));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 14, "success-stories.question-two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, story_r6.answerTwo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 18, "success-stories.question-three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 20, story_r6.answerThree));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 22, "success-stories.question-four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 24, story_r6.answerFour));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 26, "success-stories.question-five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 28, story_r6.answerFive));
} }
function WinnerStoriesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WinnerStoriesComponent_div_4_div_1_Template, 26, 30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", story_r6.expand);
} }
class WinnerStoriesComponent {
    constructor() {
        this.successStories = [
            {
                image: 'assets/image/past-winners/Jaden.jpg',
                name: 'success-stories.winner-one.name',
                answerOne: 'success-stories.winner-one.answer-one',
                answerTwo: 'success-stories.winner-one.answer-two',
                answerThree: 'success-stories.winner-one.answer-three',
                answerFour: 'success-stories.winner-one.answer-four',
                answerFive: 'success-stories.winner-one.answer-five',
                expand: true
            },
            {
                answerFive: 'success-stories.winner-two.answer-five',
                image: 'assets/image/past-winners/Blake1.png',
                name: 'success-stories.winner-two.name',
                answerThree: 'success-stories.winner-two.answer-three',
                answerOne: 'success-stories.winner-two.answer-one',
                answerTwo: 'success-stories.winner-two.answer-two',
                answerFour: 'success-stories.winner-two.answer-four',
                expand: false
            },
            {
                image: 'assets/image/past-winners/Luke.jpg',
                answerOne: 'success-stories.winner-three.answer-one',
                answerThree: 'success-stories.winner-three.answer-three',
                answerFour: 'success-stories.winner-three.answer-four',
                expand: false,
                name: 'success-stories.winner-three.name',
                answerTwo: 'success-stories.winner-three.answer-two',
                answerFive: 'success-stories.winner-three.answer-five',
            },
            {
                answerOne: 'success-stories.winner-four.answer-one',
                answerTwo: 'success-stories.winner-four.answer-two',
                image: 'assets/image/past-winners/Eli.jpg',
                answerThree: 'success-stories.winner-four.answer-three',
                name: 'success-stories.winner-four.name',
                answerFour: 'success-stories.winner-four.answer-four',
                answerFive: 'success-stories.winner-four.answer-five',
                expand: false
            },
            {
                answerThree: 'success-stories.winner-five.answer-three',
                image: 'assets/image/past-winners/Trevor.jpg',
                name: 'success-stories.winner-five.name',
                answerOne: 'success-stories.winner-five.answer-one',
                answerFour: 'success-stories.winner-five.answer-four',
                answerFive: 'success-stories.winner-five.answer-five',
                expand: false,
                answerTwo: 'success-stories.winner-five.answer-two',
            }
        ];
        this.state = 'in';
    }
    revealInformation(index) {
        const currentStory = this.successStories[index];
        const arrayLength = this.successStories.length;
        for (let i = 0; i < arrayLength; i++) {
            this.successStories[i].expand = false;
            if (i === index) {
                this.successStories[i].expand = true;
            }
        }
    }
    ngOnInit() {
        this.state = (this.state === 'in' ? 'out' : 'in');
    }
}
WinnerStoriesComponent.ɵfac = function WinnerStoriesComponent_Factory(t) { return new (t || WinnerStoriesComponent)(); };
WinnerStoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WinnerStoriesComponent, selectors: [["app-winner-stories"]], decls: 5, vars: 2, consts: [[1, "content-container"], [1, "column-group"], [1, "group", "card-container"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "group", 4, "ngFor", "ngForOf"], [3, "click"], [1, "info-container"], ["alt", "Face Photograph", 1, "face-img", 3, "src"], [1, "name-successor"], [1, "group"], ["class", "expanded-information", 4, "ngIf"], [1, "expanded-information"], [3, "innerHTML"], [1, "question-answer"]], template: function WinnerStoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WinnerStoriesComponent_div_3_Template, 6, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WinnerStoriesComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.successStories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.successStories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.content-container[_ngcontent-%COMP%]   .column-group[_ngcontent-%COMP%] {\n  display: grid;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  margin: 20px 0;\n}\n.content-container[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-radius: 7px;\n  padding: 10px 10px;\n  box-shadow: none;\n  margin: 0 10px;\n}\n.content-container[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px rgba(112, 112, 112, 0.3098039216);\n  cursor: pointer;\n}\n.content-container[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(112, 112, 112, 0.3098039216);\n}\n.content-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.content-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .face-img[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  height: 80px;\n  width: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 10px;\n}\n.content-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.question-answer[_ngcontent-%COMP%] {\n  color: #707070;\n}\n@media screen and (min-width: 901px) {\n  .column-group[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(350px, 50%) minmax(350px, 50%);\n  }\n}\n@media screen and (max-width: 900px) {\n  .column-group[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n\n  .info-card[_ngcontent-%COMP%] {\n    min-width: 175px;\n    max-width: 200px;\n    border: 1px solid #ececec;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -ms-overflow-style: none;\n    scrollbar-width: 5px;\n    overflow-x: scroll;\n  }\n  .card-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsIndpbm5lci1zdG9yaWVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrREFBQTtBQ0NSO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBREdBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUU7RUFDRSw2Q0FBQTtBQ0FKO0FER0U7RUFDRSw2Q0FBQTtBQ0RKO0FESUU7RUFDSSw2Q0FBQTtFQUNBLGVBQUE7QUNGTjtBREdNO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRFY7QURNQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSEY7QURLRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNKSjtBRFFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNMRjtBRE9FO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0xKO0FEUUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ05KO0FEVUE7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FDUEY7QURTRTtFQUNFLDZDQUFBO0FDUEo7QURVRTtFQUNFLDZDQUFBO0FDUko7QUZ2RUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRTBFRjtBRnZFQTtFQUNFLG1CQUFBO0FFMEVGO0FDN0dBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FEZ0hKO0FDN0dBO0VBQ0ksdUJBQUE7QURnSEo7QUVqSEE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUZvSEY7QUU3R0E7RUFDRSx1QkFBQTtBRmdIRjtBRTdHQTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtFQUFBLHVDQUFBO0VBQ0EsY0FBQTtFQUFBLDRCQUFBO0FGZ0hGO0FFNUdBO0VBQ0UsbUJBZGM7RUFlZCwwQ0FBQTtBRitHRjtBRTNHRTs7RUFFRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGOEdKO0FFNUdFO0VBQ0UsYUFBQTtBRjhHSjtBRXZHQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLDRCQUFBO0FGMEdGO0FFeEdFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FGMEdKO0FFdEdBO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtBRnlHRjtBRXRHQTtFQUNFLHNCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxjQ2xFWTtFRG1FWiw4QkFBQTtBRnlHRjtBRXZHRTtFQUNFLGVBQUE7QUZ5R0o7QUVyR0E7RUFDRSxZQUFBO0FGd0dGO0FFckdBO0VBQ0UsYUFBQTtFQUFBLDJCQUFBO0FGd0dGO0FFcEdBO0VBRUUsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUZzR0Y7QUVuR0U7RUFDRSxXQUFBO0VBQUEsNEJBQUE7QUZxR0o7QUVsR0U7RUFDRSx5QkFBQTtFQUFBLHVDQUFBO0VBQ0Esb0NBQUE7RUFBQSxrREFBQTtFQUNBLGlDQUFBO0VBQUEsa0RBQUE7QUZvR0o7QUVqR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUZvR0Y7QUE1TUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQStNRjtBQTVNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBK01GO0FBN01FO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQStNSjtBQTVNRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQThNSjtBQTNNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBNk1KO0FBM01JO0VBQ0UsMERBQUE7RUFDQSxlQUFBO0FBNk1OO0FBek1FO0VBQ0UsMERBQUE7QUEyTUo7QUF4TUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBME1KO0FBeE1JO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQTBNTjtBQXRNRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBd01KO0FBcE1BO0VBQ0UsY0cvRFk7QUhzUWQ7QUFwTUE7RUFFRTtJQUNFLDREQUFBO0VBc01GO0FBQ0Y7QUFuTUE7RUFFRTtJQUNFLDJCQUFBO0VBb01GOztFQWpNQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQW9NRjs7RUFqTUE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7RUFvTUY7RUFsTUU7SUFDRSxhQUFBO0VBb01KO0FBQ0YiLCJmaWxlIjoid2lubmVyLXN0b3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgLmNvbHVtbi1ncm91cCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cblxuICAuaW5mby1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNzA3MDcwNEY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnNlbGVjdGVke1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNzA3MDcwNEY7XG4gIH1cbiAgXG4gIC5pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmZhY2UtaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0LWNvbnRhaW5lcntcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXJ7XG4gIGNvbG9yOiAkdGhlbWUtZ3JleTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAxcHgpIHtcblxuICAuY29sdW1uLWdyb3VwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzNTBweCwgNTAlKSBtaW5tYXgoMzUwcHgsIDUwJSk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgXG4gIC5jb2x1bW4tZ3JvdXAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgfVxuXG4gIC5pbmZvLWNhcmQge1xuICAgIG1pbi13aWR0aDogMTc1cHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogNXB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_0__.routerTransition] } });


/***/ }),

/***/ 7333:
/*!*****************************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/resources/resources.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesComponent": () => (/* binding */ ResourcesComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rubric/rubric.component */ 353);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../faq/faq.component */ 5221);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





class ResourcesComponent {
    constructor() {
        this.state = 'in';
    }
    ngOnInit() {
        this.state = (this.state === 'in' ? 'out' : 'in');
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(); };
ResourcesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["app-resources"]], decls: 140, vars: 117, consts: [[1, "content-container"], [1, "hero"], [1, "group"], [1, "subheader", "text-box", 2, "margin-bottom", "30px"], [1, "section", "resource-banner"], [1, "group", "resources-group"], ["front_end", ""], [1, "group", "title", 2, "margin-top", "40px"], [3, "innerHTML"], [1, "upperheader"], [1, "column-group"], [1, "link-group"], [2, "list-style-type", "disc", 3, "innerHTML"], ["back_end", ""], [1, "group", "title"], ["misc", ""], [1, "group", 2, "margin-bottom", "50px"], [1, "section"], ["faq", ""], [1, "group", 2, "margin-bottom", "30px"], [2, "color", "black", "margin-bottom", "-10px", "margin-top", "100px"], ["rubric", ""]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "References that will take your skills to the next level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "div", 5, 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "The face of your project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "div", 2)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 2)(33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 5, 13)(50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "The infrastructure of your project");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 10)(56, "div", 2)(57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 2)(73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 5, 15)(90, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "The neccessities of programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 10)(96, "div", 2)(97, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 16)(113, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 17, 18)(130, "div", 19)(131, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 17, 21)(136, "div", 19)(137, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Rubric");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "app-rubric");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 39, "resources.front-end"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 41, "resources.angular.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 43, "resources.angular.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 45, "resources.html.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 47, "resources.html.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 49, "resources.typescript.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 51, "resources.typescript.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 53, "resources.react-native.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 55, "resources.react-native.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 57, "resources.javascript.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 59, "resources.javascript.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 61, "resources.jquery.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 63, "resources.jquery.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 65, "resources.back-end"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 67, "resources.java.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 69, "resources.java.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 71, "resources.kotlin.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 73, "resources.kotlin.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 75, "resources.sql.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](71, 77, "resources.sql.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 79, "resources.c++.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 81, "resources.c++.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 83, "resources.python.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](82, 85, "resources.python.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 87, "resources.nosql.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](87, 89, "resources.nosql.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](92, 91, "resources.miscellaneous"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 93, "resources.programming.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](101, 95, "resources.programming.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](104, 97, "resources.linux.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](106, 99, "resources.linux.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](109, 101, "resources.cryptography.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](111, 103, "resources.cryptography.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](115, 105, "resources.github.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](117, 107, "resources.github.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](120, 109, "resources.blockchain.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](122, 111, "resources.blockchain.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](125, 113, "resources.ai.title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](127, 115, "resources.ai.links"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    } }, dependencies: [_rubric_rubric_component__WEBPACK_IMPORTED_MODULE_1__.RubricComponent, _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__.FaqComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.resource-banner[_ngcontent-%COMP%] {\n  \n  position: relative;\n  top: 0px;\n  left: -21vw;\n  width: 2390px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0 21vw;\n  \n  background: transparent linear-gradient(70deg, #40BFFD 0%, var(--unnamed-color-0288cc) 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(70deg, #40BFFD 0%, #0288CC 100%) 0% 0% no-repeat padding-box;\n  opacity: 1;\n}\n.upperheader[_ngcontent-%COMP%], .highlight[_ngcontent-%COMP%] {\n  color: #FFDD00;\n  font-weight: 400;\n}\n.subheader[_ngcontent-%COMP%] {\n  color: #707070;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nh2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-top: 10px;\n}\nul[_ngcontent-%COMP%] {\n  list-style-position: outside;\n  list-style-type: disc;\n}\n.content-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  padding: 0 20vw;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: grid;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  margin-top: 140px;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-left: 15px;\n  font-size: 16px;\n  color: #ffffff;\n}\n.content-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-width: 200px;\n  max-width: 60%;\n  margin-bottom: 10px;\n}\n.content-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-left: solid 5px #FFDD00;\n  padding-left: 10px;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  text-align: left;\n}\n.content-container[_ngcontent-%COMP%]   .resources-group[_ngcontent-%COMP%] {\n  margin-bottom: 37px;\n}\n.content-container[_ngcontent-%COMP%]   .resources-group[_ngcontent-%COMP%]   .column-group[_ngcontent-%COMP%] {\n  display: grid;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.content-container[_ngcontent-%COMP%]   .resources-group[_ngcontent-%COMP%]   .column-group[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  flex-basis: 100%;\n  margin-bottom: 20px;\n  background-color: inherit;\n  color: #ffffff;\n}\n.content-container[_ngcontent-%COMP%]   .resources-group[_ngcontent-%COMP%]   .column-group[_ngcontent-%COMP%]   .link-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.content-container[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 100px;\n}\n.content-container[_ngcontent-%COMP%]   .resource-section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 100px;\n}\n.content-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n}\n.content-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n@media screen and (min-width: 1001px) {\n  .hero[_ngcontent-%COMP%], .column-group[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(500px, 50vw) minmax(300px, 20vw);\n  }\n}\n@media screen and (max-width: 1000px) {\n  .hero[_ngcontent-%COMP%], .column-group[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsInJlc291cmNlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUErTUY7QUE1TUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0Esd0hBQUE7RUFDQSxvR0FBQTtFQUNBLFVBQUE7QUE4TUY7QUEzTUE7RUFDRSxjR25CYTtFSG9CYixnQkFBQTtBQThNRjtBQTNNQTtFQUNFLGNHMUJZO0FId09kO0FBMU1BO0VBQ0Usa0JBQUE7QUE2TUY7QUExTUE7RUFDRSxnQkFBQTtBQTZNRjtBQTFNQTtFQUNFLGNHdENZO0VIdUNaLGdCQUFBO0FBNk1GO0FBMU1BO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtBQTZNRjtBQXpNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNE1GO0FBMU1FO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7QUE0TUo7QUExTUk7RUFDRSxpQkFBQTtBQTRNTjtBQXpNSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0d0RVE7QUhpUmQ7QUF4TUk7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTBNTjtBQXRNRTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQXdNSjtBQXRNRTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXdNSjtBQXRNSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUF3TU47QUFwTUU7RUFDRSxtQkFBQTtBQXNNSjtBQXBNSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFzTU47QUFwTU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNHL0dNO0FIcVRkO0FBcE1RO0VBQ0UsZ0JBQUE7QUFzTVY7QUFoTUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFrTUo7QUE1TEU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUE4TEo7QUF6TEU7RUFDRSxjR3hJVTtFSHlJVixxQkFBQTtBQTJMSjtBQXpMSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQTJMTjtBQXRMQTtFQUVFO0lBQ0UsOERBQUE7RUF3TEY7QUFDRjtBQXJMQTtFQUVFO0lBQ0UsMkJBQUE7RUFzTEY7QUFDRiIsImZpbGUiOiJyZXNvdXJjZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yZXNvdXJjZS1iYW5uZXIge1xuICAvKiBMYXlvdXQgUHJvcGVydGllcyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMjF2dztcbiAgd2lkdGg6IDIzOTBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMCAyMXZ3O1xuXG4gIC8qIFVJIFByb3BlcnRpZXMgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDcwZGVnLCAjNDBCRkZEIDAlLCB2YXIoLS11bm5hbWVkLWNvbG9yLTAyODhjYykgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoNzBkZWcsICM0MEJGRkQgMCUsICMwMjg4Q0MgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBvcGFjaXR5OiAxO1xufVxuXG4udXBwZXJoZWFkZXIsIC5oaWdobGlnaHR7XG4gIGNvbG9yOiAkdGhlbWUteWVsbG93O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgY29sb3I6ICR0aGVtZS1ncmV5O1xufVxuXG5cbmgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5oMiB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xufVxuXG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAyMHZ3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAuaGVybyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgLmdyb3VwIHtcbiAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xuICAgIH1cblxuICAgIC5saW5rIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gICAgfVxuXG4gICAgLnRleHQtYm94IHtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgNXB4ICR0aGVtZS15ZWxsb3c7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5ncm91cCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53cmFwcGVyIHtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC5yZXNvdXJjZXMtZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XG5cbiAgICAuY29sdW1uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBcbiAgICAgIC5saW5rLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIFxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcblxuICAgIFxuICB9XG5cbiAgXG4gIC5yZXNvdXJjZS1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcblxuICAgIFxuICB9XG5cbiAgLmxpbmsge1xuICAgIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDFweCkge1xuXG4gIC5oZXJvLCAuY29sdW1uLWdyb3VwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg1MDBweCwgNTB2dykgbWlubWF4KDMwMHB4LCAyMHZ3KTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgXG4gIC5oZXJvLCAuY29sdW1uLWdyb3VwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn0iLCIuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMzM7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBzY3JvbGwtbWFyZ2luLXRvcDogNTBweDtcbn0iLCJAaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9idXR0b24tc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MnO1xuXG4vLyBjb2xvciBkZWNsYXJhdGlvbnNcbjpyb290e1xuICAtLWNsci1mb3JlZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1mb290ZXItYmc6ICMwMDA7XG4gIC0tY2xyLWZvb3Rlci10ZXh0OiAjZmZmO1xuICAtLWNsci1oZWFkZXItYmc6ICNmZmY7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG59XG5cblxuLy9BdHRyaWJ1dGUgdmFyaWFibGVzXG4kY29ybmVyUmFkaW91czogMTBweDtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cbi8vVGhpcyBjbGFzcyBzcGVjaWZpZXMgdGhlIHN0eWxlIG9mIGNvbnRhaW5lcnM6XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJGNvcm5lclJhZGlvdXM7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMCwwLDAsIDAuMTApO1xufVxuXG4uaGlkZS1zY3JvbGxiYXIge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi8vY2hhbmdpbmcgY29sb3JzIHRvIG9uIGV2ZXJ5dGhpbmdcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uc2Vjb25kYXJ5LWxpbmssIHNwYW4uZGF0YSwgc3Bhbi5hY2NvcmRpb24tdGFiLCBzZWxlY3QsIG9wdGlvbntcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuXG4ubGluay1ncm91cCwgLmxpbmstaW1nLCAuZHJvcGRvd24gPiB1bHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIGJvcmRlcjogMTVweCBoaWRkZW4gIWltcG9ydGFudDtcbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG50ZXh0YXJlYXtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zdmd7XG4gIGZpbGw6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuXG5ib2R5LmRhcmstbW9kZXtcblxuICAtLWNsci1mb3JlZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1oZWFkZXItYmc6ICMyMDIwMjA7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG5cblxuICAucGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIHRhYmxlLCB0aCwgdGQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmh0bWwsIGJvZHkgeyBcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuIiwiLy8gVGhlbWUgY29sb3JzLlxuJHRoZW1lLWJsdWU6ICMwMjg4Q0M7XG4kdGhlbWUtZ3JleTogICM3MDcwNzA7XG4kdGhlbWUtd2hpdGU6ICNmZmZmZmY7XG4kdGhlbWUteWVsbG93OiAjRkZERDAwO1xuJHRoZW1lLWJsYWNrOiAjMDAwMDAwO1xuJHRoZW1lLXJlZDogI0NDMkQyNDtcblxuLy8gTWlzY2VsbGFuZW91cyBjb2xvcnMuXG4kYm9yZGVyQ29sb3I6ICMwMDdEQkE7XG4kbGlua0NvbG9yOiAjMDA3ZGJhO1xuJHByaW1hcnlCdG5DbHI6ICMwMjg4Q0M7Il19 */"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_0__.routerTransition] } });


/***/ }),

/***/ 353:
/*!***********************************************************************!*\
  !*** ./src/app/features/hackathon-sign-up/rubric/rubric.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubricComponent": () => (/* binding */ RubricComponent)
/* harmony export */ });
/* harmony import */ var _shared_app_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/app.animations */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function RubricComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 4)(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr")(18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr")(37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr")(56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr")(75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 30, ctx_r0.d), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 32, "judging.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 34, "judging.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 36, "judging.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 38, "judging.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 40, "judging.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 42, "judging.question-one.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 44, "judging.question-one.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 46, "judging.question-one.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 48, "judging.question-one.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 50, "judging.question-one.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 52, "judging.question-one.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 54, "judging.question-two.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 56, "judging.question-two.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 58, "judging.question-two.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 60, "judging.question-two.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 62, "judging.question-two.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 64, "judging.question-two.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 66, "judging.question-three.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 68, "judging.question-three.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 70, "judging.question-three.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 72, "judging.question-three.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 74, "judging.question-three.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 76, "judging.question-three.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 78, "judging.question-four.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 80, "judging.question-four.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 82, "judging.question-four.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 84, "judging.question-four.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 86, "judging.question-four.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](92, 88, "judging.question-four.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function RubricComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "thead")(40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "thead")(77, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](103, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "thead")(114, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](116, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](122, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](125, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](128, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](134, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](137, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](140, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](143, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](146, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](149, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 48, "judging.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 50, "judging.question-one.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 52, "judging.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 54, "judging.question-one.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 56, "judging.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 58, "judging.question-one.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 60, "judging.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 62, "judging.question-one.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 64, "judging.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 66, "judging.question-one.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 68, "judging.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 70, "judging.question-one.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 72, "judging.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 74, "judging.question-two.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 76, "judging.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 78, "judging.question-two.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 80, "judging.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 82, "judging.question-two.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 84, "judging.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 86, "judging.question-two.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 88, "judging.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 90, "judging.question-two.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 92, "judging.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 94, "judging.question-two.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 96, "judging.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 98, "judging.question-three.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 100, "judging.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 102, "judging.question-three.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 104, "judging.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 106, "judging.question-three.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 108, "judging.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 110, "judging.question-three.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](103, 112, "judging.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 114, "judging.question-three.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](109, 116, "judging.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](112, 118, "judging.question-three.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](116, 120, "judging.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](119, 122, "judging.question-four.criteria"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](122, 124, "judging.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](125, 126, "judging.question-four.one"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](128, 128, "judging.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](131, 130, "judging.question-four.two"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](134, 132, "judging.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](137, 134, "judging.question-four.three"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](140, 136, "judging.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](143, 138, "judging.question-four.four"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](146, 140, "judging.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](149, 142, "judging.question-four.five"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class RubricComponent {
    constructor() {
        this.state = 'in';
    }
    ngOnInit() {
        this.state = (this.state === 'in' ? 'out' : 'in');
        this.getScreenSize();
    }
    getScreenSize() {
        this.screenWidth = window.innerWidth;
        this.isBigScreen = this.screenWidth > 1200;
    }
}
RubricComponent.ɵfac = function RubricComponent_Factory(t) { return new (t || RubricComponent)(); };
RubricComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RubricComponent, selectors: [["app-rubric"]], hostBindings: function RubricComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function RubricComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { rate: "rate", judgingForm: "judgingForm" }, decls: 7, vars: 2, consts: [[1, "rubric"], [1, "rubric-banner"], [4, "ngIf"], [1, "yellow-bar"], [1, "number-row"], ["id", "table", 1, "title", 3, "innerHTML"], [1, "title", 3, "innerHTML"], [3, "innerHTML"], [1, "last"]], template: function RubricComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RubricComponent_table_4_Template, 93, 90, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RubricComponent_table_5_Template, 150, 144, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBigScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isBigScreen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n.rubric[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  height: auto;\n  position: relative;\n}\n.rubric-banner[_ngcontent-%COMP%] {\n  \n  position: relative;\n  z-index: -2;\n  top: 0px;\n  left: -100px;\n  width: 68vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 20px;\n  \n  background: transparent linear-gradient(181deg, var(--unnamed-color-0288cc) 0%, #40BFFD 100%) 0% 0% no-repeat padding-box;\n  background: transparent linear-gradient(181deg, #0288CC 0%, #40BFFD 100%) 0% 0% no-repeat padding-box;\n  border-radius: 90px;\n  opacity: 1;\n  margin-bottom: 100px;\n}\n.number-row[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-bottom: 3px solid #FFDD00;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-weight: 600;\n  color: #ffffff;\n}\ntd[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  vertical-align: top;\n  border-bottom: 1px solid black;\n  padding: 0 10px;\n}\n@media screen and (min-width: 1201px) {\n  .yellow-bar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 60px;\n    left: -40px;\n    width: 63vw;\n    height: 5px;\n    \n    background: #FFDD00 0% 0% no-repeat padding-box;\n    opacity: 1;\n  }\n}\n@media screen and (max-width: 1000px) {\n  table[_ngcontent-%COMP%] {\n    margin-top: 1em;\n    overflow: auto;\n  }\n\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border-top: 1px solid black;\n    border-left: 1px solid black;\n    text-align: center;\n    font-size: small;\n    padding: 10px;\n    margin: 5px 0;\n  }\n\n  .rubric-banner[_ngcontent-%COMP%] {\n    left: -32.5px;\n  }\n\n  td[_ngcontent-%COMP%] {\n    border-right: 1px solid black;\n  }\n}\n@media screen and (max-width: 500px) {\n  .rubric-banner[_ngcontent-%COMP%] {\n    left: -90px;\n    max-width: 500px;\n    width: 160%;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsInJ1YnJpYy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9jYXJkLXN0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0RBQUE7QUNDUjtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UsNkNBQUE7QUNBSjtBREdFO0VBQ0UsNkNBQUE7QUNESjtBRElFO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0FDRk47QURHTTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0RWO0FETUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0hGO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSko7QURRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNOSjtBRFVBO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEU0U7RUFDRSw2Q0FBQTtBQ1BKO0FEVUU7RUFDRSw2Q0FBQTtBQ1JKO0FGdkVBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUUwRUY7QUZ2RUE7RUFDRSxtQkFBQTtBRTBFRjtBQzdHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRGdISjtBQzdHQTtFQUNJLHVCQUFBO0FEZ0hKO0FFakhBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FGb0hGO0FFN0dBO0VBQ0UsdUJBQUE7QUZnSEY7QUU3R0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFBQSx1Q0FBQTtFQUNBLGNBQUE7RUFBQSw0QkFBQTtBRmdIRjtBRTVHQTtFQUNFLG1CQWRjO0VBZWQsMENBQUE7QUYrR0Y7QUUzR0U7O0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRjhHSjtBRTVHRTtFQUNFLGFBQUE7QUY4R0o7QUV2R0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFBQSw0QkFBQTtBRjBHRjtBRXhHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBRjBHSjtBRXRHQTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7QUZ5R0Y7QUV0R0E7RUFDRSxzQkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0UsY0NsRVk7RURtRVosOEJBQUE7QUZ5R0Y7QUV2R0U7RUFDRSxlQUFBO0FGeUdKO0FFckdBO0VBQ0UsWUFBQTtBRndHRjtBRXJHQTtFQUNFLGFBQUE7RUFBQSwyQkFBQTtBRndHRjtBRXBHQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FGc0dGO0FFbkdFO0VBQ0UsV0FBQTtFQUFBLDRCQUFBO0FGcUdKO0FFbEdFO0VBQ0UseUJBQUE7RUFBQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQUEsa0RBQUE7RUFDQSxpQ0FBQTtFQUFBLGtEQUFBO0FGb0dKO0FFakdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FGb0dGO0FBNU1BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUErTUY7QUE1TUE7RUFDSSxzQkFBQTtFQUNGLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUVBLHlIQUFBO0VBQ0EscUdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQTZNRjtBQXpNQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7QUE0TUY7QUF6TUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0dqQ1k7QUg2T2Q7QUExTUE7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUE0TUY7QUF6TUE7RUFHRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUVBLGtCQUFBO0lBRUEsK0NBQUE7SUFDQSxVQUFBO0VBd01GO0FBQ0Y7QUFyTUE7RUFDRTtJQUVFLGVBQUE7SUFDQSxjQUFBO0VBc01GOztFQW5NQTtJQUVFLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7RUFxTUY7O0VBbE1BO0lBQ0UsYUFBQTtFQXFNRjs7RUFsTUE7SUFFRSw2QkFBQTtFQW9NRjtBQUNGO0FBak1BO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFtTUY7QUFDRiIsImZpbGUiOiJydWJyaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l2bzFhZWUuY3NzXCIpO1xuXG4qIHtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBwLCBidXR0b24sIGxhYmVsLCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn0iLCIvL2J1dHRvbiBzdHlsZXNcbi5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnRuLWJsdWUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjg4Q0M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1MGM1ZmYgLCMwZDhmZDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDBCRkZELCAjMDI4OENDKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICBib3JkZXI6ICNCMUQ1RTg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0M3RURGRiwgI0IxRDVFOCk7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuICB9XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2ZmYWUwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1ncmV5IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjY2VjZWNlO1xuICBib3JkZXI6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG5cbiAgJjplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgI2NlY2VjZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgI0NDMkQyNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQzJEMjQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjlkOTYsICNjZTNiMzMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5NThlLCAgI0NDMkQyNCk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLnJ1YnJpYyB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucnVicmljLWJhbm5lciB7XG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMjtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0xMDBweDtcbiAgd2lkdGg6IDY4dnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgLyogVUkgUHJvcGVydGllcyAqL1xuXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODFkZWcsIHZhcigtLXVubmFtZWQtY29sb3ItMDI4OGNjKSAwJSwgIzQwQkZGRCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODFkZWcsICMwMjg4Q0MgMCUsICM0MEJGRkQgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgXG59XG5cbi5udW1iZXItcm93IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNGRkREMDA7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xufVxudGRcbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDAgMTBweDsgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xuICBcblxuICAueWVsbG93LWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICBsZWZ0OiAtNDBweDtcbiAgICB3aWR0aDogNjN2dztcbiAgICBoZWlnaHQ6IDVweDtcbiAgXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xuICBcbiAgICBiYWNrZ3JvdW5kOiAjRkZERDAwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICB0YWJsZVxuICB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgdGgsIHRkIFxuICB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG5cbiAgLnJ1YnJpYy1iYW5uZXIge1xuICAgIGxlZnQ6IC0zMi41cHg7XG4gIH1cblxuICB0ZFxuICB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnJ1YnJpYy1iYW5uZXJ7XG4gICAgbGVmdDogLTkwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn0iLCIuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwMzM7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBzY3JvbGwtbWFyZ2luLXRvcDogNTBweDtcbn0iLCJAaW1wb3J0ICcuL2Fzc2V0cy90aGVtZS9idXR0b24tc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvZm9udHMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy9hc3NldHMvdGhlbWUvY29sb3JzLnNjc3MnO1xuXG4vLyBjb2xvciBkZWNsYXJhdGlvbnNcbjpyb290e1xuICAtLWNsci1mb3JlZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1mb290ZXItYmc6ICMwMDA7XG4gIC0tY2xyLWZvb3Rlci10ZXh0OiAjZmZmO1xuICAtLWNsci1oZWFkZXItYmc6ICNmZmY7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG59XG5cblxuLy9BdHRyaWJ1dGUgdmFyaWFibGVzXG4kY29ybmVyUmFkaW91czogMTBweDtcblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cbi8vVGhpcyBjbGFzcyBzcGVjaWZpZXMgdGhlIHN0eWxlIG9mIGNvbnRhaW5lcnM6XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJGNvcm5lclJhZGlvdXM7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMCwwLDAsIDAuMTApO1xufVxuXG4uaGlkZS1zY3JvbGxiYXIge1xuICBodG1sLFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi8vY2hhbmdpbmcgY29sb3JzIHRvIG9uIGV2ZXJ5dGhpbmdcblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uc2Vjb25kYXJ5LWxpbmssIHNwYW4uZGF0YSwgc3Bhbi5hY2NvcmRpb24tdGFiLCBzZWxlY3QsIG9wdGlvbntcbiAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuXG4ubGluay1ncm91cCwgLmxpbmstaW1nLCAuZHJvcGRvd24gPiB1bHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAkdGhlbWUtd2hpdGU7XG4gIGJvcmRlcjogMTVweCBoaWRkZW4gIWltcG9ydGFudDtcbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG50ZXh0YXJlYXtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zdmd7XG4gIGZpbGw6IHZhcigtLWNsci1mb3JlZ3JvdW5kKTtcbn1cblxuXG5ib2R5LmRhcmstbW9kZXtcblxuICAtLWNsci1mb3JlZ3JvdW5kOiAjZmZmO1xuICAtLWNsci1iYWNrZ3JvdW5kOiAjMTgxODE4O1xuICAtLWNsci1oZWFkZXItYmc6ICMyMDIwMjA7XG4gIC0tY2xyLWZvcmVncm91bmQtbGlnaHQ6ICNlMmUyZTI7XG5cblxuICAucGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIHRhYmxlLCB0aCwgdGQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmh0bWwsIGJvZHkgeyBcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuIiwiLy8gVGhlbWUgY29sb3JzLlxuJHRoZW1lLWJsdWU6ICMwMjg4Q0M7XG4kdGhlbWUtZ3JleTogICM3MDcwNzA7XG4kdGhlbWUtd2hpdGU6ICNmZmZmZmY7XG4kdGhlbWUteWVsbG93OiAjRkZERDAwO1xuJHRoZW1lLWJsYWNrOiAjMDAwMDAwO1xuJHRoZW1lLXJlZDogI0NDMkQyNDtcblxuLy8gTWlzY2VsbGFuZW91cyBjb2xvcnMuXG4kYm9yZGVyQ29sb3I6ICMwMDdEQkE7XG4kbGlua0NvbG9yOiAjMDA3ZGJhO1xuJHByaW1hcnlCdG5DbHI6ICMwMjg4Q0M7Il19 */", "body[_ngcontent-%COMP%] {\n      display: none !important;\n    }"], data: { animation: [_shared_app_animations__WEBPACK_IMPORTED_MODULE_0__.routerTransition] } });


/***/ }),

/***/ 2367:
/*!************************************************!*\
  !*** ./src/app/features/judge/judge.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgeModule": () => (/* binding */ JudgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _judging_judging_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./judging/judging.component */ 4846);
/* harmony import */ var src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/profile.service */ 6893);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standings/standings.component */ 7448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class JudgeModule {
}
JudgeModule.ɵfac = function JudgeModule_Factory(t) { return new (t || JudgeModule)(); };
JudgeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: JudgeModule });
JudgeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](JudgeModule, { declarations: [_judging_judging_component__WEBPACK_IMPORTED_MODULE_0__.JudgingComponent, _standings_standings_component__WEBPACK_IMPORTED_MODULE_2__.StandingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule], exports: [_judging_judging_component__WEBPACK_IMPORTED_MODULE_0__.JudgingComponent, _standings_standings_component__WEBPACK_IMPORTED_MODULE_2__.StandingsComponent] }); })();


/***/ }),

/***/ 4846:
/*!*************************************************************!*\
  !*** ./src/app/features/judge/judging/judging.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JudgingComponent": () => (/* binding */ JudgingComponent)
/* harmony export */ });
/* harmony import */ var _Users_matt_Documents_app_sales_universityHackathon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/profile.service */ 6893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sign-up.service */ 1366);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








class JudgingComponent {
  // eslint-disable-next-line max-len
  constructor(fb, profileService, router, signUpService) {
    this.fb = fb;
    this.profileService = profileService;
    this.router = router;
    this.signUpService = signUpService;
    this.categoryDescription = ['Problem Identification/Innovative Solution', 'Level of Implementation', 'Presentation Quality', 'Connection to the Theme'];
    this.judgingForm = this.fb.group({
      'question1': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'question2': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'question3': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'question4': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'feedback': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4000))
    }); // teamNames = [];
    // judgeNames = [];

    this.scoreArr = [0, 0, 0, 0];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_matt_Documents_app_sales_universityHackathon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.profileService.getJudgeNames().subscribe( data => {
      //   data.forEach(e => {
      //     this.judgeNames.push({label: e, value: e});
      //   });
      // });
      // this.signUpService.getAllTeams().subscribe( data => {
      //   data.forEach(e => {
      //     this.teamNames.push({label: e.teamName, value: e.teamName});
      //   });
      // });
      _this.totalScore = '---';
      var _judgeClass = _this;

      for (let i = 0; i < 4; i++) {
        let rangeId = '#inputRange' + (i + 1);
        let fieldId = '#inputNumber' + (i + 1);
        let range = document.querySelector(rangeId);
        let field = document.querySelector(fieldId);
        range.addEventListener('input', e => {
          let val = +e.target.value;
          if (val < 0) val = 0;
          if (val > 250) val = 250;
          field.value = val.toString();
          _judgeClass.scoreArr[i] = val;
          _judgeClass.totalScore = _judgeClass.scoreArr.reduce((sum, cur) => {
            return sum + cur;
          }, 0);
        });
        field.addEventListener('input', e => {
          let val = +e.target.value;
          if (val < 0) val = 0;
          if (val > 250) val = 250;
          range.value = val.toString();
          _judgeClass.scoreArr[i] = val;
          _judgeClass.totalScore = _judgeClass.scoreArr.reduce((sum, cur) => {
            return sum + cur;
          }, 0);
        });
      }

      const feedbackBox = document.getElementById('feedbackBox');
      feedbackBox.addEventListener('input', e => {
        feedbackBox.style.height = 'auto';
        feedbackBox.style.height = feedbackBox.scrollHeight + 'px';
      });
    })();
  }

  onSubmit() {
    this.feedback = document.getElementById('feedbackBox').value;
    console.log(this.feedback);
    console.log(this.scoreArr); // let question;
    // let internalQuestion;
    // let externalQuestion;
    // const judgeFirst = this.judgingForm.value['judgeName'].split(' ')[0];
    // const judgeLast = this.judgingForm.value['judgeName'].split(' ')[1];
    // const teamName = this.judgingForm.value['teamName'];
    // let postBody;
    // for (let i = 1; i < 5; i++) {
    //   question = 'question' + i;
    //   internalQuestion = question + 'internalFeedback';
    //   externalQuestion = question + 'externalFeedback';
    //   postBody = {
    //       // 'teamName': teamName,
    //       // 'judgeFirstName': judgeFirst,
    //       // 'judgeLastName': judgeLast,
    //       'categoryDescription': this.categoryDescription[i - 1],
    //       'ratingNumber': this.judgingForm.value[question],
    //       'judgementInternalFeedback': this.judgingForm.value[internalQuestion],
    //       'judgementExternalFeedback': this.judgingForm.value[externalQuestion]
    //   };
    //   this.profileService.addScore(postBody).subscribe(data => {});
    // }
    // this.onResults();
  } // onResults() {
  //   this.router.navigateByUrl('/XJlWkNAZoYgmQtsYhItrnfBV');
  // }
  // onBreakdown() {
  //   this.router.navigateByUrl('/ud73EH4gidl8LUsZF8Gzg53e');
  // }


  get teamName() {
    return this.judgingForm.get('teamName');
  }

  get question1() {
    return this.judgingForm.get('question1');
  }

  get question2() {
    return this.judgingForm.get('question2');
  }

  get question3() {
    return this.judgingForm.get('question3');
  }

  get question4() {
    return this.judgingForm.get('question4');
  }

  get judgeName() {
    return this.judgingForm.get('judgeName');
  }

}

JudgingComponent.ɵfac = function JudgingComponent_Factory(t) {
  return new (t || JudgingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__.SignUpService));
};

JudgingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: JudgingComponent,
  selectors: [["app-judging"]],
  decls: 153,
  vars: 65,
  consts: [[1, "content-container"], [1, "page-title", 3, "innerHTML"], [1, "judging-form", "card", 3, "formGroup", "ngSubmit"], [1, "team-name"], [1, "team-name-underline"], [1, "rubric"], [1, "rubric--item"], [1, "section-header"], [1, "section-title"], [1, "section-score"], ["type", "number", "id", "inputNumber1", "placeholder", "---", "onkeyup", "if(this.value > 250) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 250;\n\t\t\t\t\t\t\t\t\t} if (this.value < 0) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 0;\n\t\t\t\t\t\t\t\t\t}", 1, "input-score"], [1, "slider-container"], ["type", "range", "id", "inputRange1", "min", "0", "max", "250", "value", "125", 1, "input-range"], ["aria-describedby", "rubric for problem identification/innovative solution", 1, "table", "card"], ["id", "table-header"], [3, "innerHTML"], ["type", "number", "id", "inputNumber2", "placeholder", "---", "onkeyup", "if(this.value > 250) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 250;\n\t\t\t\t\t\t\t\t\t} if (this.value < 0) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 0;\n\t\t\t\t\t\t\t\t\t}", 1, "input-score"], ["type", "range", "id", "inputRange2", "min", "0", "max", "250", "value", "125", 1, "input-range"], ["aria-describedby", "rubric for level of implementation", 1, "table", "card"], ["type", "number", "id", "inputNumber3", "placeholder", "---", "onkeyup", "if(this.value > 250) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 250;\n\t\t\t\t\t\t\t\t\t} if (this.value < 0) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 0;\n\t\t\t\t\t\t\t\t\t}", 1, "input-score"], ["type", "range", "id", "inputRange3", "min", "0", "max", "250", "value", "125", 1, "input-range"], ["aria-describedby", "rubric for presentation quality", 1, "table", "card"], ["type", "number", "id", "inputNumber4", "placeholder", "---", "onkeyup", "if(this.value > 250) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 250;\n\t\t\t\t\t\t\t\t\t} if (this.value < 0) {\n\t\t\t\t\t\t\t\t\t\tthis.value = 0;\n\t\t\t\t\t\t\t\t\t}", 1, "input-score"], ["type", "range", "id", "inputRange4", "min", "0", "max", "250", "value", "125", 1, "input-range"], ["aria-describedby", "rubric for connection to theme", 1, "table", "card"], [1, "feedback"], ["for", "feedbackBox"], ["pInputTextarea", "", "formControlName", "feedback", "appInputRestriction", "noSpecialChars", "id", "feedbackBox", "maxlength", "4000"], [1, "score"], [1, "score-title"], [1, "score-number"], ["id", "totalScoreId", 1, "calculated-score"], [1, "submit-container"], ["type", "submit", "id", "submitButton", "value", "Submit", 1, "submit-button", "btn-yellow"]],
  template: function JudgingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function JudgingComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Team Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Problem Identification and Innovative Solution ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " / 250 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "table", 13)(18, "thead")(19, "tr")(20, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "0 - 50");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "51 - 100");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "101 - 150");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "151 - 200");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "201 - 250");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 6)(42, "div", 7)(43, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Level of Implementation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " / 250 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "table", 18)(51, "thead")(52, "tr")(53, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "0 - 50");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "51 - 100");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "101 - 150");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "151 - 200");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "201 - 250");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](69, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 6)(75, "div", 7)(76, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " Presentation Quality ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " / 250 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "table", 21)(84, "thead")(85, "tr")(86, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "0 - 50");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "51 - 100");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "101 - 150");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "151 - 200");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "201 - 250");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](98, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](100, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](102, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](104, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](106, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 6)(108, "div", 7)(109, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, " Connection to Theme ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " / 250 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "table", 24)(117, "thead")(118, "tr")(119, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "0 - 50");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "51 - 100");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "101 - 150");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "151 - 200");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "201 - 250");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](131, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](133, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](135, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](137, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](139, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "div", 25)(141, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Feedback to Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "textarea", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 28)(145, "h2", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Total Score");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "h2", 30)(148, "h2", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, " / 1000 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 23, "judging.title"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.judgingForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 25, "judging.question-one.one"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 27, "judging.question-one.two"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 29, "judging.question-one.three"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 31, "judging.question-one.four"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 33, "judging.question-one.five"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 35, "judging.question-two.one"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](67, 37, "judging.question-two.two"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](69, 39, "judging.question-two.three"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 41, "judging.question-two.four"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](73, 43, "judging.question-two.five"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](98, 45, "judging.question-three.one"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](100, 47, "judging.question-three.two"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](102, 49, "judging.question-three.three"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](104, 51, "judging.question-three.four"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](106, 53, "judging.question-three.five"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](131, 55, "judging.question-four.one"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](133, 57, "judging.question-four.two"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](135, 59, "judging.question-four.three"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](137, 61, "judging.question-four.four"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](139, 63, "judging.question-four.five"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalScore);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["@import url(\"https://use.typekit.net/ivo1aee.css\");\n.btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem !important;\n  min-width: 100px;\n  border-radius: 7px;\n  font-weight: 500;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(#40BFFD, #0288CC);\n  border: 1px solid #0288CC;\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#50c5ff, #0d8fd0);\n}\n.btn-blue[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#40BFFD, #0288CC);\n}\n.btn-blue[_ngcontent-%COMP%]:disabled {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  border: #B1D5E8;\n}\n.btn-blue[_ngcontent-%COMP%]:disabled:hover {\n  background: linear-gradient(#C7EDFF, #B1D5E8);\n  cursor: default;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px;\n  color: #000000;\n}\n.btn-yellow[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n.btn-yellow[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-grey[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #ffffff;\n  box-shadow: 0 4px 0 #cecece;\n  border: 0px;\n  color: #000000;\n}\n.btn-grey[_ngcontent-%COMP%]:enabled:active {\n  box-shadow: 0 0 0 #cecece;\n  transform: translateY(4px);\n}\n.btn-grey[_ngcontent-%COMP%]:disabled {\n  opacity: 50%;\n  cursor: default;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(#ff958e, #CC2D24);\n  border: 1px solid #CC2D24;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(#ff9d96, #ce3b33);\n}\n.btn-red[_ngcontent-%COMP%]:active {\n  background: linear-gradient(#ff958e, #CC2D24);\n}\n*[_ngcontent-%COMP%] {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: proxima-nova, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], button[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n.section[_ngcontent-%COMP%] {\n  scroll-margin-top: 50px;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-foreground: #181818;\n  --clr-background: #fff;\n  --clr-footer-bg: #000;\n  --clr-footer-text: #fff;\n  --clr-header-bg: #fff;\n  --clr-foreground-light: #e2e2e2;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #fff;\n  background-color: var(--clr-background);\n  color: #181818;\n  color: var(--clr-foreground);\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.1);\n}\n.hide-scrollbar[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], .hide-scrollbar[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n.hide-scrollbar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  color: var(--clr-background);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.secondary-link[_ngcontent-%COMP%], span.data[_ngcontent-%COMP%], span.accordion-tab[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n}\n.link-group[_ngcontent-%COMP%], .link-img[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  background-color: #fff;\n  background-color: var(--clr-background);\n}\ntd[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 15px hidden !important;\n}\ntd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nsvg[_ngcontent-%COMP%] {\n  fill: #181818;\n  fill: var(--clr-foreground);\n}\nbody.dark-mode[_ngcontent-%COMP%] {\n  --clr-foreground: #fff;\n  --clr-background: #181818;\n  --clr-header-bg: #202020;\n  --clr-foreground-light: #e2e2e2;\n}\nbody.dark-mode[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: #fff;\n  color: var(--clr-background);\n}\nbody.dark-mode[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], body.dark-mode[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  color: #181818 !important;\n  color: var(--clr-foreground) !important;\n  border: 1px solid #181818 !important;\n  border: 1px solid var(--clr-foreground) !important;\n  background-color: #fff !important;\n  background-color: var(--clr-background) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-x: hidden;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-left: 30em;\n  margin-right: 30em;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: none;\n}\n.judging-form[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 5%;\n  padding: 8%;\n}\n.team-name[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: middle;\n  margin-bottom: 8px;\n  font-size: 28px;\n}\n.team-name-underline[_ngcontent-%COMP%] {\n  border: solid 1px;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%] {\n  margin-top: 3em;\n  padding: 0;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  white-space: nowrap;\n  justify-self: end;\n  align-items: center;\n  font-size: 22px;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: inherit;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-score[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: inherit;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-score[_ngcontent-%COMP%]   .input-score[_ngcontent-%COMP%] {\n  border: none;\n  font-size: inherit;\n  width: 30%;\n  text-align: right;\n  color: #00ABFF !important;\n  padding: 0;\n  margin-left: 20px;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%] {\n  display: grid;\n  top: 200px;\n  width: 100%;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 4px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  background-color: white !important;\n  border-color: white !important;\n}\n.rubric[_ngcontent-%COMP%]   .rubric--item[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-align: center;\n  border-collapse: collapse;\n}\n.feedback[_ngcontent-%COMP%] {\n  display: flexbox;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin-top: 3rem;\n}\n.feedback[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.feedback[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border: auto;\n  border-width: 1px;\n  border-color: grey;\n  border-radius: 0.6rem;\n  width: 100%;\n  resize: vertical;\n  overflow: hidden;\n  padding: 5px;\n}\n.score[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.score[_ngcontent-%COMP%]   .score-title[_ngcontent-%COMP%] {\n  margin-top: 4vh;\n}\n.score[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1vh;\n}\n.score[_ngcontent-%COMP%]   .score-number[_ngcontent-%COMP%]   .calculated-score[_ngcontent-%COMP%] {\n  color: #00ABFF;\n  margin-right: 12px;\n}\n.submit-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.submit-button[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  width: 12%;\n  text-align: center;\n  border-radius: 0.5rem;\n  align-self: center;\n}\n.btn-yellow[_ngcontent-%COMP%] {\n  transition: 0.1s ease-out;\n  background-color: #FFDD00;\n  box-shadow: 0 4px 0 #ffae00;\n  border: 0px solid #ffe600;\n}\n.btn-yellow[_ngcontent-%COMP%]:active {\n  box-shadow: 0 0 0 #ffae00;\n  transform: translateY(4px);\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #00ABFF !important;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #00ABFF !important;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #00ABFF !important;\n}\nth[_ngcontent-%COMP%] {\n  border-collapse: collapse !important;\n  text-align: center;\n  width: 20%;\n  padding: 0.5rem;\n}\ntd[_ngcontent-%COMP%] {\n  border-collapse: collapse !important;\n  text-align: center;\n  font-size: 0.75rem;\n  padding: 0.5rem;\n}\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n@media screen and (max-width: 1800px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 20em;\n    margin-right: 20em;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 15em;\n    margin-right: 15em;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 10em;\n    margin-right: 10em;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 5em;\n    margin-right: 5em;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 1em;\n    margin-right: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy90aGVtZS9mb250cy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2J1dHRvbi1zdHlsZXMuc2NzcyIsImp1ZGdpbmcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvdGhlbWUvY2FyZC1zdHlsZXMuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtEQUFBO0FDQ1I7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FER0E7RUFDRSw2Q0FBQTtFQUNBLHlCQUFBO0FDQUY7QURFRTtFQUNFLDZDQUFBO0FDQUo7QURHRTtFQUNFLDZDQUFBO0FDREo7QURJRTtFQUNJLDZDQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FER007RUFDSSw2Q0FBQTtFQUNBLGVBQUE7QUNEVjtBRE1BO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEUUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xGO0FET0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDTEo7QURRRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDTko7QURVQTtFQUNFLDZDQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFNFO0VBQ0UsNkNBQUE7QUNQSjtBRFVFO0VBQ0UsNkNBQUE7QUNSSjtBRnZFQTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FFMEVGO0FGdkVBO0VBQ0UsbUJBQUE7QUUwRUY7QUM3R0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QURnSEo7QUM3R0E7RUFDSSx1QkFBQTtBRGdISjtBRWpIQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBRm9IRjtBRTdHQTtFQUNFLHVCQUFBO0FGZ0hGO0FFN0dBO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0VBQUEsdUNBQUE7RUFDQSxjQUFBO0VBQUEsNEJBQUE7QUZnSEY7QUU1R0E7RUFDRSxtQkFkYztFQWVkLDBDQUFBO0FGK0dGO0FFM0dFOztFQUVFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUY4R0o7QUU1R0U7RUFDRSxhQUFBO0FGOEdKO0FFdkdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQUEsNEJBQUE7QUYwR0Y7QUV4R0U7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUYwR0o7QUV0R0E7RUFDRSx5QkFBQTtFQUFBLHVDQUFBO0FGeUdGO0FFdEdBO0VBQ0Usc0JBQUE7RUFBQSx1Q0FBQTtBRnlHRjtBRXRHQTtFQUNFLGNDbEVZO0VEbUVaLDhCQUFBO0FGeUdGO0FFdkdFO0VBQ0UsZUFBQTtBRnlHSjtBRXJHQTtFQUNFLFlBQUE7QUZ3R0Y7QUVyR0E7RUFDRSxhQUFBO0VBQUEsMkJBQUE7QUZ3R0Y7QUVwR0E7RUFFRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBRnNHRjtBRW5HRTtFQUNFLFdBQUE7RUFBQSw0QkFBQTtBRnFHSjtBRWxHRTtFQUNFLHlCQUFBO0VBQUEsdUNBQUE7RUFDQSxvQ0FBQTtFQUFBLGtEQUFBO0VBQ0EsaUNBQUE7RUFBQSxrREFBQTtBRm9HSjtBRWpHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRm9HRjtBQTVNQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBK01EO0FBNU1BO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQStNRDtBQTVNQTtFQUNHLGFBQUE7QUErTUg7QUE1TUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBK01EO0FBNU1BO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQStNRDtBQTdNQTtFQUNDLGlCQUFBO0FBZ05EO0FBNU1DO0VBQ0MsZUFBQTtFQUNBLFVBQUE7QUErTUY7QUE3TUU7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDSyxtQkFBQTtFQUNMLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBK01IO0FBN01HO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtBQStNSjtBQTNNRztFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUE2TUo7QUEzTUk7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQTZNTDtBQXBNRTtFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXNNSDtBQWxNRTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQW9NSDtBQW5NRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBcU1KO0FBOUxBO0VBQ0MsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWlNRDtBQS9MQztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQWlNRjtBQTlMQztFQUNDLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQStMRjtBQTNMQTtFQUNDLGtCQUFBO0FBOExEO0FBNUxDO0VBQ0MsZUFBQTtBQThMRjtBQTVMQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUE4TEY7QUE3TEU7RUFDQyxjQUFBO0VBQ0ssa0JBQUE7QUErTFI7QUExTEE7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE2TEQ7QUExTEE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQTZMRDtBQTFMQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBNkxGO0FBMUxBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQTZMRjtBQTFMQTtFQUNFLHlCQUFBO0FBNkxGO0FBOUxBO0VBQ0UseUJBQUE7QUE2TEY7QUE5TEE7RUFDRSx5QkFBQTtBQTZMRjtBQTFMQTtFQUNDLG9DQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtBQTJMRDtBQXhMQTtFQUNDLG9DQUFBO0VBR0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF5TEQ7QUF0TEE7O0VBRUksd0JBQUE7RUFDQSxTQUFBO0FBeUxKO0FBdExBO0VBQ0k7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBeUxKO0FBQ0Y7QUF0TEE7RUFDSTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUF3TEo7QUFDRjtBQXJMQTtFQUNJO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQXVMSjtBQUNGO0FBcExBO0VBQ0k7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VBc0xKO0FBQ0Y7QUFuTEE7RUFDSTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFxTEo7QUFDRiIsImZpbGUiOiJqdWRnaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9pdm8xYWVlLmNzc1wiKTtcblxuKiB7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCwgaDUsIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgcCwgYnV0dG9uLCBsYWJlbCwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59IiwiLy9idXR0b24gc3R5bGVzXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0MEJGRkQsICMwMjg4Q0MpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI4OENDO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNTBjNWZmICwjMGQ4ZmQwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQwQkZGRCwgIzAyODhDQyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgYm9yZGVyOiAjQjFENUU4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNDN0VERkYsICNCMUQ1RTgpO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgfVxufVxuXG4uYnRuLXllbGxvdyB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkREMDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2ZmYWUwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNmZmFlMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tZ3JleSB7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDAgI2NlY2VjZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuXG4gICY6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwICNjZWNlY2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiA1MCU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5cbi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZjk1OGUsICNDQzJEMjQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MyRDI0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDk2LCAjY2UzYjMzKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmOTU4ZSwgICNDQzJEMjQpO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbioge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW4tbGVmdDogMzBlbTtcblx0bWFyZ2luLXJpZ2h0OiAzMGVtO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIFx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmp1ZGdpbmctZm9ybSB7XG5cdG1hcmdpbi10b3A6IDUlO1xuXHRtYXJnaW4tYm90dG9tOiA1JTtcblx0cGFkZGluZzogOCU7XG59XG5cbi50ZWFtLW5hbWUge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdGZvbnQtc2l6ZTogMjhweDtcbn1cbi50ZWFtLW5hbWUtdW5kZXJsaW5lIHtcblx0Ym9yZGVyOiBzb2xpZCAxcHg7XG59XG5cbi5ydWJyaWMge1xuXHQucnVicmljLS1pdGVtIHtcblx0XHRtYXJnaW4tdG9wOiAzZW07XG5cdFx0cGFkZGluZzogMDtcblxuXHRcdC5zZWN0aW9uLWhlYWRlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7IC8vdHVybiBvZmYgZm9yIG1vYmlsZT9cblx0XHRcdGp1c3RpZnktc2VsZjogZW5kO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblxuXHRcdFx0LnNlY3Rpb24tdGl0bGUge1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0XHRcdC8vIGhlaWdodDogaW5oZXJpdDsgd2h5IGlzbid0IHRoaXMgZGl2IHNhbWUgaGVpZ2h0IGFzIHBhcmVudCwgYnV0IHNjb3JlIGlzXG5cdFx0XHR9XG5cblx0XHRcdC5zZWN0aW9uLXNjb3JlIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogaW5oZXJpdDtcblxuXHRcdFx0XHQuaW5wdXQtc2NvcmUge1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0XHRcdFx0d2lkdGg6IDMwJTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdFx0XHRjb2xvcjogIzAwQUJGRiAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdFxuXHRcdFx0XHRcdC8vICY6YWN0aXZlIHtcblx0XHRcdFx0XHQvLyBcdGJvcmRlci1jb2xvcjogYmx1ZTtcblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0LnNsaWRlci1jb250YWluZXIge1xuXHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdHRvcDogMjAwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XG5cdFx0fVxuXHRcdC5jYXJkIHtcblx0XHRcdG1hcmdpbi10b3A6IDFyZW07XG5cdFx0XHRwYWRkaW5nOiA0cHg7XG5cdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDAwMDAwMzM7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdFx0dGFibGUge1xuXHRcdFx0XHRtYXJnaW46IDVweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRcdFx0XHQvLyBib3JkZXI6IDZweCBzb2xpZCBibGFjaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmZlZWRiYWNrIHtcblx0ZGlzcGxheTogZmxleGJveDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcblx0Z2FwOiAxcmVtO1xuXHRtYXJnaW4tdG9wOiAzcmVtO1xuXG5cdGxhYmVsIHtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0fVxuXG5cdHRleHRhcmVhIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdGJvcmRlcjogYXV0bztcblx0XHRib3JkZXItd2lkdGg6IDFweDtcblx0XHRib3JkZXItY29sb3I6IGdyZXk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMC42cmVtO1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0cmVzaXplOiB2ZXJ0aWNhbDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHBhZGRpbmc6IDVweDtcblx0fVxufVxuXG4uc2NvcmUge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFxuXHQuc2NvcmUtdGl0bGUge1xuXHRcdG1hcmdpbi10b3A6IDR2aDtcblx0fVxuXHQuc2NvcmUtbnVtYmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDF2aDtcblx0XHQuY2FsY3VsYXRlZC1zY29yZSB7XG5cdFx0XHRjb2xvcjogIzAwQUJGRjtcbiAgICAgIFx0XHRtYXJnaW4tcmlnaHQ6IDEycHg7XG5cdFx0fVxuXHR9XHRcbn1cblxuLnN1Ym1pdC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3aWR0aDogMTAwJTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcblx0bWFyZ2luOiAyMHB4IDA7XG5cdHdpZHRoOiAxMiU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4teWVsbG93IHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREQwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMCAjZmZhZTAwO1xuICBib3JkZXI6IDBweCBzb2xpZCAjZmZlNjAwO1xufVxuXG4uYnRuLXllbGxvdzphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDAgMCAjZmZhZTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDBBQkZGICFpbXBvcnRhbnQ7XG59XG5cbnRoe1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG5cblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMjAlO1xuXHQvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjUwKTtcblx0cGFkZGluZzogMC41cmVtO1xufVxuXG50ZHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O1xuXG5cdC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsIDAuNTApO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcblx0cGFkZGluZzogMC41cmVtO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1ZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1ZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogNWVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICB9XG59IiwiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDMzO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgc2Nyb2xsLW1hcmdpbi10b3A6IDUwcHg7XG59IiwiQGltcG9ydCAnLi9hc3NldHMvdGhlbWUvYnV0dG9uLXN0eWxlcy5zY3NzJztcbkBpbXBvcnQgJy4vYXNzZXRzL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NhcmQtc3R5bGVzLnNjc3MnO1xuQGltcG9ydCAnLi8vYXNzZXRzL3RoZW1lL2NvbG9ycy5zY3NzJztcblxuLy8gY29sb3IgZGVjbGFyYXRpb25zXG46cm9vdHtcbiAgLS1jbHItZm9yZWdyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jbHItZm9vdGVyLWJnOiAjMDAwO1xuICAtLWNsci1mb290ZXItdGV4dDogI2ZmZjtcbiAgLS1jbHItaGVhZGVyLWJnOiAjZmZmO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xufVxuXG5cbi8vQXR0cmlidXRlIHZhcmlhYmxlc1xuJGNvcm5lclJhZGlvdXM6IDEwcHg7XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tY2xyLWZvcmVncm91bmQpO1xufVxuXG4vL1RoaXMgY2xhc3Mgc3BlY2lmaWVzIHRoZSBzdHlsZSBvZiBjb250YWluZXJzOlxuLmJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6ICRjb3JuZXJSYWRpb3VzO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDAsMCwwLCAwLjEwKTtcbn1cblxuLmhpZGUtc2Nyb2xsYmFyIHtcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vL2NoYW5naW5nIGNvbG9ycyB0byBvbiBldmVyeXRoaW5nXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLnNlY29uZGFyeS1saW5rLCBzcGFuLmRhdGEsIHNwYW4uYWNjb3JkaW9uLXRhYiwgc2VsZWN0LCBvcHRpb257XG4gIGNvbG9yOiB2YXIoLS1jbHItZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcbn1cblxuLmxpbmstZ3JvdXAsIC5saW5rLWltZywgLmRyb3Bkb3duID4gdWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKTtcbn1cblxudGQge1xuICBjb2xvcjogJHRoZW1lLXdoaXRlO1xuICBib3JkZXI6IDE1cHggaGlkZGVuICFpbXBvcnRhbnQ7XG4gIFxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxudGV4dGFyZWF7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Zne1xuICBmaWxsOiB2YXIoLS1jbHItZm9yZWdyb3VuZCk7XG59XG5cblxuYm9keS5kYXJrLW1vZGV7XG5cbiAgLS1jbHItZm9yZWdyb3VuZDogI2ZmZjtcbiAgLS1jbHItYmFja2dyb3VuZDogIzE4MTgxODtcbiAgLS1jbHItaGVhZGVyLWJnOiAjMjAyMDIwO1xuICAtLWNsci1mb3JlZ3JvdW5kLWxpZ2h0OiAjZTJlMmUyO1xuXG5cbiAgLnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiB2YXIoLS1jbHItYmFja2dyb3VuZCk7XG4gIH1cblxuICB0YWJsZSwgdGgsIHRkLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGlucHV0W3R5cGU9dGV4dF17XG4gICAgY29sb3I6IHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1mb3JlZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICB9XG59XG5odG1sLCBib2R5IHsgXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbiIsIi8vIFRoZW1lIGNvbG9ycy5cbiR0aGVtZS1ibHVlOiAjMDI4OENDO1xuJHRoZW1lLWdyZXk6ICAjNzA3MDcwO1xuJHRoZW1lLXdoaXRlOiAjZmZmZmZmO1xuJHRoZW1lLXllbGxvdzogI0ZGREQwMDtcbiR0aGVtZS1ibGFjazogIzAwMDAwMDtcbiR0aGVtZS1yZWQ6ICNDQzJEMjQ7XG5cbi8vIE1pc2NlbGxhbmVvdXMgY29sb3JzLlxuJGJvcmRlckNvbG9yOiAjMDA3REJBO1xuJGxpbmtDb2xvcjogIzAwN2RiYTtcbiRwcmltYXJ5QnRuQ2xyOiAjMDI4OENDOyJdfQ== */"]
});

/***/ }),

/***/ 7448:
/*!*****************************************************************!*\
  !*** ./src/app/features/judge/standings/standings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandingsComponent": () => (/* binding */ StandingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sign-up.service */ 1366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function StandingsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 5)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const team_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "#E6F7FF" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "id-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.teamName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r1.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.teamMemberAmount[i_r2]);
} }
class StandingsComponent {
    constructor(signUpService) {
        this.signUpService = signUpService;
        this.teams = [];
        this.teamMemberAmount = [];
    }
    ngOnInit() {
        this.getTeams();
    }
    getTeams() {
        this.signUpService.getAllTeams().subscribe(data => {
            this.teams = data;
            this.orderTeams();
            this.getTeamSizes();
        });
    }
    orderTeams() {
        this.teams.sort((a, b) => b.score - a.score);
    }
    getTeamSizes() {
        this.teams.forEach(item => {
            this.getAmountOfTeamMembers(item['teamID']);
        });
    }
    getAmountOfTeamMembers(teamID) {
        this.signUpService.getNumberOfTeamMembers(teamID).subscribe(data => {
            this.teamMemberAmount.push(data);
        });
    }
}
StandingsComponent.ɵfac = function StandingsComponent_Factory(t) { return new (t || StandingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_sign_up_service__WEBPACK_IMPORTED_MODULE_0__.SignUpService)); };
StandingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StandingsComponent, selectors: [["app-results"]], decls: 20, vars: 1, consts: [[1, "content-container"], [1, "page-title-container"], [1, "title"], [1, "card-container"], [1, "card"], [1, "card-section", "card-section-place"], [1, "card-section", "card-section-team-name"], [1, "card-section", "card-section-team-score"], [1, "card-section", "card-section-team-size"], ["class", "card card-section-place", 3, "id", "backgroundColor", 4, "ngFor", "ngForOf"], [1, "card", "card-section-place", 3, "id"]], template: function StandingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Current Hackathon Standings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Team Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Team Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, StandingsComponent_div_19_Template, 13, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teams);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  margin-top: 8em;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.content-container[_ngcontent-%COMP%]   .page-title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 5px 0px 5px 0px;\n  font: normal normal 600 32px/39px;\n  font-size: 26px;\n}\n\n.content-container[_ngcontent-%COMP%]   .page-title-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n  border: 0;\n  border-top: 2px solid black;\n  height: 2px;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.8em;\n  margin-bottom: 0.8em;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  vertical-align: middle;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  padding-top: auto;\n  padding-bottom: auto;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-section-place[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-section-team-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-section-team-score[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-section-team-size[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .blue-background[_ngcontent-%COMP%] {\n  background-color: #E6F7FF;\n}\n\n.content-container[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .separator-header[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n@media screen and (max-width: 1800px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n  }\n}\n\n@media screen and (max-width: 1600px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 20%;\n    margin-right: 20%;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    margin-right: 15%;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .content-container[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVRO0VBQ0ksdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFBWjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUFaOztBQU1RO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSlo7O0FBTVk7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTmhCOztBQVFnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU5wQjs7QUFVWTtFQUNJLFVBQUE7QUFSaEI7O0FBV1k7RUFDSSxXQUFBO0FBVGhCOztBQVlZO0VBQ0ksVUFBQTtBQVZoQjs7QUFhWTtFQUNJLFVBQUE7QUFYaEI7O0FBY1k7RUFDSSx5QkFBQTtBQVpoQjs7QUFnQlE7RUFDSSxtQkFBQTtBQWRaOztBQW1CQTtFQUNJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQWhCSjtBQUNGOztBQW9CQTtFQUNJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQWxCSjtBQUNGOztBQXNCQTtFQUNJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQXBCSjtBQUNGOztBQXVCQTtFQUNJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQXJCSjtBQUNGOztBQXdCQTtFQUNJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBdEJKO0FBQ0YiLCJmaWxlIjoic3RhbmRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogOGVtO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG5cbiAgICAucGFnZS10aXRsZS1jb250YWluZXIge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDYwMCAzMnB4LzM5cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaHIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICBcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG5cbiAgICAgICAgICAgIC5jYXJkLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxdnc7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXZ3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJkLXNlY3Rpb24tcGxhY2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJkLXNlY3Rpb24tdGVhbS1uYW1lIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQtc2VjdGlvbi10ZWFtLXNjb3JlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FyZC1zZWN0aW9uLXRlYW0tc2l6ZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsdWUtYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjdGRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXBhcmF0b3ItaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 5425:
/*!******************************************!*\
  !*** ./src/app/shared/app.animations.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routerTransition": () => (/* binding */ routerTransition)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const routerTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transition', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0)', opacity: '1' })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)', opacity: '0' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out')
    ])
]);


/***/ }),

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AuthService {
    constructor() {
        this.participant = {
            name: 'participant 1',
            teamCode: '319698',
            email: 'participant1@email.com'
        };
        this.winningTeamCodes = ['521689', '111111', '123456', '374995', '317395', '319698', '674719', '319698'];
    }
    getLoggedInUser() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.participant);
    }
    checkIfOnWinningTeam(participant) {
        let winner = false;
        this.winningTeamCodes.forEach((teamCode) => {
            if (participant.teamCode === teamCode) {
                winner = true;
            }
        });
        return winner;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6893:
/*!****************************************************!*\
  !*** ./src/app/shared/services/profile.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Cache-Control': 'no-cache,no-store,max-age=0,must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '-1',
        'Strict-Transport-Security': 'max-age=15552000; includeSubDomains; preload',
        'X-XSS-Protection': '1;mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': 'script-src \'self\'*.jbhunt.com',
        'X-Content-Type-Options': 'nosniff'
    })
};
class ProfileService {
    constructor(http) {
        this.http = http;
        this.getAll = 'all';
        this.apiRoot = '/ws_infrastructure_university_hackathon';
    }
    addScore(formData) {
        return this.http.post(`${this.apiRoot}/judging/submit`, formData, { observe: 'response', responseType: 'text' });
    }
    getSumForTeam() {
        return this.http.get(`${this.apiRoot}/judging/teamTotals`, httpOptions);
    }
    getBreakdown() {
        return this.http.get(`${this.apiRoot}/judging/getBreakdown`, httpOptions).toPromise();
    }
    getJudgeNames() {
        return this.http.get(`${this.apiRoot}/judge/${this.getAll}`);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1366:
/*!****************************************************!*\
  !*** ./src/app/shared/services/sign-up.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpService": () => (/* binding */ SignUpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Cache-Control': 'no-cache,no-store,max-age=0,must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '-1',
        'Strict-Transport-Security': 'max-age=15552000; includeSubDomains; preload',
        'X-XSS-Protection': '1;mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': 'script-src \'self\'*.jbhunt.com',
        'X-Content-Type-Options': 'nosniff'
    })
};
class SignUpService {
    constructor(http) {
        this.http = http;
        this.getAll = 'all';
        this.apiRoot = 'http://api-university-hackathon:8080/ws_infrastructure_university_hackathon';
    }
    // getAllEducationYears(): Observable<string[]> {
    //   return this.http.get<string[]>(`${this.apiRoot}/year/${this.getAll}`);
    // }
    // getAllSchools(): Observable<string[]> {
    //   return this.http.get<string[]>(`${this.apiRoot}/school/${this.getAll}`);
    // }
    // getAllMajors(): Observable<string[]> {
    //   return this.http.get<string[]>(`${this.apiRoot}/major/${this.getAll}`);
    // }
    // getAllSkills(): Observable<string[]> {
    //   return this.http.get<string[]>(`${this.apiRoot}/skill/${this.getAll}`);
    // }
    getAllTeams() {
        return this.http.get(`${this.apiRoot}/team/${this.getAll}`);
    }
    getTeam(teamCode) {
        return this.http.get(`${this.apiRoot}/team/${teamCode}`, httpOptions);
    }
    updateTeam(teamData, teamCode) {
        return this.http.put(`${this.apiRoot}/team/${teamCode}`, teamData, httpOptions);
    }
    getNumberOfTeamMembers(teamID) {
        return this.http.get(`${this.apiRoot}/team/memberAmount/${teamID}`, httpOptions);
    }
    getNumberOfGradStudentsOnTeam(teamID) {
        return this.http.get(`${this.apiRoot}/team/gradAmount/${teamID}`, httpOptions);
    }
    postNewParticipant(formData) {
        return this.http.post(`${this.apiRoot}/signup`, formData, { observe: 'response', responseType: 'text' });
    }
    checkEmail(email) {
        return this.http.get(`${this.apiRoot}/participant/email/${email}`, httpOptions);
    }
    getTeamByTeamID(teamID) {
        return this.http.get(`${this.apiRoot}/team/getTeam/${teamID}`, httpOptions);
    }
}
SignUpService.ɵfac = function SignUpService_Factory(t) { return new (t || SignUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SignUpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignUpService, factory: SignUpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseApiUrl: 'http://api-university-hackathon/ws_infrastructure_university_hackathon',
    // baseApiUrl: '/ws_infrastructure_university_hackathon',
    env: 'LOCAL'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 581:
/*!******************************************!*\
  !*** ./src/assets/jsonFiles/colors.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"background":"#330000","selected":false,"darkColor":true},{"background":"#331900","selected":false,"darkColor":true},{"background":"#333300","selected":false,"darkColor":true},{"background":"#193300","selected":false,"darkColor":true},{"selected":false,"background":"#003300","darkColor":true},{"selected":false,"background":"#003319","darkColor":true},{"background":"#003333","selected":false,"darkColor":true},{"background":"#001933","selected":false,"darkColor":true},{"background":"#000033","selected":false,"darkColor":true},{"background":"#190033","selected":false,"darkColor":true},{"background":"#330033","selected":false,"darkColor":true},{"background":"#330019","selected":false,"darkColor":true},{"background":"#000000","selected":false,"darkColor":true},{"background":"#660000","selected":false,"darkColor":true},{"background":"#663300","selected":false,"darkColor":true},{"background":"#666600","selected":false,"darkColor":true},{"selected":false,"background":"#336600","darkColor":true},{"selected":false,"background":"#006600","darkColor":true},{"selected":false,"background":"#006633","darkColor":true},{"selected":false,"background":"#006666","darkColor":true},{"selected":false,"background":"#003366","darkColor":true},{"selected":false,"background":"#000066","darkColor":true},{"selected":false,"background":"#330066","darkColor":true},{"selected":false,"background":"#660066","darkColor":true},{"background":"#660033","selected":false,"darkColor":true},{"background":"#202020","selected":false,"darkColor":true},{"background":"#990000","selected":false,"darkColor":true},{"background":"#994C00","selected":false,"darkColor":true},{"background":"#999900","selected":false,"darkColor":true},{"background":"#4C9900","selected":false,"darkColor":true},{"background":"#009900","selected":false,"darkColor":true},{"background":"#00994C","selected":false,"darkColor":true},{"background":"#009999","selected":false,"darkColor":true},{"background":"#004C99","selected":false,"darkColor":true},{"background":"#000099","selected":false,"darkColor":true},{"background":"#4C0099","selected":false,"darkColor":true},{"background":"#990099","selected":false,"darkColor":true},{"background":"#99004C","selected":false,"darkColor":true},{"background":"#404040","selected":false,"darkColor":true},{"background":"#CC0000","selected":false,"darkColor":true},{"background":"#CC6600","selected":false,"darkColor":true},{"background":"#CCCC00","selected":false,"darkColor":true},{"background":"#66CC00","selected":false,"darkColor":true},{"background":"#00CC00","selected":false,"darkColor":true},{"background":"#00CC66","selected":false,"darkColor":true},{"background":"#00CCCC","selected":false,"darkColor":true},{"background":"#0066CC","selected":false,"darkColor":true},{"background":"#0000CC","selected":false,"darkColor":true},{"background":"#6600CC","selected":false,"darkColor":true},{"background":"#CC00CC","selected":false,"darkColor":true},{"background":"#CC0066","selected":false,"darkColor":true},{"background":"#606060","selected":false,"darkColor":true},{"background":"#FF0000","selected":false,"darkColor":false},{"background":"#FF8000","selected":false,"darkColor":false},{"background":"#FFFF00","selected":false,"darkColor":false},{"background":"#80FF00","selected":false,"darkColor":false},{"background":"#00FF00","selected":false,"darkColor":false},{"background":"#00FF80","selected":false,"darkColor":false},{"background":"#00FFFF","selected":false,"darkColor":false},{"background":"#0080FF","selected":false,"darkColor":false},{"background":"#0000FF","selected":false,"darkColor":false},{"background":"#7F00FF","selected":false,"darkColor":false},{"background":"#FF00FF","selected":false,"darkColor":false},{"background":"#FF007F","selected":false,"darkColor":false},{"background":"#808080","selected":false,"darkColor":false},{"background":"#FF3333","selected":false,"darkColor":false},{"background":"#FF9933","selected":false,"darkColor":false},{"background":"#FFFF33","selected":false,"darkColor":false},{"background":"#99FF33","selected":false,"darkColor":false},{"background":"#33FF33","selected":false,"darkColor":false},{"background":"#33FF99","selected":false,"darkColor":false},{"background":"#33FFFF","selected":false,"darkColor":false},{"background":"#3399FF","selected":false,"darkColor":false},{"background":"#3333FF","selected":false,"darkColor":false},{"background":"#9933FF","selected":false,"darkColor":false},{"background":"#FF33FF","selected":false,"darkColor":false},{"background":"#FF3399","selected":false,"darkColor":false},{"background":"#A0A0A0","selected":false,"darkColor":false},{"background":"#FF6666","selected":false,"darkColor":false},{"background":"#FFB266","selected":false,"darkColor":false},{"background":"#FFFF66","selected":false,"darkColor":false},{"background":"#B2FF66","selected":false,"darkColor":false},{"selected":false,"background":"#66FF66","darkColor":false},{"selected":false,"background":"#66FFB2","darkColor":false},{"selected":false,"background":"#66FFFF","darkColor":false},{"selected":false,"background":"#66B2FF","darkColor":false},{"selected":false,"background":"#6666FF","darkColor":false},{"background":"#B266FF","selected":false,"darkColor":false},{"background":"#FF66FF","selected":false,"darkColor":false},{"background":"#FF66B2","selected":false,"darkColor":false},{"background":"#C0C0C0","selected":false,"darkColor":false},{"background":"#FF9999","selected":false,"darkColor":false},{"background":"#FFCC99","selected":false,"darkColor":false},{"background":"#FFFF99","selected":false,"darkColor":false},{"background":"#CCFF99","selected":false,"darkColor":false},{"background":"#99FF99","selected":false,"darkColor":false},{"background":"#99FFCC","selected":false,"darkColor":false},{"background":"#99FFFF","selected":false,"darkColor":false},{"background":"#99CCFF","selected":false,"darkColor":false},{"background":"#9999FF","selected":false,"darkColor":false},{"background":"#CC99FF","selected":false,"darkColor":false},{"background":"#FF99FF","selected":false,"darkColor":false},{"background":"#FF99CC","selected":false,"darkColor":false},{"background":"#E0E0E0","selected":false,"darkColor":false},{"background":"#FFCCCC","selected":false,"darkColor":false},{"background":"#FFE5CC","selected":false,"darkColor":false},{"background":"#FFFFCC","selected":false,"darkColor":false},{"background":"#E5FFCC","selected":false,"darkColor":false},{"background":"#CCFFCC","selected":false,"darkColor":false},{"background":"#CCFFE5","selected":false,"darkColor":false},{"background":"#CCFFFF","selected":false,"darkColor":false},{"background":"#CCE5FF","selected":false,"darkColor":false},{"background":"#CCCCFF","selected":false,"darkColor":false},{"background":"#E5CCFF","selected":false,"darkColor":false},{"background":"#FFCCFF","selected":false,"darkColor":false},{"background":"#FFCCE5","selected":false,"darkColor":false},{"background":"#FFFFFF","selected":false,"darkColor":false}]');

/***/ }),

/***/ 6125:
/*!*********************************************!*\
  !*** ./src/assets/jsonFiles/teamIcons.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"bowling","icon":"assets/svg/team-icons/bowling.svg","selected":false},{"name":"chess-horse","selected":false,"icon":"assets/svg/team-icons/chess_horse.svg"},{"selected":false,"name":"cup","icon":"assets/svg/team-icons/cup.svg"},{"name":"futball","icon":"assets/svg/team-icons/futball.svg","selected":false},{"icon":"assets/svg/team-icons/medal.svg","selected":false,"name":"medal"},{"name":"pong","icon":"assets/svg/team-icons/pong.svg","selected":false},{"selected":false,"name":"airplane","icon":"assets/svg/team-icons/airplane.svg"},{"name":"bicycle","icon":"assets/svg/team-icons/bicycle.svg","selected":false},{"selected":false,"name":"bike","icon":"assets/svg/team-icons/bike.svg"},{"name":"diamond","icon":"assets/svg/team-icons/diamond.svg","selected":false},{"selected":false,"icon":"assets/svg/team-icons/car.svg","name":"car"},{"icon":"assets/svg/team-icons/mouse.svg","name":"mouse","selected":false},{"name":"helicopter","icon":"assets/svg/team-icons/helicopter.svg","selected":false},{"icon":"assets/svg/team-icons/watch.svg","selected":false,"name":"watch"},{"icon":"assets/svg/team-icons/weights.svg","name":"weights","selected":false}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map