import './polyfills.server.mjs';
import{a as h}from"./chunk-DXDWJPKT.mjs";import{a as g}from"./chunk-FM5X76N5.mjs";import"./chunk-YG2ZBOKM.mjs";import{b as u}from"./chunk-K5JLURLO.mjs";import{h as c,o as d}from"./chunk-5JZGAKON.mjs";import{r as l}from"./chunk-2UEQUPPB.mjs";import"./chunk-AKVUTL7P.mjs";import{Jb as f,Pb as m,ha as s,k as r,ob as a,q as p,r as i}from"./chunk-SWAAZRIS.mjs";import"./chunk-VVCT4QZE.mjs";var C=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-authentication"]],decls:1,vars:0,template:function(o,x){o&1&&s(0,"router-outlet")},dependencies:[f]});let e=t;return e})();var y=[{path:"",component:C,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadChildren:()=>import("./chunk-G5QM2RFH.mjs").then(e=>e.LoginModule)},{path:"register",loadChildren:()=>import("./chunk-UXKWN6VF.mjs").then(e=>e.RegisterModule)}]}],v=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forChild(y),m]});let e=t;return e})();var W=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a,h,g,v,d,c,u,l]});let e=t;return e})();export{W as AuthenticationModule};