import './polyfills.server.mjs';
import{a as X,b as At,c as ee}from"./chunk-FYJWPEA7.mjs";import{a as Ye,d as Xe}from"./chunk-DTU6AMIV.mjs";import{a as St,b as Tt}from"./chunk-W7H5QXA3.mjs";import{a as ft}from"./chunk-2NMCLP3E.mjs";import{a as kt,b as Et,c as Ot,d as Mt,e as Dt,f as Ft,g as Vt,h as jt,i as Y}from"./chunk-27BU4RLX.mjs";import{$ as wt,E as de,F as he,H as me,L as mt,Q as gt,R as Z,T as l,U as x,V as D,W as vt,b as at,ba as Ct,ca as _t,e as lt,ea as bt,fa as yt,h as pt,i as ue,la as It,na as xt,q as ct,r as ut,t as dt,u as ht}from"./chunk-JHZNZBRN.mjs";import{$a as je,$b as Qe,Aa as le,Ab as ce,Ca as v,D as _e,Da as w,E as u,Ea as G,Eb as Ne,F as se,Fa as Ee,G as be,Ga as Oe,H as p,Ha as Me,Hb as Pe,I as ye,Ia as L,Ja as E,K as y,Ka as g,Kb as Be,L as U,M as ae,Mb as $e,Na as De,Nb as Je,Oa as pe,Ob as Ue,Pa as Q,Pb as Ge,Q as Ie,Qa as q,S as m,Sb as H,T as f,Ta as Fe,Ua as Ve,V as xe,X as Se,Y as A,Yb as M,Zb as W,_b as N,ab as Ae,b as J,bb as Re,bc as qe,cb as K,cc as Ke,dc as We,ec as ze,fb as Le,ia as h,ja as R,jc as Ze,kc as et,lc as tt,mc as it,nc as rt,o as we,oc as nt,q as Ce,qc as z,ta as Te,tc as ot,u as C,ua as I,uc as st,va as T,wa as d,wb as He,ya as ke,zb as O}from"./chunk-L7F2RCMX.mjs";import{a as oe}from"./chunk-VVCT4QZE.mjs";var ei=["inputtext"],ti=["container"],ii=(r,n,i,e)=>({"p-chips p-component p-input-wrapper":!0,"p-disabled":r,"p-focus":n,"p-inputwrapper-filled":i,"p-inputwrapper-focus":e}),ri=()=>({"p-inputtext p-chips-multiple-container":!0}),ni=r=>({"p-chips-clearable":r}),oi=r=>({"p-chips-token":!0,"p-focus":r}),si=r=>({$implicit:r});function ai(r,n){r&1&&Me(0)}function li(r,n){if(r&1&&(v(0,"span",12),Fe(1),w()),r&2){let i=g().$implicit,e=g();T("data-pc-section","label"),h(),Ve(e.field?e.resolveFieldData(i,e.field):i)}}function pi(r,n){if(r&1){let i=L();v(0,"TimesCircleIcon",15),E("click",function(t){m(i);let o=g(2).index,s=g();return f(s.removeItem(t,o))}),w()}r&2&&(d("styleClass","p-chips-token-icon"),T("data-pc-section","removeTokenIcon")("aria-hidden",!0))}function ci(r,n){}function ui(r,n){r&1&&I(0,ci,0,0,"ng-template")}function di(r,n){if(r&1){let i=L();v(0,"span",16),E("click",function(t){m(i);let o=g(2).index,s=g();return f(s.removeItem(t,o))}),I(1,ui,1,0,null,17),w()}if(r&2){let i=g(3);T("data-pc-section","removeTokenIcon")("aria-hidden",!0),h(),d("ngTemplateOutlet",i.removeTokenIconTemplate)}}function hi(r,n){if(r&1&&(Ee(0),I(1,pi,1,3,"TimesCircleIcon",13)(2,di,2,3,"span",14),Oe()),r&2){let i=g(2);h(),d("ngIf",!i.removeTokenIconTemplate),h(),d("ngIf",i.removeTokenIconTemplate)}}function mi(r,n){if(r&1){let i=L();v(0,"li",9,2),E("click",function(t){let o=m(i).$implicit,s=g();return f(s.onItemClick(t,o))}),I(2,ai,1,0,"ng-container",10)(3,li,2,2,"span",11)(4,hi,3,2,"ng-container",8),w()}if(r&2){let i=n.$implicit,e=n.index,t=g();d("ngClass",K(12,oi,t.focusedIndex===e)),T("id",t.id+"_chips_item_"+e)("ariaLabel",i)("aria-selected",!0)("aria-setsize",t.value.length)("aria-posinset",e+1)("data-p-focused",t.focusedIndex===e)("data-pc-section","token"),h(2),d("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",K(14,si,i)),h(),d("ngIf",!t.itemTemplate),h(),d("ngIf",!t.disabled)}}function fi(r,n){if(r&1){let i=L();v(0,"TimesIcon",15),E("click",function(){m(i);let t=g(2);return f(t.clear())}),w()}r&2&&d("styleClass","p-chips-clear-icon")}function gi(r,n){}function vi(r,n){r&1&&I(0,gi,0,0,"ng-template")}function wi(r,n){if(r&1){let i=L();v(0,"span",19),E("click",function(){m(i);let t=g(2);return f(t.clear())}),I(1,vi,1,0,null,17),w()}if(r&2){let i=g(2);h(),d("ngTemplateOutlet",i.clearIconTemplate)}}function Ci(r,n){if(r&1&&(v(0,"li"),I(1,fi,1,1,"TimesIcon",13)(2,wi,2,1,"span",18),w()),r&2){let i=g();h(),d("ngIf",!i.clearIconTemplate),h(),d("ngIf",i.clearIconTemplate)}}var _i={provide:ht,useExisting:_e(()=>bi),multi:!0},bi=(()=>{class r{document;el;cd;style;styleClass;disabled;field;placeholder;max;maxLength;ariaLabel;ariaLabelledBy;tabindex;inputId;allowDuplicate=!0;caseSensitiveDuplication=!0;inputStyle;inputStyleClass;addOnTab;addOnBlur;separator;showClear=!1;autofocus;onAdd=new A;onRemove=new A;onFocus=new A;onBlur=new A;onChipClick=new A;onClear=new A;inputViewChild;containerViewChild;templates;itemTemplate;removeTokenIconTemplate;clearIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};valueChanged;id=at();focused;focusedIndex;filled;get focusedOptionId(){return this.focusedIndex!==null?`${this.id}_chips_item_${this.focusedIndex}`:null}get isMaxedOut(){return this.max&&this.value&&this.max===this.value.length}constructor(i,e,t){this.document=i,this.el=e,this.cd=t}ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"item":this.itemTemplate=i.template;break;case"removetokenicon":this.removeTokenIconTemplate=i.template;break;case"clearicon":this.clearIconTemplate=i.template;break;default:this.itemTemplate=i.template;break}}),this.updateFilledState()}onWrapperClick(){this.inputViewChild?.nativeElement.focus()}onContainerFocus(){this.focused=!0}onContainerBlur(){this.focusedIndex=-1,this.focused=!1}onContainerKeyDown(i){switch(i.code){case"ArrowLeft":this.onArrowLeftKeyOn();break;case"ArrowRight":this.onArrowRightKeyOn();break;case"Backspace":this.onBackspaceKeyOn(i);break;default:break}}onArrowLeftKeyOn(){this.inputViewChild.nativeElement.value.length===0&&this.value&&this.value.length>0&&(this.focusedIndex=this.focusedIndex===null?this.value.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))}onArrowRightKeyOn(){this.inputViewChild.nativeElement.value.length===0&&this.value&&this.value.length>0&&(this.focusedIndex===this.value.length-1?(this.focusedIndex=null,this.inputViewChild?.nativeElement.focus()):this.focusedIndex++)}onBackspaceKeyOn(i){this.focusedIndex!==null&&this.removeItem(i,this.focusedIndex)}onInput(){this.updateFilledState(),this.focusedIndex=null}onPaste(i){this.disabled||(this.separator&&((i.clipboardData||this.document.defaultView.clipboardData).getData("Text").split(this.separator).forEach(t=>{this.addItem(i,t,!0)}),this.inputViewChild.nativeElement.value=""),this.updateFilledState())}updateFilledState(){!this.value||this.value.length===0?this.filled=this.inputViewChild&&this.inputViewChild.nativeElement&&this.inputViewChild.nativeElement.value!="":this.filled=!0}onItemClick(i,e){this.onChipClick.emit({originalEvent:i,value:e})}writeValue(i){this.value=i,this.updateMaxedOut(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}resolveFieldData(i,e){if(i&&e){if(e.indexOf(".")==-1)return i[e];{let s=e.split("."),a=i;for(var t=0,o=s.length;t<o;++t)a=a[s[t]];return a}}else return null}onInputFocus(i){this.focused=!0,this.focusedIndex=null,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.inputViewChild.nativeElement.value&&this.addItem(i,this.inputViewChild.nativeElement.value,!1),this.onModelTouched(),this.onBlur.emit(i)}removeItem(i,e){if(this.disabled)return;let t=this.value[e];this.value=this.value.filter((o,s)=>s!=e),this.focusedIndex=null,this.inputViewChild.nativeElement.focus(),this.onModelChange(this.value),this.onRemove.emit({originalEvent:i,value:t}),this.updateFilledState(),this.updateMaxedOut()}addItem(i,e,t){if(this.value=this.value||[],e&&e.trim().length){let o=this.caseSensitiveDuplication?this.value.includes(e):this.value.some(s=>s.toLowerCase()===e.toLowerCase());(this.allowDuplicate||!o)&&!this.isMaxedOut&&(this.value=[...this.value,e],this.onModelChange(this.value),this.onAdd.emit({originalEvent:i,value:e}))}this.updateFilledState(),this.updateMaxedOut(),this.inputViewChild.nativeElement.value="",t&&i.preventDefault()}clear(){this.value=null,this.updateFilledState(),this.onModelChange(this.value),this.updateMaxedOut(),this.onClear.emit()}onKeyDown(i){let e=i.target.value;switch(i.code){case"Backspace":e.length===0&&this.value&&this.value.length>0&&(this.focusedIndex!==null?this.removeItem(i,this.focusedIndex):this.removeItem(i,this.value.length-1));break;case"Enter":case"NumpadEnter":e&&e.trim().length&&!this.isMaxedOut&&this.addItem(i,e,!0);break;case"Tab":this.addOnTab&&e&&e.trim().length&&!this.isMaxedOut&&(this.addItem(i,e,!0),i.preventDefault());break;case"ArrowLeft":e.length===0&&this.value&&this.value.length>0&&this.containerViewChild?.nativeElement.focus();break;case"ArrowRight":i.stopPropagation();break;default:this.separator&&(this.separator===i.key||i.key.match(this.separator))&&this.addItem(i,e,!0);break}}updateMaxedOut(){this.inputViewChild&&this.inputViewChild.nativeElement&&(this.isMaxedOut?(this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=!0):(this.disabled&&this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=this.disabled||!1))}static \u0275fac=function(e){return new(e||r)(R(Pe),R(Se),R(He))};static \u0275cmp=U({type:r,selectors:[["p-chips"]],contentQueries:function(e,t,o){if(e&1&&De(o,pt,4),e&2){let s;Q(s=q())&&(t.templates=s)}},viewQuery:function(e,t){if(e&1&&(pe(ei,5),pe(ti,5)),e&2){let o;Q(o=q())&&(t.inputViewChild=o.first),Q(o=q())&&(t.containerViewChild=o.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(e,t){e&2&&ke("p-inputwrapper-filled",t.filled)("p-inputwrapper-focus",t.focused)("p-chips-clearable",t.showClear)},inputs:{style:"style",styleClass:"styleClass",disabled:[y.HasDecoratorInputTransform,"disabled","disabled",O],field:"field",placeholder:"placeholder",max:[y.HasDecoratorInputTransform,"max","max",ce],maxLength:"maxLength",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tabindex:[y.HasDecoratorInputTransform,"tabindex","tabindex",ce],inputId:"inputId",allowDuplicate:[y.HasDecoratorInputTransform,"allowDuplicate","allowDuplicate",O],caseSensitiveDuplication:[y.HasDecoratorInputTransform,"caseSensitiveDuplication","caseSensitiveDuplication",O],inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",addOnTab:[y.HasDecoratorInputTransform,"addOnTab","addOnTab",O],addOnBlur:[y.HasDecoratorInputTransform,"addOnBlur","addOnBlur",O],separator:"separator",showClear:[y.HasDecoratorInputTransform,"showClear","showClear",O],autofocus:[y.HasDecoratorInputTransform,"autofocus","autofocus",O]},outputs:{onAdd:"onAdd",onRemove:"onRemove",onFocus:"onFocus",onBlur:"onBlur",onChipClick:"onChipClick",onClear:"onClear"},features:[je([_i]),Te],decls:8,vars:33,consts:[["container",""],["inputtext",""],["token",""],[3,"ngClass","ngStyle"],["tabindex","-1","role","listbox",3,"click","focus","blur","keydown","ngClass"],["role","option",3,"ngClass","click",4,"ngFor","ngForOf"],["role","option",1,"p-chips-input-token",3,"ngClass"],["type","text","pAutoFocus","",3,"keydown","input","paste","focus","blur","disabled","ngStyle","autofocus"],[4,"ngIf"],["role","option",3,"click","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-chips-token-label",4,"ngIf"],[1,"p-chips-token-label"],[3,"styleClass","click",4,"ngIf"],["class","p-chips-token-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-chips-token-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-chips-clear-icon",3,"click",4,"ngIf"],[1,"p-chips-clear-icon",3,"click"]],template:function(e,t){if(e&1){let o=L();v(0,"div",3)(1,"ul",4,0),E("click",function(){return m(o),f(t.onWrapperClick())})("focus",function(){return m(o),f(t.onContainerFocus())})("blur",function(){return m(o),f(t.onContainerBlur())})("keydown",function(a){return m(o),f(t.onContainerKeyDown(a))}),I(3,mi,5,16,"li",5),v(4,"li",6)(5,"input",7,1),E("keydown",function(a){return m(o),f(t.onKeyDown(a))})("input",function(){return m(o),f(t.onInput())})("paste",function(a){return m(o),f(t.onPaste(a))})("focus",function(a){return m(o),f(t.onInputFocus(a))})("blur",function(a){return m(o),f(t.onInputBlur(a))}),w()(),I(7,Ci,3,2,"li",8),w()()}e&2&&(le(t.styleClass),d("ngClass",Le(25,ii,t.disabled,t.focused,t.value&&t.value.length||(t.inputViewChild==null?null:t.inputViewChild.nativeElement.value)&&(t.inputViewChild==null?null:t.inputViewChild.nativeElement.value.length),t.focused))("ngStyle",t.style),T("data-pc-name","chips")("data-pc-section","root"),h(),d("ngClass",Re(30,ri)),T("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("aria-activedescendant",t.focused?t.focusedOptionId:void 0)("aria-orientation","horizontal")("data-pc-section","container"),h(2),d("ngForOf",t.value),h(),d("ngClass",K(31,ni,t.showClear&&!t.disabled)),T("data-pc-section","inputToken"),h(),le(t.inputStyleClass),d("disabled",t.disabled||t.isMaxedOut)("ngStyle",t.inputStyle)("autofocus",t.autofocus),T("id",t.inputId)("maxlength",t.maxLength)("placeholder",t.value&&t.value.length?null:t.placeholder)("tabindex",t.tabindex),h(2),d("ngIf",t.value!=null&&t.filled&&!t.disabled&&t.showClear))},dependencies:()=>[Be,$e,Je,Ge,Ue,ct,he,de],styles:[`@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}
`],encapsulation:2,changeDetection:0})}return r})(),Rt=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=ae({type:r});static \u0275inj=se({imports:[H,me,ue,ut,he,de,me,ue]})}return r})();var te=(()=>{let n=class n{constructor(e,t){this.router=e,this.loadingService=t,this.monitorRouteChanges()}monitorRouteChanges(){this.router.events.subscribe(e=>{e instanceof et?this.loadingService.emitChange(!0):e instanceof tt?this.loadingService.emitChange(!1):e instanceof it?this.loadingService.emitChange(!1):e instanceof rt&&this.loadingService.emitChange(!1)})}};n.\u0275fac=function(t){return new(t||n)(p(z),p(x))},n.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();var Lt=(()=>{let n=class n{constructor(e,t){this.loadingService=e,this.routeMonitorService=t,this.title=l.app_name,this.loading=!0,this.visible=!1,this.loginReq=new ft}ngOnInit(){}};n.\u0275fac=function(t){return new(t||n)(R(x),R(te))},n.\u0275cmp=U({type:n,selectors:[["app-root"]],standalone:!0,features:[Ae],decls:4,vars:0,consts:[[1,"pt-4","md:pt-6","lg:pt6","xl:pt-6","px-3"]],template:function(t,o){t&1&&(G(0,"app-header"),v(1,"div",0),G(2,"router-outlet"),w(),G(3,"app-loading"))},dependencies:[H,nt,It,dt,Rt,mt,ze,xt,wt,yt,gt,Tt,Vt]});let r=n;return r})();var Ht=[{path:"pages",loadChildren:()=>import("./chunk-WX2SCFWT.mjs").then(r=>r.PagesModule)},{path:"authentication",loadChildren:()=>import("./chunk-PQEFXZP6.mjs").then(r=>r.AuthenticationModule)},{path:"",redirectTo:"pages",pathMatch:"full"},{path:"**",redirectTo:"pages"}];var ie=(()=>{let n=class n{constructor(e){this.http=e}formatErrors(e){return we(()=>new Error(e.error))}post(e,t={}){return this.http.post(`${l.api_host}${e}`,JSON.stringify(t),{observe:"response"}).pipe(C(this.formatErrors))}put(e,t={}){return this.http.put(`${l.api_host}${e}`,JSON.stringify(t),{observe:"response"}).pipe(C(this.formatErrors))}get(e,t=new W,o=new M){return this.http.get(`${l.api_host}${e}`,{observe:"response",params:t,headers:o}).pipe(C(this.formatErrors))}delete(e,t=new W,o=new M){return this.http.delete(`${l.api_host}${e}`,{observe:"response",params:t,headers:o}).pipe(C(this.formatErrors))}getImageAsBlob(e,t=new W,o=new M){return this.http.get(`${l.api_host}${e}`,{observe:"response",params:t,headers:o,responseType:"blob"}).pipe(C(this.formatErrors))}downloadGet(e,t={}){return this.http.get(`${l.api_host}${e}`,{observe:"response",responseType:"Blob"}).pipe(C(this.formatErrors))}postMultipart(e,t={},o=new M({"Content-Type":"application/json"})){return this.http.post(`${l.api_host}${e}`,t,{observe:"response"}).pipe(C(this.formatErrors))}downloadPost(e,t={}){return this.http.post(`${l.api_host}${e}`,JSON.stringify(t),{observe:"response",responseType:"Blob"}).pipe(C(this.formatErrors))}};n.\u0275fac=function(t){return new(t||n)(p(N))},n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var re=new be("JWT_OPTIONS"),P=(()=>{class r{constructor(i=null){this.tokenGetter=i&&i.tokenGetter||function(){}}urlBase64Decode(i){let e=i.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:{e+="==";break}case 3:{e+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(e)}b64decode(i){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="";if(i=String(i).replace(/=+$/,""),i.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let o=0,s,a,b=0;a=i.charAt(b++);~a&&(s=o%4?s*64+a:a,o++%4)?t+=String.fromCharCode(255&s>>(-2*o&6)):0)a=e.indexOf(a);return t}b64DecodeUnicode(i){return decodeURIComponent(Array.prototype.map.call(this.b64decode(i),e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(i=this.tokenGetter()){return i instanceof Promise?i.then(e=>this._decodeToken(e)):this._decodeToken(i)}_decodeToken(i){if(!i||i==="")return null;let e=i.split(".");if(e.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let t=this.urlBase64Decode(e[1]);if(!t)throw new Error("Cannot decode the token.");return JSON.parse(t)}getTokenExpirationDate(i=this.tokenGetter()){return i instanceof Promise?i.then(e=>this._getTokenExpirationDate(e)):this._getTokenExpirationDate(i)}_getTokenExpirationDate(i){let e;if(e=this.decodeToken(i),!e||!e.hasOwnProperty("exp"))return null;let t=new Date(0);return t.setUTCSeconds(e.exp),t}isTokenExpired(i=this.tokenGetter(),e){return i instanceof Promise?i.then(t=>this._isTokenExpired(t,e)):this._isTokenExpired(i,e)}_isTokenExpired(i,e){if(!i||i==="")return!0;let t=this.getTokenExpirationDate(i);return e=e||0,t===null?!1:!(t.valueOf()>new Date().valueOf()+e*1e3)}getAuthScheme(i,e){return typeof i=="function"?i(e):i}}return r.\u0275fac=function(i){return new(i||r)(p(re))},r.\u0275prov=u({token:r,factory:r.\u0275fac}),r})();var Fr=jt`
    mutation{
        logIn(email:"rawalci@gmail.com", password: "valciokely")
    }
`,Pt=(()=>{let n=class n extends Z{LogOut(){this.locaStorageService.remove(`${l.cend_default_lang_id}_tkn`)}IsAuthentified(){let e=this.locaStorageService.get(`${l.cend_default_lang_id}_tkn`);return e?!this.jwtHelper.isTokenExpired(e):!1}GetUserId(){return this.locaStorageService.decode("user_id")}constructor(e,t,o){super(),this.locaStorageService=e,this.jwtHelper=t,this.router=o}};n.\u0275fac=function(t){return new(t||n)(p(D),p(P),p(z))},n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var Bt=(()=>{let n=class n extends D{save(e,t){typeof localStorage<"u"&&localStorage.setItem(e,JSON.stringify(t))}get(e){return typeof localStorage<"u"?localStorage.getItem(e):""}remove(e){if(typeof localStorage<"u")return localStorage.removeItem(e)}decode(e){let t=`${l.cend_default_lang_id}_tkn`,o=JSON.parse(this.get(t)),s=this.jwtHelperService.decodeToken(o).data,a=JSON.parse(s)[e];return a||""}constructor(e){super(),this.jwtHelperService=e}};n.\u0275fac=function(t){return new(t||n)(p(P))},n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var $t=(()=>{let n=class n extends Y{checkEmail(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}};n.\u0275fac=(()=>{let e;return function(o){return(e||(e=xe(n)))(o||n)}})(),n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var Jt=(()=>{let n=class n{constructor(e,t,o){this.translateService=e,this.localStorageService=t,this.loadingService=o}configure(){let e=this.localStorageService.get(`${l.cend_default_lang_id}_lang`)||"fr";this.translateService.setDefaultLang(e.replace(/"/g,"")),this.translateService.use(e.replace(/"/g,"")),setTimeout(()=>{this.loadingService.emitChange(!1)},1e3)}};n.\u0275fac=function(t){return new(t||n)(p(_t),p(D),p(x))},n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var Ut=(()=>{let n=class n extends ee{Upload(e,t){return this.apiService.postMultipart(l.api_upload,t).pipe(Ce(o=>this.handleResponse(e,o)),C(o=>this.catchError(e,o)))}constructor(e){super(),this.apiService=e}catchError(e,t){throw t instanceof Error?new Error(t.message):new Error(t)}handleResponse(e,t){if(e&&t.status==202)throw new Error(t.body.toString());return t}};n.\u0275fac=function(t){return new(t||n)(p(ie))},n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var Gt=[St];var Qt=[Gt,At,ie,lt,X,P,x,te,{provide:Z,useClass:Pt},{provide:ee,useClass:Ut},{provide:D,useClass:Bt},{provide:Y,useClass:$t},{provide:vt,useClass:Jt},{provide:re,useValue:re}];var ki=(r,n,i)=>{let e=["POST","PUT","PATCH"].indexOf(r.method.toUpperCase())!==-1,t=c=>["variables","extensions"].indexOf(c.toLowerCase())!==-1,o=r.body.length,s=r.options&&r.options.useMultipart,a;if(s){if(o)return new J(c=>c.error(new Error("File upload is not available when combined with Batching")));if(!e)return new J(c=>c.error(new Error("File upload is not available when GET is used")));if(!i)return new J(c=>c.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));a=i(r.body),s=!!a.files.size}let b={};if(o){if(!e)return new J(c=>c.error(new Error("Batching is not available for GET requests")));b={body:r.body}}else{let c=s?a.clone:r.body;e?b={body:c}:b={params:Object.keys(r.body).reduce((F,S)=>{let V=r.body[S];return F[S]=t(S)?JSON.stringify(V):V,F},{})}}if(s&&e){let c=new FormData;c.append("operations",JSON.stringify(b.body));let $={},F=a.files,S=0;F.forEach(V=>{$[++S]=V}),c.append("map",JSON.stringify($)),S=0,F.forEach((V,k)=>{c.append(++S+"",k,k.name)}),b.body=c}return n.request(r.method,r.url,oe(oe({observe:"response",responseType:"json",reportProgress:!1},b),r.options))},Ei=(r,n)=>r&&n?n.keys().reduce((e,t)=>e.set(t,n.getAll(t)),r):n||r;function Oi(...r){return r.find(n=>typeof n<"u")}function Mi(r){let n=r.headers&&r.headers instanceof M?r.headers:new M(r.headers);if(r.clientAwareness){let{name:i,version:e}=r.clientAwareness;i&&!n.has("apollographql-client-name")&&(n=n.set("apollographql-client-name",i)),e&&!n.has("apollographql-client-version")&&(n=n.set("apollographql-client-version",e))}return n}var Di={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function B(r,n,i){return Oi(r[i],n[i],Di[i])}var ge=class extends Ot{httpClient;options;requester;print=kt;constructor(n,i){super(),this.httpClient=n,this.options=i,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=e=>new Et(t=>{let o=e.getContext(),s=B(o,this.options,"method"),a=B(o,this.options,"includeQuery"),b=B(o,this.options,"includeExtensions"),c=B(o,this.options,"uri"),$=B(o,this.options,"withCredentials"),F=B(o,this.options,"useMultipart"),S=this.options.useGETForQueries===!0,V=e.query.definitions.some(j=>j.kind==="OperationDefinition"&&j.operation==="query");S&&V&&(s="GET");let k={method:s,url:typeof c=="function"?c(e):c,body:{operationName:e.operationName,variables:e.variables},options:{withCredentials:$,useMultipart:F,headers:this.options.headers}};b&&(k.body.extensions=e.extensions),a&&(k.body.query=this.print(e.query));let Xt=Mi(o);k.options.headers=Ei(k.options.headers,Xt);let ve=ki(k,this.httpClient,this.options.extractFiles).subscribe({next:j=>{e.setContext({response:j}),t.next(j.body)},error:j=>t.error(j),complete:()=>t.complete()});return()=>{ve.closed||ve.unsubscribe()}})}request(n){return this.requester(n)}},qt=(()=>{class r{httpClient;constructor(i){this.httpClient=i}create(i){return new ge(this.httpClient,i)}static \u0275fac=function(e){return new(e||r)(p(N))};static \u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Fi(){let r=ye(qt),n="";return typeof localStorage<"u"&&(n=localStorage.getItem(`${l.cend_default_lang_id}_tkn`)||""),{link:r.create({uri:`${l.api_host}/query`}),cache:new Mt}}var Kt=[Ft,{provide:Dt,useFactory:Fi}];var ne=class{http;prefix;suffix;constructor(n,i="/assets/i18n/",e=".json"){this.http=n,this.prefix=i,this.suffix=e}getTranslation(n){return this.http.get(`${this.prefix}${n}${this.suffix}`)}};function Wt(r){return new ne(r,"./assets/i18n/",".json")}var zt=(()=>{let n=class n{constructor(e,t){this.headerService=e,this.loadingService=t}intercept(e,t){return this.loadingService.emitChange(!0),e.url.endsWith(`${l.api_host}/upload`)&&(e=e.clone({setHeaders:{Authorization:this.headerService.GetAuth()}})),this.handleRequest(e,t)}handleRequest(e,t){return t.handle(e)}};n.\u0275fac=function(t){return new(t||n)(p(X),p(x))},n.\u0275prov=u({token:n,factory:n.\u0275fac});let r=n;return r})();var Zt={providers:[ot(Ht,st({anchorScrolling:"enabled"})),Ye(),H,qe(We(),Ke()),{provide:Qe,useClass:zt,multi:!0},Qt,Kt,Ie(bt.forRoot({loader:{provide:Ct,useFactory:Wt,deps:[N]}}))]};var Vi={providers:[Xe()]},Yt=Ne(Zt,Vi);var ji=()=>Ze(Lt,Yt),Zn=ji;export{Zn as a};
