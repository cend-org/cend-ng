import './polyfills.server.mjs';
import{a as V}from"./chunk-Q4AUL3DX.mjs";import{a as q}from"./chunk-Q52PH3FK.mjs";import{$ as F,K as L,Q as E,R as D,V as T,Y as A,aa as N,ea as R,fa as O,ga as z,ja as U}from"./chunk-RGX6XMXP.mjs";import{b as B}from"./chunk-5UUNZXFM.mjs";import{Aa as o,Ba as r,C as b,D as c,F as h,Ib as C,J as s,K as u,Mb as S,Qa as a,Ra as d,ga as m,gb as f,ha as w,hb as p,ic as I,kc as M,lc as k,oc as y,sa as j,ua as v,za as n}from"./chunk-OVLZFDG5.mjs";var H=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["app-pages"]],decls:1,vars:0,template:function(i,x){i&1&&r(0,"router-outlet")},dependencies:[I]});let t=e;return t})();function Q(t,e){t&1&&(n(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"span",6),a(5,"Connectez-vous "),r(6,"br",7),a(7," pour acc\xE9der "),r(8,"br",8),a(9," \xE0 votre compte"),o()(),n(10,"div",9),r(11,"div",10),o()(),n(12,"div",11)(13,"div",12)(14,"section",13)(15,"a",14)(16,"div",15),a(17),f(18,"translate"),o(),n(19,"div",16),r(20,"i",17),o()()(),n(21,"section",13)(22,"a",18)(23,"div",15),a(24),f(25,"translate"),o(),n(26,"div",16),r(27,"i",17),o()()()(),n(28,"div",12)(29,"section",13)(30,"a",19)(31,"div",15),a(32),f(33,"translate"),o(),n(34,"div",16),r(35,"i",17),o()()(),n(36,"section",13)(37,"a",20)(38,"div",15),a(39),f(40,"translate"),o(),n(41,"div",16),r(42,"i",17),o()()()()()()()),t&2&&(m(17),d(p(18,4,"student")),m(7),d(p(25,6,"parent")),m(8),d(p(33,8,"tutor")),m(7),d(p(40,10,"teacher")))}function W(t,e){t&1&&r(0,"app-landing-skeleton")}var J=(()=>{let e=class e{constructor(l,i){this.langCondigService=l,this.loadingService=i,this.loading=!0,this.loading=!0}ngOnInit(){this.SetLang()}SetLang(){this.langCondigService.configure(),this.loading=!1}ngAfterViewInit(){this.loadingService.emitChange(!1)}};e.\u0275fac=function(i){return new(i||e)(w(A),w(D))},e.\u0275cmp=s({type:e,selectors:[["app-landing"]],decls:2,vars:2,consts:[["class","w-full flex justify-content-center mt-8",4,"ngIf"],[4,"ngIf"],[1,"w-full","flex","justify-content-center","mt-8"],[1,"w-10","md:w-6","lg:w-6","xl:6-6","flex","flex-column","gap-4"],[1,"gap-1","w-full","flex","flex-column-reverse","md:flex-row","lg:flex-row","xl:flex-row","justify-content-between",2,"word-wrap","break-word !important","overflow-wrap","break-word !important"],[1,"py-3","md:py-0","lg:py-0","xl:py-0","w-full","flex","justify-content-start","align-content-center","text-center","md:text-left","lg:text-left","xl:text-left"],[1,"poppins-bold","font-bold","lg:text-6xl","md:text-4xl","text-2xl","text-gray-500"],[1,"hidden","md:block"],[1,"hidden","md:hidden","lg:block"],[1,"w-ful","flex","md:justify-content-end","lg:justify-content-end","xl:justify-content-end","justify-content-center","align-items-center"],[1,"bg-contain","bg-no-repeat","w-7rem","h-7rem","md:w-12rem","md:h-12rem","lg:w-12rem","lg:h-12rem","xl:w-12rem","xl:h-12rem","font-bold","flex","align-items-center","justify-content-center","p-4","border-round","mr-3","back",2,"background-image","url('assets/image/cend_logo.png')"],[1,"w-full","h-15rem","flex","flex-column","gap-6","md:gap-2","lg:gap-2","xl:gap-2"],[1,"w-full","h-full","flex","flex-column","md:flex-row","lg:flex-row","xl:flex-row","gap-6","md:gap-4","lg:gap-4","xl:gap-4"],[1,"w-full","md:w-6","lg:w-6","xl:w-6","h-full","border-bottom-1","border-gray-500","flex","align-items-center"],["routerLink","/authentication/login/student","href","",1,"no-underline","w-full","h-full","flex","flex-row","justify-content-between","align-items-center"],[1,"px-4","w-6","font-bold","text-color","text-3xl","text-left"],[1,""],[1,"pi","pi-arrow-right","w-10","h-10","font-bold","text-gray-900","text-right"],["routerLink","/authentication/login/parent","href","",1,"no-underline","w-full","h-full","flex","flex-row","justify-content-between","align-items-center"],["routerLink","/authentication/login/tutor","href","",1,"no-underline","w-full","h-full","flex","flex-row","justify-content-between","align-items-center"],["routerLink","/authentication/login/teacher","href","",1,"no-underline","w-full","h-full","flex","flex-row","justify-content-between","align-items-center"]],template:function(i,x){i&1&&j(0,Q,43,12,"div",0)(1,W,1,0,"app-landing-skeleton",1),i&2&&(v("ngIf",!x.loading),m(),v("ngIf",x.loading))},dependencies:[C,k,z,F]});let t=e;return t})();var K=(()=>{let e=class e{constructor(l,i){this.auth=l,this.router=i}canActivate(){return this.auth.IsAuthentified()?!0:(this.router.navigateByUrl("/pages/landing"),!1)}};e.\u0275fac=function(i){return new(i||e)(h(E),h(M))},e.\u0275prov=b({token:e,factory:e.\u0275fac});let t=e;return t})();var X=[{path:"",component:H,children:[{path:"",redirectTo:"landing",pathMatch:"full"},{path:"landing",component:J},{path:"about",loadChildren:()=>import("./chunk-6AWXZRYV.mjs").then(t=>t.AboutModule)},{canActivate:[K],path:"dashboard",loadChildren:()=>import("./chunk-25BB5IRG.mjs").then(t=>t.DashboardModule)}]}],P=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=c({imports:[y.forChild(X),y]});let t=e;return t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=c({imports:[S,N,P,V,R,B,U,T,L,O,q]});let t=e;return t})();export{K as a,Ie as b};
