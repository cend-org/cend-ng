import './polyfills.server.mjs';
import{a as C}from"./chunk-S742F4HS.mjs";import"./chunk-PBPFH7YI.mjs";import{a as g}from"./chunk-YFES4YT3.mjs";import"./chunk-QDNDP4II.mjs";import"./chunk-2NMCLP3E.mjs";import"./chunk-DSAAVEV3.mjs";import{J as d,ea as u,ha as h,ja as M,v as c}from"./chunk-RGX6XMXP.mjs";import"./chunk-AKVUTL7P.mjs";import{b as l}from"./chunk-5UUNZXFM.mjs";import{Ba as s,D as r,J as p,K as i,Mb as a,ic as f,oc as m}from"./chunk-OVLZFDG5.mjs";import"./chunk-VVCT4QZE.mjs";var y=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-authentication"]],decls:1,vars:0,template:function(o,D){o&1&&s(0,"router-outlet")},dependencies:[f]});let e=t;return e})();var w=[{path:"",component:y,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadChildren:()=>import("./chunk-PUOYI5EE.mjs").then(e=>e.LoginModule)},{path:"register",loadChildren:()=>import("./chunk-25CHOAUS.mjs").then(e=>e.RegisterModule)}]}],x=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forChild(w),m]});let e=t;return e})();var $=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a,g,C,x,d,c,l,u,M,h]});let e=t;return e})();export{$ as AuthenticationModule};
