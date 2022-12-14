"use strict";
(self["webpackChunkangularRouteCourse"] = self["webpackChunkangularRouteCourse"] || []).push([["src_app_AngularRoutingCourse_product_product_module_ts"],{

/***/ 6769:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 4932);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 9512);


function throwError(errorOrErrorFactory, scheduler) {
    const errorFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
    const init = (subscriber) => subscriber.error(errorFactory());
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(scheduler ? (subscriber) => scheduler.schedule(init, 0, subscriber) : init);
}


/***/ }),

/***/ 6985:
/*!*****************************************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/component/product-details/product-details.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/product.service */ 6043);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_components_star_star_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/star/star.component */ 2237);





function ProductDetailsComponent_div_3_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("height", 150, "px")("margin", 2, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx_r2.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"])("title", ctx_r2.product.productName);
} }
function ProductDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Availability:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "5 Star Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "app-star", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Tags:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](44, ProductDetailsComponent_div_3_div_44_Template, 2, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](48, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.product.productCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.product.releaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind3"](28, 10, ctx_r0.product.price, "USD", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("rating", ctx_r0.product.starRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.product.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.product.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/AngularRoutingCourse/Product/update/", ctx_r0.product.id, "");
} }
function ProductDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx_r1.errorMessage, "\n");
} }
class ProductDetailsComponent {
    constructor(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Detail';
        this.product = null;
        this.errorMessage = '';
    }
    ngOnInit() {
        // const id = +this.route.snapshot.paramMap.get('id')!;
        // this.getProduct(id);
        // we not need git id and service for product only need resolver
        // const resolvedData: ProductResolved = this.route.snapshot.data["Product"];
        // this.errorMessage = resolvedData.error!;
        // this.onProductRetrieved(resolvedData.product!);
        // read data as subscribe not property
        this.route.data.subscribe(data => {
            const resolvedData = data["Product"];
            this.errorMessage = resolvedData.error;
            this.onProductRetrieved(resolvedData.product);
        });
    }
    getProduct(id) {
        this.productService.getProduct(id).subscribe({
            next: product => this.onProductRetrieved(product),
            error: err => this.errorMessage = err
        });
    }
    onProductRetrieved(product) {
        this.product = product;
        if (this.product) {
            this.pageTitle = `Product Detail: ${this.product.productName}`;
        }
        else {
            this.pageTitle = 'No product found';
        }
    }
}
ProductDetailsComponent.??fac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProductDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 5, vars: 3, consts: [[1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-md-8"], [1, "col-md-3"], [1, "col-md-6"], [3, "rating"], ["class", "col-md-4", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-md-4"], ["routerLink", "/AngularRoutingCourse/Product/list", "queryParamsHandling", "preserve", 1, "btn", "btn-outline-secondary", "me-3", 2, "width", "80px"], [1, "fa", "fa-chevron-left"], [1, "btn", "btn-outline-primary", 2, "width", "80px", 3, "routerLink"], [1, "center-block", "img-responsive", 3, "src", "title"], [1, "alert", "alert-danger"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, ProductDetailsComponent_div_3_Template, 52, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, ProductDetailsComponent_div_4_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.pageTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_star_star_component__WEBPACK_IMPORTED_MODULE_1__.StarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 158:
/*!***********************************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/component/product-list/product-list.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/product.service */ 6043);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_components_star_star_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/star/star.component */ 2237);






function ProductListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Filtered by: ", ctx_r0.listFilter, "");
} }
function ProductListComponent_table_11_tr_18_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "img", 19);
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("width", ctx_r5.imageWidth, "px")("margin", ctx_r5.imageMargin, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", product_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"])("title", product_r4.productName);
} }
const _c0 = function (a0, a1) { return { filterBy: a0, showImage: a1 }; };
function ProductListComponent_table_11_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, ProductListComponent_table_11_tr_18_img_2_Template, 1, 6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "app-star", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.showImage && product_r4.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/AngularRoutingCourse/Product/details/", product_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](14, _c0, ctx_r3.listFilter, ctx_r3.showImage));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", product_r4.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](product_r4.productCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](product_r4.releaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind4"](12, 9, product_r4.price, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("rating", product_r4.starRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/AngularRoutingCourse/Product/update/", product_r4.id, "");
} }
function ProductListComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductListComponent_table_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r7.toggleImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "5 Star Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, ProductListComponent_table_11_tr_18_Template, 18, 17, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.showImage ? "Hide" : "Show", " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.filteredProducts);
} }
function ProductListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" Error: ", ctx_r2.errorMessage, "\n");
} }
class ProductListComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.errorMessage = '';
        this._listFilter = '';
        this.filteredProducts = [];
        this.products = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    ngOnInit() {
        // get data that send from in rout component 
        const data = this.route.snapshot.data['pageTitle'];
        this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
        this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.performFilter(this.listFilter);
            },
            error: err => this.errorMessage = err
        });
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
}
ProductListComponent.??fac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ProductListComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 13, vars: 5, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-2"], [1, "col-md-4"], ["type", "text", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "table-responsive"], ["class", "table mb-0", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-md-6"], [1, "table", "mb-0"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [3, "src", "title", "width", "margin", 4, "ngIf"], [3, "routerLink", "queryParams"], [3, "rating"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "routerLink"], [3, "src", "title"], [1, "alert", "alert-danger"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Filter by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_8_listener($event) { return ctx.listFilter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, ProductListComponent_div_9_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, ProductListComponent_table_11_Template, 19, 2, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, ProductListComponent_div_12_Template, 2, 1, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.pageTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.listFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.listFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.products && ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _shared_components_star_star_component__WEBPACK_IMPORTED_MODULE_1__.StarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], styles: ["thead[_ngcontent-%COMP%] {\r\n    color: #337AB7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFkIHtcclxuICAgIGNvbG9yOiAjMzM3QUI3O1xyXG59Il19 */"] });


/***/ }),

/***/ 851:
/*!*************************************************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/component/product-update-info/product-update-info.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUpdateInfoComponent": () => (/* binding */ ProductUpdateInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);





function ProductUpdateInfoComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductUpdateInfoComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product name must be at least three characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductUpdateInfoComponent_div_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Product code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ProductUpdateInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic Product Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductUpdateInfoComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.product.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductUpdateInfoComponent_div_0_span_13_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ProductUpdateInfoComponent_div_0_span_14_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Product Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductUpdateInfoComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.product.productCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ProductUpdateInfoComponent_div_0_span_22_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductUpdateInfoComponent_div_0_Template_textarea_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.product.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](20);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.product.productName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, (_r3.touched || _r3.dirty || ctx_r0.product.id !== 0) && !_r3.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.product.productCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, (_r6.touched || _r6.dirty || ctx_r0.product.id !== 0) && !_r6.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.product.description);
} }
function ProductUpdateInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.errorMessage, "\n");
} }
class ProductUpdateInfoComponent {
    constructor(route) {
        this.route = route;
        this.errorMessage = '';
        this.product = { id: 1, productName: 'test', productCode: 'test', description: 'test' };
    }
    ngOnInit() {
    }
}
ProductUpdateInfoComponent.??fac = function ProductUpdateInfoComponent_Factory(t) { return new (t || ProductUpdateInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
ProductUpdateInfoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductUpdateInfoComponent, selectors: [["app-product-update-info"]], viewQuery: function ProductUpdateInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.productForm = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "card-body", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card-body"], ["novalidate", ""], ["productForm", "ngForm"], [1, "row", "mt-4"], ["for", "productNameId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "productNameId", "type", "text", "placeholder", "Name (required)", "required", "", "minlength", "3", "name", "productName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["productNameVar", "ngModel"], [1, "invalid-feedback"], [4, "ngIf"], [1, "row", "mt-2"], ["for", "productCodeId", 1, "col-md-2", "col-form-label"], ["id", "productCodeId", "type", "text", "placeholder", "Code (required)", "required", "", "name", "productCode", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["productCodeVar", "ngModel"], ["for", "descriptionId", 1, "col-md-2", "col-form-label"], ["id", "descriptionId", "placeholder", "Description", "rows", "3", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "alert", "alert-danger"]], template: function ProductUpdateInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProductUpdateInfoComponent_div_0_Template, 28, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductUpdateInfoComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXVwZGF0ZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 454:
/*!*************************************************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/component/product-update-tags/product-update-tags.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUpdateTagsComponent": () => (/* binding */ ProductUpdateTagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);




function ProductUpdateTagsComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " A category must be entered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductUpdateTagsComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " The category must be at least 3 characters in length. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductUpdateTagsComponent_div_0_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductUpdateTagsComponent_div_0_span_24_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.removeTag(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tag_r6, " ");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ProductUpdateTagsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Product Search Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductUpdateTagsComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.product.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ProductUpdateTagsComponent_div_0_span_12_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductUpdateTagsComponent_div_0_span_13_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Search Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductUpdateTagsComponent_div_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.newTags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductUpdateTagsComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.addTags(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ProductUpdateTagsComponent_div_0_span_24_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.product.category)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, (_r2.touched || _r2.dirty || ctx_r0.product.id !== 0) && !_r2.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.errors == null ? null : _r2.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.errors == null ? null : _r2.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.newTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.product.tags);
} }
function ProductUpdateTagsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r1.errorMessage, "\n");
} }
class ProductUpdateTagsComponent {
    constructor(route) {
        this.route = route;
        this.errorMessage = '';
        this.newTags = '';
        this.product = { id: 1, category: 'test', tags: ['test'] };
    }
    ngOnInit() {
    }
    // Add the defined tags
    addTags() {
        if (this.product) {
            if (!this.newTags) {
                this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
            }
            else {
                const tagArray = this.newTags.split(',');
                this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
                this.newTags = '';
                this.errorMessage = '';
            }
        }
    }
    // Remove the tag from the array of tags.
    removeTag(idx) {
        var _a, _b;
        (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.tags) === null || _b === void 0 ? void 0 : _b.splice(idx, 1);
    }
}
ProductUpdateTagsComponent.??fac = function ProductUpdateTagsComponent_Factory(t) { return new (t || ProductUpdateTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
ProductUpdateTagsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductUpdateTagsComponent, selectors: [["app-product-update-tags"]], decls: 2, vars: 2, consts: [["class", "card-body", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card-body"], ["novalidate", ""], [1, "row", "mt-2"], ["for", "categoryId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "categoryId", "type", "text", "placeholder", "Category (required)", "required", "", "minlength", "3", "name", "category", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["categoryVar", "ngModel"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "tagsId", 1, "col-md-2", "col-form-label"], ["id", "tagsId", "type", "text", "placeholder", "Search keywords separated by commas", "name", "tags", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-1"], ["type", "button", "title", "Enter the search keywords separated by commas and then press Add", 1, "btn", "btn-outline-primary", 3, "click"], [1, "row"], [1, "col-md-8", "offset-md-2"], [4, "ngFor", "ngForOf"], ["title", "Click to remove this tag", 1, "btn", "btn-outline-secondary", 2, "font-size", "smaller", "margin-bottom", "12px", "margin-right", "2px", 3, "click"], [1, "fa", "fa-times-circle"], [1, "alert", "alert-danger"]], template: function ProductUpdateTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProductUpdateTagsComponent_div_0_Template, 25, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductUpdateTagsComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXVwZGF0ZS10YWdzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8339:
/*!***************************************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/component/product-update/product-update.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUpdateComponent": () => (/* binding */ ProductUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/product.service */ 6043);
/* harmony import */ var src_app_AngularRoutingCourse_messages_service_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/AngularRoutingCourse/messages/service/message.service */ 7292);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);






function ProductUpdateComponent_div_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Product name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductUpdateComponent_div_3_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Product name must be at least three characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductUpdateComponent_div_3_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Product code is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ProductUpdateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProductUpdateComponent_div_3_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r8.product.productName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, ProductUpdateComponent_div_3_span_10_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, ProductUpdateComponent_div_3_span_11_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "Product Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProductUpdateComponent_div_3_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r10.product.productCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, ProductUpdateComponent_div_3_span_19_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProductUpdateComponent_div_3_Template_textarea_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r11.product.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductUpdateComponent_div_3_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r12.saveProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductUpdateComponent_div_3_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r13.deleteProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](8);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r0.product.productName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](10, _c0, (_r3.touched || _r3.dirty) && !_r3.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r0.product.productCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](12, _c0, (_r6.touched || _r6.dirty) && !_r6.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("title", _r2.valid ? "Save your entered data" : "Disabled until the form data is valid")("disabled", !_r2.valid);
} }
function ProductUpdateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx_r1.errorMessage, "\n");
} }
class ProductUpdateComponent {
    constructor(productService, messageService, route, router) {
        this.productService = productService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Edit';
        this.errorMessage = '';
        this.product = null;
    }
    ngOnInit() {
        // const id = +this.route.snapshot.paramMap.get('id')!;
        // this.getProduct(id);
        // we not need git id and service for product only need resolver
        // const resolvedData: ProductResolved = this.route.snapshot.data["Product"];
        // this.errorMessage = resolvedData.error!;
        // this.onProductRetrieved(resolvedData.product!);
        // read data as subscribe not property
        this.route.data.subscribe(data => {
            const resolvedData = data["Product"];
            this.errorMessage = resolvedData.error;
            this.onProductRetrieved(resolvedData.product);
        });
    }
    getProduct(id) {
        this.productService.getProduct(id).subscribe({
            next: product => this.onProductRetrieved(product),
            error: err => this.errorMessage = err
        });
    }
    onProductRetrieved(product) {
        this.product = product;
        if (!this.product) {
            this.pageTitle = 'No product found';
        }
        else {
            if (this.product.id === 0) {
                this.pageTitle = 'Add Product';
            }
            else {
                this.pageTitle = `Edit Product: ${this.product.productName}`;
            }
        }
    }
    deleteProduct() {
        var _a;
        //if (this.product.id===0) {
        if (!this.product || !this.product.id) {
            // Don't delete, it was never saved.
            this.onSaveComplete(`${(_a = this.product) === null || _a === void 0 ? void 0 : _a.productName} was deleted`);
        }
        else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id).subscribe({
                    next: () => { var _a; return this.onSaveComplete(`${(_a = this.product) === null || _a === void 0 ? void 0 : _a.productName} was deleted`); },
                    error: err => this.errorMessage = err
                });
            }
        }
    }
    saveProduct() {
        if (this.product) {
            if (this.product.id === 0) {
                this.productService.createProduct(this.product).subscribe({
                    next: () => { var _a; return this.onSaveComplete(`The new ${(_a = this.product) === null || _a === void 0 ? void 0 : _a.productName} was saved`); },
                    error: err => this.errorMessage = err
                });
            }
            else {
                this.productService.updateProduct(this.product).subscribe({
                    next: () => { var _a; return this.onSaveComplete(`The updated ${(_a = this.product) === null || _a === void 0 ? void 0 : _a.productName} was saved`); },
                    error: err => this.errorMessage = err
                });
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete(message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        // Navigate back to the product list
        this.router.navigate(['/AngularRoutingCourse/Product/list']);
        // this.router.navigate(['/AngularRoutingCourse/Product/list'],
        //   { queryParams: { filterBy: "", showImage: "Show" } }// Hide
        // );
    }
}
ProductUpdateComponent.??fac = function ProductUpdateComponent_Factory(t) { return new (t || ProductUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_AngularRoutingCourse_messages_service_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProductUpdateComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductUpdateComponent, selectors: [["app-product-update"]], decls: 5, vars: 3, consts: [[1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "card-body"], ["novalidate", ""], ["productForm", "ngForm"], [1, "row", "mt-2"], ["for", "productNameId", 1, "col-md-2", "col-form-label"], [1, "col-md-8"], ["id", "productNameId", "type", "text", "placeholder", "Name (required)", "required", "", "minlength", "3", "name", "productName", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["productNameVar", "ngModel"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "productCodeId", 1, "col-md-2", "col-form-label"], ["id", "productCodeId", "type", "text", "placeholder", "Code (required)", "required", "", "name", "productCode", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["productCodeVar", "ngModel"], ["for", "descriptionId", 1, "col-md-2", "col-form-label"], ["id", "descriptionId", "placeholder", "Description", "rows", "3", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], ["type", "button", 1, "btn", "btn-primary", "mr-3", 2, "width", "80px", 3, "title", "disabled", "click"], ["type", "button", "title", "Cancel your edits", "routerLink", "/AngularRoutingCourse/Product/list", 1, "btn", "btn-outline-secondary", "mr-3", 2, "width", "80px"], ["type", "button", "title", "Delete this product", 1, "btn", "btn-outline-warning", 2, "width", "80px", 3, "click"], [1, "alert", "alert-danger"]], template: function ProductUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, ProductUpdateComponent_div_3_Template, 33, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, ProductUpdateComponent_div_4_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.pageTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: [".fa-exclamation[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: #efefef;\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    min-width: 150px;\r\n    outline: none;\r\n    padding: 10px 40px 10px;\r\n    position: relative;\r\n    text-decoration: none;\r\n}\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 20px inset transparent;\r\n    border-bottom: 24px inset transparent;\r\n    border-left: 20px solid #fff;\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 20px inset transparent;\r\n    border-bottom: 24px inset transparent;\r\n    border-left: 21px solid #efefef;\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 0;\r\n    right: -20px;\r\n    z-index: 2;\r\n}\r\n\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before, .wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after {\r\n    border: none;\r\n}\r\n\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 8px 0 0 0px;\r\n}\r\n.wizard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\r\n    border-radius: 0 8px 0px 0;\r\n}\r\n.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n    background: #007ACC;\r\n    color: #fff;\r\n}\r\n\r\n.wizard[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:after {\r\n    border-left-color: #007ACC;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQSxpREFBaUQ7QUFDakQ7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87QUFDWDtBQUNBLGdEQUFnRDtBQUNoRDtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBLDZDQUE2QztBQUM3Qzs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBR0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFHSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQSx1Q0FBdUM7QUFDdkM7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoicHJvZHVjdC11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1leGNsYW1hdGlvbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi53aXphcmQgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi53aXphcmQgYTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4vKiBBZGRzIHRoZSBjdXQgb3V0IG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHRhYiAqL1xyXG4ud2l6YXJkIGE6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMjBweCBpbnNldCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDI0cHggaW5zZXQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLyogQWRkcyB0aGUgYXJyb3cgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHRhYiAqL1xyXG4ud2l6YXJkIGE6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAyMHB4IGluc2V0IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjRweCBpbnNldCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAyMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4vKiBTcXVhcmVzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSB0YWIgYmFyICovXHJcbi53aXphcmQgYTpmaXJzdC1jaGlsZDpiZWZvcmUsXHJcbi53aXphcmQgYTpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4vKiBSb3VuZHMgdGhlIGNvcm5lcnMgKi9cclxuLndpemFyZCBhOmZpcnN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweCAwIDAgMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwcHg7XHJcbn1cclxuLndpemFyZCBhOmxhc3QtY2hpbGQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDhweCAwcHggMDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCA4cHggMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDhweCAwcHggMDtcclxufVxyXG4ud2l6YXJkIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwN0FDQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi8qIEFkZHMgdGhlIHJpZ2h0IGFycm93IGFmdGVyIHRoZSB0YWIgKi9cclxuLndpemFyZCAuYWN0aXZlOmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDA3QUNDO1xyXG59Il19 */"] });


/***/ }),

/***/ 4815:
/*!************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/product-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _component_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/product-details/product-details.component */ 6985);
/* harmony import */ var _component_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/product-list/product-list.component */ 158);
/* harmony import */ var _component_product_update_info_product_update_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/product-update-info/product-update-info.component */ 851);
/* harmony import */ var _component_product_update_tags_product_update_tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/product-update-tags/product-update-tags.component */ 454);
/* harmony import */ var _component_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/product-update/product-update.component */ 8339);
/* harmony import */ var _service_product_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/product-resolver.service */ 2646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);









const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    {
        path: "list",
        component: _component_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent,
        data: {
            pageTitle: "Product List"
        }
    },
    {
        path: "details/:id",
        component: _component_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent,
        resolve: { Product: _service_product_resolver_service__WEBPACK_IMPORTED_MODULE_5__.ProductResolverService }
        // if we need send multi resolver
        //resolve: { Product: ProductResolverService, category: categoryResolverService }
    },
    {
        path: "update/:id",
        component: _component_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_4__.ProductUpdateComponent,
        resolve: { Product: _service_product_resolver_service__WEBPACK_IMPORTED_MODULE_5__.ProductResolverService },
        children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'info', component: _component_product_update_info_product_update_info_component__WEBPACK_IMPORTED_MODULE_2__.ProductUpdateInfoComponent },
            { path: 'tags', component: _component_product_update_tags_product_update_tags_component__WEBPACK_IMPORTED_MODULE_3__.ProductUpdateTagsComponent }
        ]
    },
    { path: "create", component: _component_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_4__.ProductUpdateComponent }
];
class ProductRoutingModule {
}
ProductRoutingModule.??fac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 9550:
/*!****************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/product.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 4815);
/* harmony import */ var _component_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/product-list/product-list.component */ 158);
/* harmony import */ var _component_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/product-details/product-details.component */ 6985);
/* harmony import */ var _component_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/product-update/product-update.component */ 8339);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 9879);
/* harmony import */ var _component_product_update_tags_product_update_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/product-update-tags/product-update-tags.component */ 454);
/* harmony import */ var _component_product_update_info_product_update_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/product-update-info/product-update-info.component */ 851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);












class ProductModule {
}
ProductModule.??fac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: ProductModule });
ProductModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            /***
            */
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                { path: "list", component: _component_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent }
            ]),
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](ProductModule, { declarations: [_component_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent,
        _component_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent,
        _component_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_3__.ProductUpdateComponent,
        _component_product_update_tags_product_update_tags_component__WEBPACK_IMPORTED_MODULE_5__.ProductUpdateTagsComponent,
        _component_product_update_info_product_update_info_component__WEBPACK_IMPORTED_MODULE_6__.ProductUpdateInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule], exports: [_component_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent,
        _component_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent,
        _component_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_3__.ProductUpdateComponent] }); })();


/***/ }),

/***/ 2646:
/*!**********************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/service/product-resolver.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductResolverService": () => (/* binding */ ProductResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.service */ 6043);



class ProductResolverService {
    constructor(productService) {
        this.productService = productService;
    }
    resolve(route, state) {
        const id = +route.paramMap.get('id');
        if (isNaN(id)) {
            const message = `Product id was not a number: ${id}`;
            console.error(message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({ product: null, error: message });
        }
        return this.productService.getProduct(id)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((product) => ({ product, error: '' })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            const message = `Retrieval error: ${error}`;
            console.error(message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({ product: null, error: message });
        }));
    }
}
ProductResolverService.??fac = function ProductResolverService_Factory(t) { return new (t || ProductResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ProductResolverService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: ProductResolverService, factory: ProductResolverService.??fac, providedIn: 'root' });


/***/ }),

/***/ 6043:
/*!*************************************************************************!*\
  !*** ./src/app/AngularRoutingCourse/product/service/product.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8433);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6769);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);




class ProductService {
    constructor(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    getProducts() {
        return this.http.get(this.productsUrl)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(data => console.log(JSON.stringify(data))), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getProduct(id) {
        if (id === 0) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.initializeProduct());
        }
        const url = `${this.productsUrl}/${id}`;
        return this.http.get(url)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(data => console.log('getProduct: ' + JSON.stringify(data))), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    createProduct(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        // Required for the in memory web API to assign a unique id
        product.id = null;
        return this.http.post(this.productsUrl, product, { headers })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(data => console.log('createProduct: ' + JSON.stringify(data))), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    deleteProduct(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.productsUrl}/${id}`;
        return this.http.delete(url, { headers })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(data => console.log('deleteProduct: ' + id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    updateProduct(product) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.put(url, product, { headers })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(() => console.log('updateProduct: ' + product.id)), 
        // Return the product on an update
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => product), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorMessage);
    }
    initializeProduct() {
        // Return an initialized object
        return {
            id: 0,
            productName: '',
            productCode: '',
            category: '',
            tags: [],
            releaseDate: '',
            price: 0,
            description: '',
            starRating: 0,
            imageUrl: ''
        };
    }
}
ProductService.??fac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ProductService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjectable"]({ token: ProductService, factory: ProductService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_AngularRoutingCourse_product_product_module_ts.js.map