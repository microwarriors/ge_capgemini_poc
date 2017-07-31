webpackJsonp([1,5],{

/***/ 304:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 304;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(327);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_data_data_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_data_details_data_details_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_videogular2_core__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_videogular2_controls__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_videogular2_overlay_play__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_videogular2_buffering__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_datatable__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__table_pipe__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_data_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_highcharts_dist_HighchartsService__);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function highchartsFactory() {
    var hc = __webpack_require__(444);
    var dd = __webpack_require__(445);
    dd(hc);
    return hc;
}
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_5__components_data_data_component__["a" /* DataComponent */] },
    { path: 'dataDetails', component: __WEBPACK_IMPORTED_MODULE_7__components_data_details_data_details_component__["a" /* DataDetailsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_data_data_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_data_details_data_details_component__["a" /* DataDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__table_pipe__["a" /* DataFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes),
            // ChartModule.forRoot(require('highcharts')),
            __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_11_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_12_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_13_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_14_videogular2_buffering__["VgBufferingModule"],
            __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBli14IYUYuWrKb0hicJVvSWlUTdwcOWoU'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__services_data_service__["a" /* DataService */],
            { provide: __WEBPACK_IMPORTED_MODULE_21_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(451),
        styles: [__webpack_require__(437)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataDetailsComponent = (function () {
    function DataDetailsComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.hideDetails = true;
        this.showTable = false;
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.hideDetails = true;
        this.showTable = false;
        console.log(this.fileData);
    }
    DataDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getServiceDataGET("assets/tableData.json")
            .subscribe(function (data) { return _this.data = data; });
        this.fileData = this.dataService.getServiceDataGET("api/ldv")
            .subscribe(function (data) { return _this.fileData = data; });
    };
    DataDetailsComponent.prototype.removeUloadedFile = function () {
        //console.log(this.myFileInput.nativeElement.files);
        this.myFileInput.nativeElement.value = "";
        console.log(this.ckB);
    };
    DataDetailsComponent.prototype.getTable = function () {
        this.hideDetails = false;
        this.showTable = true;
    };
    DataDetailsComponent.prototype.hideTable = function () {
        this.hideDetails = true;
        this.showTable = false;
    };
    DataDetailsComponent.prototype.fileUpload = function (event) {
        var fileList = event.target.files;
        console.log(this.ckB);
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            formData.append('fileType', this.ckB);
            console.log(formData);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post("api/locoData", formData, headers)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error); })
                .subscribe(function (data) { return console.log('success'); }, function (error) { return console.log(error); });
        }
    };
    return DataDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], DataDetailsComponent.prototype, "myFileInput", void 0);
DataDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-details',
        template: __webpack_require__(452),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], DataDetailsComponent);

var _a, _b;
//# sourceMappingURL=data-details.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataComponent = (function () {
    function DataComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.showHide = false;
        this.showTable = true;
        this.showGraph = false;
        this.arrTime = [];
        this.arrdistance = [];
        this.arrspeed = [];
        this.arrtet = [];
        this.arreab = [];
        this.arreot = [];
        this.position = [];
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.showHide = true;
        this.showTable = false;
        this.showGraph = true;
    }
    DataComponent.prototype.newData = function (tableData) {
        for (var item in tableData) 
        //for(let i=0;i<tableData.length;i++)
        {
            this.value = tableData[item].ts;
            this.arrTime.push(tableData[item].ts);
            this.arrdistance.push(tableData[item].distance);
            this.arrspeed.push(tableData[item].speed);
            this.arrtet.push(tableData[item].tet);
            this.arreab.push(tableData[item].eab);
            this.arreot.push(tableData[item].eot);
            this.options = {
                title: { text: 'Locomotive Data' },
                xAxis: [{
                        type: 'datetime',
                        categories: this.arrTime,
                        title: {
                            text: 'DateTime'
                        }
                    }],
                series: [
                    { name: 'Speed', data: this.arrspeed },
                    { name: 'Distance', data: this.arrdistance },
                    { name: 'Tractive Effort Total', data: this.arrtet },
                    { name: 'EAB BP Pressure', data: this.arreab },
                    { name: 'EOT BP Pressure', data: this.arreot }
                ]
            };
        }
        //for (var i = 0; i < this.arrtet.length; i++) {
        //  this.arrtet[i] = this.arrtet[i].replace(/"/g, "");
        console.log(this.arrTime);
        console.log(this.arrtet);
    };
    DataComponent.prototype.clickedRow = function (tableitems) {
        console.log(tableitems);
        this.latPosition = tableitems.lat;
        this.longPosition = tableitems.lng;
        console.log(this.latPosition);
        this.position.push({ lat: this.latPosition, lng: this.longPosition });
        var pos = JSON.stringify(this.position);
        var pos1 = pos.substring(1, pos.length - 1);
        this.graphPosition = JSON.parse(pos1);
        console.log(this.graphPosition);
        console.log(this.latPosition);
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(this.latPosition, this.longPosition),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
            position: this.graphPosition,
            map: map,
            icon: image
        });
    };
    DataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getServiceDataGET("assets/tableData.json")
            .subscribe(function (tableData) {
            _this.newData(tableData);
        });
        this.dataService.getServiceDataGET("assets/tableData.json")
            .subscribe(function (data) { return _this.data = data; });
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(12.971919, 77.596157),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
            position: { lat: 12.971919, lng: 77.596157 },
            map: map,
            icon: image
        });
        /*var latarray = [42.85,43.85,44.85];
        var longarray =[-94.65,-111.65,-118.65];
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;*/
        /*var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                var beachMarker = new google.maps.Marker({
                  position: {lat: 12.971919, lng: 77.596157},
                  map: map,
                  icon: image
                });*/
        /*directionsDisplay.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsDisplay);
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var waypts = [];
        var iLat : any = 41.85;
        var iLng : any = -87.65;
        //another code
        var k =0;
        var interval = setInterval(function () {
        var   iLat:number = latarray[k];
        var iLng:number = longarray[k];
        waypts.push({
        location: new google.maps.LatLng(iLat, iLng),
        stopover: true
        });
        directionsService.route({
        origin: {lat: 41.85, lng: -87.65},
        destination: {lat: iLat, lng: iLng},
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
        }, function(response, status) {
         if (status === 'OK') {
        directionsDisplay.setDirections(response);
        } else {
        window.alert('Directions request failed due to ' + status);
        }
        });
        k++;
        if (k == 3) clearInterval(interval);
        }, 2000);
        
        }*/
    };
    DataComponent.prototype.toggleTable = function () {
        this.showTable = false;
        this.showGraph = true;
    };
    DataComponent.prototype.toggleGraph = function () {
        this.showTable = true;
        this.showGraph = false;
    };
    return DataComponent;
}());
DataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data',
        template: __webpack_require__(453),
        styles: [__webpack_require__(439)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], DataComponent);

var _a, _b;
//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(454),
        styles: [__webpack_require__(440)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(455),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(router) {
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (model) {
        if (model.username == 'user@123' && model.password == 'pwd@123') {
            this.router.navigate(['/data']);
        }
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(456),
        styles: [__webpack_require__(442)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=table.pipe.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "::-webkit-file-upload-button {\r\n\r\n color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #2e6da4;\r\n\tdisplay: inline-block;\r\n    padding: 6px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1.42857143;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n\r\n.content-separator {\r\n    margin: 20px 0;\r\n\tborder-bottom:1px solid #D5D5D5;\r\n}\r\n.bordered\r\n{\r\n\t    border: 1px solid #DDD;\r\n    padding: 3px;\r\n\t    width: 250px;\r\n\t\theight: 130px;\r\n}\r\n.leftBorder\r\n{\r\n\t\r\n\tcolor:gray;\r\n\tborder-left:1px solid #D5D5D5;\r\n}\r\n\r\n.section-title {\r\n    background-color: #F2F6FA;\r\n    border-top: 2px solid #ABC;\r\n    font: bold 1.1em sans-serif;\r\n    margin-bottom: 5px;\r\n    min-height: 0;\r\n    padding: 5px 8px 6px;\r\n}\r\n.nice-list\r\n{\r\nline-height: 18px;\r\n}\r\n\r\n.mar-top-80\r\n{\r\n\tmargin-top:80px;\r\n}\r\n.mar-top-15\r\n{\r\n    margin-top:15px;\r\n}\r\n\r\n.mar-top-10\r\n{\r\n    margin-top:10px;\r\n}\r\n\r\n.labelFontZero\r\n    {\r\n        font-weight: 10;\r\n    }\r\n\r\n    @media (min-width: 1200px)\r\n   { .container {\r\n    width: 1300px !important;\r\n}}\r\n\r\n.col-blue\r\n{\r\n    color:#337ab7\r\n}\r\n\r\n.page-header\r\n{\r\n    margin-top:0px;\r\n    padding-bottom:0px;\r\n}\r\n\r\ndiv.post h3\r\n{\r\n    font-size:  20px !important;\r\n}\r\n\r\n.mar-topNeg-20\r\n{\r\nmargin-top:-20px;\r\n}\r\n\r\n.labelFontCol\r\n{\r\nfont: bold 1.1em sans-serif;\r\n    color: gray;\r\n}\r\n\r\n.disabled \r\n{ cursor: not-allowed; \r\n}\r\n.pad-l-0\r\n{\r\n    padding-left:0px;\r\n}\r\n\r\n.pad-r-0\r\n{\r\n    padding-right: 0px;\r\n}\r\n\r\ninput.rem\r\n{\r\n    border-top:0px;\r\n}\r\n\r\n.bottomBorder\r\n{\r\n    border-bottom:2px solid #D5D5D5;\r\n\r\n}\r\n\r\n.bottomBorderChkbx\r\n{\r\n    border-bottom:2px solid #D5D5D5;\r\n    width:84%;\r\n}\r\n\r\n.lineHeight\r\n{\r\n    line-height: 17px;\r\n}\r\n\r\n.mar-top-84\r\n{\r\n    margin-top:84px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".mainComponent{\r\n margin-bottom: 0px;\r\n\tmargin-top:2px;\r\n} \r\n.face-txt{\r\n    margin: 0;\r\n    padding: 0 152px 25px 50px;\r\n    min-height: 125px;\r\n\tfloat:left;\r\n}\r\n.no-bullets {\r\n    list-style-type: none;\r\n}\r\n#singleVideo{\r\n\tborder:1px solid;\r\n}\r\n\r\n\t agm-map {\r\n  height: 355px;\r\n}\r\n.googlemap{\r\nfloat :right;\t\r\n}\r\n.classexpandvideo{\r\n\twidth:100%;\r\n\theight:400px;\r\n}\r\n.videochange{\r\n\twidth:300px;\r\n\theifth:300px;\r\n}\r\n .mar-top-40\r\n {\r\n\t margin-top:7px;\r\n\t \r\n }\r\n \r\n @media (min-width: 1200px)\r\n {\r\n\t \r\n\r\n.container {\r\n    width: 1300px;\r\n}\r\n }\r\n #chartTable{\r\n margin-top:15px;\r\n }\r\n\r\n table tr td \r\n {\r\n\t line-height: 9px;\r\n\t cursor: pointer;\r\n }\r\n\r\n  table tr th\r\n {\r\n\t line-height: 10px;\r\n }\r\n\r\n .pagination{\r\n\t padding-bottom: 0px;\r\n  \r\n }\r\nchart {\r\n    width: 100% !important;\r\n    margin: 0 auto;\r\n    display: block;\r\n}\r\n\r\n#vedioMapContainer{\r\n\tmargin-top: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".copyright{\r\n\ttext-transform: uppercase;\r\n\tmargin-top: 9px;\r\n\tcolor: #999c9f;\r\n\r\n}\r\n .navbar-nav>li>a:hover{\r\n\tcolor:#000 !important;\r\n}\r\n\r\n@media (min-width: 1200px)\r\n{\r\n\t.footerColor\r\n{ \r\n\r\n   position:fixed;\r\n   left:0px;\r\n   bottom:0px;\r\n   height:40px;\r\n   width:100%;\r\n     margin-left: 0px !important;\r\n background-color: #025090;\r\n padding-right: 0px !important;\r\n    \r\n}\r\n.container {\r\n  \r\n\t\r\n\tmargin-top:20px;\r\n\t\r\n}\r\n}\r\n.footerColor\r\n{ \r\n\t\r\n    /*background-color: #025090;\r\n    position:absolute;    \r\n    left:0;\r\n    \r\n    height:40px;*/\r\n  margin-left: 0px !important;\r\n      position:fixed;\r\n   left:0px;\r\n   bottom:0px;\r\n   height:40px;\r\n   width:100%;\r\n background-color: #025090;\r\n \r\n} \r\n\r\n\r\n\r\nul.nav li a\r\n{\r\n  color: aliceblue;\r\n}\r\n.navbar-nav>li>a{\r\n\tpadding: 10px 10px;\r\n}\r\n.navbar-nav>li>a:focus{\r\n\tcolor:#000 !important;\r\n}\r\nul.nav li\r\n{\r\n    font-size: 14px;\r\n \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".navbar {\r\n    position: none !important;\r\n\tcolor:#a8bddd;\r\n}\r\n@media (min-width: 1200px)\r\n{\r\n.container {\r\n    width: 1319px;\r\n}\r\n}\r\n\r\nul.nav li\r\n{\r\n    font-size: 18px;\r\n \r\n}\r\nh3{\r\nfont-size: 18px;\r\n}\r\nul.nav li a\r\n{\r\n  \r\n    color:#fff;\r\n}\r\n  ul.nav li a:focus,ul.nav li a:hover,ul.nav li a:active\r\n{\r\n    background-color: #eff0f1;\r\n    color:#000;\r\n    border-right:1px solid #191970;\r\n    border-bottom: 2px solid red;\r\n   padding-bottom:13px;\r\n}\r\n \r\n .headercomp\r\n {\r\n  /*position:fixed;\r\n  margin:0px auto;\r\n   width:100%;\r\n   background-color:#025090;\r\n   border-bottom:2px solid red;     \r\n   height: 50px;*/\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".login_height{\r\n    height:438px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 141,
	"./af.js": 141,
	"./ar": 148,
	"./ar-dz": 142,
	"./ar-dz.js": 142,
	"./ar-kw": 143,
	"./ar-kw.js": 143,
	"./ar-ly": 144,
	"./ar-ly.js": 144,
	"./ar-ma": 145,
	"./ar-ma.js": 145,
	"./ar-sa": 146,
	"./ar-sa.js": 146,
	"./ar-tn": 147,
	"./ar-tn.js": 147,
	"./ar.js": 148,
	"./az": 149,
	"./az.js": 149,
	"./be": 150,
	"./be.js": 150,
	"./bg": 151,
	"./bg.js": 151,
	"./bn": 152,
	"./bn.js": 152,
	"./bo": 153,
	"./bo.js": 153,
	"./br": 154,
	"./br.js": 154,
	"./bs": 155,
	"./bs.js": 155,
	"./ca": 156,
	"./ca.js": 156,
	"./cs": 157,
	"./cs.js": 157,
	"./cv": 158,
	"./cv.js": 158,
	"./cy": 159,
	"./cy.js": 159,
	"./da": 160,
	"./da.js": 160,
	"./de": 163,
	"./de-at": 161,
	"./de-at.js": 161,
	"./de-ch": 162,
	"./de-ch.js": 162,
	"./de.js": 163,
	"./dv": 164,
	"./dv.js": 164,
	"./el": 165,
	"./el.js": 165,
	"./en-au": 166,
	"./en-au.js": 166,
	"./en-ca": 167,
	"./en-ca.js": 167,
	"./en-gb": 168,
	"./en-gb.js": 168,
	"./en-ie": 169,
	"./en-ie.js": 169,
	"./en-nz": 170,
	"./en-nz.js": 170,
	"./eo": 171,
	"./eo.js": 171,
	"./es": 173,
	"./es-do": 172,
	"./es-do.js": 172,
	"./es.js": 173,
	"./et": 174,
	"./et.js": 174,
	"./eu": 175,
	"./eu.js": 175,
	"./fa": 176,
	"./fa.js": 176,
	"./fi": 177,
	"./fi.js": 177,
	"./fo": 178,
	"./fo.js": 178,
	"./fr": 181,
	"./fr-ca": 179,
	"./fr-ca.js": 179,
	"./fr-ch": 180,
	"./fr-ch.js": 180,
	"./fr.js": 181,
	"./fy": 182,
	"./fy.js": 182,
	"./gd": 183,
	"./gd.js": 183,
	"./gl": 184,
	"./gl.js": 184,
	"./gom-latn": 185,
	"./gom-latn.js": 185,
	"./he": 186,
	"./he.js": 186,
	"./hi": 187,
	"./hi.js": 187,
	"./hr": 188,
	"./hr.js": 188,
	"./hu": 189,
	"./hu.js": 189,
	"./hy-am": 190,
	"./hy-am.js": 190,
	"./id": 191,
	"./id.js": 191,
	"./is": 192,
	"./is.js": 192,
	"./it": 193,
	"./it.js": 193,
	"./ja": 194,
	"./ja.js": 194,
	"./jv": 195,
	"./jv.js": 195,
	"./ka": 196,
	"./ka.js": 196,
	"./kk": 197,
	"./kk.js": 197,
	"./km": 198,
	"./km.js": 198,
	"./kn": 199,
	"./kn.js": 199,
	"./ko": 200,
	"./ko.js": 200,
	"./ky": 201,
	"./ky.js": 201,
	"./lb": 202,
	"./lb.js": 202,
	"./lo": 203,
	"./lo.js": 203,
	"./lt": 204,
	"./lt.js": 204,
	"./lv": 205,
	"./lv.js": 205,
	"./me": 206,
	"./me.js": 206,
	"./mi": 207,
	"./mi.js": 207,
	"./mk": 208,
	"./mk.js": 208,
	"./ml": 209,
	"./ml.js": 209,
	"./mr": 210,
	"./mr.js": 210,
	"./ms": 212,
	"./ms-my": 211,
	"./ms-my.js": 211,
	"./ms.js": 212,
	"./my": 213,
	"./my.js": 213,
	"./nb": 214,
	"./nb.js": 214,
	"./ne": 215,
	"./ne.js": 215,
	"./nl": 217,
	"./nl-be": 216,
	"./nl-be.js": 216,
	"./nl.js": 217,
	"./nn": 218,
	"./nn.js": 218,
	"./pa-in": 219,
	"./pa-in.js": 219,
	"./pl": 220,
	"./pl.js": 220,
	"./pt": 222,
	"./pt-br": 221,
	"./pt-br.js": 221,
	"./pt.js": 222,
	"./ro": 223,
	"./ro.js": 223,
	"./ru": 224,
	"./ru.js": 224,
	"./sd": 225,
	"./sd.js": 225,
	"./se": 226,
	"./se.js": 226,
	"./si": 227,
	"./si.js": 227,
	"./sk": 228,
	"./sk.js": 228,
	"./sl": 229,
	"./sl.js": 229,
	"./sq": 230,
	"./sq.js": 230,
	"./sr": 232,
	"./sr-cyrl": 231,
	"./sr-cyrl.js": 231,
	"./sr.js": 232,
	"./ss": 233,
	"./ss.js": 233,
	"./sv": 234,
	"./sv.js": 234,
	"./sw": 235,
	"./sw.js": 235,
	"./ta": 236,
	"./ta.js": 236,
	"./te": 237,
	"./te.js": 237,
	"./tet": 238,
	"./tet.js": 238,
	"./th": 239,
	"./th.js": 239,
	"./tl-ph": 240,
	"./tl-ph.js": 240,
	"./tlh": 241,
	"./tlh.js": 241,
	"./tr": 242,
	"./tr.js": 242,
	"./tzl": 243,
	"./tzl.js": 243,
	"./tzm": 245,
	"./tzm-latn": 244,
	"./tzm-latn.js": 244,
	"./tzm.js": 245,
	"./uk": 246,
	"./uk.js": 246,
	"./ur": 247,
	"./ur.js": 247,
	"./uz": 249,
	"./uz-latn": 248,
	"./uz-latn.js": 248,
	"./uz.js": 249,
	"./vi": 250,
	"./vi.js": 250,
	"./x-pseudo": 251,
	"./x-pseudo.js": 251,
	"./yo": 252,
	"./yo.js": 252,
	"./zh-cn": 253,
	"./zh-cn.js": 253,
	"./zh-hk": 254,
	"./zh-hk.js": 254,
	"./zh-tw": 255,
	"./zh-tw.js": 255
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 446;


/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n <app-footer></app-footer>"

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\r\n\r\n<!-- below div for hiding-->\r\n<div class=\"\" *ngIf=\"hideDetails\">\r\n<div class=\"row mar-top-10\">\r\n<div class=\"col-sm-12 col-blue\">\r\n<h3>Locomotive Data</h3>\r\n<div class=\"headingBorder\"></div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"bottomBorder\"></div>\r\n</div>\r\n\r\n\r\n<div class=\"row mar-top-10\">\r\n\r\n<!-- below div for hiding-->\r\n<div class=\"\" *ngIf=\"hideDetails\">\r\n<div class=\"col-sm-4\">\r\n\r\n\r\n<div class=\"row mar-top-10\">\r\n<div class=\"col-sm-12 \">\r\n<span class=\"labelFontCol\">Select below to upload file</span>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-10\">\r\n<div class=\"col-sm-12\">\r\n<label class=\"labelFontZero\"><input  type=\"radio\" value=\"fra\" [(ngModel)]=\"ckB\" (change)=\"removeUloadedFile()\"/> FRA Data</label>\r\n<label class=\"labelFontZero\"><input  type=\"radio\"  value=\"ptc\" [(ngModel)]=\"ckB\"  (change)=\"removeUloadedFile()\"/> PTC Data</label>\r\n<label class=\"labelFontZero\"><input  type=\"radio\"   value=\"locoVideo\" [(ngModel)]=\"ckB\"  (change)=\"removeUloadedFile()\"/> Locomotive Video Data</label>\r\n\r\n</div>\r\n</div>\r\n<div class=\"bottomBorderChkbx\"></div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n<span class=\"\"><input #fileInput type=\"file\" name=Select (change)=\"fileUpload($event)\" [disabled]=\"ckB==null\" accept=\".xml\"></span>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n  <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Start Time/Date</span>\r\n</div>\r\n <div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.sd\"/>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">End Time/Date</span>\r\n    </div>\r\n<div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.ed\"/>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Wheel Diameter</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.wd\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Adjust Date Time</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.adt\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n<span class=\"labelFontCol\"><input  type=\"checkbox\" [checked]=\"\" (click)=getTable() value=\"\" /> Select data to view</span>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n<span class=\"labelFontCol\"><input  type=\"checkbox\" [checked]=\"\" value=\"\"/> Keep last view settings</span>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-6\">\r\n<button type=\"btton\" class=\"btn btn-primary\">File Details</button>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<!--second column-->\r\n<div class=\"col-sm-3 mar-top-84\">\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Wheel Diameter</span>\r\n    </div>\r\n<div class=\"col-sm-5 pad-l-0 \">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.wd\"/>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Customer Name</span>\r\n</div>\r\n<div class=\"col-sm-5 pad-l-0 \">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.custName\"/>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Serial Number</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.sNo\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Name</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.name\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Version</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0 \">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.version\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">Start Time/Date</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0\">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.sd\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-12\">\r\n    <div class=\"col-sm-5 pad-l-0 pad-r-0\">  \r\n<span class=\"labelFontCol\">End Time/Date</span>\r\n    </div>\r\n    <div class=\"col-sm-5 pad-l-0 \">  \r\n<input type=\"text\" class=\"rem\" [(ngModel)]=\"fileData.ed\"/>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row mar-top-15\">\r\n<div class=\"col-sm-3\">\r\n<button type=\"button\"  class=\"btn btn-primary\">Next</button>\r\n\r\n</div>\r\n\r\n<div class=\"col-sm-3\">\r\n<button type=\"button\"  class=\"btn btn-primary\">Save</button>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n<!--initially table would be hidden-->\r\n<div class=\"\" *ngIf=\"showTable\">\r\n    <div class=\"col-sm-7 mar-topNeg-20\">\r\n\r\n        <div class=\"page-header col-blue\">\r\n          \r\n                <h3>FRA Data</h3>\r\n            \r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          \r\n      <div class=\"col-xs-2\">\r\n                <label class=\"label-control\">Rows on page</label>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-xs-12 label-control\">Sort by</label>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                            <option ngValue=\"time\">Time Stamp</option>\r\n                            <option ngValue=\"distance\">Distance</option>\r\n                            <option ngValue=\"speed\">Speed</option>\r\n                          <!--  <option [ngValue]=\"sortByWordLength\">City</option>-->\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n              <!-- <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                            <option ngValue=\"asc\">Ascending</option>\r\n                            <option ngValue=\"desc\">Descending</option>\r\n                            <option ngValue=\"badValue\">Bad value</option>\r\n                        </select>\r\n                    </div>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">File Details</div>\r\n\r\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                <thead>\r\n                <tr>\r\n                   <!-- <th style=\"width: 10%\"></th>-->\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"time\">Time Stamp</mfDefaultSorter>\r\n                    </th>\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"distance\">Distance</mfDefaultSorter>\r\n                    </th>\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"speed\">Speed</mfDefaultSorter>\r\n                    </th>\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by='tet'>Tractive Effort Total</mfDefaultSorter>\r\n                    </th>\r\n                     <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by='eab'>EAB BP Pressure</mfDefaultSorter>\r\n                    </th>\r\n                     \r\n                     <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by='eot'>EOT BP Pressure</mfDefaultSorter>\r\n                    </th>\r\n                      <!--  <th >\r\n                        <mfDefaultSorter [by]=\"sortByWordLength\">EAB BC Pressure</mfDefaultSorter>\r\n                    </th>-->\r\n                </tr>\r\n              <!--  <tr>\r\n                    <th colspan=\"5\">\r\n                        Filter by name:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>-->\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data\">\r\n                    <!--<td>\r\n                        <button (click)=\"remove(item)\" class=\"btn btn-danger\">x</button>\r\n                    </td>-->\r\n                    <td class=\"col-sm-2 text-center\">{{item.ts}}</td>\r\n                    <td class=\"col-sm-2 text-center\">{{item.distance}}</td>\r\n                    <td class=\"col-sm-2 text-center\">{{item.speed}}</td>\r\n                    <td class=\"col-sm-2 text-center\">{{item.tet}}</td>\r\n                      <td class=\"col-sm-2 text-center\">{{item.eab }}</td>\r\n                        <td class=\"col-sm-2 text-center\">{{item.eot }}</td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"6\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n        <div class=\" row col-sm-6\">\r\n      <button type=\"button\" (click)=\"hideTable()\" class=\"btn btn-primary\">Back</button>\r\n      </div>\r\n    </div>\r\n    \r\n</div>\r\n<div class=\"\">\r\n<!--third column -->\r\n\r\n<div class=\"col-sm-3 mar-topNeg-60 mar-top-15 leftBorder lineHeight\">\r\n<div>\r\n        <div class=\"post\">\r\n          <p><img src=\"./assets/powerHaul.jpg\" alt=\"website template image\" class=\"bordered\"/></p>\r\n          <h3><a href=\"http://www.free-css.com/free-css-templates\">Powerhaul Series Locomotive</a></h3>\r\n          <p>Driving high-tech change across the rail industry to reduce costs, streamline operations and increase performance.</p>\r\n          <a href=\"https://en.wikipedia.org/wiki/GE_PowerHaul\" class=\"more\">Read more »</a> </div>\r\n        <div class=\"content-separator\"></div>\r\n        <div class=\"post\">\r\n          <p><img src=\"./assets/images.jpg\" alt=\"website template image\" class=\"bordered\"/></p>\r\n          <h3><a href=\"http://www.free-css.com/free-css-templates\">Evolution Series Locomotives</a></h3>\r\n          <p>The Evolution locomotive is the most technologically advanced, diesel-electric, heavy-haul locomotive in the world today.</p>\r\n          <a href=\"https://en.wikipedia.org/wiki/GE_Evolution_Series\" class=\"more\">Read more »</a> </div>\r\n        <!-- <div class=\"post\">\r\n          <p><img src=\"./assets/AC4400CW.jpg\" alt=\"website template image\" class=\"bordered\"/></p>\r\n          <h3><a href=\"http://www.free-css.com/free-css-templates\">AC4400 and DASH Series</a></h3>\r\n          <p>The Evolution locomotive is the most technologically advanced, diesel-electric, heavy-haul locomotive in the world today.</p>\r\n          <a href=\"https://en.wikipedia.org/wiki/GE_AC4400CW\" class=\"more\">Read more »</a> </div>-->\r\n    \r\n      </div>\r\n\r\n\r\n</div>\r\n<!--Fourth Column -->\r\n<div class=\"col-sm-2 mar-topNeg-60 mar-top-15 leftBorder\">\r\n<div class=\"right sidebar\" id=\"sidebar-2\">\r\n        <div class=\"section\">\r\n          <div class=\"section-title\">\r\n            <div class=\"left\">Latest News</div>\r\n            <div class=\"right\"></div>\r\n           \r\n          </div>\r\n          <div class=\"section-content\">\r\n            <ul class=\"nice-list\">\r\n              <li>\r\n                <div class=\"left\"><a href=\"\">Evolution Series Locomotive</a></div>\r\n             \r\n              </li>\r\n              <li>\r\n                <div class=\"left\"><a href=\"\">Powerhaul Series Locomotive</a></div>\r\n              \r\n              </li>\r\n              <li>\r\n                <div class=\"left\"><a href=\"\">AC4400 and DASH Series</a></div>\r\n                \r\n              \r\n              </li>\r\n              <li>\r\n                <div class=\"left\"><a href=\"\">NextFuel™ Natural Gas Retrofit</a></div>\r\n               \r\n               \r\n              </li>\r\n              <li>\r\n                <div class=\"left\"><a href=\"\">Building Industry Leading Locomotives</a></div>\r\n              \r\n            \r\n              </li>\r\n              <li>\r\n                <div class=\"left\"><a href=\"\">Kazakhstan Railways adopts GE digital solutions</a></div>\r\n               \r\n              </li>\r\n              <li><a href=\"\" class=\"more\">Browse all »</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"section\">\r\n          <div class=\"section-title\">Most Viewed</div>\r\n          <div class=\"section-content\">\r\n            <ul class=\"nice-list\">\r\n              <li> <a href=\"\">Kazakhstan Railways adopts GE digital solutions</a></li>\r\n              <li><a href=\"\">Building Industry Leading Locomotives</a></li>\r\n              <li> <a href=\"\">Powerhaul Series Locomotive</a></li>\r\n              <li> <a href=\"\">AC4400 and DASH Series</a></li>\r\n              <!--<li><a href=\"\">Evolution Series Locomotive</a></li>\r\n              <li> <a href=\"\">ET44AC</a></li>\r\n              <li><a href=\"\">NextFuel™ Natural Gas Retrofit</a></li>-->\r\n           \r\n              <li><a href=\"http://www.free-css.com/free-css-templates\" class=\"more\">Browse all »</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<!--table-->\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = "<div class =\"container \" >\r\n\t<div class =\"row\" id=\"vedioMapContainer\">\r\n\t\t  <div class =\"col-md-6 col-sm-6  \" style=\"margin-top:10px;padding-right: 0px!important; padding-left: 0px!important;\" >\r\n    \r\n\t   <div class=\"video\" style=\"height: 200px;\"  >\r\n\t   <vg-player>\r\n         <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n          <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\r\n         </video>\r\n       </vg-player>\r\n\t     </div>\r\n       </div>\r\n\t    <div class =\"col-md-6 col-sm-6 \" style=\"margin-top:10px;padding-right: 0px!important; padding-left: 0px!important;\">\r\n       <div class=\"map\" >\r\n\t  <div id=\"map\" style=\"height: 200px;\"></div>\r\n\t </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class =\" buttonclass\">\r\n  \r\n  <button type=\"button\"  class=\"btn btn-primary\">video</button>\r\n  <button type=\"button\"  class=\"btn btn-primary\">map</button>\r\n  <button type=\"button\" class=\"btn btn-primary\">marker</button>\r\n  </div>\r\n  \r\n\r\n  </div>\r\n\r\n   <div class=\"row\">\r\n    \r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"toggleGraph()\">Table</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"toggleTable()\">Graph</button>\r\n \r\n\r\n    </div>\r\n  \r\n  <div class=\"row\" id=\"\">\r\n <div class=\"col-md-12\" *ngIf=\"showGraph\">\r\n             <chart [options]=\"options\" ></chart>\r\n    \r\n\r\n</div>\r\n <!--   <div id=\"chartContainer\" class=\"col-sm-12 col-md-12\" *ngIf=\"showGraph\">Charts will load here!</div>-->\r\n \r\n  <div class=\"mar-topNeg-20\" *ngIf=\"showTable\">\r\n\r\n     <div class=\"row\" >\r\n          \r\n      \r\n            \r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">File Details</div>\r\n\r\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                <thead>\r\n                <tr>\r\n                   <!-- <th style=\"width: 10%\"></th>-->\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"time\">Time Stamp</mfDefaultSorter>\r\n                    </th>\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"distance\">Distance</mfDefaultSorter>\r\n                    </th>\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"speed\">Speed</mfDefaultSorter>\r\n                    </th>\r\n                    <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"tet\">Tractive Effort Total</mfDefaultSorter>\r\n                    </th>\r\n                     <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"eab\">EAB BP Pressure</mfDefaultSorter>\r\n                    </th>\r\n                     \r\n                     <th class=\"col-sm-2 text-center\">\r\n                        <mfDefaultSorter by=\"eot\">EOT BP Pressure</mfDefaultSorter>\r\n                    </th>\r\n                      <!--  <th >\r\n                        <mfDefaultSorter [by]=\"sortByWordLength\">EAB BC Pressure</mfDefaultSorter>\r\n                    </th>-->\r\n                </tr>\r\n              <!--  <tr>\r\n                    <th colspan=\"5\">\r\n                        Filter by name:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>-->\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data\">\r\n                    <!--<td>\r\n                        <button (click)=\"remove(item)\" class=\"btn btn-danger\">x</button>\r\n                    </td>-->\r\n                    <td class=\"col-sm-2 text-center\"><a (click)=\"clickedRow(item)\">{{item.ts}}</a></td>\r\n                    <td class=\"col-sm-2 text-center\">{{item.distance}}</td>\r\n                    <td class=\"col-sm-2 text-center\">{{item.speed}}</td>\r\n                    <td class=\"col-sm-2 text-center\">{{item.tet}}</td>\r\n                      <td class=\"col-sm-2 text-center\">{{item.eab }}</td>\r\n                        <td class=\"col-sm-2 text-center\">{{item.eot }}</td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"6\" class=\"\">\r\n                         <mfBootstrapPaginator  ></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n       \r\n    </div>\r\n</div>\r\n \r\n \r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\" row col-md-12 col-lg-12 col-sm-12 footerColor\">\r\n    \r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a target=\"_blank\" href=\"#\">Privacy</a></li>\r\n\t  <li><a target=\"_blank\" href=\"#\">Terms and Conditions</a></li>\r\n\t  <li><a target=\"_blank\" href=\"#\">Site Map</a></li>\r\n\t  <li><a target=\"_blank\" href=\"#\">Accessibility</a></li>\r\n\t  <li><a target=\"_blank\" href=\"#\">Cookies</a></li>\r\n      <li class=\"copyright\">� 2017 General Electric</li>\r\n    </ul>\r\n  </div>\r\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 headercomp\" id=\"header\" style=\"background-color:#025090;border-bottom:2px solid red;     height: 50px;\"> \r\n<div style=\"float:left;\">\r\n<img src=\"../../../assets/ge_logo.png\" alt=\"Locomotive\" style=\"width:100%;height:48px;\" />\r\n</div>\r\n<div style=\"float:left;\">\r\n <h3 style=\"width:auto;margin-left:15px;color:#fff; margin-top: 16px;\"> LOCOMOTIVE DATA VISION </h3>\r\n</div>\r\n<div style=\"float:right;\">\r\n<!--<img src=\"./assets/ge_header_loco.jpg\" alt=\"Locomotive\" style=\"width:100%;height:100px;\" />-->\r\n <ul class=\"nav navbar-nav\">\r\n\t\r\n\r\n      <li class=\"active\"><a routerLink=\"/data\">View</a></li>\r\n       \r\n      <li><a routerLink=\"/dataDetails\">File</a></li>\r\n      <li><a href=\"#\">Utilities</a></li>\r\n    </ul>\r\n</div>\r\n<!--div class=\"col-md-12\" style=\"background-color:#025090;height:80px\"></div-->\r\n</div>\r\n\r\n<!--<div class=\"col-md-12\" style=\"background-color:#afdef5;\">\r\n \r\n    \t\r\n    <ul class=\"nav navbar-nav\">\r\n\t\r\n\r\n      <li class=\"active\"><a routerLink=\"/data\">View</a></li>\r\n       \r\n      <li><a routerLink=\"/dataDetails\">File</a></li>\r\n      <li><a href=\"#\">Utilities</a></li>\r\n    </ul>\r\n  \r\n</div>-->\r\n\r\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3 login_height\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login(model)\" #f=\"ngForm\"  novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button  class=\"btn btn-primary\">Login</button>\r\n<!--\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n-->\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(305);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getServiceDataGET = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getServiceDataPOST = function (url, data) {
        return this.http.post("url", data)
            .map(function (response) { return response.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ })

},[743]);
//# sourceMappingURL=main.bundle.js.map