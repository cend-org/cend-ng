import{a as h}from"./chunk-J3YIPSKG.js";import{a as g}from"./chunk-I2KWPA2F.js";import"./chunk-5AZIZ7IQ.js";import{b as u}from"./chunk-24UMLD4Y.js";import{g as d,o as l}from"./chunk-DYNHE6LO.js";import{G as c}from"./chunk-GMYQB2HX.js";import{Xa as a,ca as s,ib as f,n as r,nb as m,s as p,t as i}from"./chunk-5NQOOKTC.js";var C=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-authentication"]],decls:1,vars:0,template:function(o,x){o&1&&s(0,"router-outlet")},dependencies:[f]});let e=t;return e})();var y=[{path:"",component:C,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadChildren:()=>import("./chunk-VGXNMQIW.js").then(e=>e.LoginModule)},{path:"register",loadChildren:()=>import("./chunk-KV7LKX4M.js").then(e=>e.RegisterModule)}]}],v=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forChild(y),m]});let e=t;return e})();var W=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a,h,g,v,d,l,u,c]});let e=t;return e})();export{W as AuthenticationModule};