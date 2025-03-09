import{$ as ge,A as m,B as p,C as T,D as E,E as I,F as k,G as re,H as _,I as P,J as V,K as ae,O as se,Q as ce,R as L,T as J,U as le,V as me,W as pe,X as v,Y as ue,Z as de,_ as fe,a as X,b as Y,c as ee,d as te,e as F,f as M,g as w,h as ne,i as G,j as N,k as a,l as g,m as u,n as O,o as ie,p as d,q as c,r as n,s as t,t as l,u as R,v as C,w as h,x as oe,y as S,z as i}from"./chunk-NEN37URA.js";var B=class r{debouncer=new X;debouncerSubscription;ngOnDestroy(){console.log("SearchBoxComponent ngOnDestroy"),this.debouncerSubscription?.unsubscribe()}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(ee(500)).subscribe(o=>{this.onDebounce.emit(o)})}initialValue="";placeHolder="";onValue=new G;onDebounce=new G;emitValue(o){this.onValue.emit(o)}onKeyPress(o){this.debouncer.next(o)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["shared-search-box"]],inputs:{initialValue:"initialValue",placeHolder:"placeHolder"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},standalone:!1,decls:5,vars:2,consts:[["txtInput",""],["appearance","fill",1,"form-control"],["matNativeControl","","type","text",3,"keyup.enter","keyup","value"]],template:function(e,s){if(e&1){let f=R();n(0,"mat-form-field",1)(1,"mat-label"),i(2),t(),n(3,"input",2,0),C("keyup.enter",function(){M(f);let K=S(4);return w(s.emitValue(K.value))})("keyup",function(){M(f);let K=S(4);return w(s.onKeyPress(K.value))}),t()()}e&2&&(a(2),m(s.placeHolder),a(),c("value",s.initialValue))},dependencies:[de,ue,fe],encapsulation:2})};var j=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["shared-loading-spinner"]],standalone:!1,decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,s){e&1&&(n(0,"div",0)(1,"span"),i(2,"Buscando"),t(),ne(),n(3,"svg",1)(4,"g",2)(5,"circle",3),l(6,"animate",4)(7,"animate",5)(8,"animate",6),t(),n(9,"circle",3),l(10,"animate",7)(11,"animate",8)(12,"animate",9),t(),n(13,"circle",10),l(14,"animate",11),t()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 3px 5px #00000080}span[_ngcontent-%COMP%]{margin-left:10px}"]})};var xe=r=>["/countries/by",r];function he(r,o){r&1&&(n(0,"div",2),i(1,` No hay pa\xEDses que mostrar
`),t())}function Se(r,o){if(r&1&&(n(0,"tr")(1,"td"),i(2),t(),n(3,"td"),i(4),t(),n(5,"td"),l(6,"img",5),t(),n(7,"td"),i(8),t(),n(9,"td"),i(10),t(),n(11,"td"),i(12),E(13,"number"),t(),n(14,"td")(15,"a",6),i(16,"Info"),t()()()),r&2){let e=o.$implicit,s=o.index;a(2),m(s+1),a(2),p(" ",e.flag," "),a(2),c("src",e.flags.svg,N)("alt",e.name.common),a(2),p(" ",e.name.common," "),a(2),m(e.capital),a(2),m(I(13,8,e.population)),a(3),c("routerLink",T(10,xe,e.cca3))}}function Ee(r,o){if(r&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),i(4,"#"),t(),n(5,"th"),i(6,"icon"),t(),n(7,"th"),i(8,"Bandera"),t(),n(9,"th"),i(10,"Nombre"),t(),n(11,"th"),i(12,"Capital"),t(),n(13,"th"),i(14,"Poblaci\xF3n"),t()()(),n(15,"tbody"),d(16,Se,17,12,"tr",4),t()()),r&2){let e=h();a(16),c("ngForOf",e.countries)}}var b=class r{countries=[];count=Y;static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["countries-country-table"]],inputs:{countries:"countries"},standalone:!1,decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(e,s){if(e&1&&d(0,he,2,0,"div",1)(1,Ee,17,1,"ng-template",null,0,k),e&2){let f=S(2);c("ngIf",s.countries.length===0)("ngIfElse",f)}},dependencies:[_,P,L,V],styles:["img[_ngcontent-%COMP%]{width:25px}"]})};function Ie(r,o){r&1&&l(0,"shared-loading-spinner")}var A=class r{constructor(o){this.countriesService=o}initialValue="";ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}countries=[];isLoading=!1;searchByCapital(o){this.isLoading=!0,console.log("Desde ByCapitalPage"),this.countriesService.searchCapital(o).subscribe(e=>{this.countries=e,this.isLoading=!1})}static \u0275fac=function(e){return new(e||r)(g(v))};static \u0275cmp=u({type:r,selectors:[["app-by-capital-page"]],standalone:!1,decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeHolder","Buscar por capital...",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(e,s){e&1&&(n(0,"h3"),i(1,"Por capital"),t(),l(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),C("onDebounce",function(x){return s.searchByCapital(x)}),t()()(),n(6,"div",0)(7,"div",1),l(8,"hr"),d(9,Ie,1,0,"shared-loading-spinner",3),l(10,"countries-country-table",4),t()()),e&2&&(a(5),c("initialValue",s.initialValue),a(4),c("ngIf",s.isLoading),a(),c("countries",s.countries))},dependencies:[P,B,j,b],encapsulation:2})};var H=class r{constructor(o){this.countriesServices=o}initialValue="";ngOnInit(){this.countries=this.countriesServices.cacheStore.byCountries.countries,this.initialValue=this.countriesServices.cacheStore.byCountries.term}countries=[];searchByCountry(o){console.log("desde ByCountryPage"),this.countriesServices.searchCountry(o).subscribe(e=>{this.countries=e}),console.log(o)}static \u0275fac=function(e){return new(e||r)(g(v))};static \u0275cmp=u({type:r,selectors:[["app-by-country-page"]],standalone:!1,decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeHolder","Buscar por pa\xEDs...",3,"onDebounce","initialValue"],[3,"countries"]],template:function(e,s){e&1&&(n(0,"h3"),i(1,"Por pa\xEDs"),t(),l(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),C("onDebounce",function(x){return s.searchByCountry(x)}),t()()(),n(6,"div",0)(7,"div",1),l(8,"hr")(9,"countries-country-table",3),t()()),e&2&&(a(5),c("initialValue",s.initialValue),a(4),c("countries",s.countries))},dependencies:[B,b],encapsulation:2})};var _e=r=>({"btn-outline-primary":r});function Pe(r,o){if(r&1){let e=R();n(0,"button",5),C("click",function(){let f=M(e).$implicit,x=h();return w(x.searchByRegion(f))}),i(1),t()}if(r&2){let e=o.$implicit,s=h();c("ngClass",T(2,_e,s.selectedRegion===e)),a(),p(" ",e," ")}}var z=class r{constructor(o){this.countriesService=o}countries=[];regions=["Africa","Americas","Asia","Europe","Oceania"];selectedRegion;ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(o){this.selectedRegion=o,console.log("desde ByRegionPage"),this.countriesService.searchRegion(o).subscribe(e=>{this.countries=e}),console.log({region:o})}static \u0275fac=function(e){return new(e||r)(g(v))};static \u0275cmp=u({type:r,selectors:[["app-by-region-page"]],standalone:!1,decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(e,s){e&1&&(n(0,"h3"),i(1,"Por regi\xF3n"),t(),l(2,"hr"),n(3,"div",0)(4,"div",1),d(5,Pe,2,4,"button",2),t()(),n(6,"div",0)(7,"div",3),l(8,"hr")(9,"countries-country-table",4),t()()),e&2&&(a(5),c("ngForOf",s.regions),a(4),c("countries",s.countries))},dependencies:[re,_,b],encapsulation:2})};var $=class r{daysMap={monday:"Lunes",tuesday:"Martes",wednesday:"Mi\xE9rcoles",thursday:"Jueves",friday:"Viernes",saturday:"S\xE1bado",sunday:"Domingo"};transform(o){return this.daysMap[o.toLowerCase()]||o}static \u0275fac=function(e){return new(e||r)};static \u0275pipe=ie({name:"translateDay",type:r,pure:!0})};function De(r,o){r&1&&(n(0,"div",2),i(1,"Espere por favor..."),t())}function Me(r,o){if(r&1&&(n(0,"span",15),i(1),t()),r&2){let e=o.$implicit;oe("routerLink","/countries/by/",e,""),a(),m(e)}}function we(r,o){if(r&1&&(n(0,"span",14),i(1),t()),r&2){let e=o.$implicit;a(),m(e)}}function Ne(r,o){if(r&1&&(n(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),i(4," Pa\xEDs: "),n(5,"strong"),i(6),t()(),l(7,"hr"),t()(),n(8,"div",3)(9,"div",5)(10,"mat-card",6)(11,"mat-card-content")(12,"h3"),i(13,"Bandera"),t(),n(14,"mat-card",6)(15,"mat-card-content"),l(16,"img",7),t()(),n(17,"h3"),i(18,"Blas\xF3n"),t(),n(19,"mat-card",6)(20,"mat-card-content"),l(21,"img",7),t()()()()(),n(22,"div",4)(23,"mat-card",6)(24,"mat-card-content")(25,"ul",8)(26,"h3"),i(27,"Informaci\xF3n"),t(),n(28,"li",9)(29,"strong"),i(30," Poblaci\xF3n: "),t(),i(31),E(32,"number"),t(),n(33,"li",9)(34,"strong"),i(35," C\xF3digo CCA2: "),t(),i(36),n(37,"strong"),i(38," C\xF3digo CAA3: "),t(),i(39),t(),n(40,"li",9)(41,"strong"),i(42," Region: "),t(),i(43),n(44,"strong"),i(45," Subregion: "),t(),i(46),t(),n(47,"li",9)(48,"strong"),i(49," Capital: "),t(),i(50),t(),n(51,"li",9)(52,"strong"),i(53," Fronteras: "),t(),d(54,Me,2,3,"span",10),t(),n(55,"li",9)(56,"strong"),i(57,"Area: "),t(),i(58),E(59,"number"),t(),n(60,"li",9)(61,"strong"),i(62,"Independiente: "),t(),i(63),n(64,"strong"),i(65,"Con salida al mar: "),t(),i(66),n(67,"strong"),i(68,"Inscrito en la ONU: "),t(),i(69),t(),n(70,"li",9)(71,"strong"),i(72,"Sentido de circulaci\xF3n:"),t(),i(73),t(),n(74,"li",9)(75,"strong"),i(76,"Zonas horarias: "),t(),d(77,we,2,1,"span",11),t(),n(78,"li",9)(79,"strong"),i(80,"Inicio de semana: "),t(),i(81),E(82,"translateDay"),t()()()()()(),n(83,"div",12)(84,"div",4)(85,"mat-card")(86,"mat-card-content")(87,"mat-card",6)(88,"mat-card-content")(89,"h3"),i(90,"Traducciones"),t(),n(91,"div",13)(92,"span",14),i(93),t(),n(94,"span",14),i(95),t(),n(96,"span",14),i(97),t(),n(98,"span",14),i(99),t(),n(100,"span",14),i(101),t(),n(102,"span",14),i(103),t(),n(104,"span",14),i(105),t(),n(106,"span",14),i(107),t(),n(108,"span",14),i(109),t()()()()()()()()()),r&2){let e=h();a(6),m(e.country.name.common),a(10),c("src",e.country.flags.svg,N)("alt",e.country.name.common),a(5),c("src",e.country.coatOfArms.svg,N)("alt",e.country.name.common),a(10),p("",I(32,28,e.country.population)," "),a(5),p("",e.country.cca2," | "),a(3),p("",e.country.cca3," "),a(4),p("",e.country.region," | "),a(3),p("",e.country.subregion," "),a(4),p("",e.country.capital," "),a(4),c("ngForOf",e.country.borders),a(4),p(" ",I(59,30,e.country.area)," km\xB2 "),a(5),p(" ",e.country.independent?"Si":"No"," | "),a(3),p(" ",e.country.landlocked?"No":"Si"," | "),a(3),p(" ",e.country.unMember?"Si":"No"," "),a(4),p(" ",e.country.car.side==="right"?"Derecha":"Izquierda"," "),a(4),c("ngForOf",e.country.timezones),a(4),p("",I(82,32,e.country.startOfWeek)," "),a(12),m(e.country.translations.ara.official),a(2),m(e.country.translations.deu.official),a(2),m(e.country.translations.cym.official),a(2),m(e.country.translations.fra.official),a(2),m(e.country.translations.ita.official),a(2),m(e.country.translations.jpn.official),a(2),m(e.country.translations.rus.official),a(2),m(e.country.translations.spa.official),a(2),m(e.country.translations.swe.official)}}var U=class r{constructor(o,e,s){this.activatedRoute=o;this.router=e;this.countriesServices=s}country;ngOnInit(){this.activatedRoute.params.pipe(te(({id:o})=>this.countriesServices.findCountryByAlphaCode(o))).subscribe(o=>o?(this.countriesServices.storeCountryInHistory(o.name.common,o.cca3),this.country=o):this.router.navigate(["/"]))}static \u0275fac=function(e){return new(e||r)(g(se),g(ce),g(v))};static \u0275cmp=u({type:r,selectors:[["app-country-page"]],standalone:!1,decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col"],[1,"col-4"],["appearance","outlined"],[1,"img-thumbnail",3,"src","alt"],[1,"list-group"],[1,"list-group-item"],["class","badge bg-primary m-1 ","style","cursor:pointer;",3,"routerLink",4,"ngFor","ngForOf"],["class","badge bg-primary m-1",4,"ngFor","ngForOf"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"],[1,"badge","bg-primary","m-1",2,"cursor","pointer",3,"routerLink"]],template:function(e,s){if(e&1&&d(0,De,2,0,"ng-template",null,0,k)(2,Ne,110,34,"div",1),e&2){let f=S(1);a(2),c("ngIf",s.country)("ngIfElse",f)}},dependencies:[_,P,L,le,me,V,$],encapsulation:2})};var Fe=[{path:"by-capital",component:A},{path:"by-country",component:H},{path:"by-region",component:z},{path:"by/:id",component:U},{path:"**",redirectTo:"by-capital"}],q=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=O({type:r});static \u0275inj=F({imports:[J.forChild(Fe),J]})};var Ce=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=O({type:r});static \u0275inj=F({imports:[ae,q,ge,pe]})};export{Ce as CountriesModule};
