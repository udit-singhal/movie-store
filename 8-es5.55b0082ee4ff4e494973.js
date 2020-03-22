function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ygHM:function(e,n,t){"use strict";t.r(n);var i,r,a=t("3Pt+"),o=t("tyNb"),c=t("fXoL"),s=t("lJxs"),l=t("tk/3"),p=t("6oFh"),g="https://movies-store-54267.firebaseio.com",u=((i=function(){function e(n,t){var i=this;_classCallCheck(this,e),this.http=n,this.authService=t,this.indexOfactorToManipulate=1,this.indexOfManipulatorUpdate=new c.o;var r=this.authService.getToken();this.http.get(g+"/series.json?auth="+r).subscribe((function(e){i.series=e}))}return _createClass(e,[{key:"getSeries",value:function(){var e=this.authService.getToken();return this.http.get(g+"/series.json?auth="+e).pipe(Object(s.a)((function(e){return e})))}},{key:"setIndexOfSerieToManipulate",value:function(e){this.indexOfactorToManipulate=e,this.indexOfManipulatorUpdate.emit(e)}},{key:"getIndexOfMovieToManipulate",value:function(){return this.indexOfactorToManipulate}},{key:"findSerieByName",value:function(e){var n=!0,t=!1,i=void 0;try{for(var r,a=this.series[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var o=r.value;if(e==o.title)return o}}catch(c){t=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(t)throw i}}}},{key:"getSerieRatesStars",value:function(e){return e.rating}},{key:"getSerieNonRatesStars",value:function(e){return 5-e.rating}},{key:"getSeriesByCateg",value:function(e){if("All"==e)return this.series;var n=[],t=!0,i=!1,r=void 0;try{for(var a,o=this.series[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var c=a.value;-1!=c.category.indexOf(e)&&n.push(c)}}catch(s){i=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(i)throw r}}return n}},{key:"getSeriesByName",value:function(e){var n=[],t=!0,i=!1,r=void 0;try{for(var a,o=this.series[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var c=a.value;-1!=c.title.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())&&n.push(c)}}catch(s){i=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(i)throw r}}return n}}]),e}()).\u0275fac=function(e){return new(e||i)(c.ac(l.a),c.ac(p.a))},i.\u0275prov=c.Mb({token:i,factory:i.\u0275fac}),i),d=t("U5Sr"),b=t("ofXK"),h=function(e){return["../series",e]},f=((r=function(){function e(n){_classCallCheck(this,e),this.seriesService=n,this.rateStars=[],this.nonrateStars=[]}return _createClass(e,[{key:"ngOnInit",value:function(){for(var e=1;e<=this.getMovieRatesStars();e++)this.rateStars.push("star_rate");for(var n=1;n<=5-this.getMovieRatesStars();n++)this.nonrateStars.push("star_rate")}},{key:"getMovieRatesStars",value:function(){return this.seriesService.getSerieRatesStars(this.serie)}},{key:"getMovieNonRatesStars",value:function(){return this.seriesService.getSerieNonRatesStars(this.serie)}}]),e}()).\u0275fac=function(e){return new(e||r)(c.Qb(u))},r.\u0275cmp=c.Kb({type:r,selectors:[["app-serie-item"]],inputs:{serie:"serie"},decls:14,vars:9,consts:[[1,"serie-card"],[1,"media-card","lazy","lazzed","thumbnail",3,"routerLink"],["width","100%","src","assets/background-transparent-portrait.png"],[1,"d-flex","flex-column","justify-content-between","media-overlay"],[1,"media-overlay-header","d-flex","justify-content-between"],[1,"media-overlay-footer"],[1,"categ"]],template:function(e,n){1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Rb(2,"img",2),c.Wb(3,"div",3),c.Wb(4,"div",4),c.Wb(5,"strong"),c.Fc(6),c.Vb(),c.Wb(7,"strong"),c.Fc(8),c.Vb(),c.Vb(),c.Wb(9,"div",5),c.Wb(10,"h5"),c.Fc(11),c.Vb(),c.Wb(12,"h5",6),c.Fc(13),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Cb(1),c.Cc("background-image","url("+n.serie.imagePath+")",c.Jb),c.nc("routerLink",c.rc(7,h,n.serie.title)),c.Cb(5),c.Hc("",n.serie.price,"$"),c.Cb(2),c.Gc(n.serie.releaseDate),c.Cb(3),c.Gc(n.serie.title),c.Cb(2),c.Gc(n.serie.category))},directives:[o.c],styles:[".serie[_ngcontent-%COMP%] {\n    width: 170px;\n    min-width: 60px;\n    height: 174px;\n}\n.media-card[_ngcontent-%COMP%] {\n    -o-transition: all 0.2s ease-out;\n    -ms-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -webkit-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n    position:relative;\n    background-image: url(http://www.zupmage.eu/i/sIsbSc7Zcn.jpg);\n    background-size:cover;\n    background-position: center;\n    width:170px;\n    max-height: 200px;\n    min-height: 200px;\n    margin:10px;\n    cursor: pointer;\n    padding: .25rem;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n    border-radius: .25rem;\n    transform: scale(1.02);\n    outline : none;\n}\n.media-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    color:white;\n    text-shadow: 0px 0px 5px #000 !important;\n}\n.media-card[_ngcontent-%COMP%]:hover {\n    -o-transform: scale(1.05);\n    -ms-transform: scale(1.05);\n    -moz-transform: scale(1.05);\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n    z-index: 10;\n}\n.media-card[_ngcontent-%COMP%]:hover   .media-overlay[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n}\n.media-overlay[_ngcontent-%COMP%] {\n    opacity: 0;\n    position: absolute;\n    height:100%;\n    width:100%;\n    top:0px;\n    left:0px;\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#b3000000',GradientType=1 );\n}\n.media-overlay.ramadan[_ngcontent-%COMP%] {\n    opacity:1 !important;\n}\n.media-overlay-header[_ngcontent-%COMP%] {\n    width:100%;\n    padding: 5px;\n}\n.media-overlay-footer[_ngcontent-%COMP%] {\n    padding:5px;\n}\n.media-overlay-footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .media-overlay-footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    text-align:center;\n}\n.categ[_ngcontent-%COMP%] {\n    display: block;\n    font-size:14px;\n    font-weight:300;\n    text-align:center;\n}\n.media-overlay-body[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]{\n    font-size: 2.6em;\n    color: white !important;\n    text-shadow: 0px 0px 20px white !important;\n}\n.media-overlay-body[_ngcontent-%COMP%]   .trailer[_ngcontent-%COMP%] {\n    width:100%;\n    text-align: center;\n    margin-top: 60px;\n}\n.media-overlay-body[_ngcontent-%COMP%]   .trailer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\n    color:#ff7e00 !important;\n    font-size: 1em;\n    margin: 0 5px;\n}\n.serie[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .5;\n}\n.serie-title[_ngcontent-%COMP%] {\n    color: #263238;\n    font-size: 14px;\n    font-weight: 600;\n    display: block;\n    margin-top: 10px;\n}"]}),r),m=t("Xa2L");function v(e,n){if(1&e&&(c.Wb(0,"option",14),c.Fc(1),c.Vb()),2&e){var t=n.$implicit;c.oc("value",t),c.Cb(1),c.Gc(t)}}function C(e,n){1&e&&c.Rb(0,"app-serie-item",15),2&e&&c.nc("serie",n.$implicit)}function y(e,n){if(1&e){var t=c.Xb();c.Wb(0,"div",2),c.Wb(1,"div",3),c.Wb(2,"div",4),c.Wb(3,"div",5),c.Rb(4,"span",6),c.Wb(5,"input",7),c.ec("input",(function(e){return c.wc(t),c.ic().onSearchChange(e.target.value)})),c.Vb(),c.Vb(),c.Vb(),c.Wb(6,"div",8),c.Wb(7,"select",9),c.ec("change",(function(e){return c.wc(t),c.ic().getSeriesByCateg(e.target.value)})),c.Wb(8,"option",10),c.Fc(9,"-- Category --"),c.Vb(),c.Dc(10,v,2,2,"option",11),c.Vb(),c.Vb(),c.Vb(),c.Wb(11,"div",12),c.Dc(12,C,1,1,"app-serie-item",13),c.Vb(),c.Vb()}if(2&e){var i=c.ic();c.Cb(10),c.nc("ngForOf",i.categories),c.Cb(2),c.nc("ngForOf",i.series)}}function M(e,n){1&e&&c.Rb(0,"mat-progress-spinner",16),2&e&&c.nc("diameter",50)}var x,k=((x=function(){function e(n,t){_classCallCheck(this,e),this.seriesService=n,this.categoriesService=t,this.loading=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.seriesService.getSeries().subscribe((function(n){e.loading=!1,e.series=n})),this.categories=this.categoriesService.getCategories()}},{key:"getSeriesByCateg",value:function(e){this.series=this.seriesService.getSeriesByCateg(e)}},{key:"onSearchChange",value:function(e){this.series=this.seriesService.getSeriesByName(e)}}]),e}()).\u0275fac=function(e){return new(e||x)(c.Qb(u),c.Qb(d.a))},x.\u0275cmp=c.Kb({type:x,selectors:[["app-serie-list"]],decls:2,vars:2,consts:[["class","series-container",4,"ngIf"],["class","spinner","color","primary","mode","indeterminate","strokeWidth","2","value","50",3,"diameter",4,"ngIf"],[1,"series-container"],[1,"row","col-lg-12","search-bar"],[1,"col-6","col-md-6","pull-left"],[1,"form-group","has-search"],[1,"fa","fa-search","form-control-feedback"],["type","text","placeholder","Search for a serie ...",1,"form-control",3,"input"],[1,"col-6","col-md-6","pull-right"],["name","categories","id","custom-select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-12","col-md-12","col-sm-12",2,"display","flex !important","flex-wrap","wrap"],[3,"serie",4,"ngFor","ngForOf"],[3,"value"],[3,"serie"],["color","primary","mode","indeterminate","strokeWidth","2","value","50",1,"spinner",3,"diameter"]],template:function(e,n){1&e&&(c.Dc(0,y,13,2,"div",0),c.Dc(1,M,1,1,"mat-progress-spinner",1)),2&e&&(c.nc("ngIf",n.series),c.Cb(1),c.nc("ngIf",n.loading))},directives:[b.k,a.m,a.q,b.j,f,m.a],styles:[".pull-left[_ngcontent-%COMP%] {\n    padding-left: 26px;\n  }\n\n  .pull-right[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    text-align: right;\n  }\n\n  select[_ngcontent-%COMP%]:not([multiple]) {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-position: right 50%;\n    background-repeat: no-repeat;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);\n    padding: 4px 6px;\n    padding-right: 1.5em;\n    border-radius: 1px !important;\n    font-size: 15px;\n    width: 250px;\n}\n\n#custom-select[_ngcontent-%COMP%] {\n    border-radius: 0\n}\n\n.has-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 32px;\n  border-radius: 1px;\n  line-height: 4;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.1rem rgba(0,123,255,.25) !important;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  line-height: 33px;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n  padding-left: 10px;\n}\n\n  .search-bar[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n\n  .has-search[_ngcontent-%COMP%] {\n    width: 50%;\n  }"]}),x),w=t("ABwj"),O=t("Wp6s"),S=t("bTqV");function P(e,n){if(1&e&&(c.Wb(0,"i"),c.Fc(1),c.Vb()),2&e){var t=n.$implicit;c.Cb(1),c.Hc(" ",t," - ")}}var A,_,W,V=((A=function(){function e(n,t,i){_classCallCheck(this,e),this.route=n,this.seriesService=t,this.cartService=i}return _createClass(e,[{key:"ngOnInit",value:function(){this.serie=this.seriesService.findSerieByName(this.route.snapshot.params.id)}},{key:"handleAddToCartClick",value:function(){this.cartService.addSerieToCart(this.serie)}}]),e}()).\u0275fac=function(e){return new(e||A)(c.Qb(o.a),c.Qb(u),c.Qb(w.a))},A.\u0275cmp=c.Kb({type:A,selectors:[["app-serie-details"]],inputs:{serie:"serie"},decls:27,vars:6,consts:[[1,"example-card",2,"margin","10px"],[1,"row","col-lg-12"],[1,"col-lg-6","col-md-6","col-sm-6","align-center"],["mat-card-image","","alt","Photo of a Shiba Inu",1,"card-image","img-responsive","img-thumbnail",3,"src"],[1,"col-lg-6","col-md-6","col-sm-56"],[1,"align-center","serie-info"],[1,"serie-title"],[4,"ngFor","ngForOf"],[1,"align-center","card-actions"],["mat-raised-button","","color","primary",3,"click"],[1,"fa","fa-cart-plus"]],template:function(e,n){1&e&&(c.Wb(0,"div",0),c.Wb(1,"mat-card-content"),c.Wb(2,"div",1),c.Wb(3,"div",2),c.Rb(4,"img",3),c.Vb(),c.Wb(5,"div",4),c.Wb(6,"div",5),c.Wb(7,"span",6),c.Fc(8),c.Vb(),c.Vb(),c.Wb(9,"p"),c.Wb(10,"b"),c.Fc(11," By : "),c.Vb(),c.Dc(12,P,2,1,"i",7),c.Vb(),c.Wb(13,"p"),c.Wb(14,"b"),c.Fc(15,"Price : "),c.Vb(),c.Fc(16),c.Vb(),c.Wb(17,"p"),c.Wb(18,"b"),c.Fc(19,"Youtube views : "),c.Vb(),c.Fc(20),c.Vb(),c.Wb(21,"p"),c.Fc(22),c.Vb(),c.Wb(23,"div",8),c.Wb(24,"button",9),c.ec("click",(function(e){return n.handleAddToCartClick()})),c.Rb(25,"i",10),c.Fc(26," ADD TO CART"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&e&&(c.Cb(4),c.oc("src",n.serie.imagePath,c.yc),c.Cb(4),c.Gc(n.serie.title),c.Cb(4),c.nc("ngForOf",n.serie.actors),c.Cb(4),c.Hc(" ",n.serie.price,""),c.Cb(4),c.Gc(n.serie.youtubeViews),c.Cb(2),c.Hc(" ",n.serie.description," "))},directives:[O.c,O.e,b.j,S.b],styles:[".example-card[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .align-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .serie-info[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .card-image[_ngcontent-%COMP%]{\n    height: 300px !important;\n    width: 250px !important;\n  }\n  .serie-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 600;\n    margin-top: 15px;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }"]}),A),R=[{path:"",component:(_=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),_.\u0275fac=function(e){return new(e||_)},_.\u0275cmp=c.Kb({type:_,selectors:[["app-serie-root"]],decls:1,vars:0,template:function(e,n){1&e&&c.Rb(0,"router-outlet")},directives:[o.g],encapsulation:2}),_),children:[{path:"list",component:k},{path:"series/:id",component:V},{path:"",redirectTo:"list",pathMatch:"full"}]}],I=((W=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:W}),W.\u0275inj=c.Nb({factory:function(e){return new(e||W)},imports:[[o.f.forChild(R)],o.f]}),W),z=t("PCNd");t.d(n,"CatalogSeriesModule",(function(){return F}));var N,F=((N=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:N}),N.\u0275inj=c.Nb({factory:function(e){return new(e||N)},providers:[u,d.a],imports:[[l.b,b.c,a.e,a.n,I,z.a],I]}),N)}}]);