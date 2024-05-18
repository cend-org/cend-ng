import{a as $}from"./chunk-EN44AO4M.js";import{a as te,d as ie,e as ae,f as se,g as me}from"./chunk-45RZGIIW.js";import{f as ee,i as oe,j as re,k as ne}from"./chunk-TTVNDPTA.js";import{O as P,P as k,W as O,X as z,b as F,ea as B,fa as A,ha as U,i as V,ja as _,ka as G,la as K,ma as H,na as J,pa as Q,qa as X,ra as Y,wa as Z}from"./chunk-RBEFTHD4.js";import{a as N,b as W}from"./chunk-46FT4P3Q.js";import{Aa as I,Ba as D,G as v,Ja as T,Jb as R,Kb as j,L as s,La as l,M as h,Ob as L,Pa as x,Qa as S,R as w,Ra as b,S as y,ba as C,ca as c,pa as E,tb as q,ua as r,va as m,wa as n}from"./chunk-O7EII3CV.js";var d=(()=>{let e=class e{constructor(o,t,a,f,g,p){this.apolloService=o,this.messageService=t,this.validationService=a,this.locaStorageService=f,this.router=g,this.loadingService=p,this.userLoginReq=new $,this.registrationWithInforeq=new ie}ngOnInit(){}login(){if(!this.validationService.checkEmail(this.userLoginReq.email)){this.messageService.add({severity:"warn",summary:"Erreur de validation!",detail:"Veuillez v\xE9rifier votre email!"});return}if(!this.userLoginReq.password){this.messageService.add({severity:"warn",summary:"Erreur de validation!",detail:"Veuillez v\xE9rifier votre mots de passe!"});return}this.apolloService.mutate({mutation:te.EMAIL,variables:{email:this.userLoginReq.email,password:this.userLoginReq.password}}).subscribe({next:o=>{let t=o.data;t&&(this.locaStorageService.save(`${oe.cend_default_lang_id}_tkn`,t.registerWithEmail),this.messageService.add({severity:"success",summary:"OK!",detail:"Connecte avec succes!"}),this.router.navigateByUrl("/pages/dashboard")),this.loadingService.emitChange(!1)},error:o=>{this.messageService.add({severity:"error",summary:"Erreur lors du traitement!",detail:o.message}),this.loadingService.emitChange(!1)}})}};e.\u0275fac=function(t){return new(t||e)(c(ee),c(V),c(re),c(ne),c(j),c(F))},e.\u0275cmp=s({type:e,selectors:[["app-main-login"]],decls:38,vars:4,consts:[["loginForm","ngForm"],["position","bottom-center","preventOpenDuplicates","true"],[1,"scroll-hide","w-full","h-full","flex","justify-content-center","mt-2"],["name","f",1,"w-10","md:w-3","lg-w-3","xl:w-3",3,"ngSubmit"],[1,"text-center","text-gray-600","poppins-bold"],[1,"frm","poppins-medium"],[1,"w-full","flex","flex-column","gap-1"],[1,"flex","flex-column","gap-2"],["for","email",1,"text-sm"],["placeholder","votre email","type","email","name","email","pInputText","","id","email","aria-describedby","email-help",1,"p-inputtext-sm",3,"ngModelChange","ngModel"],[1,"flex","flex-column","gap-1","mt-2"],["for","password",1,"text-sm"],["placeholder","Entrer votre mot de passe","name","password","type","password","id","password",1,"p-inputtext-sm",3,"ngModelChange","ngModel","feedback","toggleMask"],["type","submit","size","small","pButton","","pRipple","","label","Continuer",1,"mt-4","cursor-pointer","bg-color-main","w-full","text-white","hover:bg-green-600","border-none"],["align","center",1,"text-gray-400","font-medium"],["type","button",1,"hover:border-2","hover:border-green-300","cursor-pointer","flex","justify-content-between","border-2","border-gray-200","border-round-md","align-items-center","w-full","h-3rem","bg-white","text-white"],["src","assets/image/google.svg","alt","Image","width","20",1,"absolute"],[1,"w-full","text-gray-600","text-center"],["src","assets/image/apple.svg","alt","Image","width","20",1,"absolute"],["src","assets/image/fb.svg","alt","Image","width","20",1,"absolute"],["type","button",1,"text-green-600","hover:text-green-500","cursor-pointer","bg-green-50","flex","justify-content-between","border-none","border-round-md","align-items-center","w-full","h-3rem"],[1,"pi","pi-qrcode"],[1,"w-full","text-center"],[1,"text-xs","text-gray-400","text-center","mt-2"]],template:function(t,a){if(t&1){let f=I();n(0,"p-toast",1),r(1,"section",2)(2,"form",3,0),D("ngSubmit",function(){w(f);let p=T(3);return y(p.form.valid&&a.login())}),r(4,"h1",4),l(5,"Veuillez-vous connecter \xE0 votre compte."),m(),r(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),l(10,"E-mail"),m(),r(11,"input",9),b("ngModelChange",function(p){return w(f),S(a.userLoginReq.email,p)||(a.userLoginReq.email=p),y(p)}),m()(),r(12,"div",10)(13,"label",11),l(14,"Mots de passe"),m(),r(15,"p-password",12),b("ngModelChange",function(p){return w(f),S(a.userLoginReq.password,p)||(a.userLoginReq.password=p),y(p)}),m()(),n(16,"button",13),r(17,"p-divider",14)(18,"span"),l(19,"Ou"),m()(),r(20,"button",15),n(21,"p-image",16),r(22,"div",17),l(23,"Continuer avec google"),m()(),r(24,"button",15),n(25,"p-image",18),r(26,"div",17),l(27,"Continuer avec apple"),m()(),r(28,"button",15),n(29,"p-image",19),r(30,"div",17),l(31,"Continuer avec facebook"),m()(),r(32,"button",20),n(33,"i",21),r(34,"div",22),l(35," Connectez-vous avec une qr-code "),m()(),r(36,"div",23),l(37," En continuant, vous acceptz de recevoir au num\xE9ro fourni des appels, messages WhatsApp ou SMS, y compris de fa\xE7on automatis\xE9e, de la part d'Uber et de ces soci\xE9t\xE9s affili\xE9es. "),m()()()()()}t&2&&(C(11),x("ngModel",a.userLoginReq.email),C(4),x("ngModel",a.userLoginReq.password),E("feedback",!1)("toggleMask",!0))},dependencies:[X,B,N,P,O,J,U,_,G,H,K,ae],styles:[".bg-color-main[_ngcontent-%COMP%]{background-color:#3a9b23;color:#fff}  .p-password{width:100%}  .p-password-input{width:100%}"]});let i=e;return i})();var pe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-login-student"]],decls:1,vars:0,template:function(t,a){t&1&&n(0,"app-main-login")},dependencies:[d]});let i=e;return i})();var le=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-login-parent"]],decls:1,vars:0,template:function(t,a){t&1&&n(0,"app-main-login")},dependencies:[d]});let i=e;return i})();var de=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-login-tutor"]],decls:1,vars:0,template:function(t,a){t&1&&n(0,"app-main-login")},dependencies:[d]});let i=e;return i})();var ce=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-login-profesor"]],decls:1,vars:0,template:function(t,a){t&1&&n(0,"app-main-login")},dependencies:[d]});let i=e;return i})();var ue=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["app-login"]],decls:1,vars:0,template:function(t,a){t&1&&n(0,"router-outlet")},dependencies:[R]});let i=e;return i})();var ve=[{path:"",component:ue,children:[{path:"student",component:pe},{path:"parent",component:le},{path:"tutor",component:de},{path:"teacher",component:ce}]}],fe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[L.forChild(ve),L]});let i=e;return i})();var ct=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[q,fe,Y,A,W,k,Z,z,me,Q,se]});let i=e;return i})();export{ct as a};
